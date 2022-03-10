<template>
  <div class="col-3">
    
    <div class="card shadow essecard">
      <div class="card-body">
        <h5 class="card-title">{{ gerente.nome }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ gerente.agencia }}</h6>
        <button class="btn btn-danger" @click="remover(gerente)">Remover</button>
      </div>
      
    </div>
    
  </div>
</template>

<script>

export default {
  props: ['gerente'],

  methods: {
    remover(gerente){
      this.$store.commit('DELETAR_GERENTE', gerente)
    }
  },
}
</script>

<style>
.essecard{
  margin-bottom: 30px;
}
</style>

