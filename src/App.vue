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
          <b-button v-b-modal.adicionarclientes> Adicionar Clientes</b-button>
          </li>
          

          <li class="nav-item">
           
           <b-button v-b-modal.modal-1>Launch demo modal</b-button>
                     </li>
          <li class="nav-item">
            <a class="nav-link" href="">Contact</a>
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

<b-modal id="adicionarclientes">
  
  <form id="app" @submit.prevent="salvar" action="/cliente" method="post">
  

  <p>
    <label for="nome">Nome</label>
    <input
      label-for="input"
      id="name"
      v-model="cliente.nomecliente"
      type="text"
      name="nome"/>
  </p>
  <p>
    <label for="movie">Estado Civil
    </label>
    <select
      id="estadocivil"
      v-model="cliente.estadocivil"
      name="estadocivil">
      <option>Casado</option>
      <option>Solteiro</option>
      <option>Viuvo</option>
    </select>
  </p>
 <p>
    <label for="genero">Gênero
    </label>
    <select
      id="genero"
      v-model="cliente.genero"
      name="estadocivil">
      <option>M</option>
      <option>F</option>
      <option>Outro</option>
    </select>
  </p>
  <p>
    <label for="nome">Rua</label>
    <input
      id="rua"
      v-model="cliente.rua"
      type="text"
      name="rua">
  </p>
<p>
  
  <p>
<label for="nome">Bairro</label>
    <input
    
      id="bairro"
      v-model="cliente.bairro"
      type="text"
      name="bairro">
  </p>

<p>
<label for="CEP">CEP</label>
    <input id="bairro" v-model="cliente.bairro" type="text" name="bairro" v-mask= "'#####-###'"/> 
  </p>

<p>
<label for="Estado"> Estado  </label>
<select id="estado" name="estado" v-model="cliente.estado">
    <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espírito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MT">Mato Grosso</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="PB">Paraíba</option>
    <option value="PR">Paraná</option>
    <option value="PE">Pernambuco</option>
    <option value="PI">Piauí</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande do Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>
    <option value="EX">Estrangeiro</option>
</select>

</p>

<p>
<label for="Cidade"> Cidade   </label>
<input id="cidade" v-model="cliente.cidade" type="text" name="cidade"/> 

</p>
  

<p>
<label for="DataNascimento">Data de Nascimento</label>
<input id="datanascimento" v-model="cliente.datanascimento" type="text" name="datanascimento" /> 


</p>




<!-- 
  <p>

    <input type="submit" value="Enviar">
  </p> -->
</form>
      
      
      
      
          </b-modal>



      


    </div>
    <!-- /.row -->

  




    

    
</template>

<script>

import Produto from './services/produtos'
export default{
mascara() {
    return {
      mask: "#####-###",
    };
  },  



  
data () {
    return {
      produto:{
        id: '',
        nome: '',
        quantidade: '',
        valor: ''
      },
      cliente:{
       nomecompleto: '',
      estadocivil: '',
      genero:'',
      rua:'',
      bairro:'',
      estado:'',
      cidade:'',
     datanascimento:''
      },
      produtos: [],
      errors: []
    }
  },
    


  mounted(){

    
    Produto.listar().then(resposta=>{
    
    this.produtos= resposta.data 

    }




    )

  },

 methods:{

   salvar(){
     
     Produto.salvar(this.cliente).then(resposta=>{

       alert('Salvo com Sucesso')
     } )


   }



 }



  /*methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }*/
  }



</script>



<style>
</style>