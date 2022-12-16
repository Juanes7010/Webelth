<template>
  <div class="formulario_img col-12">
    <link
      rel="stylesheet"
      href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    />
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
    <div>
      <div
        class="
          formulario
          d-flex flex-colum justify-content-center align-items-center"
      >
      <div style="width: 400px">
          <h1>Contactanos</h1>
          <p>
            Este espacio ha sido destinado a que usted pueda hacernos llegar sus
            comentarios, opiniones, ideas o críticas sobre la página; Si
            necesitas ayuda nos puede dejar tu mensaje y nos comunicaremos contigo.
          </p>
          <form>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="first name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Last name"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="email.id"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <textarea 
              class="form-control" name="" id="exampleFormControlTextarea1" cols="30" rows="10"></textarea>
            </div>

            <div class="mb-3 d-flex justify-content-between">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
              <div><a href="#">link</a></div>
            </div>
            <button class="btn btn-primary expandir" type="button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "formulario_aprender",
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  /* esto es para que un rem sea igual a 10px */
  font-size: 62.5%;
}
.formulario_img {
  background-image: url("../img_aprender/form_aprender.jpg");
  height: 1100px;
  background-position: center;
  background-size: cover;
}
.formulario {
  background-color: #38d46b;
  width: 60vw;
  height: 90vh;
  position: absolute;
  left: 20%;
  top: 25%;
}


.form-group {
  font-size: 1.6rem;
  
}
</style>