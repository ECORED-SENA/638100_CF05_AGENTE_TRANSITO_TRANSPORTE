<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos pedagógicos en seguridad vial
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p Teniendo en cuenta lo que menciona el Ministerio de Educación Nacional, la pedagogía se define como el saber de los docentes para orientar los procesos de formación de las personas, especialmente de niños y jóvenes, donde el docente genera una relación personal sobre lo que acontece diariamente en el trabajo con los alumnos, las alumnas y los colegas, para lograr el desarrollo humano y la construcción del conocimiento en ellos. 
          br
          br
          |Los fundamentos pedagógicos se definen como #[b “todos aquellos principios y conocimientos del área de la pedagogía, que permitirán al docente conocer los métodos de enseñanza y aprendizaje que podrá utilizar durante su labor como pedagogo”] ( IMEI , 2019), por lo cual son la base de la educación donde el formador es quien propicia los espacios de análisis, reflexión y práctica.
        .row.justify-content-center
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop' style="width: 99px; bottom: 50px").m-auto
              .tarjeta.color-primario.w-100
                .p-4
                  h4.text-center Guardia de trafico
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop' style="width: 99px; bottom: 50px").m-auto
              .tarjeta.color-primario.w-100
                .p-4
                  h4.text-center Lecciones sobre el trafico
          .col-lg-4.mb-lg-0.mb-3
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema1/6.svg' alt='AvatarTop' style="width: 99px; bottom: 50px").m-auto
              .tarjeta.color-primario.w-100
                .p-4
                  h4.text-center Enseñar sobre las señales de transito
      .col-lg-3.col-6: img(src='@/assets/curso/temas/tema2/1.png', alt='')
    .row.justify-content-center.mb-5.g-0
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema2/2.png', alt='')
      .col-lg-8
        .p-5(style="background-color: #31313D").h-100
          p.mb-0.text-white Ahora bien, los fundamentos pedagógicos en seguridad vial son los determinados por las normas de comportamiento vial y demás que regulan el tránsito y el transporte llevadas a ambientes educativos donde es el docente quien debe aterrizar estos temas bajo un contexto pedagógico en seguridad vial, reconociendo que el expositor o persona encargada de dar la orientación debe tener claro los conceptos a explicar y reconocer el público al cual se va a dirigir, ya que hablar de seguridad vial es un tema donde debe manejarse la realidad social y cultural de la movilidad del país. Las actividades pedagógicas que se pretendan realizar sobre este tema deben ser acordes a la etapa de la vida del grupo a ser capacitado, es por esto que se debe tener en cuenta lo establecido por el (Ministerio de Salud y Protección Social, 2022), frente al ciclo de vida que es un enfoque que permite entender las vulnerabilidades y las oportunidades de invertir durante etapas tempranas del desarrollo humano; reconoce que las experiencias se acumulan a lo largo de la vida y las conductas de una generación de actores viales repercutirán en otras personas, las cuales pueden estar en algún ciclo de la vida. 
    .fondo.mn.p-5
      p.mb-5 Por esta razón, orientar o educar sobre seguridad vial debe caracterizarse según el tipo de personas a capacitar, ya que ellas pueden estar en cualquiera de las etapas del desarrollo que se exponen a continuación:
      img(src='@/assets/curso/temas/tema2/4.png', alt='Esquema gráfico que señala las etapas de desarrollo o ciclos etarios en que se pueden clasificar a las personas, en función de su formación en seguridad vial:<br>1 Primera infancia, de los 0 a los 5 años.<br>2 Infancia, de los 6 a los 11 años.<br>3 Adolescencia, de los 12 a los 18 años.<br>4 Juventud, de los 14 a los 26 años.<br>5, Adultez, de los 27 a los 59 años.<br>6, Personas mayores, de 60 o más años de edad.').mb-5
      br
      br
    p Por lo anterior, el instructor para el caso SENA o docente para otras entidades que forme en seguridad vial debe estar preparado en las características que debe contener la planeación del aprendizaje en educación vial, como la prevención de la accidentalidad vial, la formación de hábitos y comportamientos seguros en la vía a cualquier tipo de público que le sea asignado como dicentes, utilizando las herramientas pedagógicas y didácticas necesarias para cada caso, dependiendo de la etapa en la que se encuentren.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.fondo
  background-image: url(../assets/curso/temas/tema2/3.svg)
  background-position: start
  background-size:  100%
  background-repeat: no-repeat
</style>
