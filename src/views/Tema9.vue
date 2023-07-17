<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Aspectos generales sobre infraestructura vial
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F1EBDD")
          p.mb-0 La infraestructura vial es el conjunto de elementos que generan la conexión terrestre de un lugar a otro, para permitir el desplazamiento y circulación de individuos, bienes y servicios dentro de condiciones tanto de comodidad como de seguridad, cumpliendo con parámetros técnicos de diseño y construcción.
            br
            br
            |La importancia de la infraestructura vial radica en que aparte de permitir el traslado de personas, cargas, maquinarias, mercancías, etc., permite la realización de actividades productivas generando desarrollo económico del país.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/tema9/1.png', alt='')
    h5(data-aos="fade-right") En virtud de lo anterior, la infraestructura vial es importante y se deberá propender por su:
    .row.justify-content-center.mb-4
      .col-lg-8
        ul.lista-ul--color
          li.d-flex
            i.fas.fa-check(style="color: #F88F05")
            p.mb-0 Mantenimiento y conservación
          li.d-flex
            i.fas.fa-check(style="color: #F88F05")
            p.mb-0 Rehabilitación y construcción de vías
          li.d-flex
            i.fas.fa-check(style="color: #F88F05")
            p.mb-0 Acceso y conectividad de poblaciones alejadas de centros urbanos
          li.d-flex
            i.fas.fa-check(style="color: #F88F05")
            p.mb-0 Integración de diferentes sectores de la economía y el bienestar social de la población
          li.d-flex
            i.fas.fa-check(style="color: #F88F05")
            p.mb-0 Fortalecimiento y aplicación de parámetros de sostenibilidad (minimización del impacto ambiental, económico y social).
        h5 Importante
        .tarjeta.p-4(style="background-color:#FAE5B4").mb-4
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema9/atencion.svg', alt='')
            .col-lg-10
              p.mb-0 De acuerdo al plan Nacional de Seguridad Vial, el enfoque que deben tener los lineamientos técnicos de diseño geométrico para la infraestructura de transporte (vías urbanas, vías rurales, ciclo rutas, zonas peatonales, entre otros) es establecer como prioridad la seguridad vial.
        .tarjeta.p-4(style="background-color:#FAE5B4").mb-4
          .row.justify-content-center.align-items-center
            .col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema9/atencion.svg', alt='')
            .col-lg-10
              p.mb-0 Para establecer como prioridad la seguridad vial, se deben tener en cuenta los diferentes actores viales, en especial aquellos más vulnerables como lo son niños, niñas, adolescentes, personas en condición de discapacidad, peatones, ciclistas y motociclistas.
    p.mb-5(data-aos='fade-right') Es importante aclarar que, en Colombia ante la falta de recursos estatales y la necesidad de modernización de la infraestructura vial, el prestar un mejor servicio y conectividad a los usuarios y atraer proyectos de inversión, surge la vinculación de capital privado bajo el modelo de concesión vial como una estrategia para la óptima intervención en la red vial nacional.
      br
      br
      | #[b Así las cosas, las entidades a cargo son:]
    .d-flex.justify-content-center.mb-4
      .tarjeta.rounded-pill.p-3.color-acento-contenido
        h4.mx-3.mb-0(style="color: #F0B62A") Vinculación de capital privado y las concesiones viales
    .d-flex.justify-content-center.mb-4
      .tarjeta.rounded-pill.p-3.color-secundario
        h5.mx-3.mb-0 Entidades a cargo
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.d-flex.align-items-start.flex-column.h-100(style="background-color: #E8E8E8")
            h4.text-center Instituto nacional de vías
            p Encargada de ejecutar políticas, programas, proyectos, planes y estrategias a nivel de infraestructura referente al transporte férreo, marítimo, fluvial y terrestre que brinden solución aspectos relacionados con conectividad y movilidad
            img.mt-auto(src='@/assets/curso/temas/tema9/2.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4.h-100.d-flex.align-items-start.flex-column.h-100(style="background-color: #E8E8E8")
          h4.text-center Agencia nacional de Infraestructura  ANI
          p Le corresponde la planeación, coordinación, contratación, administración y evaluación de los proyectos  de infraestructura como carreteras, puertos, líneas férreas dándoles viabilidad y entregándose  por medio de concesiones o  en asociaciones público-privadas que incluyen su diseño, mantenimiento, administración y explotación,
          img.mt-auto(src='@/assets/curso/temas/tema9/3.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema9/4.png', alt='')
      .col-lg-4
        .tarjeta.p-4(style="background-color: #F1EBDD")
          p.text-center.mb-0 Estas dos entidades tienen como cabeza principal el Ministerio de Transporte.

</template>

<script>
export default {
  name: 'Tema9',
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
