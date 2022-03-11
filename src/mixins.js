export const logoutMixin = {
    methods: {
        efetuarLogout() {
          this.$store.commit('DESLOGAR_USUARIO')
          this.$router.push({ name: "login" });
        },
      },
}

export const listarMixin = {
  methods: {
    listar(){
      this.$http.get('gerentes')
      .then((res) => {
        this.gerentes = res.data
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}