<template>
  <div class="container">
    <div class="card card-body mycard">

    <h1>Gerentes</h1>
    <div class="row">
      
      <Gerente 
      v-for="gerente of gerentes" 
      :key="gerente.nome" 
      :gerente="gerente"
      @deletarGerente="removerGerente(gerente)"
      />
    </div>
    </div>
  </div>
</template>

<script>
import { listarMixin } from '../mixins'
import Gerente from '@/components/Gerente.vue'

export default {
  components: {
    Gerente
  },
  mixins: [listarMixin], //executa o metodo listar
  data() {
    return {
      gerentes: []
    }
  },
  mounted(){
    this.listar()
  },
  
  methods: {
    removerGerente(gerente){
      this.$store.commit('DELETAR_GERENTE', gerente)
      return this.listar()
    }
  },
}
</script>

<style>
.mycard{
  margin-top: 15px;
}
h1{
  text-align: center;
}
</style>