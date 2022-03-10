<template>
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/gerentes" class="nav-link"> Gerentes </router-link>
      </li>
      <li class="nav-item">
        <a 
        href="#" 
        @click.prevent="efetuarLogout"
        class="nav-link">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { logoutMixin } from '../mixins'

export default {
  mixins: [logoutMixin]

};
</script>

<style>
</style>