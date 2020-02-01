<template>


    <b-modal id="listarcliente" size="xl">
<b-card no-body>
    <b-tabs card>
      <b-tab title="Clientes" active>


        <b-card-text>Listar Cliente</b-card-text>
<div>
    <b-table responsive :items="clientes" :fields="cliente">
 
      <template v-slot:cell(nomecliente)="row">
        <b-form-input        label-cols-lg="3" v-model="row.item.nomecompleto"/><br>
      </template>
      
      <template v-slot:cell(estadoCivil)="row">
        <b-form-select v-model="row.item.estadoCivil" :options="options" size="sm" class="mt-3"></b-form-select><br>
        

      </template>
      


<template v-slot:cell(genero)="row">
        <b-form-select v-model="row.item.genero" :options="generoop"  size="sm" class="mt-3"></b-form-select>
        
        
      </template>
<template v-slot:cell(rua)="row">
        <b-form-input     label="Default"   label-cols-lg="40" v-model="row.item.rua"/>
      </template>
      <template v-slot:cell(bairro)="row">
        <b-form-input-select     label="Default"   label-cols-lg="3" v-model="row.item.bairro"/>
      </template>
      <template v-slot:cell(cidade)="row">
        <b-form-input   label="Default"     label-cols-lg="3" v-model="row.item.cidade"/>
      </template>
      <template v-slot:cell(cep)="row">
        <b-form-input    label="Default"   label-cols-lg="3"  v-model="row.item.cep"/>
      </template>


      <b-button variant="outline-primary">Alterar</b-button>
      <b-button variant="danger">Deletar</b-button>

    </b-table>

  </div>



<!--
  <table class="table table-striped">
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
            <th>cadastroSistema</th>
            <th>CEP</th>
            <th>CPF</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="cliente of clientes" :key="cliente.idCliente" scope="row">

            <td>{{cliente.nomecompleto }}<td>
            <td>{{ cliente.estadoCivil}}<td>
            <td>{{ cliente.genero}}</td>
            <td>{{ cliente.rua }}</td>
            <td>{{ cliente.bairro }}</td>
            <td>{{ cliente.estado }}</td>
            <td>{{ cliente.cidade }}</td>
            <td>{{ cliente.dataNascimento }}</td>
            <td>{{ cliente.cadastroSistema }}</td>
            <td>{{ cliente.cep}}</td>
            <td>{{ cliente.cpf}}</td>    
            <td>
              <b-button @click="editar(cliente)"> Atualizar</b-button>
              <b-button @click="remover(cliente)" variant="danger">Deletar</b-button>
            </td>

          </tr>

        </tbody>
      
      </table>

-->


      </b-tab>
      <b-tab title="Listar Dependente">
        <b-card-text>Listar Dependente</b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>






        </b-modal>
</template>

<script>
    import Produto from "../../services/produtos";





export default {
        name: 'ModalListarCliente',
   data () {
            return {
                cliente: {
                    idCliente:'idCliente',
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


                },
                clientes:[],
            
             options: [
      
          { value: 'Solteiro', text: 'Solteiro' },
          { value: 'Casado', text: 'Casado' },
          { value: 'Divorciado', text: 'Divorciado' }
          
        ],


        generoop: [
      
          { value: 'Masculino', text: 'Masculino' },
          { value: 'Feminino', text: 'Feminino' },
          { value: 'Outro', text: 'Outro' }
          
        ]
            
            
            }
        },




mounted() {
            
            this.listarcliente()
        },

methods: {
            
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
<style scoped>
body {
  padding: 1rem;
}
</style>