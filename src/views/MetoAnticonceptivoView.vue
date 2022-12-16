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
            <h1>Metodo anticonceptivo</h1>
            <p style="text-align: justify;">El acceso a métodos anticonceptivos es un derecho. Todas las personas tenemos derecho a decidir si tener hijos o no, la cantidad y el espaciamiento entre ellos. Asesorada por un especialista, cada persona puede decidir el método adecuado según sus hábitos, su cuerpo y sus proyectos. En esta consulta se deben aclarar todas las dudas sobre el método y su uso correcto.</p>
          </div>
          <div class="row altura col-6" style="padding: 10vh 15vh 10vh 15vh;">
            <img src="../img/Metodos.jpg" width="400" height="400">
          </div>
  
            
        </section>
        <div class="row" style="padding-left: 20vh;padding-bottom: 10vh;">
            <div class="col-6 col-md-3">
                <div class="card mb-3">
                    <img class="card-img-top" src="../img/m_corta.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Métodos hormonales de acción corta</h5>
                        <p class="card-text" style="text-align: justify;">Se consideran métodos de acción corta porque hay que recordar de utilizarlos a diario, semanalmente o mensualmente.</p>
               
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="card mb-3">
                    <img class="card-img-top" src="../img/m_barrera.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Metodos de barrera</h5>
                        <p class="card-text" style="text-align: justify;">Los métodos de barrera incluyen los condones (masculinos y femeninos), el diafragma, los capuchones cervicales y las esponjas anticonceptivas. El condón masculino es un tubo delgado y flexible de látex, poliuretano o intestinos de oveja, que tiene un extremo cerrado.</p>
               
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="card mb-3">
                    <img class="card-img-top" src="../img/m_prolongada.jpg">
                    <div class="card-body">
                        <h5 class="card-title">Métodos hormonales de acción prolongada</h5>
                        <p class="card-text" style="text-align: justify;">Estos métodos anticonceptivos básicamente son los dispositivos intrauterinos (DIU) y los implantes, que son los métodos reversibles con más alta efectividad.</p>
               
                    </div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="card mb-3">
                    <img class="card-img-top" src="../img/m_este.gif">
                    <div class="card-body">
                        <h5 class="card-title">Esterilización</h5>
                        <p class="card-text" style="text-align: justify;">Este es un método anticonceptivo permanente. Algunos ejemplos son la ligadura de trompas para las mujeres y la vasectomía para los hombres.</p>
               
                    </div>
                </div>
            </div>
        </div>
        <br>

        <footer class="bg-success" style="height: 8vh">
  
        </footer>
      </div>
    </div>
  </template>
  <script>
  /* export default{
      name: "HomeView",
      computed: {
          
      },
      data(){
          return{
              
          }
      },
      methods: {
      }
  } */
  </script>
  <style lang="scss">
  .color{
    background-color: rgb(188, 245, 42);
  }
  </style>
  