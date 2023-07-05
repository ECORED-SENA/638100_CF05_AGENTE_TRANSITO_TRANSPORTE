<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad en tránsito y transporte.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema1/1.png', alt='')
      .col-lg-8
        p.mb-0 La normatividad de tránsito inicia a partir de la Constitución Política de Colombia que establece en el Estado Social de Derecho el respeto de la dignidad humana y la solidaridad son prioridad y prevalece el interés general sobre el particular y, los límites de sus derechos están donde comienzan los demás, por lo cual el ordenamiento jurídico debe ser respetado con ese fin. Por esto, la libre locomoción es un derecho fundamental regulado por la legislación, que para el caso serán todas las normas de tránsito y de transporte que establecen parámetros y normas de comportamiento para los actores viales, donde son fundamentales los niños, las niñas y los adolescentes teniendo prevalencia y por tanto, serán protegidos por todos.
          br
          br
          |De otra parte, la palabra #[b “tránsito”] puede definirse como la movilidad de todos y cada uno de los actores viales que recorren las vías en calidad de peatones, conductores o pasajeros, todos con obligaciones respecto a sus comportamientos, las cuales se encuentran establecidas a través del Código Nacional de Tránsito (Ley 769, 2002), que ha sido actualizado constantemente para ajustar temas concernientes a la movilidad; por esto se recomienda consultar la norma directamente desde la fuente oficial que es la Secretaría del Senado, la cual mantiene las actualizaciones vigentes que sufra la norma. 
    p.mb-5(data-aos='fade-right') Es así que para dar inicio a este tema tan importante sobre la normatividad en tránsito y transporte se recomienda observar el siguiente video, que puede ayudarle a entender con mayor facilidad. 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video .Leyenda del video
    .mn.p-5.mb-5(style="background-color: #484850 ")
      .tarjeta.cards.p-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            p De otra parte, el sector transporte se define como el traslado de personas, animales o cosas de un punto a otro a través de un medio físico, el cual se encuentra regulado en cabeza del Ministerio de Transporte como máxima autoridad en el tema y cuyo objetivo primordial es la formulación y adopción de las políticas, los planes, los programas, los proyectos y la regulación económica en esta materia, estableciendo los parámetros y la regulación técnica en los modos de transporte terrestre marítimo, fluvial, férreo y aéreo, expidiendo varias normas que regulan el sector transporte. 
          .col-lg-4.col-7: img(src='@/assets/curso/temas/tema1/2.svg', alt='')
    img(src='@/assets/curso/temas/tema1/3.svg', alt='Diagrama que expone las generalidades de las normas establecidas para regular tanto el tránsito como el transporte en Colombia. <br> 1 el Tránsito, regulado por la ley 769 de 2002 y la ley 1503 de 2011.<br> 2 el Transporte, reglamentado por el decreto 1078 de 2015 en donde se establece la tipificación del transporte y las características normadas de cada tipo de transporte.')

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.cards
  background-image: url('../assets/curso/temas/tema1/tarjeta.png')
  background-position: start
  background-size: cover
  background-repeat: no-repeat
</style>
