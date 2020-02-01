<template>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Loja TaDeBrinks</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#listar">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item mr-2">
                        <b-button v-b-modal.adicionarclientes > Adicionar Clientes</b-button>
                    </li>




       
                    <li class="nav-item mr-2">

                        <b-button v-b-modal.listarcliente v-on:click="listarcliente()">Listar Clientes</b-button>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Cabecalho'
    }
</script>

<style scoped>

</style>