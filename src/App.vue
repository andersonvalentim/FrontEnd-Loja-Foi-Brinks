<template>
  <div id="app">

<div class="container">

<div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Lista de Produtos" active>
        <b-card-text>
            
<Conteudo />            
            
            
            </b-card-text>
      
      
      
      
      </b-tab>
      <b-tab title="Adicionar e Listar Cliente">

 <AddClientes/>

      </b-tab>


       <b-tab title="Frete de Angicos Para a Lua">

<Frete/>
      </b-tab>
    </b-tabs>
  </b-card>
</div>


        </div>

<!-- Navigation -->
  <Cabecalho />

  <!-- Navigation -->
        <!-- Conteudo -->
        

        <!-- Modais-->
       
     
    <!-- /.row -->

  </div>
</template>

<script>
    import Cabecalho from "./components/layout/Cabecalho";
    import AddClientes from "./components/modal/AddClientes";
    import Conteudo from "./components/Conteudo";
    import Frete from "./components/modal/Frete";
   /* import AdicionarProduto from "./components/modal/AdicionarProduto.vue";*/

    export default {
        components: {
            Cabecalho,AddClientes,Conteudo,Frete
        }
       
    }
</script>


<style>
</style>
