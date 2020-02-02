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
   import Cabecalho from "./components/layout/Cabecalho.vue";
    import AddClientes from "./components/modal/AddClientes.vue";
    import Conteudo from "./components/Conteudo";
    export default {
        components: {
            Cabecalho,AddClientes,Conteudo
        }
       
    }
</script>


<style>
</style>
