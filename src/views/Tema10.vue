<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Plan Nacional de Seguridad Vial 2022-2031
    .row.justify-content-center.g-0.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        div(style="background-color: #31313C").p-5.h-100
          p.text-white Dados los altos índices de accidentalidad y siniestralidad vial a lo largo del territorio nacional, que por ende afecta derechos como la prevalencia de la vida y la salud de los individuos, surge la necesidad de diseñar estrategias que ahonden esfuerzos para salvaguardar la vida de los actores viales.
            br
            br
            |Así, la movilidad podrá llevarse a cabo de manera segura y generar espacios y dinámicas comunes que velen por la seguridad de las personas. La intención principal es que sectores públicos, privados y la comunidad en general trabajen de manera integrada por este fin.
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema10/1.jpg', alt='')
    .tarjeta.p-4(style="background-color:#FAE5B4").mb-5(data-aos="zoom-in")
        .row.justify-content-center.align-items-center
          .col-1.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema9/atencion.svg', alt='')
          .col-lg-10
            p.mb-0 Importa, entonces, enfocarse en la gestión de factores de riesgo, para crear acciones que trabajen en la prevención y disminución de las situaciones de riesgo y causas que están provocando la alta siniestralidad vial en el país. Fue así como se aprobó el Plan Nacional de Seguridad Vial (PNSV 2022-2031), mediante el Decreto 1430-JULIO-29-2022.
    p.fw-bold(data-aos="fade-right").mb-4 Entre los objetivos e intencionalidades del PNSV 2022-2031 están:
    .bg-tema10.px-5.mn.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-lg-0.mb-3.d-lg-block.d-none: img(src='@/assets/curso/temas/tema10/2.png', alt='')
          .col-lg-8
            LineaTiempoD.color-acento-botones
              p.text-small(numero="1" titulo="Proteger")  Juntos la vida e integridad de los actores viales ante los riesgos derivados de la siniestralidad vial
              p.text-small(numero="2" titulo="Fortalecer") La política mundial en materia de seguridad vial donde la meta es reducir la siniestralidad vial al 50% para el año 2030.
              p.text-small(numero="3" titulo="Promover") La participación, apoyo, coordinación, control y seguimiento de resultados, disponibilidad de la información de todas las entidades que estén involucradas con la seguridad vial.
              p.text-small(numero="4" titulo="Establecer")  Estrategias para cumplir con las metas propuestas, tanto en el orden nacional como en el orden territorial.
    p.mb-5(data-aos='fade-right').fw-bold En Colombia, la estrategia territorial del Plan Nacional de Seguridad Vial, impacta ocho regiones del país, así:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema10/c1.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .tarjeta.p-5(style="background-color: #f1ebdd ")
          h5(data-aos="fade-right") Subdivisión de regiones
          p.mb-0(data-aos='fade-right') El objetivo de establecer estas regiones es identificar de manera más puntual la problemática que aqueja cada región y así atender de manera más eficaz y oportuna los problemas de cada una de ellas.
    
    p.mb-5(data-aos='fade-right') En función de los objetivos del plan y para garantizar más y mejores alcances, la estrategia de orden nacional trabajará sobre ocho áreas de acción como lo detalla el siguiente esquema:
    .d-flex.justify-content-center(data-aos="zoom-in")
      .tarjeta.d-inline-block.color-acento-contenido.p-2.rounded-1
        h4.text-white.mb-0.mx-4 Áreas de acción de la estrategia nacional del PNSV 2022-2031
    LineaTiempoE.color-primario.imagenes-responsive(data-aos="zoom-in")
      .row(titulo="1" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/4.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Velocidades seguras
          p Debido a que el excPeso de velocidad es un problema predominante en las vías, ya que al aumentar la velocidad el conductor puede perder fácilmente el control del vehículo. Además, disminuye el tiempo de reacción tanto del conductor como de los otros usuarios de la vía, que no podrán ponerse a salvo con rapidez, por lo cual esta área está enfocada a establecer parámetros para la definición de velocidades adecuadas, la divulgación de la información y el cumplimento de las mismas.
      .row(titulo="2" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/5.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Vehículos seguros
          p Por el incremento en parque automotor, especialmente motocicletas, se establecen unos objetivos para implementar el desempeño para vehículos nuevos en lo que tiene que ver con requisitos técnicos de funcionamiento seguro, protección de los ocupantes frente a choques y colisiones, reducción de puntos ciegos de los vehículos, así como los concernientes a elementos de protección para motociclistas y ciclistas, que se ajusten a las especificaciones técnicas. Tanto vehículos viejos como nuevos deben contar con toda la documentación en regla, el adecuado y óptimo mantenimiento preventivo, suministro y uso de repuestos que cumplan con estándares internacionales en materia de seguridad, tener al día la revisión técnico-mecánica, entre otros.
      .row(titulo="3" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/6.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Infraestructura vial segura
          p El enfoque que se quiere manejar es el diseño y construcción de vías “seguras” y así mismo los elementos que hacen parte de ella. Ante la ejecución de proyectos en materia de infraestructura vial donde se ve un aumento del número de kilómetros de red vial, se pretende definir lineamientos técnicos de diseño, para la construcción de nuevas vías, de puentes, túneles, entre otros.
      .row(titulo="4" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/7.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Cumplimiento de normas
          p En esta área se quiere fomentar la vigilancia y control del cumplimento de la normatividad en materia de tránsito y transporte ya que es una problemática que se genera dado el desconocimiento de las normas por parte de algunos usuarios viales y por el no catamiento de ellas. En Colombia se tiene la cultura que solo es deber de algunos actores viales cumplir las normas, pero no es así y cada individuo juega un papel importante como usuario de la vía, otro aspecto importante es el control sobre los diferentes organismos de tránsito en el cumplimento de lineamientos dados por el Ministerio de Transporte y el apoyo a los mismos.
      .row(titulo="5" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/8.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Comportamiento seguro
          p Esto tiene que ver con el factor humano, el conocimiento y respeto por las normas, el autocuidado y, en general, el comportamiento del rol que desempeña como actor vial.
      .row(titulo="6" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/9.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Atención integral a víctimas
          p Es de vital importancia la atención oportuna e inmediata a las víctimas de un incidente en la vía; la demora en los servicios de emergencia y la falta de conocimientos en materia de primeros auxilios por parte de la comunidad hacen que la consecuencia de un evento pueda ser más grave. La idea es integrar los sistemas de emergencia para brindar la atención integral a las víctimas, fortaleciendo los protocolos y tiempos de respuesta, mejorar la seguridad en el traslado de las víctimas y la atención oportuna y adecuada en la red hospitalaria.
      .row(titulo="7" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/10.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Gobernanza
          p Tiene que ver con integrar adecuadamente, y en orden de jerarquía, todas las instituciones que están involucradas con gestión de la seguridad vial, brindando asesoría a todas las entidades territoriales en cuanto a las políticas en materia de seguridad vial y el cumplimento de las mismas.
      .row(titulo="8" subtitulo="")
        .col-2
          figure
            img(src='@/assets/curso/temas/tema10/11.svg', alt='Texto que describa la imagen')
        .col-lg-10.mb-4.mb-lg-0
          h4 Gestión del conocimiento
          p Tiene que ver con integrar adecuadamente, y en orden de jerarquía, todas las instituciones que están involucradas con gestión de la seguridad vial, brindando asesoría a todas las entidades territoriales en cuanto a las políticas en materia de seguridad vial y el cumplimento de las mismas.
</template>

<script>
export default {
  name: 'Tema10',
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
.bg-tema10
  background-image: url(../assets/curso/temas/tema10/bg-card.svg)
  background-position: center
  background-size: cover
  background-repeat: no-repeat
</style>
