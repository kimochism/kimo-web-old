import Vue from 'vue';

import { buildStore } from '../../../../utils/base-store';

import { PaymentService } from '../../../../services/PaymentService';
import { OrderService } from '../../../../services/OrderService';
import { OrderProductService } from '../../../../services/OrderProductService';

import { store as cartStore } from '../../store';

export const store = Vue.observable({
    doSubmit: false,
    paymentService: new PaymentService(),
    orderService: new OrderService(),
    orderProductService: new OrderProductService(),
    description: '',
});

export const actions = {

    buildDescription(products) {
        store.description = products.map(bag => `${bag.quantity}x ${bag.product.name}`).toString();
    },

    async storeOrder(data) {
        const response = await this.orderService.store(data);

        if (response) {
            let orderProducts = [];

            for (const bag of cartStore.products) {
                orderProducts.push({ orderId: response.id, productId: bag.productId, quantity: bag.quantity })
            }

            await this.storeOrderProducts({ orderProducts });
            return response;
        }
    },

    async storeOrderProducts(data) {
        const response = await this.orderProductService.store(data);
        return response;
    },

    guessPaymentMethod() {
        this.cleanCardInfo();

        let cardnumber = document.getElementById("cardNumber").value;
        if (cardnumber.length >= 6) {
            let bin = cardnumber.substring(0, 6);
            window.Mercadopago.getPaymentMethod({
                "bin": bin
            }, this.setPaymentMethod);
        }
    },

    setPaymentMethod(status, response) {
        if (status == 200) {
            let paymentMethod = response[0];

            document.getElementById('paymentMethodId').value = paymentMethod.id;
            document.getElementById('cardNumber').style.backgroundImage = 'url(' + paymentMethod.thumbnail + ')';

            if (paymentMethod.additional_info_needed.includes("issuer_id")) {
                this.getIssuers(paymentMethod.id);

            } else {
                document.getElementById('issuerInput').classList.add("hidden");

                this.getInstallments(
                    paymentMethod.id,
                    document.getElementById('amount').value
                );
            }

        } else {
            alert(`payment method info error: ${response}`);
        }
    },

    getIssuers(paymentMethodId) {
        window.Mercadopago.getIssuers(
            paymentMethodId,
            this.setIssuers
        );
    },

    setIssuers(status, response) {
        if (status == 200) {
            let issuerSelect = document.getElementById('issuer');

            response.forEach(issuer => {
                let opt = document.createElement('option');
                opt.text = issuer.name;
                opt.value = issuer.id;
                issuerSelect.appendChild(opt);
            });

            if (issuerSelect.options.length <= 1) {
                document.getElementById('issuerInput').classList.add("hidden");
            } else {
                document.getElementById('issuerInput').classList.remove("hidden");
            }

            this.getInstallments(
                document.getElementById('paymentMethodId').value,
                document.getElementById('amount').value,
                issuerSelect.value
            );

        } else {
            alert(`issuers method info error: ${response}`);
        }
    },

    getInstallments(paymentMethodId, amount, issuerId) {
        window.Mercadopago.getInstallments({
            "payment_method_id": paymentMethodId,
            "amount": parseFloat(amount),
            "issuer_id": issuerId ? parseInt(issuerId) : undefined
        }, this.setInstallments);
    },

    setInstallments(status, response) {
        if (status == 200) {
            document.getElementById('installments').options.length = 0;
            response[0].payer_costs.forEach(payerCost => {
                let opt = document.createElement('option');
                opt.text = payerCost.recommended_message;
                opt.value = payerCost.installments;
                document.getElementById('installments').appendChild(opt);
            });
        } else {
            alert(`installments method info error: ${response}`);
        }
    },

    //Update offered installments when issuer changes
    updateInstallmentsForIssuer() {
        window.Mercadopago.getInstallments({
            "payment_method_id": document.getElementById('paymentMethodId').value,
            "amount": parseFloat(document.getElementById('amount').value),
            "issuer_id": parseInt(document.getElementById('issuer').value)
        }, this.setInstallments);
    },

    //Proceed with payment

    getCardToken(event) {
        event.preventDefault();
        if (!store.doSubmit) {
            let $form = document.getElementById('paymentForm');
            window.Mercadopago.createToken($form, this.setCardTokenAndPay);

            return false;
        }
    },

    setCardTokenAndPay(status, response) {
        if (status == 200 || status == 201) {

            let form = document.getElementById('paymentForm');
            let card = document.createElement('input');
            card.setAttribute('name', 'token');
            card.setAttribute('type', 'hidden');
            card.setAttribute('value', response.id);
            form.appendChild(card);
            store.doSubmit = true;

            const payment = this.buildRequest(form);

            this.storeOrder({
                status: 'PENDING',
                amount: cartStore.amount,
                freight: 10,
                total: cartStore.amount + 10,
                description: store.description
            }).then(response => {
                payment.orderId = response.id;
                store.paymentService.store(payment).then(async () => { })
            });
        } else {
            alert("Verify filled data!\n" + JSON.stringify(response, null, 4));
        }
    },

    buildRequest(form) {
        const values = this.getFormValues(form);

        return {
            amount: values.transactionAmount,
            token: values.token,
            description: store.description,
            installments: values.installments,
            paymentMethodId: values.paymentMethodId,
            issuerId: values.issuer,
            payer: {
                email: values.email,
                identification: {
                    type: values.docType,
                    number: values.docNumber
                }
            }
        }
    },

    getFormValues(form) {
        const result = {};

        form.elements.forEach(element => {
            if (encodeURIComponent(element.name)) {
                result[encodeURIComponent(element.name)] = element.value;
            }
        });

        return result;
    },

    /***
     * UX functions 
     */

    cleanCardInfo() {
        document.getElementById('cardNumber').style.backgroundImage = '';
        document.getElementById('issuerInput').classList.add("hidden");
        document.getElementById('issuer').options.length = 0;
        document.getElementById('installments').options.length = 0;
    },

    //Handle price update
    updatePrice() {
        let quantity = document.getElementById('quantity').value;
        let unitPrice = document.getElementById('unit-price').innerHTML;
        let amount = parseInt(unitPrice) * parseInt(quantity);

        document.getElementById('cart-total').innerHTML = '$ ' + amount;
        document.getElementById('summary-price').innerHTML = '$ ' + unitPrice;
        document.getElementById('summary-quantity').innerHTML = quantity;
        document.getElementById('summary-total').innerHTML = '$ ' + amount;
        document.getElementById('amount').value = amount;
    }
}

export const mapGetters = buildStore(store);
