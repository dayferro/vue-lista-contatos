<template >
  <div class="margin">
    <br>
    <center>
      <div class="field">
        <img src="../assets/logo_i4pro.png" alt="some text" width=500>
      </div>
      <div class="field">
        <b-button rounded type="is-info" size="is-large" icon-left="account-multiple" @click="listaContatos()"><b>Lista de Contatos</b></b-button>
      </div>
    </center>
  </div>
  
  
  
</template>
<script>
export default {
  data: function() {
    return {
    }
  },
  methods: {
    listaContatos: function (){
      this.$router.push('/lista-contatos')
    }
    
  }
}
</script>

<style scoped>
.margin {
  margin: 100px 40px 80px 15px;
}
</style>