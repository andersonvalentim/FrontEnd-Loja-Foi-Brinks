<template>
  <div id="app">
<!-- Navigation -->
  
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Loja TaDeBrinks</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link"   data-toggle="modal" data-target="#adicionacliente" >Adicionar Clientes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="modal" data-target="#adicionaproduto">Adicionar Produtos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 <div class="col-lg-9">

        <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <!--<div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">
            </div>
          </div>-->
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div class="row" >
        <!--<tbody>-->
          <!--<tr >-->
          <div class="col-lg-4 col-md-6 mb-4" v-for="produto of produtos" :key="produto.id">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{produto.nomeProduto }}</a>
                </h4>
                <h5> R$ {{produto.preco }}</h5>
                <p class="card-text"> Brinquedo da marca: {{produto.marca }}  para a faixa etaria: {{produto.faixaEtaria }}</p>
              </div>
              <div class="card-footer">
               <button type="button"  data-toggle="modal" data-target="#venda" class="btn btn-primary">Vender</button>
               <button type="button" class="btn btn-danger">Excluir</button>
               <button type="button" data-toggle="modal" data-target="#atualiza" class="btn btn-warning">Alterar</button>
              </div>
            </div>
          </div>
<!--</tr>-->
 <!-- </tbody> -->
        </div>
        <!-- /.row -->

      </div>
      <!-- /.col-lg-9 -->

    </div>
    <!-- /.row -->

  





    

    
</template>

<script>

import Produto from './services/produtos'
export default{
  
  data(){
    return {

      produtos:[]
    }
  },
  
  mounted(){

    
    Produto.listar().then(resposta=>{
    
    this.produtos= resposta.data 

    }




    )

  }

}


</script>

<style>

</style>