<template>
  <div>
    <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <div class="row">
      <header>
        <div class="row " style="background-color: rgb(149, 238, 94);">
          <router-link to="/" class="navbar-brand fs-3 text fw-bold col-2 d-flex align-items-center">Webelth</router-link>
          <nav class="col-8 navbar flex-row">
            <div class="container-fluid d-flex justify-content-center">
              <router-link to="/ets" class="navbar-brand"> ETS </router-link>
              <router-link to="/metodos-anticonceptivos" class="navbar-brand"> Métodos Anticonceptivos </router-link>
              <router-link to="/formularios" class="navbar-brand"> Formularios </router-link>
            </div>
          </nav>
        </div>
        <div class="col-12" style="background-color: rgb(188, 245, 42);">
          <div class="container-fluid d-flex justify-content-center">
            <router-link to="/aprender" class="navbar-brand">Aprende&nbsp;&nbsp;&nbsp;</router-link>
            <router-link to="/contactos" class="navbar-brand">Contáctenos</router-link>
            </div>
        </div>
      </header>
      <section class="row">
        <div class="col-6"  style="height: 80vh; padding: 20vh;">
          <h1>¿Sabes que es webelth?</h1>
          <p>Webelth es una página informativa para adolescentes en la cual pueden encontrar mucha información 
          acerca de la educación sexual</p>
          <router-link to="/aprender">
            <button type="button" class="align-items-end" style="background-color: rgb(188, 245, 42);">Lee un poco</button>
          </router-link>
        </div>
        <div class="row altura col-6" style="padding: 10vh 15vh 10vh 15vh;">
          <img src="../img/HomeImage.png" width="400" height="400">
        </div>
      </section>
      <footer class="row" style="height: 8vh; background-color: rgb(188, 245, 42);">
        <div class="d-flex justify-content-center">
          <img src="../img/facebook.png" class="col-1" width="55" height="50" style="padding: 0px 35px 0px 35px">
          <img src="../img/instagram.png" class="col-1" width="55" height="50" style="padding: 0px 35px 0px 35px">
          <img src="../img/Whatsapp.png" class="col-1" width="55" height="50" style="padding: 0px 35px 0px 35px">
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default{
    name: "HomeView",
    computed: {
        
    },
    data(){
        return{
            
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
.color{
  background-color: rgb(188, 245, 42);
}
</style>
