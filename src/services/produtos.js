import { http } from './config'

export default{

    listar:()=>{
        return http.get('produtos')
    },
     salvar:(clientes)=>{

        return http.post('produtos',clientes)
    }

}