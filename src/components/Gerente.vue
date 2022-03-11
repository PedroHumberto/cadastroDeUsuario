<template>
  <div class="col-3">
    <div class="card shadow essecard">
      <div class="card-body">
        <h5 class="card-title">{{ gerente.nome }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ gerente.agencia }}</h6>
        <button class="btn btn-danger" @click="$emit('deletarGerente')">
          Remover
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["gerente"],
  emits: ["deletarGerente"],
  methods: {},
};
</script>

<style>
.essecard {
  margin-bottom: 30px;
}
</style>

