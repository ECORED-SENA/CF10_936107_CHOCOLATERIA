<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Muestras
    .bg23
      h4.bgtbw(data-aos="fade-down").mb-4.pt-5 
      p(data-aos="fade-down").mb-5.pt-5 Por muestras se hace referencia a una porción del alimento que se va a analizar y que es presentada al panel sensorial, estas muestras deben llegar a los jueces o expertos en las mejores condiciones y estas dependen del tipo de alimento. A modo general, estos son los puntos a tener en cuenta para la preparación de las muestras:
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12.up
          .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-left")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-md-0.my-3
                    h4.mb-4 Utensilios  
                    p Estos no deben presentar olores, sabores o colores. Incluso se recomienda el uso de campanas extractoras al realizar las preparaciones en el laboratorio para evitar que queden aromas que no son, impresas en la muestra o en los utensilios.              
                  .col-lg-5.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/86.png', alt='')  
              .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-md-0.my-3
                    h4.mb-4 Temperatura  
                    p La temperatura también afecta el sabor y la consistencia. En una prueba sensorial, la muestra, debe llegar con la temperatura correcta para el tipo de alimento a estudiar.

                    p Si por organización, se realiza la cata en diferentes días para el mismo alimento, se debe registrar la temperatura y ofrecerlo a los jurados en las mismas condiciones iniciales.             
                  .col-lg-5.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/87.png', alt='')   
              .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-md-0.my-3
                    h4.mb-4 Porción  
                    p Este aspecto lo debe evaluar el líder del panel, considerando cuál es el objetivo de las muestras y cuanto seria la porción comercial o normal en la que un consumidor accede al producto.             
                  .col-lg-5.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/88.png', alt='')   
              .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-md-0.my-3
                    h4.mb-4 Laboratorio sensorial  
                    p No se debe caer en espontaneidades, el alimento a analizar debe seguir un riguroso proceso estandarizado para preparar las muestras, es decir, siempre se debe preparar de la misma forma, con los mismos tiempos, cantidad de ingredientes y procesos.            
                  .col-lg-5.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/89.png', alt='')   
              .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-md-0.my-3
                    h4.mb-4 Servir la muestra  
                    p Se debe usar contenedores neutros, es decir sin colores o formas llamativas, de preferencia se debe usar vidrio o porcelana para vasos y platos, lo que se busca al igual que con toda la cabina de análisis es no generar distracciones ni más datos a los órganos de los sentidos de los jueces, para que la concentración sea totalmente en la muestra o alimento.             
                  .col-lg-5.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/90.png', alt='')   
              .row.justify-content-center.align-items-center
                  .col-lg-5.mb-4.mb-md-0.my-3
                    h4.mb-4 Datos obtenidos  
                    p Mediante la prueba sensorial deben pasar por un análisis estadístico se debe buscar que cada proceso de la cata respete las condiciones necesarias para esto, como el evitar sesgos, evitar un orden específico que pueda estar influenciado inconscientemente por el líder, para esto se recomienda usar herramientas de asignación aleatoria.             
                  .col-lg-5.my-3
                    img.img-a.img-t(src='@/assets/curso/temas/91.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/94.png', alt='')                  
      .col-lg-8
        p(data-aos="fade-down") En conclusión, las pruebas sensoriales convirtieron en ciencia la forma en la que se analiza un alimento, ya que le otorgaron medidas y escalas a atributos que podría pensarse que son subjetivos al ser percibidos únicamente por el sistema nervioso. 

        p(data-aos="fade-down") Sin embargo, con ciencias como la estadística se logra determinar dichos atributos y dar un valor de diferenciación a productos como el cacao, importante para todos los productos elaborados a partir de él, lo cual genera valor en el ámbito económico de los transformadores.                     
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
