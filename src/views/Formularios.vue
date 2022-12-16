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
        <section class="row" style="padding: 5vh 30vh 0vh 30vh;">
          <div class="row col-12 text-center" >
            <h1>Formularios</h1>
            <p style="padding: 5vh 0vh 0vh 0vh;">Esta es nuestra sección de formularios, acá podrás responder una serie de preguntas que nos ayudan para realizar 
              un estudio acerca de como están los jóvenes en conocimientos de educación sexual, responder estos cuestionarios 
              tiene sus beneficios, podrás acumular puntos que luego puedes redimir por una entrada gratis a cine o por un 
              descuento del 30% en métodos anticonceptivos en cualquier farmacia</p>
          </div>
          <div class="row" style="padding: 3vh 0vh 5vh 0vh"></div>
          <div class="row d-flex justify-content-center fs-1">Puntaje: {{puntaje}}</div>
          <div class="row" style="padding: 2vh 0vh 5vh 0vh"></div>
          <div class="row d-flex justify-content-center">
            <button @click="mostrarTestETS()" type="button" class="btn btn-warning col-3">Test ETS</button>
            <div class="col-1"></div>
            <button @click="mostrarTestMET()" type="button" class="btn btn-warning col-3">Test Métodos Anticonceptivos</button>
            <div class="col-1"></div>
            <button @click="mostrarTestFORM()" type="button" class="btn btn-warning col-3">Formulario de satisfacción</button>
          </div>
          <div class="row">
            <div class="row" v-show="mostrarETS">
              <h2 class="text-center" style="padding: 5vh 0vh 5vh 0vh">Test Enfermedades de transmision sexual</h2>
              <p>1- ¿Que son ETS?</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" id="radio1Respuesta1" value="1-1" v-model="ETS1">
                  <label class="form-check-label" for="flexRadioDefault1">Enfermedades de transmisión sentimental</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" id="radio1Respuesta2" value="1-2" v-model="ETS1">
                  <label class="form-check-label" for="flexRadioDefault1">Enfermedades de transmisión sonora</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1" id="radio1Respuesta3" value="1-3" v-model="ETS1">
                  <label class="form-check-label" for="flexRadioDefault1">Enfermedades de transmisión sexual</label>
                </div>
              </div>
              <p>2- ¿Cuales de las siguientes enfermedades son ETS:</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check2Item1" v-model="ETS2_1">
                  <label class="form-check-label" for="flexCheckDefault">Clamidia</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check2Item2" v-model="ETS2_2">
                  <label class="form-check-label" for="flexCheckDefault">Coronavirus</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check2Item3" v-model="ETS2_3">
                  <label class="form-check-label" for="flexCheckDefault">SIDA</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check2Item4" v-model="ETS2_4">
                  <label class="form-check-label" for="flexCheckDefault">Artrosis</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check2Item5" v-model="ETS2_5">
                  <label class="form-check-label" for="flexCheckDefault">Autismo</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check2Item6" v-model="ETS2_6">
                  <label class="form-check-label" for="flexCheckDefault">Gonorrea</label>
                </div>
              </div>
              <p>3- Las ETS también son conocidas como: </p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio3" id="radio3Respuesta1" value="3-1" v-model="ETS3">
                  <label class="form-check-label" for="flexRadioDefault1">Enfermedades venéreas</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio3" id="radio3Respuesta2" value="3-2" v-model="ETS3">
                  <label class="form-check-label" for="flexRadioDefault1">Enfermedades malignas</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio3" id="radio3Respuesta3" value="3-3" v-model="ETS3">
                  <label class="form-check-label" for="flexRadioDefault1">Enfermedades neutrales</label>
                </div>
              </div>
              <p>4- El sifilis tiene cura</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio4" id="radio4Respuesta1" value="4-1" v-model="ETS4">
                  <label class="form-check-label" for="flexRadioDefault1">Verdadero</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio4" id="radio4Respuesta2" value="4-2" v-model="ETS4">
                  <label class="form-check-label" for="flexRadioDefault1">Falso</label>
                </div>
              </div>
              <p>5- ¿Cómo se transmiten las ETS?</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio5" id="radio5Respuesta1" value="5-1" v-model="ETS5">
                  <label class="form-check-label" for="flexRadioDefault1">Mediante contacto físico</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio5" id="radio5Respuesta2" value="5-2" v-model="ETS5">
                  <label class="form-check-label" for="flexRadioDefault1">Mediante relaciones sexuales</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio5" id="radio5Respuesta3" value="5-3" v-model="ETS5">
                  <label class="form-check-label" for="flexRadioDefault1">Enfermedades neutrales</label>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button @click="analizarResultados()" type="button" class="btn btn-warning col-3">Enviar</button>
              </div>
            </div>



            <div class="row" v-show="mostrarMET">
              <h2 class="text-center" style="padding: 5vh 0vh 5vh 0vh">Test Métodos Anticonceptivos</h2>
              <p>1- Son tipos de métodos anticonceptivos:</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check1METItem1" v-model="MET1_1">
                  <label class="form-check-label" for="flexCheckDefault">Métodos hormonales de acción corta</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check1METItem2" v-model="MET1_2">
                  <label class="form-check-label" for="flexCheckDefault">Métodos sexuales</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check1METItem3" v-model="MET1_3">
                  <label class="form-check-label" for="flexCheckDefault">Métodos de barrera</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check1METItem4" v-model="MET1_4">
                  <label class="form-check-label" for="flexCheckDefault">Esterilización</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check1METItem5" v-model="MET1_5">
                  <label class="form-check-label" for="flexCheckDefault">Métodos humanos</label>
                </div>
              </div>
              <p>2- ¿Que método anticonceptivo es 100% seguro?</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2MET" id="radio2METRespuesta1" value="2-1" v-model="MET2">
                  <label class="form-check-label" for="flexRadioDefault1">Vasectomía</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2MET" id="radio2METRespuesta2" value="2-2" v-model="MET2">
                  <label class="form-check-label" for="flexRadioDefault1">Condón</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2MET" id="radio2METRespuesta3" value="2-3" v-model="MET2">
                  <label class="form-check-label" for="flexRadioDefault1">Inyección hormonal</label>
                </div>
              </div>
              <p>3- Son métodos anticonceptivos:</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check3METItem1" v-model="MET3_1">
                  <label class="form-check-label" for="flexCheckDefault">Condón</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check3METItem2" v-model="MET3_2">
                  <label class="form-check-label" for="flexCheckDefault">La píldora</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check3METItem3" v-model="MET3_3">
                  <label class="form-check-label" for="flexCheckDefault">Espermicidas</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check3METItem4" v-model="MET3_4">
                  <label class="form-check-label" for="flexCheckDefault">Implante</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="check3METItem5" v-model="MET3_5">
                  <label class="form-check-label" for="flexCheckDefault">Diu</label>
                </div>
              </div>
              <p>4- Todos los métodos anticonceptivos son 100% efectivos</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio4MET" id="radio4METRespuesta1" value="4-1" v-model="MET4">
                  <label class="form-check-label" for="flexRadioDefault1">Verdadero</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio4MET" id="radio4METRespuesta2" value="4-2" v-model="MET4">
                  <label class="form-check-label" for="flexRadioDefault1">Falso</label>
                </div>
              </div>
              <p>5- Algunos métodos anticonceptivos tienen efectos secundarios</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio5MET" id="radio5METRespuesta1" value="5-1" v-model="MET5">
                  <label class="form-check-label" for="flexRadioDefault1">Verdadero</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio5MET" id="radio5METRespuesta2" value="5-2" v-model="MET5">
                  <label class="form-check-label" for="flexRadioDefault1">Falso</label>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button @click="analizarResultados()" type="button" class="btn btn-warning col-3">Enviar</button>
              </div>
            </div>


            <div class="row" v-show="mostrarForm">
              <h2 class="text-center" style="padding: 5vh 0vh 5vh 0vh">Formulario de satisfacción</h2>
              <p>1- ¿Que tal le parece el diseño de la página?</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1FORM" id="radio1FORMRespuesta1" value="1-1" v-model="FORM1">
                  <label class="form-check-label" for="flexRadioDefault1">Malo</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1FORM" id="radio1FORMRespuesta1" value="1-2" v-model="FORM1">
                  <label class="form-check-label" for="flexRadioDefault1">Normal</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1FORM" id="radio1FORMRespuesta1" value="1-3" v-model="FORM1">
                  <label class="form-check-label" for="flexRadioDefault1">Bueno</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio1FORM" id="radio1FORMRespuesta1" value="1-4" v-model="FORM1">
                  <label class="form-check-label" for="flexRadioDefault1">Muy bueno</label>
                </div>
              </div>
              <p>2- ¿La información de esta página es de su interés?</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2FORM" id="radio2FORMRespuesta1" value="2-1" v-model="FORM2">
                  <label class="form-check-label" for="flexRadioDefault1">No</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2FORM" id="radio2FORMRespuesta1" value="2-2" v-model="FORM2">
                  <label class="form-check-label" for="flexRadioDefault1">Tal vez</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2FORM" id="radio2FORMRespuesta1" value="2-3" v-model="FORM2">
                  <label class="form-check-label" for="flexRadioDefault1">Si</label>
                </div>
              </div>
              <p>2- ¿Recomendarías esta página?</p>
              <div style="padding: 5vh 0vh 5vh 7vh">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio3FORM" id="radio3FORMRespuesta1" value="3-1" v-model="FORM3">
                  <label class="form-check-label" for="flexRadioDefault1">No</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio3FORM" id="radio3FORMRespuesta1" value="3-2" v-model="FORM3">
                  <label class="form-check-label" for="flexRadioDefault1">Tal vez</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio3FORM" id="radio3FORMRespuesta1" value="3-3" v-model="FORM3">
                  <label class="form-check-label" for="flexRadioDefault1">Si</label>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button @click="analizarResultados()" type="button" class="btn btn-warning col-3">Enviar</button>
              </div>
            </div>
          </div>
          <section class="row">
            <div class="row" style="padding: 3vh 0vh 5vh 0vh"></div>
            <div class="row d-flex justify-content-center fs-1">Redime tus puntos</div>
            <div class="row" style="padding: 3vh 0vh 5vh 0vh"></div>
            <div class="col-6 d-flex justify-content-center">
              <button @click="redimirCine()">
                <div class="row d-flex justify-content-center fs-3">1 entrada a cine = 180 puntos</div>
                <img src="../img/Bono cine.png" width="400" height="400">
              </button>
            </div>
            <div class="col-6 d-flex justify-content-center">
              <button @click="redimirDescuento()">
                <div class="row d-flex justify-content-center fs-3">Bono de descuento en farmacias = 120 puntos</div>
                <img src="../img/Bono descuento.png" width="400" height="400">
              </button>
            </div>
            <div class="row" style="padding: 3vh 0vh 5vh 0vh"></div>
          </section>
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
import database from '../Database/database.sql'

  export default{
      name: "Formularios",
      computed: {
          
      },
      data(){
          return{
              mostrarETS: false,
              mostrarMET: false,
              mostrarForm: false,
              puntaje: 0,
              ETS1: null,
              ETS2_1: false,
              ETS2_2: false,
              ETS2_3: false,
              ETS2_4: false,
              ETS2_5: false,
              ETS2_6: false,
              ETS3: null,
              ETS4: null,
              ETS5: null,
              MET1_1: false,
              MET1_2: false,
              MET1_3: false,
              MET1_4: false,
              MET1_5: false,
              MET2: null,
              MET3_1: false,
              MET3_2: false,
              MET3_3: false,
              MET3_4: false,
              MET3_5: false,
              MET4: null,
              MET5: null,
              FORM1: null,
              FORM2: null,
              FORM3: null 
          }
      },
      methods: {
        mostrarTestETS(){
          if(this.mostrarETS){
            this.mostrarETS = false
          } else{
            this.mostrarETS = true
            this.mostrarMET = false
            this.mostrarForm = false
          }
        },
        mostrarTestMET(){
          if(this.mostrarMET){
            this.mostrarMET = false
          } else{
            this.mostrarETS = false
            this.mostrarMET = true
            this.mostrarForm = false
          }
        },
        mostrarTestFORM(){
          if(this.mostrarForm){
            this.mostrarForm = false
          } else{
            this.mostrarETS = false
            this.mostrarMET = false
            this.mostrarForm = true
          }
        },
        analizarResultados(){
          if(this.mostrarETS){
            if(this.ETS1 != null && this.ETS3 != null && this.ETS4 != null && this.ETS5 != null){
              if(this.ETS1 == "1-3") this.puntaje += 20
              if(this.ETS2_1 == true) this.puntaje += 6.5
              if(this.ETS2_3 == true) this.puntaje += 6.5
              if(this.ETS2_6 == true) this.puntaje += 6.5
              if(this.ETS3 == "3-1") this.puntaje += 20
              if(this.ETS4 == "4-1") this.puntaje += 20
              if(this.ETS5 == "5-2") this.puntaje += 20
              this.mostrarETS = false
            } else {
              alert("Debes contestar todas las preguntas para enviar tus respuestas")
            }
          } else if(this.mostrarMET){
            if(this.MET2 != null && this.MET4 != null && this.MET5 != null){
              if(this.MET1_1 == true) this.puntaje += 6.5
              if(this.MET1_3 == true) this.puntaje += 6.5
              if(this.MET1_4 == true) this.puntaje += 6.5
              if(this.MET2 == "2-1") this.puntaje += 20
              if(this.MET3_1 == true) this.puntaje += 4
              if(this.MET3_2 == true) this.puntaje += 4
              if(this.MET3_3== true) this.puntaje += 4
              if(this.MET3_4 == true) this.puntaje += 4
              if(this.MET3_5 == true) this.puntaje += 4
              if(this.MET4 == "4-2") this.puntaje += 20
              if(this.MET5 == "5-1") this.puntaje += 20
              
              this.mostrarMET = false
            } else {
              alert("Debes contestar todas las preguntas para enviar tus respuestas")
            }
          } else if(this.mostrarForm){
            if(this.FORM1 != null && this.FORM2 != null && this.FORM3 != null){
              this.puntaje += 100
              this.mostrarForm = false
            } else {
              alert("Debes contestar todas las preguntas para enviar tus respuestas")
            }
          }
        },
        redimirCine(){
          if(this.puntaje < 180){
            alert("No tienes suficientes puntos")
            return
          }
          this.puntaje -= 180
          alert("Has redimido una entrada a cine en CineColombia")
        },
        redimirDescuento(){
          if(this.puntaje < 120){
            alert("No tienes suficientes puntos")
            return
          }
          this.puntaje -= 120
          alert("Has redimido un bono de descuento del 40% en cualquier farmacia del país")
        }
      }
  }
  </script>
  <style lang="scss">
  .color{
    background-color: rgb(188, 245, 42);
  }
  </style>