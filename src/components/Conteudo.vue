<template>

    <div class="container">


        <form id="app" @submit.prevent="salvarproduto">

 <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="nome" >Nome</label>
                <div class="col-sm-9">
                    <input  
                            label-for="input"
                            id="name"
                            v-model="produto.nomeProduto"
                            type="text"
                            name="nome"
                            class="form-control"
                    />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="nome" >Marca</label>
                <div class="col-sm-9">
                    <input  
                            label-for="input"
                            id="nome"
                            v-model="produto.marca"
                            type="text"
                            name="nome"
                            class="form-control"
                    />
                </div>
            </div>
           

<div class="form-group row">
                <label class="col-sm-3 col-form-label" for="faixa_etaria">Faixa Etária</label>
                <div class="col-sm-9">
                    <select
                            id="faixaetaria"
                            v-model="produto.faixaEtaria"
                            name="faixaEtaria"
                            class="form-control"
                    >
                        <option>PRÉ-ESCOLARES DE 3 A 6 ANOS</option>
                        <option>CRIANÇAS DE 6 A 9 ANOS</option>
                        <option>CRIANÇAS DE 9 A 12 ANOS</option>
                        <option>ADOLESCENTES</option>
                    </select>
                </div>
            </div>

<div class="form-group row">
                <label class="col-sm-3 col-form-label" for="altura" >Altura</label>
                <div class="col-sm-9">
                    <input  
                            label-for="input"
                            id="name"
                            v-model.number="produto.altura"
                            type="text"
                            name="nome"
                            class="form-control"
                    />
                </div>
            </div>

<div class="form-group row">
                <label class="col-sm-3 col-form-label" for="altura" >Largura</label>
                <div class="col-sm-9">
                    <input  
                            label-for="input"
                            id="name"
                            v-model.number="produto.largura"
                            type="texts"
                            name="nome"
                            class="form-control"
                    />
                </div>
            </div>

<div class="form-group row">
                <label class="col-sm-3 col-form-label" for="altura" >Profundidade</label>
                <div class="col-sm-9">
                    <input  
                            label-for="input"
                            id="name"
                            v-model.number="produto.profundidade"
                            type="text"
                            name="nome"
                            class="form-control"
                    />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="altura" >Peso</label>
                <div class="col-sm-9">
                    <input  
                            label-for="input"
                            id="altera"
                            v-model.number="produto.peso"
                            type="text"
                            name="altera"
                            class="form-control"
                    />
                </div>
            </div>
 <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="preco" >Preço</label>
                <div class="col-sm-9">
                    <input  
                            label-for="input"
                            id="preco"
                            v-model.number="produto.preco"
                            type="text"
                            name="preco"
                            class="form-control"
                    />
                </div>
            </div>
            <div class="form-group row">
                <input type="submit" value="Enviar" variant="primary" size="sm" class="float-right" >
            </div> 
</form>   





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
                        <p class="card-text"> Brinquedo da marca: {{produto.marca }} para a faixa etaria:
                            {{produto.faixaEtaria }}</p>
                    </div>
                    <div class="card-footer">
                        <button type="button" data-toggle="modal" data-target="#venda" class="btn btn-primary mr-2">
                            Vender
                        </button>
                        <button type="button" @click="remover(produto)"  class="btn btn-danger mr-2">Excluir</button>
                        <button type="button" @click="editar(produto)" data-toggle="modal" data-target="#atualiza" class="btn btn-warning">
                            Alterar
                        </button>
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
    import Produto from "../services/produtos";
    export default {
        name: 'Conteudo',
        data() {
            return {
                produto: {},
                produtos: [],
                errors: []
            }
        },
        mounted() {
          this.listarProdutos(); 
            
        },


        methods: {


remover(produto){
      if(confirm('Deseja excluir o produto?')){
        Produto.deleteprodutos(produto).then(() => {
       this.listarProdutos();
this.errors = {}

this.produto = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    },




editar(produto){
      this.produto= produto
    },






salvarproduto() {
        
         if(!this.produtos.idProdutos){


                Produto.adicionarproduto(this.produto).then(() => {  
                alert('Salvo com Sucesso')
                this.produto={}
                this.listarProdutos();
                }
            )


         }else{



             
         Produto.atualizarProduto(this.produto).then(()=>{
          this.produto = {}
          this.errors = {}
          alert('Atualizado com sucesso!')
          this.listarcliente();
                


                })
         }

        

          },


listarProdutos(){
Produto.listar().then(resposta => {
                    this.produtos = resposta.data
                }
 )
  

},
       }
    }
</script>

<style scoped>
</style>