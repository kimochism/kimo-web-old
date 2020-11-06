<template>
    <BaseContent>
        <div id="MyPayments">
            <h1>Formas de Pagamentos</h1>
            <div class="subContainerPayments">

                <div class="subContainerPaymentsItem">
                    <div class="imgCaseCard">
                        <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png" alt="">
                    </div>
                    <span>**** 9389</span>
                    <span>Débito</span>
                    <span class="material-icons">
                        delete_outline
                    </span>
                </div>

                <div class="subContainerPaymentsItem">
                    <div class="imgCaseCard">
                        <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png" alt="">
                    </div>
                    <span>**** 4856</span>
                    <span>Débito</span>
                    <span class="material-icons">
                        delete_outline
                    </span>
                </div>

                <div class="subContainerPaymentsItem">
                    <div class="imgCaseCard">
                        <img src="https://logodownload.org/wp-content/uploads/2015/03/hipercard-logo.png" alt="">
                    </div>
                    <span>**** 1445</span>
                    <span>Crédito</span>
                    <span class="material-icons">
                        delete_outline
                    </span>
                </div>

                <div class="subContainerPaymentsItem">
                    <div class="imgCaseCard">
                        <img src="https://logodownload.org/wp-content/uploads/2017/04/elo-logo-1.png" alt="">
                    </div>
                    <span>**** 9142</span>
                    <span>Crédito</span>
                    <span class="material-icons">
                        delete_outline
                    </span>
                </div>

            </div>
            <div class="paymentButtons">
                <button>Adicionar cartão</button>
            </div>
        </div>
    </BaseContent>
</template>

<script>
import BaseContent from './../base-content/component.vue';

export default {
    components: {
        BaseContent
    }    
}

</script>

<style src="./style.css" scoped></style>