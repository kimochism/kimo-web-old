<template>
    <div>
        <div id="MyRequests">
            <h1>Meus Endereços</h1>
            <div class="addAdress">
                <div class="itemAddAddress">
                    <span>
                        Rua
                    </span>
                    <input type="text" placeholder="Av Paulista">
                </div>
                <div class="itemAddAddress">
                    <span>
                        Número
                    </span>
                    <input type="text" placeholder="1000">
                </div>
                <div class="itemAddAddress">
                    <span>
                        CEP
                    </span>
                    <input type="text" placeholder="01311-000">
                </div>
                <div class="itemAddAddress">
                    <button>Adicionar</button>
                </div>
            </div>
            <div class="subContainerAddresss">
                <div class="subBoxAdress">

                    <div class="itemAdress">
                        <div class="editarItemAddress">
                            <span class="material-icons">
                                create
                            </span>
                        </div>
                        <div class="infoItemAddress">
                            <span>Rua José Pessota</span>
                            <span>Pq Santa Rita</span>
                            <span>CEP: 0815-020</span>
                            <span>São Paulo - SP</span>
                        </div>
                        <div class="deleteItemAddress">
                            <span class="material-icons">
                                clear
                            </span>
                        </div>

                    </div>

                </div>
                <div class="subBoxAdressMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.9978210940303!2d-46.65521284603109!3d-23.56305168755768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1600806213198!5m2!1spt-BR!2sbr" height="300px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style src="./style.css" scoped></style>