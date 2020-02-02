<template>
<b-container fluid>


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
                            v-model="produto.altura"
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
                            v-model="produto.largura"
                            type="text"
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
                            v-model="produto.profundidade"
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
                            id="name"
                            v-model="produto.peso"
                            type="text"
                            name="nome"
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
                            v-model="produto.preco"
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

</b-container>    
</template>
<script>
    import Produto from "../../services/produtos";
    import Conteudo from "../../components/Conteudo";
    export default {
        name: 'AdicionarProduto',


        data () {
            return {
                produto:{

                },
            produtos:[],

            }},


    methods:{





salvarproduto() {
        
         Produto.adicionarproduto(this.produto).then(() => {  
                alert('Salvo com Sucesso')
                Conteudo.mounted();

                }
            )

          },



    },

    }

</script>