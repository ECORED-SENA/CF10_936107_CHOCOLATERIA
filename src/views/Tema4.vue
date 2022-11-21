<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Tipos de pruebas y normas correspondientes
    .bg2      
      .row.justify-content-center.align-items-center.pt-5.mb-4          
        .col-lg-7.my-3
          p(data-aos="fade-down") Existen varios tipos de prueba y su aplicación depende de cuál sea el objetivo de la prueba en sí, y a qué tipo de alimento se le va a aplicar, todas estas decisiones están a cargo del líder del panel sensorial.

          p(data-aos="fade-down").mb-0 Dentro de las pruebas sensoriales básicas se encuentran:      
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.png', alt='')  

    .row.justify-content-center.mb-4         
      .col-lg-4.my-3(data-aos="fade-left")
        .bg3.p-4.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/77.svg', alt='')
          h5.bwn.mb-4.text-center Prueba de pares o pareada.
          p Se presentan las muestras por pares y su objetivo es comparar e identificar características particulares mediante preguntas concretas. Por ejemplo: ¿Cuál es el más amargo? ¿Cuál es el más salado? ¿Cuál es el más dulce?.

          h5 Normas: NTC2680 de 2013, ISO 6658:2005 y GTC 165 de 2014.  


      .col-lg-4.my-3(data-aos="fade-right")
        .bg3.p-4.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/78.svg', alt='')
          h5.bwn.mb-4.text-center Prueba dúo-trío.
          p Su objetivo es discriminar las diferencias sutiles o tenues. En esta prueba se analizan tres muestras: A, B y R, pero R es igual, a una de las otras muestras, es decir, es exactamente el mismo alimento que cualquiera de las muestras rotuladas inicialmente (A o B) y se le pide al experto o juez que identifique cuál es la muestra diferente a R.  

          h5 Norma: NTC 3883 2006.


      .col-lg-4.my-3(data-aos="fade-left")
        .bg3.p-4.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/79.svg', alt='')
          h5.bwn.mb-4.text-center Prueba triangular.
          p Se presentan al juez tres muestras rotuladas (A, B y C) de las cuales dos son iguales y una distinta.  La diferencia con la prueba anterior es que, en esta, no se establece una muestra base o referencia. El juez debe identificar cuáles son los dos iguales y cuál es la diferente. 

          h5 Norma: NTC2681.
    .bg21
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-7 
          .row.justify-content-center.align-items-center          
            .col-lg-12.bg15.brad.p-5.imgs-flotantes2.my-3(data-aos="fade-left") 
              img.img-flotante2(data-aos="zoom-in")(src='@/assets/curso/temas/62.svg', alt='Imagen decorativa')
              p(data-aos="fade-down").mb-0 Cada una de estas pruebas tiene unos formatos establecidos y un tipo de pregunta según el objetivo de la prueba. Las respuestas deben ser cerradas, para facilitar la tabulación y análisis estadístico.        
          p(data-aos="fade-down").mb-4 Si bien las pruebas anteriores determinan qué tipo de respuesta dar, está también la importancia de identificar los sabores, para ella se puede realizar de dos formas: en consenso o independientes. Estas son pruebas grupales de todo el panel incluyendo al líder; en la primera, hacen la prueba en conjunto y discuten los resultados abiertamente; en la otra como su nombre lo indica, realizan la prueba por separado, pero, previamente, han discutido en grupo sus apreciaciones sobre el producto a analizar, registran los datos en el formato estipulado de forma independiente y luego hacen una consolidación grupal.
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/80.png', alt='') 
    .bg16_1
      p(data-aos="fade-down").mb-5 El líder debe recoger la información arrojada y realizar los análisis estadísticos y sacar las conclusiones correspondientes. Los atributos y escalas a medir son las siguientes: 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/81.png', alt='')                  
        .col-lg-7 
          p(data-aos="fade-down") #[b.bgprose La intensidad de los sabores] debe ser valorada bajo una escala estándar, en este caso se mide del 0 al 5, donde 0 es no perceptible, 5 muy fuerte y 3 moderado. Estas escalas están estandarizadas en la NTC 3929 (2029).

          p(data-aos="fade-down") #[b.bgprose La impresión total:] en este caso se habla de impresión como la percepción de sí, los atributos en general son armoniosos o adecuados entre sí, se mide en una escala de 1 a 3; donde 1 es bajo, 2 es medio y 3 es alto. 
    .pt-5
    .bg22
      .row.justify-content-center.align-items-center.py-5          
        .col-lg-5
          h5(data-aos="fade-down").text-white.mb-5 Para realizar un proceso de análisis sensorial o cata se deben tener las siguientes consideraciones:    
        .col-lg-6(data-aos="fade-left")     
          SlyderF.mb-5(columnas="col-lg-12 col-md-4")
            .tarjeta.color-secundario.p-4.h-100
              .row.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/82.svg' alt='AvatarTop')
                .col.pflex 
                  p.mb-0 Tener un grupo de jueces entre 6 a 8 personas mínimo.     
                  
            .tarjeta.color-secundario.p-4.h-100
              .row.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/83.svg' alt='AvatarTop')
                .col.pflex 
                  p.mb-0 Los jueces o catadores no deben consumir ningún alimento o bebida mínimo 30 minutos antes de realizar el análisis. 

            .tarjeta.color-secundario.p-4.h-100
              .row.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/84.svg' alt='AvatarTop')
                .col.pflex 
                  p.mb-0 Se deben presentar las mismas muestras, en la misma cantidad y en la misma presentación
                  
            .tarjeta.color-secundario.p-4.h-100
              .row.justify-content-center
                .col-auto
                  img(src='@/assets/curso/temas/85.svg' alt='AvatarTop')
                .col.pflex 
                  p.mb-0 Se debe establecer un tiempo de descanso entre prueba y prueba.
</template>

<script>
export default {
  name: 'Tema4',
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
