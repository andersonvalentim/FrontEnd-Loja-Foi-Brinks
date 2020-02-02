<template>


<b-modal  v-model="show" id="atualizacliente">
        <form id="app" @submit.prevent="salvar">


            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="name" >Nome</label>
                <div class="col-sm-9">
                    <input  
                           {{cliente.nomecompleto}}
                            label-for="input"
                            id="name"
                            v-model="cliente.nomecompleto"
                            type="text"
                            name="nome"
                            class="form-control"
                    />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="estado_civil">Estado Civil</label>
                <div class="col-sm-9">
                    <select
                            {{cliente.estado_civil}}
                            id="estadocivil"
                            v-model="cliente.estado_civil"
                            name="estadocivil"
                            class="form-control"
                    >
                        <option>Casado</option>
                        <option>Solteiro</option>
                        <option>Viuvo</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="genero">Gênero</label>
                <div class="col-sm-9">
                    <select
                           {{cliente.genero}}
                            id="genero"
                            v-model="cliente.genero"
                            name="estadocivil"
                            class="form-control"
                    >
                        <option>M</option>
                        <option>F</option>
                        <option>Outro</option>
                    </select>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="cep">CPF</label>
                <div class="col-sm-9">
                    <input {{cliente.cpf}}
                            id="cep"
                            v-model="cliente.cpf"
                            type="text"
                            name="cep"
                            v-mask="'###-###-###-##'"
                            class="form-control"
                    />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="rua">Rua</label>
                <div class="col-sm-9">
                    <input 
                     {{cliente.rua}}
                            id="rua"
                            v-model="cliente.rua"
                            type="text"
                            name="rua"
                            class="form-control"
                    />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="bairro">Bairro</label>
                <div class="col-sm-9">
                    <input
                    {{cliente.bairro}}
                            id="bairro"
                            v-model="cliente.bairro"
                            type="text"
                            name="bairro"
                            class="form-control"
                    />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="cep">CEP</label>
                <div class="col-sm-9">
                    <input  {{cliente.estado_civil}}
                            id="cep"
                            v-model="cliente.cep"
                            type="text"
                            name="cep"
                            v-mask="'#####-###'"
                            class="form-control"
                    />
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="estado"> Estado </label>
                <div class="col-sm-9">
                    <select
                    {{cliente.estado}}
                            id="estado"
                            name="estado"
                            v-model="cliente.estado"
                            class="form-control"
                    >
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
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="cidade"> Cidade </label>
                <div class="col-sm-9">
                    <input
                    {{cliente.cidade}}
                            id="cidade"
                            v-model="cliente.cidade"
                            type="text"
                            name="cidade"
                            class="form-control"
                    />
                </div>
            </div>

            <div class="form-group row">
   
                <label class="col-sm-3 col-form-label" for="datanascimento">Nascimento</label>
                <div class="col-sm-9">

                    
                <input
                {{cliente.dataNascimento}}
                            id="datanascimento"
                            v-model="cliente.dataNascimento"
                            v-mask="'##/##/####'"

                            name="datanascimento"
                            class="form-control"
                    />
                </div>
            </div>

            <div class="form-group row">
                <input type="submit" value="Enviar" variant="primary" size="sm" class="float-right" >
            </div> 
        </form>

 <template v-slot:modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            click="show=false"
          >
            Close
          </b-button>



<!-- 
<template v-slot:modal-footer>
        <div class="w-100">
          
<b-button  variant="primary"   size="sm" class="float-right, btn btn-danger mr-2"  @click="show=false" >
            Cancelar
          </b-button>

          <b-button   type="submit" value="Enviar" variant="primary" size="sm" class="float-right, btn btn-danger mr-2"  @click="show=false">
            Fechar
          </b-button> -->
        </div>
      </template>



    </b-modal>
</template>

<script>
    import Produto from "../../services/produtos"




export default {
        name: 'ModalListarCliente',
   data () {
            return {
                cliente: {
                  /*  idCliente:'idCliente',
                    nomecompleto:'nomecompleto',
                    estadoCivil:'estadoCivil',
                    genero:'genero',
                    rua:'rua',
                    bairro:'bairro',
                    estado:'estado',
                    cidade:'cidade',
                    dataNascimento:'dataNascimento',
                    cadastroSistema:'cadastroSistema',
                    cep:'cep',
                    cpf:'cpf',
*/

                },
                clientes:[],
            
             options: [
      
          { value: 'Solteiro', text: 'Solteiro' },
          { value: 'Casado', text: 'Casado' },
          { value: 'Divorciado', text: 'Divorciado' }
          
        ],



   estados: [
      
          {value:'AC', text:'Acre'},
    { value:'AL', text:'Alagoas'},
    {value:'AP', text:'Amapá'},
    {value:'AM', text:'Amazonas'},
    {value:'BA', text:'Bahia'},
    {value:'CE', text:'Ceará'},
    {value:'DF', text:'Distrito Federal'},
    {value:'ES', text:'Espírito Santo'},
    {value:'GO',  text:'Goiás'},
    {value:'MA',  text:'Maranhão'},
    {value:'MT',  text:'Mato Grosso'},
    {value:'MS',  text:'Mato Grosso do Sul'},
    {value:'MG',  text:'Minas Gerais'},
    {value:'PA',  text:'Pará'},
    {value:'PB',  text:'Paraíba'},
    {value:'PR',  text:'Paraná'},
    {value:'PE',  text:'Pernambuco'},
    {value:'PI',  text:'Piauí'},
    {value:'RJ',  text:'Rio de Janeiro'},
    {value:'RN',  text:'Rio Grande do Norte'},
    {value:'RS',  text:'Rio Grande do Sul'},
    {value:'RO',  text:'Rondônia'},
    {value:'RR',  text:'Roraima'},
    {value:'SC',  text:'Santa Catarina'},
    {value:'SP',  text:'São Paulo'},
    {value:'SE',  text:'Sergipe'},
    {value:'TO',  text:'Tocantins'}
        ],



        generoop: [
      
          { value: 'Masculino', text: 'Masculino' },
          { value: 'Feminino', text: 'Feminino' },
          { value: 'Outro', text: 'Outro' }
          
        ],
              componentKey: 0,

            
            
            }
        },


updated: function () {
  this.$nextTick(function () {
   
   this.listarcliente()
  })
},


mounted() {
        
       this.listarcliente()
        
        
        
        },

methods: {
            
/*
methodThatForcesUpdate() {
      // ...
      this.$forceUpdate();  // Notice we have to use a $ here
      // ...
    },*/
        
        

          listarcliente(){
            
            Produto.listarcliente().then(resposta => {  
                  this.clientes = resposta.data
                }
            )

          },

        editar(cliente){
      this.cliente = cliente
    

        }

}
}

</script>