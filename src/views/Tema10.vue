<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Plan Nacional de Seguridad Vial 2022-2031
    .row.justify-content-center.g-0.mb-5
      .col-lg-8.mb-lg-0.mb-3
        div(style="background-color: #31313C").p-5.h-100
          p.text-white Dados los altos índices de accidentalidad y siniestralidad vial a lo largo del territorio nacional, que por ende afecta derechos como la prevalencia de la vida y la salud de los individuos, surge la necesidad de diseñar estrategias que ahonden esfuerzos para salvaguardar la vida de los actores viales.
            br
            br
            |Así, la movilidad podrá llevarse a cabo de manera segura y generar espacios y dinámicas comunes que velen por la seguridad de las personas. La intención principal es que sectores públicos, privados y la comunidad en general trabajen de manera integrada por este fin.
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema10/1.jpg', alt='')
    .tarjeta.p-4(style="background-color:#FAE5B4").mb-5
        .row.justify-content-center.align-items-center
          .col-1.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema9/atencion.svg', alt='')
          .col-lg-10
            p.mb-0 Importa, entonces, enfocarse en la gestión de factores de riesgo, para crear acciones que trabajen en la prevención y disminución de las situaciones de riesgo y causas que están provocando la alta siniestralidad vial en el país. Fue así como se aprobó el Plan Nacional de Seguridad Vial (PNSV 2022-2031), mediante el Decreto 1430-JULIO-29-2022.
    p.fw-bold(data-aos="fade-right").mb-4 Entre los objetivos e intencionalidades del PNSV 2022-2031 están:

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

<style lang="sass"></style>
