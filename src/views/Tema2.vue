<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Laboratorio del análisis sensorial
    .bg12      
      .row.justify-content-center.align-items-center.pt-5.mb-4          
        .col-lg-8.my-3
          p(data-aos="fade-down") Es el espacio destinado a realizar las pruebas de análisis, en algunos casos también es llamado cocina experimental. En él se preparan las muestras a analizar sensorialmente y dependiendo del caso se le realizan mediciones y pruebas como las microbiológicas, de textura, de comportamiento de fluidos o estudios reológicos, entre otras. Generalmente están equipados con: 
          .bg13.p-4.mb-4
            ul.lista-ul--color.mb-0
              li 
                i.fas.fa-cookie
                p.mb-0 PH metro, para medir el PH de los alimentos. El cual está dado en una escala del 0 al 14 donde 7 es neutro, 0 ácido y 14 alcalino.

              li 
                i.fas.fa-cookie
                p.mb-0 Balanzas analíticas: para registrar peso ya sea en gramos, onzas o sus equivalentes mayores. 

              li 
                i.fas.fa-cookie
                p.mb-0 Material volumétrico y aforados en vidrio como: pipetas, buretas y matraz.
          p(data-aos="fade-down") En el caso del cacao y el chocolate son necesarios, básicamente, los siguientes implementos: 
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='') 

    .bg14
      ImagenInfografica.color-acento-botones.mb-5.py-5(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img.img-a.img-t(src='@/assets/curso/temas/61.png', alt='')

        .tarjeta.color-acento-contenido.p-3(x="72%" y="55%" numero="1")
          h5.mb-2 1. Utensilios de cocina. 
          p.mb-0 Recipientes de acero, ollas etc., en caso de ser necesario el baño maría.     
        .tarjeta.color-acento-contenido.p-3(x="23%" y="34%" numero="2")
          h5.mb-2 2. Hornos tostadores. 
          p.mb-0 Para el cacao sin procesar se requiere de hornos tostadores, descascarilladoras, estufas de laboratorio, molinos de refinamiento, micrómetro y reómetro, entre otros.  
        .tarjeta.color-acento-contenido.p-3(x="50%" y="14%" numero="3")
          h5.mb-2 3. Aire acondicionado. 
          p.mb-0 Para controlar las temperaturas en los procesos de atemperado.       
        .tarjeta.color-acento-contenido.p-3(x="53%" y="40%" numero="4")
          h5.mb-2 4. Mesones en mármol. 
          p.mb-0 Proceso de templado manual.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7 
        p(data-aos="fade-down").mb-4 En cuanto a normatividad de las instalaciones se requiere cumplir con las condiciones que han sido estandarizadas mediante la <b>norma ISO 8589:2007</b>. Las buenas prácticas de manufactura, <b>BPM</b>, el <b>Análisis de Peligros y de Puntos Críticos de Control - Appcc</b>, entre otras, en la cual se establece que las instalaciones deben estar diseñadas de tal forma que cumpla con la normatividad de higiene y manipulación de alimentos, que tenga superficies fáciles de limpiar y desinfectar mesones de mármol o acero inoxidable, que sea bien ventilada, con iluminación suficiente, y equipada con refrigeradores, equipos de cocción y los necesarios para la preparación de las muestras, igualmente todos los que requiera el alimento a catar o analizar. 

        .row.justify-content-center.align-items-center          
          .col-lg-12.bg15.brad.p-5.imgs-flotantes2.my-3(data-aos="fade-left") 
            img.img-flotante2(data-aos="zoom-in")(src='@/assets/curso/temas/62.svg', alt='Imagen decorativa')
            p(data-aos="fade-down").mb-0 Los espacios deben contar con un área específica para la preparación de las muestras, apartado y diferenciado de la zona de degustación, la cual consta de cabinas totalmente blancas, con divisiones que impidan la interacción entre los catadores, para que cada experto esté aislado de los otros y de cualquier estímulo externo ajeno al alimento a analizar.       
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/63.png', alt='')       

    .bg16
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-5
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/65.png', alt='') 
        .col-lg-7
          p(data-aos="fade-down") También debe contar con un área separada para que los jueces puedan discutir los resultados y un área tipo oficina donde se realice la planeación del trabajo y todo el procesamiento de datos de los análisis. Es importante considerar tener espacio de almacenamiento de muestras y contramuestras (muestras de respaldo) y almacenamiento de enseres de aseo separados para evitar contaminación por olores o sustancias con las muestras, entre otros. 

          p(data-aos="fade-down") Un ejemplo básico de los planos de un laboratorio sería el siguiente. 
                         
    .bg17
      h4.bwn.text-center.pt-5(data-aos="fade-down") Planos de un laboratorio 
      ImagenInfografica.color-acento-contenido.mb-5.py-5(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img.img-a.img-t(src='@/assets/curso/temas/66.svg', alt='')

        .tarjeta.color-primario.p-3(x="90%" y="17%" numero="E")
          p.mb-0 Entrada   
        .tarjeta.color-primario.p-3(x="6%" y="38%" numero="1")
          p.mb-0 Sala de reuniones   
        .tarjeta.color-primario.p-3(x="28%" y="44%" numero="2")
          p.mb-0 Oficina   
        .tarjeta.color-primario.p-3(x="52%" y="26%" numero="3")
          p.mb-0 Área de preparación muestras  
        .tarjeta.color-primario.p-3(x="57%" y="58%" numero="4")
          p.mb-0 Cabinas de evaluación  
        .tarjeta.color-primario.p-3(x="43%" y="83%" numero="3")
          p.mb-0 Área de preparación muestras      
        .tarjeta.color-primario.p-3(x="84%" y="53%" numero="5")
          p.mb-0 Laboratorio     
        .tarjeta.color-primario.p-3(x="78%" y="80%" numero="7")
          p.mb-0 Área de almacenamiento

    .bg16
      .row.justify-content-center.align-items-center.pt-5
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/68.png', alt='')                   
        .col-lg-8.my-3
          .bg13.p-4.mb-4
            p(data-aos="fade-down").mb-0 Según la Norma GTC226 - 2012 #[b.bwn el área de análisis de muestras debe ubicarse de tal forma que los expertos no entren en contacto con ruidos, olores, interferencias con otros jueces o experto,] con el fin de evitar cualquier percepción de otros que contamine el proceso de juzgamiento. Incluso cada cabina debe tener unas luces que bloquean el color, permitiendo al juez apreciar el color y brillo del alimento mas no del entorno.         
          p(data-aos="fade-down") Todas las instalaciones e implementos deben ser cómodos y estar en buen estado, recordemos que se trata de crear un ambiente lo más neutro posible para que ningún aspecto interfiera con la apreciación de los órganos de los sentidos. También debe tener un lavamanos con el fin de facilitar el enjuague de la boca de muestra a muestra. Sobra decir, que las condiciones de limpieza de estos lugares deben ser excelentes y según la normatividad. 

           
</template>

<script>
export default {
  name: 'Tema2',
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
