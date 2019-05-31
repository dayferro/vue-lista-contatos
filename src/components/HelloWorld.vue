<template >
  <div class="margin">
    <br>
    <div align="center"><span class="title">Lista de contatos</span></div>
    <br>
    <b-table :data="contatos">
      <template slot-scope="contatos">
        <b-table-column label="Nome">
          <b-input v-model= "contatos.row.nome" v-bind:disabled="!contatos.row.editavel"></b-input>
        </b-table-column>

        <b-table-column label="E-mail">
          <b-input v-model= "contatos.row.email" v-bind:disabled="!contatos.row.editavel"></b-input>
        </b-table-column>

        <b-table-column label="Celular">
          <b-input v-model= "contatos.row.celular" v-bind:disabled="!contatos.row.editavel"></b-input>
        </b-table-column>

        <b-table-column label="Telefone">
          <b-input v-model= "contatos.row.telefone" v-bind:disabled="!contatos.row.editavel"></b-input>
        </b-table-column>
        
        <b-table-column>
          <div class="buttons is-right">
            <b-button rounded type="is-info"  icon-right="pencil" v-if="!contatos.row.editavel" @click="editar(contatos.row)"></b-button>
            <b-button rounded type="is-success" icon-right="check-outline" v-if="contatos.row.editavel" @click="salvar(contatos.row)"></b-button>
            <b-button rounded type="is-danger"  icon-right="delete" @click="deletar(contatos.row)"></b-button>
          </div>
        </b-table-column>
      </template>
    </b-table>

    <div class="column is-2">
      <b-button rounded type="is-primary is-fullwidth" icon-left="account-plus-outline" @click="addItem"><b>Novo Contato</b></b-button> 
    </div> <br><br>
    <div align="center"><img src="../assets/i4pro.png" alt="some text" width=140 height=100></div>
  </div>
</template>
<script>
export default {

  data: function() {
    return {
      contatos: [{
          "nome": "Ediane Cardoso",
          "email": "ediane.cardoso@i4pro.com.br",
          "celular": "(11) 95246-5245",
          "telefone": "(11) 4545-2358",
          "editavel": false
        },
        {
          "nome": "Dilton Costa",
          "email": "Dilton.Costa@i4pro.com.br",
          "celular": "(11) 98564-5741",
          "telefone": "(11) 3585-6032",
          "editavel": false
        },
         {
          "nome": "Claudia Cardoso",
          "email": "claudinha@gmail.com.br",
          "celular": "(18) 96572-0036",
          "telefone": "(18) 4585-6775",
          "editavel": false
        }
      ]
    }
  },
  methods: {
    editar: function (contato) {
      contato.editavel = true
      
    },
    
     salvar: function (contato) {
      contato.editavel = false
      
    },

     deletar: function (contato){
      let index = this.contatos.indexOf(contato)
      this.contatos.splice(index, 1)
    },

    addItem: function (){
      
      let novo_contato = {
        "nome":"",
        "email":"",
        "celular":"",
        "telefone":"",
        "editavel":true
      }

      this.contatos.push(novo_contato)
    }

  }
}
</script>

<style scoped>

.margin {
  margin: 20px 40px 80px 15px;
}

</style>
