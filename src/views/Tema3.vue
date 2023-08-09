<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conceptos de andragogía y formación preescolar en seguridad vial
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los seres humanos se encuentran en un proceso constante de aprendizaje, desde el día de su nacimiento hasta el día de su muerte, entendiendo que nunca se para de aprender, todos los días hay una oportunidad de adquirir nuevos conocimientos. Para el caso específico de impartir formación sobre el control de movilidad, el transporte, la normatividad y la seguridad vial debe tenerse en cuenta, por ejemplo, que la educación de los niños, las niñas y los adolescentes debe ir enfocada a la enseñanza sobre el respeto de las normas de comportamiento vial y las obligaciones de cada uno de los actores viales, ya sea como conductor, pasajero o peatón, utilizando didácticas acordes a cada uno de los tipos de edades, utilizando estrategias didácticas activas y recursos didácticos como juegos en seguridad vial, impresos como cuentos y revistas infantiles, videos relacionados con el tema, auditivos como el reconocimiento de las señales sonoras de emergencia, equipos y herramientas como vehículos, bicicletas patinetas, patines, entre otros, que le permitan a los niños y los jóvenes asimilar los conceptos a través de todos sus sentidos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p: span(style="background-color: #FAE5B4 ") En cambio, la educación sobre seguridad vial para personas adultas debe generar recordación y para ello, es necesario mover las emociones de las personas, así que debe ir encaminada a dejarle un aprendizaje de por vida en un tema tan necesario para la sociedad como lo es la seguridad vial y los buenos hábitos en esta materia, ya que esto previene accidentes que pueden costar su vida.
      .col-lg-3.col-5(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/2.svg', alt='')
    .tarjeta.p-5(style="background-color: #E5E9EA").mb-4(data-aos="zoom-in")
      .row.justify-content-center.mb-5
        .col-lg-10
          p.mb-5 Aterrizando el tema en Colombia, es importante reconocer el aspecto poblacional y cultural de la zona donde posteriormente se aplique lo aprendido, es decir, se debe conocer la problemática general y las cifras de accidentalidad vial del municipio donde resida o donde se vaya a trabajar en este tipo de funciones, con el fin de lograr conectarlo con su día a día, por lo cual se presenta el siguiente dato del índice poblacional actual del país:
          img(src='@/assets/curso/temas/tema3/3.svg', alt='Esquema gráfico del DANE que muestra los porcentajes del índice poblacional actual del país, así:<br>Actores viales hombres: 48,8%<br>Actores viales mujeres: 51,2%<br>Personas de 0 a 14 años: 22,6%<br>Personas de 15 a 65 años: 68,2%<br>Personas con más de 65 años: 9,1%')
    figcaption.mb-5(style="background-color: #E1EAF4 ") Nota. Tomado de DANE (2021).
    .tarjeta.card--2.p-5.pb-0(data-aos="zoom-in")
      .row.justify-content-center.mb-5
        .col-lg-7
          p Un aforismo muy utilizado en el tema del civismo y comportamiento ciudadano según lo dijo Pitágoras 24 siglos atrás, en los cimientos de la sociedad, donde aún en la actualidad no es difícil encontrar en diferentes escenarios académicos y artísticos la siguiente frase “Educad a los niños y no será necesario castigar a los hombres”, siendo los niños la base de la próxima generación de actores viales quienes deben ser correctamente formados en el tema de la seguridad vial y los actores viales en calidad de adultos deben ser corregidos, y para esto hay actividades de prevención o aplicación de la norma como lo establece el Código de Tránsito al definir las posibles infracciones de tránsito. 
            br
            br
            |Se puede concluir, entonces, que el docente o instructor en seguridad vial debe dominar las técnicas pedagógicas para la educación de los niños y los conceptos de andrología para la educación de los adultos, siendo el común denominador el tema de prevenir riesgos para evitar accidentes de tránsito y con ello, muertes.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema3/5.png', alt='')


</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
