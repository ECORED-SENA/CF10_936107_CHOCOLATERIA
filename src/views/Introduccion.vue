<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg1
      p(data-aos="fade-down").mb-5.pt-5 El chocolate es uno de los alimentos más comercializados a nivel mundial y sus sabores y aromas están influenciados por su origen, el tipo de material vegetal utilizado, las prácticas culturales, el clima y el cuidado que se tenga en la cosecha y postcosecha. Estas características han hecho que el sector productivo busque estandarizar los procesos para obtener el mejor producto posible, esfuerzo que se ve comprobado al realizar pruebas de análisis sensorial. De esta forma las pruebas sensoriales son aplicadas en el chocolate en:
      .row.justify-content-center.align-items-center.mb-4         
        .col-lg-4.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')     
        .col-lg-4.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')   
        .col-lg-4.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')  
      p(data-aos="fade-down").mb-5 A nivel nacional, los cacaocultores buscan posicionar su grano de cacao haciendo uso de las técnicas de análisis sensorial para diferenciarlo de otros productores. Se invita a observar la introducción de cómo este se llevaría a cabo en el componente formativo:    
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                                          
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
