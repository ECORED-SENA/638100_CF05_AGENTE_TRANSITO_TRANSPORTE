<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Educación vial y factor humano
    .tarjeta.mb-5(style="background-color: #31313D ")(data-aos="zoom-in")
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-7.mb-lg-0.mb-3
          .p-5
            p.text-white Hacen referencia a la Declaración Universal de Derechos Humanos en una carta de normativa internacional expedida por las Naciones Unidas en 1945 y 1948, la cual establece como obligación de todos los gobiernos garantizarlos y promoverlos, siendo los más importantes el derecho a la vida y a la libertad; a no estar sometido ni a la esclavitud, ni a las torturas, sumados a la libertad de opinión y de expresión; a la educación y al trabajo, entre muchos otros.
              br
              br
              |Uno de los derechos fundamentales establecidos por la constitución colombiana es el derecho a la libre locomoción, el cual está descrito en el Artículo 24 de la Constitución Política de Colombia, encontrando que este derecho está regulado por la Ley 769 de 2002 que ya se ha mencionado en el desarrollo de este componente, donde se establecen las normas de comportamiento vial para moverse en el territorio nacional. 
        .col-lg-5.col-7: img(src='@/assets/curso/temas/tema8/1.svg', alt='')
    p.mb-5(data-aos='fade-right') Cada una de las personas que se involucran en la movilidad vial deben tomar conciencia de los valores a fortalecer para que las condiciones que obedece el tráfico no conlleven a la manifestación de antivalores que culminan en accidentes de tránsito o en riñas callejeras. 
    .cajon-b.color-acento-contenido.p-3.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-3.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema8/2.svg', alt='')
        .col-lg-10
          p Se puede decir, entonces, que el comportamiento humano juega el papel principal en la movilidad vial segura y que su estudio debe partir de la comprensión y relación que tiene la conducción y cómo asociarla a cada conductor, por ejemplo, realizar un esquema con un grupo de conductores, donde se enmarquen las siguientes clasificaciones de acuerdo con su estilo de conducción: 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema8/3.svg', alt='')
          .tarjeta.p-3(x="2.8%" y="9.5%" numero="+" style="background-color: #F1EBDD")
            p Adaptación al medio y de recolección de información ante el nuevo conocimiento.
          .tarjeta.p-3(x="27.8%" y="73.7%" numero="+" style="background-color: #F1EBDD")
            p Se adquieren habilidades que hacen de la conducción un evento habitual y el conductor se siente más seguro de sí para responder a las eventualidades.
          .tarjeta.p-3(x="56.3%" y="9.5%" numero="+" style="background-color: #F1EBDD")
            p Las personas experimentadas adquieren hábitos de autocuidado, mantienen la calma y respetan las normas de tránsito, normalmente su conducción es segura pero se ven afectados por los afanes del día a día, llegando a realizar una conducción agresiva.
          .tarjeta.p-3(x="78.7%" y="73.7%" numero="+" style="background-color: #F1EBDD")
            p Las personas con gran pericia entran en una zona de confort y alienan su actividad de conducir con hábitos excesivos de confianza, a tal punto que elevan la velocidad de desplazamiento y se convierten en personas riesgosas para los demás usuarios. 
    .mn.p-5.mb-5(style="background-color: #484850 ")(data-aos="zoom-in")
      .tarjeta.card--2.pb-0
        .row.justify-content-center.mb-5.align-items-end
          .col-lg-8
            .p-5
              p La mejor manera de mantener la movilidad en un contexto de orden y de respeto por los demás es hacer que las personas afiancen los valores de la convivencia social, incrementando los niveles de tolerancia, aceptación, empatía, autocuidado y paciencia, pero este objetivo se logra tras procesos formativos donde la educación vial juega un papel fundamental; quienes hacen parte del tránsito deben recibir una formación tanto en materia normativa, como de saberes específicos de la conducción, pero a esto se debe sumar un componente axiológico que genere conciencia ciudadana aplicada a la movilidad, de otra parte la formación ética de la persona logrará concretar una sociedad con mayores niveles culturales y definir una comunidad civilizada que actúa de manera independiente, donde no es ajena la movilidad y por ende, se lograría la construcción de relaciones prudentes y respetuosas, facilitando así el tráfico y evitando la accidentalidad vial.
                br
                br
                | El buen comportamiento ajustado a la norma es la finalidad precisa que busca la educación vial, además de esculpir en las personas los valores más coherentes para el bienestar común en las relaciones interpersonales a las que se enfrentan en la vía, es justamente por esto que se tiene la convicción que la mejor manera de encontrar el equilibrio y la armonía social en las vías es la educación, ya que ciudadanos formados son más importantes que normas para quienes no se educan. 
          .col-lg-4.col-6: img(src='@/assets/curso/temas/tema8/4.png', alt='')
    p.mb-5(data-aos='fade-right').fw-bold En conclusión, la educación vial debe hacer referencia a:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3
        .tarjeta.h-100.p-5(style="background-color: #f1ebdd")
          h5.text-center Aprendizaje de normas
          .row.justify-content-center.mb-3
            .col-lg-8
              img(src='@/assets/curso/temas/tema8/c1.png', alt='').m-auto
          p Las normas que tienen que ver con el buen comportamiento de los individuos al transitar por vías públicas, enfocado a la seguridad vial y la prevención de accidentes.
      .col-lg-6.mb-3
        .tarjeta.h-100.p-5(style="background-color: #f1ebdd")
          h5.text-center Fortalecimiento ciudadano
          .row.justify-content-center.mb-3
            .col-lg-8
              img(src='@/assets/curso/temas/tema8/c2.png', alt='').m-auto
          p La educación vial no es solo para conductores; no son solo ellos quienes deben respetar las normas de tránsito, medidas y recomendaciones, sino toda la ciudadanía en general que.
      .col-lg-6.mb-3
        .tarjeta.h-100.p-5(style="background-color: #f1ebdd")
          h5.text-center Cultura de armonía entre parte
          .row.justify-content-center.mb-3
            .col-lg-8
              img(src='@/assets/curso/temas/tema8/c3.png', alt='').m-auto
          p Toda persona, en algún momento, llega a ser usuaria de la vía en el rol que desempeñe: peatón, pasajero y/o conductor, por eso es importante fomentar y generar espacios de formación ciudadana.
      .col-lg-6.mb-3
        .tarjeta.h-100.p-5(style="background-color: #f1ebdd")
          h5.text-center Conocimiento de la infraestructura vial
          .row.justify-content-center.mb-3
            .col-lg-8
              img(src='@/assets/curso/temas/tema8/c4.png', alt='').m-auto
          p Todas las personas que configuran la comunidad de la movilidad, deberán conocer normas y señales de tránsito, afianzando comportamientos y hábitos que propendan en el respeto por la vida propia y la de los demás, la sana convivencia y la movilidad segura.

</template>

<script>
export default {
  name: 'Tema8',
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
