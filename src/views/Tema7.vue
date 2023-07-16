<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Fundamentos en evaluación del aprendizaje
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de enseñanza y de aprendizaje puede enmarcarse en una relación directa entre dicentes y docentes en un entorno rodeado de saberes que comparten de manera bidireccional entre estos dos actores del conocimiento y que se construye a partir de la crítica y la reflexión. La trasmisión del conocimiento es planificada a partir de métodos escogidos para llevar información a través de los medios idóneos y correctos para los estudiantes, estos conocimientos se basan en las necesidades que se conocen a través de procesos de evaluación y se concreta mediante la retroalimentación continua del proceso que revierte en más información, convirtiéndose en un proceso cíclico.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p Ahora bien, para la educación vial el proceso es igual; sin embargo, el conocimiento es dinámico y cambiante por la misma interacción social, la evolución de las tecnologías, la actualización de la normatividad y el crecimiento poblacional, por ende requiere una metodología diferente, una evaluación constante del conocimiento en general y de las formas pedagógicas, didácticas y el trabajo social.
          br
          br
          |Por lo anterior, se debe estar en constante creación de estrategias útiles para el mejoramiento continuo como las que se pueden observar a continuación: 
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema7/2.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #F1EBDD")
          img(src='@/assets/curso/temas/tema7/3.svg', alt='' style="width: 190px").m-auto.mb-3
          h4.text-center Compara
          p Lo deseado con lo realizado.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #F1EBDD")
          img(src='@/assets/curso/temas/tema7/4.svg', alt='' style="width: 190px").m-auto.mb-3
          h4.text-center Da valor
          p Estima cuantitativa y cualitativamente el valor, la importancia o la incidencia de determinados objetos, personas o hechos.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #F1EBDD")
          img(src='@/assets/curso/temas/tema7/5.svg', alt='' style="width: 190px").m-auto.mb-3
          h4.text-center Describe
          p Con mayor precisión los aspectos cuantitativos y cualitativos de la estructura, el proceso y el producto de la educación.
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta.p-4.h-100(style="background-color: #F1EBDD")
          img(src='@/assets/curso/temas/tema7/6.svg', alt='' style="width: 190px").m-auto.mb-3
          h4.text-center Comprueba
          p En qué medida se han logrado los resultados previstos en los objetivos fijados con antelación.
    p.mb-5(data-aos='fade-right') De este modo, la educación se revierte en un ciclo de mejoramiento constante que emplea herramientas evaluativas para su evolución sistemática y cognitiva, basta con develar el conocimiento actual, ponerlo en práctica, ver su evolución en el tiempo, actualizar los conceptos y repotenciar el saber o la ideología para nuevamente iniciar el ciclo; no obstante, este conocimiento no se desecha, simplemente se actualiza para responder a las necesidades de la actualidad en cada tiempo observable como, por ejemplo, la actualización jurídica que sufrió el Artículo 95 del Código de Tránsito, que posterior a la evaluación jurídica se decidió actualizarlo de la siguiente manera: 
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #2B2B2D").h-100
          img(src='@/assets/curso/temas/tema7/7.svg', alt='' style="width: 67px ; margin-top:-3rem").mb-4
          .tarjeta.rounded-pill.p-2.d-inline-block.mb-4(style="background-color: #FDD615")
            h4.mb-0.me-3 Artículo 95 Ley 769 de 2002
          .tarjeta(style="background-color: #FFFFFF ").p-4
            p.mb-0 Los conductores de este tipo de vehículo deberán transitar por la derecha a un metro de la acera, berma u orilla.
      .col-lg-2.mb-lg-0.mb-3
        .d-flex.align-items-center.h-100.justify-content-center
          .contenido
            h5.text-center Proceso de evaluación y como resultado la nueva norma es:
            img.d-lg-block.d-none(src='@/assets/curso/temas/tema7/f1.svg', alt='' style="width: 98px").m-auto
            img.d-lg-none.d-block(src='@/assets/curso/temas/tema7/f2.svg', alt='' style="width: 49px").m-auto
      .col-lg-5.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #2B2B2D").h-100
          img(src='@/assets/curso/temas/tema7/7.svg', alt='' style="width: 67px ; margin-top:-3rem").mb-4
          .tarjeta.p-2.d-inline-block.mb-4(style="background-color: #FDD615")
            p.mb-0.me-3 Artículo 95 Ley 769 de 2002  actualizado por la Ley 1811 de 2016, posterior a la evaluación de la movilidad.
          .tarjeta(style="background-color: #FFFFFF ").p-4
            p.mb-0 Los conductores que transiten en grupo deberán ocupar un carril y nunca podrán utilizar las vías exclusivas para el servicio público colectivo.
    .fondo-gradiente.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema7/8.svg', alt='')
        .col-lg-8
          p.mb-0 Como la norma es cambiante, la manera de evaluar este proceso educativo es a través de la retroalimentación, buscando los objetivos claros del aprendizaje al tratarse de capacidades propias para un conocimiento específico, son completamente evaluables, mientras que los discernimientos que entablan la vinculación del aprendizaje que se pretende que los alumnos alcancen con respecto a sus competencias se convierten en un referente focalizado. Los criterios de evaluación obedecen a las necesidades básicas de cada una de las áreas que en cada ciclo tienen un nivel de relevancia para su desarrollo. 
            br
            br
            |De otra parte, el docente en temas de seguridad vial debe conocer los tipos de evaluación educativa para aplicar cuando lo considere necesario en sus clases, donde hay diversidad de propuestas de clasificación de la evaluación en el desarrollo del proceso de enseñanza y aprendizaje. Existen tres clases de evaluación educativa denominadas: #[b evaluación diagnóstica, evaluación formativa y evaluación sumativa], explicadas a continuación:
    img.mb-5(src='@/assets/curso/temas/tema7/9.svg', alt='Mapa conceptual que expone las particularidades de los tipos de evaluación educativa en temas de seguridad vial, así:<br><br><br>1 Evaluación diagnóstica, que se aplica antes del proceso educativo<br>2 Evaluación formativa, que se aplica durante el proceso de enseñanza<br>3 Evaluación sumativa, llamada también evaluación final y que se aplica al término del proceso.')
    //todo! AÑADIR EL ANEXO 
    .row.justify-content-center.mb-5
      .col-lg-12
        .d-flex.justify-content-center
          .content
            a.anexo.mb-4.d-inline-block.m-auto(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
              .row.justify-content-around.align-items-center
                .anexo__icono(style="width: 60px")
                  img(src="@/assets/template/icono-pdf.svg" )
                .anexo__texto
                  p #[b Anexo.] Tipos de evaluación
    p.mb-5(data-aos='fade-right') Por todo lo expuesto anteriormente, es el docente quien decide el momento de la clase de seguridad vial para aplicar cualquier tipo de evaluación según el caso y el tema, recomendándole terminar la asignatura con la evaluación sumativa en busca de dar soluciones a los problemas que surgen en materia de seguridad vial, ya que en los dicentes pueden encontrarse ideas realmente innovadoras a la problemática diaria.








</template>

<script>
export default {
  name: 'Tema7',
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
