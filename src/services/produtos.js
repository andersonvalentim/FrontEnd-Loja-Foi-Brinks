import {http} from './config'

export default {
    listarvendedor:()=>{
        return http.get('vendedor')

    },
   efetuarvendas:(vendas)=>{
return http.post('vendas',vendas)
   },
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

  deleteprodutos:(produtos)=>{
    return http.delete('produtos',{data:produtos});
},


    atualizarProduto:(produtos)=>{

        return http.put('clientes',produtos);

    },
    listarcliente: () => {
        return http.get('clientes')
    },

    apagar: (cliente) =>{

        return http.delete('clientes',{data:cliente})

    },

}