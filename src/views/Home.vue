<template>
  <div class="container">
    <div class="jumbotron mt-2">
      <h1 class="display-4">Bem-vindo!</h1>
      <button class="btn btn-danger" @click="efetuarLogout">Sair</button>
      <add-gerente/>
    </div>
  </div>
</template>

<script>
import { logoutMixin } from '../mixins'
import addGerente from '../components/addGerente.vue'
export default {
  components:{addGerente },
  name: 'home',
  mixins:[logoutMixin]
}
</script>
