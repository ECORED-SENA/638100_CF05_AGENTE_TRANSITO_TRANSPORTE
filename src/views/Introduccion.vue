<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .fondo.mn.p-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/intro/1.svg', alt='')
        .col-lg-11
          p.mb-0 Aquí comienza el estudio del componente formativo #[b “Promoción de procesos formativos en seguridad vial”.] Un módulo de estudio pensado para usted. Comience su ruta por los contenidos, visualizando con atención el vídeo que se muestra enseguida. ¡Adelante!
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/kScNZuQZing" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Promoción de procesos formativos en seguridad vial
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.fondo
  background-image: url(../assets/curso/temas/intro/fondo.svg)
  background-repeat: no-repeat
  background-size: cover
  background-position: start
</style>
