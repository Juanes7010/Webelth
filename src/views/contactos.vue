<script src="https://kit.fontawesome.com/1d2705d651.js" crossorigin="anonymous"></script>
<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
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
    <div class="login row">
      <div class="redes_sociales d-flex col-md-6">
        <div class="contenedor">
          <div>
            <p class="titulo_redes">
              <b>¿Quieres saber más sobre nosotros?</b>
            </p>
            <p class="txt_redes">
              Nos puedes encontrar en las siguientes redes sociales
            </p>
          </div>

          <a href="https://es-la.facebook.com/"
            ><i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/"
            ><i class="fa-brands fa-instagram"></i
          ></a>
          <a href="https://twitter.com/?lang=es"
            ><i class="fa-brands fa-twitter"></i
          ></a>
          <a href=""><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      <div
        class="
          login__formulario
          d-flex
          flex-colum
          justify-content-center
          align-items-center
          col-12 col-md-6
        "
      >
        <div style="width: 400px">
          <h1 class="titulo_redes">!Contactanos¡</h1>
          <p class="txt_formulario">
            Este espacio ha sido destinado a que usted pueda hacernos llegar sus
            comentarios, opiniones, ideas o críticas sobre la pagina, Si
            necesitas ayuda, un equipo profesional de salud se pondrá en
            contacto contigo , te dará toda la información que necesitas para
            ayudarte a tomar la decisión correcta, sin presión y sin juicios.
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
              <input
                type="number"
                placeholder="phone number"
                class="form-control"
                id="exampleInputnumer1"
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
  name: "contacto",
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>



<style>
.login {
  height: 100vh;
}
.redes_sociales {
  background-color: #dbe2e9;
}

.login__formulario {
  background-color: #38d46b;
}

.expandir {
  width: 100%;
  border-radius: 15px;
}

.contenedor {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 10%;
}
.titulo_redes {
  font-size: 30px;
}
.txt_redes {
  font-size: 20px;
  padding-bottom: 10%;
}
.txt_formulario{
    font-size: 12px;
    padding-bottom: 5%;
}

i {
  text-align: center;
  font-size: 50px;
  color: #38d46b;
  margin: 20px;
  border-radius: 50%;
  padding: 15px;
  box-shadow: #38d46b 0px 5px 10px;
  transition: 0.3s ease;
}

.fa-facebook:hover {
  background-color: #2962ff;
  color: white;
  box-shadow: #2962ff 15px 45px 65px 15px;
}
.fa-instagram:hover {
  background-color: #c58af9;
  color: white;
  box-shadow: #c58af9 15px 45px 65px 15px;
}
.fa-twitter:hover {
  background-color: #5e86f7;
  color: white;
  box-shadow: #5e86f7 15px 45px 65px 15px;
}
.fa-whatsapp:hover {
  background-color: #42ff29;
  color: white;
  box-shadow: #42ff29 15px 45px 65px 15px;
}
</style>