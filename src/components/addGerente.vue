<template>
  <div class="container">
    <h3 class="titulo">Adicionar Gerente</h3>
    <form @submit.prevent="addVendas">
      <div class="form-group">
        <label for="nome" class="col-form-label">Nome</label>
        <input type="text" class="form-control" v-model="gerentes.nome" />
      </div>
      <div class="form-group">
        <label for="agencia" class="col-form-label">Agencia</label>
        <input type="text" class="form-control" v-model="gerentes.agencia" />
      </div>
        <button class="btn btn-primary" type="submit">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gerentes: {
        id: "",
        nome: "",
        agencia: "",
      },
    };
  },
  methods: {
    addVendas() {
      this.$http.post("gerentes", this.gerentes)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("erro: ");
          console.log(err);
        });
    },
  },
};
</script>

<style>
    .titulo{
        text-align: center;
    }
</style>