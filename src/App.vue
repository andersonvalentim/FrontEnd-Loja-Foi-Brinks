<template>
    <div id="app">
        <!-- Navigation -->
        <Cabecalho />

        <!-- Conteudo -->
        <Conteudo />


        <!-- Modais-->
        <AddClientes/>

    </div>
    <!-- /.row -->


</template>

<script>
    import Cabecalho from "./components/layout/Cabecalho";
    import Conteudo from "./components/Conteudo";
    import AddClientes from "./components/modal/AddClientes";

    export default {
        components: {
            Cabecalho, Conteudo, AddClientes
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