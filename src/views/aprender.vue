<template>
  <div>
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
    <div class="principal_imagen d-flex align-items-end ps-5">
      <div class="w-75">
        <p class="principal_titulo">
          ¿Qué es la educación sexual y cuáles son sus principales aspectos?
        </p>
        <p class="principal_txt">
          Gracias a la educación sexual, las personas obtienen la información y
          habilidades necesarias para tomar decisiones saludables sobre su
          sexualidad y salud reproductiva.
        </p>
      </div>
    </div>

    <div class="row contenedor_resumen text-center p-5">
      <div class="d-flex align-items-center col-6 pe-4">
        <p class="personalized_fontSize">
          Principalmente, es fundamental hacer referencia al concepto de la
          educación sexual. Se trata de una enseñanza que permite aprender todos
          los conocimientos relacionados con la sexualidad. No solamente en
          relación con el acto sexual, sino con los aspectos que lo rodean
          (consecuencias, implicaciones, enfermedades, respeto, etc.) La
          educación basada en la sexualidad tiene como principal pilar a la
          libertad y a la eliminación de la discriminación. Durante muchos años,
          algunos grupos con diversas orientaciones sexuales sufrieron una
          mirada prejuiciosa por parte de la sociedad, ya que no todos habían
          recibido una educación de calidad.
        </p>
      </div>

      <div class="col-6">
        <div class="">
          <iframe
            width="570"
            height="326"
            src="https://www.youtube.com/embed/VRa8WkNBUo8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>

    <div class="text-center">
      <div class="col-12 pe-4 titulo-relaciones text-center pt-3">
        <p class="">Relación sexual consentida</p>
      </div>

      <div class="row p-5">
        <div class="col-6">
          <img
            class="img_relaciones"
            src="../img_aprender/relaciones_01.jpg"
            alt=""
            width="550px"
          />
        </div>
        <div class="col-6 personalized_fontSize">
          <p>
            El consentimiento sexual es una de las cuestiones más importantes
            que se deben conocer. Se trata de una problemática que no solamente
            aplica a las mujeres adolescentes, sino también a las adultas. Ahora
            bien, ¿en qué consiste este término y a qué hace referencia? Pues
            bien, “consentimiento” refiere a un acto en el cual se manifiesta
            estar activamente de acuerdo con realizar actividades de índole
            sexual. Es decir, una persona debe afirmar que está dispuesta a
            tener relaciones sexuales con la otra. En caso contrario, se puede
            estar frente a una violación o agresión sexual. Cabe destacar que la
            educación sexual busca enseñar que el consentimiento debe ser
            constante. Por ejemplo, si hay cosas que no están claras, es clave
            poder volverlas a preguntar. Del mismo modo, se busca entender que
            el cambio de opinión es completamente válido, sin importar la
            situación.
          </p>
        </div>
      </div>
    </div>

    <div>
      <div class="row col-12 pubertad p-3 ps-5">

        <div class="col-10">
          <p class="pubertad_titulo">
          ¿Con quién puedo hablar sobre mi cuerpo y salud sexual?
        </p>
        <p class="pubertad_txt">
          Puedes hablar acerca de tu cuerpo y salud sexual con personas adultas
          en quien confíes.
        </p>
        </div>
        <div class="col-2 d-flex align-items-center ">
          <router-link to="/formulario-aprender">
            <button class="btn-css">Contactanos</button>
          </router-link>
        </div>
       
      
      </div>

      <div class="row p-5 d-flex justify-content-center">
        <div class="w-25 personalized_fontSize tarjeta">
          <div>
            <img
              class="img_pubertad"
              src="../img_aprender/familia.jpg"
              alt=""
            />
          </div>
          <h2 class="mb-4">
            <b>¿A quién acudo si tengo preguntas sobre mi cuerpo?</b>
          </h2>
          <p>
            Es completamente normal tener muchas preguntas sobre tu cuerpo y lo
            que pasa durante la pubertad. Hablar de estos temas con personas
            adultas en quien confíes es una de las mejores maneras de contestar
            todas tus preguntas y preocupaciones. Puedes preguntarle a tu padre,
            madre, cuidadorx, abuelxs, tíxs, hermanxs mayores, maestrxs,
            consejerxs
          </p>
        </div>
        <div class="w-25 personalized_fontSize tarjeta">
          <div>
            <img class="img_pubertad" src="../img_aprender/pareja.jpg" alt="" />
          </div>
          <h2 class="mb-4">
            <b
              >¿Qué pasa si me siento incómodx hablando con mi padre y/o
              madre?</b
            >
          </h2>
          <p>
            Es normal que hablar con tu padre, madre u otras personas adultas
            acerca de los cambios en tu cuerpo durante la pubertad, de salir con
            alguien o sobre sexo, se sienta incómodo o raro. Si no puedes
            hacerlo. Muchos centros de salud tienen programas especiales o
            eventos para adolescentes donde puedes recibir la información que
            necesites sobre la pubertad.
          </p>
        </div>
        <div class="w-25 personalized_fontSize tarjeta">
          <div>
            <img class="img_pubertad" src="../img_aprender/doctor.jpg" alt="" />
          </div>
          <h2 class="mb-4">
            <b>¿Cómo sé cuándo debo hablar con unx doctorx?</b>
          </h2>

          <p>
            Puedes llamar a tu doctorx si quieres hablar en privado sobre temas
            que no quieres compartir con otras personas. Lxs doctorxs son
            expertxs en todo lo que sucede en el cuerpo y su trabajo es
            contestar cualquier pregunta y ayudarte a mantenerte saludable
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
 export default {
  name: "aprender",
  computed: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
  
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  /* esto es para que un rem sea igual a 10px */
  font-size: 62.5%;
}
.principal_imagen {
  background-image: url("../img_aprender/principal.jpg");
  height: 500px;
  background-position: center;
  background-size: cover;
}
.principal_titulo {
  font-size: 4rem;
  line-height: 50px;
  color: white;
}
.principal_txt {
  font-size: 2rem;
  color: #dbe2e9;
}

.contenedor_resumen {
  height: 400px;
}

.img_relaciones {
  border-radius: 10px;
}

.titulo-relaciones {
  background-color: #38d46b;
  height: 60px;
  font-size: 2.5rem;
  color: white;
}

.personalized_fontSize {
  font-size: 2rem;
  padding: 4rem !important;
  color: #4b4e52;
}
.pubertad {
  background-color: #156643;
}

.pubertad_titulo {
  font-size: 2.7rem;
  line-height: 50px;
  color: white;
}

.pubertad_txt {
  font-size: 2rem;
  color: #dbe2e9;
}

.tarjeta {
  background-color: #9ad3ad;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 10px 13px 14px 0px rgb(196, 188, 196);
}
.img_pubertad {
  width: 100%;
  height: 30vh;
  margin-bottom: 20px;
}

.btn-css {
  font-family: Roboto, sans-serif;
  font-weight: 0;
  font-size: 14px;
  color: rgb(8, 8, 8);
  background-color: #9ad3ad;
  padding: 10px 30px;
  border: 2px solid #9ad3ad;
  box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
  border-radius: 50px;
  transition: 1000ms;
  transform: translateY(0);
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.btn-css:hover {
  transition: 1000ms;
  padding: 10px 50px;
  transform: translateY(-0px);
  background-color: #fff;
  color: black;
  border: solid 2px #9ad3ad;
}
</style>