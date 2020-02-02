import {http} from './config'

export default {


    atualizar:(clientes)=>{
		return http.put('clientes',clientes);
  },
    listar: () => {
        return http.get('produtos')
    },
    salvar: (clientes) => {

        return http.post('clientes', clientes)
    },
    adicionarproduto:(produtos)=>{
		return http.put('produtos',produtos);
  },
    listarcliente: () => {
        return http.get('clientes')
    },

    apagar: (cliente) =>{

        return http.delete('clientes',{data:cliente})

    },

}