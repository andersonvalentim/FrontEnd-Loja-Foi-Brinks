<template>
        <div class="container">
<div class="row">
            <div class="col-12">

        <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
           
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="row">
            <!--<tbody>-->
            <!--<tr >-->
          
            <div class="col-lg-4 col-md-6 mb-4" v-for="produto of produtos" :key="produto.id">
                <div class="card h-100">
                    <div class="card-body">
                        <h4 class="card-title">
                            <a href="#">{{produto.nomeProduto }}</a>
                        </h4>
                        <h5> R$ {{produto.preco }}</h5>
                        <p class="card-text"> Peso: {{produto.peso}} e volume de :{{produto.volume}}
                            </p>
                    </div>
                </div>
            </div>
            <!--</tr>-->
            <!-- </tbody> -->
        </div>
        <!-- /.row -->

    </div>
        </div>





        </div>


</template>
<script>
    import Produto from "../../services/produtos";

    export default {

        name: 'Frete',
        data() {
            return {
                produto: {},
                produtos: [],
                         
            }
        },
        mounted() {
          this.listarProdutos(); 
            
        },
 methods: {

listar(){
Produto.listarfretes().then(resposta => {
                    this.produtos = resposta.data
                }
 )
  

},



 }


    }
</script>