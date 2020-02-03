<template>
<b-container fluid>
        <form id="app" @submit.prevent="salvar">


            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="name" >Nome</label>
                <div class="col-sm-9">
                    <input
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
                    <select id="estadocivil"  v-model="cliente.estadoCivil" name="estadocivil" class="form-control">        
                        <option>Casado</option>
                        <option>Solteiro</option>
                        <option>Viuvo</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="genero">Gênero</label>
                <div class="col-sm-9">
                    <select  id="genero" v-model="cliente.genero" name="genero" class="form-control">
                        <option>M</option>
                        <option>F</option>
                        <option>Outro</option>
                    </select>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label" for="cep">CPF</label>
                <div class="col-sm-9">
                    <input
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
                    <input
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

 <div>

     <div class="table table-sm">
<table class="table">
        <thead>

          <tr>
            <th>Nome </th>
            <th>Estado Civil</th>
            <th>Genero</th>
            <th>Rua</th>
            <th>Bairro</th>
            <th>Estado</th>
            <th>Cidade </th>
            <th>Data Nascimento</th>
            <th>CEP</th>
            <th>CPF</th>
          </tr>

        </thead>

        <tbody >

          <tr v-for="cliente of clientes" :key="cliente.idCliente">

            <td  >{{cliente.nomecompleto }}</td>
            <td >{{ cliente.estadoCivil}}</td>
            <td >{{ cliente.genero}}</td>
            <td >{{ cliente.rua }}</td>
            <td> {{ cliente.bairro }}</td>
            <td> {{ cliente.estado }}</td>
            <td> {{ cliente.cidade }}</td>
            <td> {{ cliente.dataNascimento }}</td>
            <td> {{ cliente.cep}}</td>
            <td> {{ cliente.cpf}}</td>    
            <td>
                <b-button @click="remover(cliente)" variant="danger">Excluir</b-button>
                <b-button @click="editar(cliente)" variant="outline-primary">Alterar</b-button>

            </td>

          </tr>

        </tbody>
      
      </table>

     </div>



 </div>
</b-container>




</template>

<script>
    import Produto from "../../services/produtos";
    
    export default {
        name: 'ModalAddClientes',

       
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

        generoop: [
      
          { value: 'Masculino', text: 'Masculino' },
          { value: 'Feminino', text: 'Feminino' },
          { value: 'Outro', text: 'Outro' }
          
        ],
              componentKey: 0,

            
            
            }
        },
        


        



        mounted(){

this.listarcliente()

        },
        methods: {

              listarcliente(){
            
           Produto.listarcliente().then(resposta => {  
                  this.clientes = resposta.data
                }
            )

          },
            salvar() {
                if(!this.cliente.idCliente){
                        
                Produto.salvar(this.cliente).then(() => {
                                  this.cliente = {}
             alert('Salvo com Sucesso')
              this.listarcliente();
                })

                }else{

         Produto.atualizar(this.cliente).then(()=>{
          this.cliente = {}
          this.errors = {}
          alert('Atualizado com sucesso!')
          this.listarcliente();
                


                }
                

                )
                }
            },
editar(cliente){
      this.cliente = cliente
    },

 remover(cliente){
      if(confirm('Deseja excluir o produto?')){
        Produto.apagar(cliente).then(() => {
       this.listarcliente();
this.errors = {}

this.cliente = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    }
  },





        
    }
</script>


td, th {
    text-align: center;
}
<style scoped>

</style>