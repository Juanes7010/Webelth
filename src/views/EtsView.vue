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
          <h1>Enfermedades de transmisión sexual (enfermedades venéreas)</h1>
          <p style="text-align: justify;">Las enfermedades de transmisión sexual -ETS- (que anteriormente se conocían como enfermedades venéreas), son infecciones que se contagian de una persona a otra usualmente durante el sexo vaginal, anal u oral. Son muy comunes y muchas personas con ETS no tienen síntomas.</p>
        </div>
        <div class="row altura col-6" style="padding: 10vh 15vh 10vh 15vh;">
          <img src="../img/ETS-LOGO.png" width="400" height="400">
        </div>

          
      </section>
      <div class="row" style="padding-left: 20vh;padding-bottom: 10vh;">
        <h3>Lista de enfermedades</h3><br>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>CLAMIDIA</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">¿Qué es la clamidia? Es una enfermedad de transmisión sexual muy común causada por una infección bacteriana. A menudo no tiene síntomas, pero una vez diagnosticada es fácil de tratar.</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>VERRUGAS GENITALES</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">Son bultos que salen en la piel del área genital y alrededor del ano. Son causadas por ciertos tipos de virus del papiloma humano (VPH).</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>GONORREA</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">¿Qué es la gonorrea? Es una enfermedad de transmisión sexual común causada por una infección bacteriana. A menudo no tiene síntomas, pero es fácil de tratar una vez diagnosticada.</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>HEPATITIS B</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">¿Qué es la hepatitis B? Es una enfermedad de transmisión sexual causada por un virus que puede producir enfermedad hepática (en el hígado) y que se transmite durante el sexo o por compartir objetos de higiene personal como máquinas de afeitar o cepillos de dientes.</p>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row" style="padding-left: 20vh;padding-bottom: 10vh;">
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>HERPES GENITAL Y ORAL</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">¿Qué es el herpes? Es una enfermedad de transmisión sexual común que infecta  los genitales y la boca. Causa llagas o ampollas. No existe una cura, pero se pueden tratar los síntomas.</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>VHI Y SIDA</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">El VIH es el virus que causa el sida. Es una infección que destruye el sistema inmunológico y que puede causar el SIDA. No existe cura, pero hay tratamientos que pueden ayudarte a mantenerte saludable.</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>PAPILOMA HUMANO</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">El papiloma humano o virus del papiloma humano (VPH), es una enfermedad de transmisión sexual muy común, generalmente inofensiva y que desaparece por sí sola. Algunos tipos pueden llevar al cáncer.</p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="card">
            <div class="card-header" style="background-color: #A9DFBF !important;">
              <b>SIFILIS</b>
            </div>
            <div class="card-body">
              <p class="card-text" style="text-align: justify;">La sífilis es una infección bacteriana común. Se cura fácilmente con medicamentos, pero puede ser peligrosa si no se trata.</p>
            </div>
          </div>
        </div>
      </div>
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
