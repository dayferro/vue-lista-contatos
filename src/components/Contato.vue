<template>
    <div class="column">
        
        <img width=150 v-bind:src="getImg(objeto.img)" alt="Image">
        <p class="title is-5 blue" >{{objeto.nome}}</p>
        <p class="subtitle is-7 blue" icon-left="account-multiple">{{objeto.celular}}</p>
    </div>
</template>

<script>
export default {
    props: ['objeto'],
    methods: {
        getImg: function (img) {
            return require('../assets/'+img)
        }
    }
}
</script>

<style scoped>
.blue {
  color:#2E64FE
}
</style>
