<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Panel de evaluación sensorial
    .bg2 
      p(data-aos="fade-down").mb-5.pt-5 Lo relevante en un laboratorio de análisis sensorial son los expertos, también llamados jueces o panelistas que se han entrenado con el objetivo de distinguir:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/69.png', alt='')                  
        .col-lg-7.my-3
          p(data-aos="fade-down") Generalmente un juez se especializa en un determinado grupo de alimentos y entrena su paladar en torno a este, por ejemplo, el chocolate, los vinos, los quesos etc. A este tipo de jueces se les denomina Jueces Experimentados o jueces expertos. Contrario a cuando se solicitan consumidores normales para establecer preferencias entre alimentos, a las personas no entrenadas que participan en estas pruebas se les denomina jueces inexpertos o subjetivos. 
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-10.my-3.bg18.p-4
              p(data-aos="fade-down").mb-0 Estos jueces expertos están organizados bajo el líder del panel, quien es el encargado de establecer: los protocolos, técnica sensorial que se implementará, alimentos a analizar, fechas, formatos, muestras, etc. Igualmente, debe dirigir a los auxiliares del laboratorio, quienes son los que realizan las labores operativas de alistamiento y preparación de muestras; alistamiento de cabinas con todo lo necesario para el proceso de juzgamiento o cata entre otros. 
            .col-lg-2.p-0.my-3.d-none.d-lg-block
              img.img-l.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/70.svg', alt='')                  

          p(data-aos="fade-down") Por ejemplo, una cabina para análisis sensorial, que es alistada por un auxiliar debe tener lo siguiente: 

    .bg14
      ImagenInfografica.color-acento-botones.mb-5.py-5(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img.img-a.img-t(src='@/assets/curso/temas/71.png', alt='')

        .tarjeta.color-acento-contenido.p-3(x="83%" y="45%" numero="1")
          h5.mb-2 1. Muestras:
          p.mb-0 Muestras marcadas o rotuladas claramente y que correspondan a la información de los formatos.          
        .tarjeta.color-acento-contenido.p-3(x="62%" y="20%" numero="2")
          h5.mb-2 2. Cubiertos: 
          p.mb-0 Para que el juez pueda manipular la muestra.   
        .tarjeta.color-acento-contenido.p-3(x="60%" y="65%" numero="3")
          h5.mb-2 3. Formato registro:
          p.mb-0 Formato de registro de la evaluación y esfero o lápiz.   
        .tarjeta.color-acento-contenido.p-3(x="78%" y="25%" numero="4")
          h5.mb-2 4. Vaso con agua: 
          p.mb-0 Un vaso con agua para enjuagar la boca de muestra a muestra.  

    p(data-aos="fade-down").mb-5 De igual manera, se debe detallar el panel sensorial y cómo interviene cada uno de los actores que hacen parte de este proceso, para ello se invita a observar el siguiente organigrama:
    .bg20
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12.bg19.d-none.d-lg-block
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/73.svg', alt='')
        .col-lg-12.bg19.d-block.d-lg-none
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/74.svg', alt='') 
    .bg13.p-4
      .row.justify-content-center.align-items-center
        .col-lg-7
          .row.justify-content-center.align-items-center  
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')
            .col  
              p(data-aos="fade-down").mb-4 Cada empresa tiene sus protocolos a la hora de seleccionar al equipo o panel sensorial. Algunas consideraciones especiales para evitar en un posible juez, son personas: 
            .col-9
              .list(data-aos="fade-down").mb-4
                .list__item
                  .list__item__icon
                    img(src='@/assets/curso/temas/v1.svg', alt='')
                .list__txt
                  p.mb-0 Que consuman en exceso café, alcohol y cigarrillo. 
              .list(data-aos="fade-down").mb-4
                .list__item
                  .list__item__icon
                    img(src='@/assets/curso/temas/v2.svg', alt='')
                .list__txt
                  p.mb-0 Con alergias a cualquier alimento. 
              .list(data-aos="fade-down").mb-4
                .list__item
                  .list__item__icon
                    img(src='@/assets/curso/temas/v3.svg', alt='')
                .list__txt
                  p.mb-0 Con afecciones de salud en las vías respiratorias.  
              .list(data-aos="fade-down")
                .list__item
                  .list__item__icon
                    img(src='@/assets/curso/temas/v4.svg', alt='')
                .list__txt
                  p.mb-0 En edad avanzada, entre otras.                                                  
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.svg', alt='')

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='') 
      .col-lg-7
        p(data-aos="fade-down") La razón de estos requerimientos no es discriminatoria, sino que alteran las facultades y respuesta de los órganos sensoriales, los cuales son el bien más preciado para un analista sensorial. La edad avanzada, lejos de descartar la experiencia se refiere más a ir perdiendo con el tiempo por procesos naturales de envejecimiento las capacidades, lo cual está demostrado científicamente. Dichos jueces o expertos son capacitados dentro del panel por la empresa y deben ser acreditados bajo un ente de calidad competente. 
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
