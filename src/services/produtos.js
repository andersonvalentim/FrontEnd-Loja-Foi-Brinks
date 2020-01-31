import {http} from './config'

export default {

    listar: () => {
        return http.get('')
    },
<<<<<<< HEAD
     salvar:(cliente)=>{

        return http.post('clientes',cliente)
=======
    salvar: (clientes) => {

        return http.post('', clientes)
>>>>>>> 46ff296b7d5f318c37519bcbb294d80503f4ae8d
    }

}