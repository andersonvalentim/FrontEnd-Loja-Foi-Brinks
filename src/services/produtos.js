import {http} from './config'

export default {

    listar: () => {
        return http.get('')
    },
    salvar: (clientes) => {

        return http.post('', clientes)
    }

}