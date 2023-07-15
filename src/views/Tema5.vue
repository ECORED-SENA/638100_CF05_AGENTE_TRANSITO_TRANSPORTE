<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Modelos pedagógicos y enfoques didácticos
    .bg-tema5.mn.p-5.pt-0
      .row.justify-content-center.mb-5.g-0
        .col-lg-8
          .p-5(style="background-color: #31313C").h-100.d-flex.align-items-center
            p.mb-0.text-white La vida de los seres humanos en sociedad requiere que todos y cada uno de los integrantes de una comunidad tengan una serie de habilidades cognitivas emocionales y comunicativas para vivir en armonía con los demás, a lo que se le denomina competencias ciudadanas; al aterrizar este concepto al ámbito que se está abordando sobre tránsito y seguridad vial se debe hacer referencia al conocimiento y las habilidades que tiene cada uno de los actores viales, llámese “conductor, pasajero o peatón”, al utilizar la vía para desplazarse de un sitio a otro de la forma más segura y responsable, a lo que se le llama norma de comportamiento, generando un ambiente armónico en la movilidad.
        .col-lg-4.col-6: img(src='@/assets/curso/temas/tema5/1.jpg', alt='')
      p Estas normas de comportamiento vial se encuentran establecidas en el Código Nacional de Tránsito, el cual en su Título III establece las reglas de comportamiento vial para los conductores, los peatones y los pasajeros, describiendo los comportamientos que deben tener cada uno de estos actores viales al movilizarse por la vía y aclarando las limitaciones y prohibiciones específicas, que al no ser acatadas en esta misma norma establece algunos de los comportamientos como infracciones de tránsito; vea esto con mayor profundidad: 
      .titulo-icono.mb-5
        h4.mb-0 Comportamiento vial
      .tarjeta.card-slyde.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0
              h4 Peatones
              p La norma de comportamiento vial establece que deben transitar por la acera o anden y si requieren cruzar la vía lo harán por las bocacalles, sitios en los cuales tendrán prelación o haciendo el correcto uso de puentes o pasos peatonales; en perímetros rurales los peatones transitarán por la berma y como recomendación de seguridad vial en sentido contrario al paso peatonal.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema5/2.png', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0
              h4 Pasajeros
              p  Se pueden definir como las personas distintas al conductor de un vehículo, que pagaron su pasaje para transportarse en un vehículo de servicio público, tienen unas normas de comportamiento en los automotores como son: no llevar objetos, animales o equipajes que puedan incomodar a los demás, ni utilizar expresiones injuriosas, groseras, promover riñas, tomar bebidas embriagantes o fumar en el vehículo de servicio público, estas son las principales normas de comportamiento de este actor vial.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema5/3.png', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0
              h4 Conductores de vehículos automotores y no automotores
              p La norma de comportamiento vial les exige competencias específicas para la conducción de dichos vehículos, siempre respetando las normas de tránsito y de comportamiento ciudadano, la señalización horizontal y vertical para cada una de las vías, dando prelación a los actores viales más vulnerables.
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema5/4.png', alt='')

</template>

<script>
export default {
  name: 'Tema5',
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
