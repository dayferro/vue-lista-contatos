<template >
  <div class="margin">
    <br>
    <div class="container field">
      <div class="buttons is-lefht">
        <section>
          <b-button rounded type="is-info is-fullwidth" size="is-small" @click="inicio()"><b>Voltar</b></b-button>
        </section>
      </div>
    </div>
    <div class="container">
      <div class="notification">
        
        <titulo texto='Meus Contatos'></titulo>
        <div class="columns field">
          <div class="column is-4 field">
            <b-field>
              <b-input v-model="busca" placeholder="Pesquisar..." type="search" icon="magnify" rounded>
              </b-input>
            </b-field>
          </div>
          <div class="column is-8">
            <div class="buttons is-right">
              <section>
                <b-button rounded type="is-primary is-fullwidth" icon-left="account-plus-outline" @click="addContato()"><b>Novo</b></b-button>
              </section>
            </div>
          </div>
        </div>
        <div class="columns">
          <contato v-for="contato in listaContatosFiltrada" v-bind:objeto="contato" v-on:click.native="abrirModal(contato)" ></contato>
        </div>
      </div>
    </div>
      <!--Modal - Carrega dados do contato selecionado-->
    <b-modal :active.sync="ModalListaContato" :width="800" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <slot>
                <img width=80 v-bind:src="getImg(modalContato.img)" alt="Image">
            </slot>
          </div>
          <p v-if="errors.length" class="field">
            <b-notification type="is-danger" aria-close-label="Close notification" role="alert">
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
            </b-notification>
          </p>
          <div class="columns field">
            <div class="column is-8">
              <b-field label="Nome">
                <b-input v-model="modalContato.nome" v-bind:disabled="!modalContato.editavel" rounded></b-input>
              </b-field>
            </div>
            <div class="column is-4">
              <b-field label="Instagram">
                <b-input v-model="modalContato.instagram" v-bind:disabled="!modalContato.editavel" rounded></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <b-field label="Celular">
                <b-input v-model="modalContato.celular" v-mask="'(##) #####-####'" v-bind:disabled="!modalContato.editavel" rounded></b-input>
              </b-field>
            </div>
            <div class="column is-6">
              <b-field label="Telefone">
                <b-input v-model="modalContato.telefone" v-mask="'(##) ####-####'" v-bind:disabled="!modalContato.editavel" rounded></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <b-field label="E-mail">
                <b-input v-model="modalContato.email" v-bind:disabled="!modalContato.editavel" rounded></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <b-field label="Endereço">
                <b-input v-model="modalContato.endereco" v-bind:disabled="!modalContato.editavel" rounded></b-input>
              </b-field>
            </div>
          </div>
          <div class="buttons is-right">
            <b-button rounded type="is-info"  icon-right="pencil" v-if="!modalContato.editavel" @click="editar(modalContato)"></b-button>
            <b-button rounded type="is-success" icon-right="check-outline" v-if="modalContato.editavel" @click="salvar(modalContato)"></b-button>
            <b-button rounded type="is-danger"  icon-right="delete" @click="deletar(modalContato)"></b-button>
          </div>
        </div>
      </div>
    </b-modal>
    <br>
    <div class= column is-12>
       <div align="center"><img src="../assets/logo_i4pro.png" alt="some text" width=200></div>
    </div>
  </div>
</template>

<script>

import Titulo from './Titulo.vue'
import Contato from './Contato.vue'

export default {
  components: {
    Titulo,
    Contato
  },

  data: function() {
    return {
      busca: '',
        listaContatos: [
                {
                "nome": "Summer",
                "instagram": "@summersmith",
                "email": "summer10@i4pro.com.br",
                "celular": "(11) 95272-7093",
                "telefone": "(11) 4545-2358",
                "endereco": "Rua Flado Haidar, 389 - Apto 603 -  Vila Olimpia-SP",
                "img": 'day.png',
                "editavel": false
                },
                {
                  "nome": "Beth",  
                  "instagram": "@bethsmith10",
                  "email": "bethsmithhotmail.com",
                  "celular": "(11) 98564-5741",
                  "telefone": "(11) 3585-6032",
                  "endereco": "Rua das Flores, 90 - Apto 250 -  Vila Nova Conceição-SP",
                  "img": 'regina.png',
                  "editavel": false
                },
                {
                  "nome": "Jerry",
                  "instagram": "@jerrysanches",
                  "email": "jsanches@gmail.com.br",
                  "celular": "(11) 96572-0036",
                  "telefone": "(11) 4585-6775",
                  "endereco": "Rua Joaquim Floriano, 564 - Apto 15 -  Itaim Bibi-SP",
                  "img": 'papai.png',
                  "editavel": false
                },
                {
                  "nome": "Pickle Rick",
                  "instagram": "@picklerick",
                  "email": "picklerick@gmail.com.br",
                  "celular": "(11) 96544-0231",
                  "telefone": "(11) 4225-6755",
                  "endereco": "Rua Clodomiro Amazonas, 134 - Apto 40 - Vila Olimpia-SP",
                  "img": 'pic.png',
                  "editavel": false
                },
                {
                  "nome": "Morty",
                  "instagram": "@morty2019",
                  "email": "mortysanches@gmail.com.br",
                  "celular": "(11) 99786-0291",
                  "telefone": "(11) 4389-6768",
                  "endereco": "Rua Florida, 678 - Apto 90 - Berrine-SP",
                  "img": 'gui.png',
                  "editavel": false
                },
                {
                  "nome": "Rick",
                  "instagram": "@rick99",
                  "email": "rick@gmail.com.br",
                  "celular": "(11) 99886-0091",
                  "telefone": "(11) 5649-6068",
                  "endereco": "Rua Tabapuã, 1238 - Apto 102 - Morumbi-SP",
                  "img": 'ian.png',
                  "editavel": false
                },
                
              ],
                columns: [
                    {
                        field: 'nome',
                        label: 'Nome',
                    },
                    {
                        field: 'celular',
                        label: 'Celular',
                       
                    },
                    {
                        field: 'telefone',
                        label: 'Telefone',
                       
                    },
                    {
                        field: 'instagram',
                        label: 'Instagram',
                    },
                     {
                        field: 'email',
                        label: 'E-mail',
                    }
                ],
      ModalListaContato: false,
      modalContato: {},
      novoContato:{},
      errors: [],
      labelPosition: 'on-border'
      
    }
  },
  methods: {
    getImg: function (img) {
      if(!img) return
      return require('../assets/'+img)
    },

    editar: function (contato) {
      contato.editavel = true
    },
    
    salvar: function (contato) {
      this.errors = []

      if (!contato.nome ) {
        this.errors.push('O campo nome é obrigatório.')
      }
      
      if (!contato.celular) {
        this.errors.push('O campo celular é obrigatório.')
      }
      else if(contato.celular.length < 15) {
        this.errors.push('O campo celular está incompleto.')
      }
      
      if(contato.telefone && contato.telefone.length < 14){
        this.errors.push('O campo telefone está incompleto.')
      }

      if(this.errors.length > 0) {
        return
      }
      
      if(contato.novo){
          this.listaContatos.push(contato)
          contato.novo = false
      }
      else{
        contato.editavel = false
      }

      this.ModalListaContato  = false
    },


    deletar: function (contato){
      this.ModalListaContato  = false
      
      if(!contato.novo) {
        let index = this.listaContatos.indexOf(contato)
        this.listaContatos.splice(index, 1)
      }
    },

    abrirModal: function (contato){
      this.errors = []
      this.ModalListaContato = true
      this.modalContato = contato
      this.modalContato.editavel = false
    },
    
   
    
    addContato: function () {
      this.errors = []
      this.ModalListaContato = true
      this.modalContato = {
          "nome": "",
          "instagram": "",
          "email": "",
          "celular": "",
          "telefone": "",
          "endereco": "",
          "img": 'novo.png',
          "editavel": true,
          "novo": true
      }
    },

     inicio: function (){
      this.$router.push('/')
    },
  },

  computed: {
    listaContatosFiltrada: function() {
      let result = []
      if(this.busca == '')
        return this.listaContatos

      for(let contato of this.listaContatos) {
        for(let prop in contato){
          if(typeof(contato[prop]) == 'string') {
            if(contato[prop].toLowerCase().indexOf(this.busca.toLowerCase()) != -1){
              result.push(contato)
              break
            }
          }
        }
      }
      return result
    }
  }
}
</script>

<style scoped>

.margin {
  margin: 20px 40px 80px 15px;
  margin-left: auto
}
#div1
{
  border: 10px solid;
  border-color:black;
  width:250px;
  height:300px;
  text-align: center;
  padding-left: auto;
  padding-top: 50%;
 
}



</style>
