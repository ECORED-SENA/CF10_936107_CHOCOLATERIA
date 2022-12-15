<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Marco normativo del análisis sensorial
    .bg2      
      .row.justify-content-center.align-items-center.pt-5.mb-4          
        .col-lg-7.my-3
          p(data-aos="fade-down") Las características de un chocolate de calidad se van aportando en cada paso de la cadena productiva, es decir desde el cultivo, las prácticas culturales, el material sembrado, el proceso de cosecha, la fermentación correcta, el almacenamiento y el procesamiento. Es por esto por lo que las normas de calidad se aplican a todos los eslabones. 

          p(data-aos="fade-down").mb-0 En Colombia, gracias al crecimiento en los cultivos de cacao, se han establecido nuevas normas de calidad para responder a las necesidades de la cadena productiva del cacao. Dichas normas se han establecido bajo un proyecto nacional llamado Colombia Mide, junto con el Icontec, Instituto Colombiano de Normas Técnicas y Certificación. Dicho trabajo realizado entre el 2020 y 2021 da como resultado la organización de nueve normas, de las cuales seis son aplicadas al cacao y sus derivados, las tres restantes son específicamente para el aguacate Hass.         
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')  

    .tarjeta.color-acento-contenido.p-3.p-md-5.mb-5.imgs-flotantes
      .row.justify-content-around.align-items-center
        img.img-flotante(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='Imagen decorativa')      
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0(data-aos="fade-down")
          img(src="@/assets/curso/temas/8.png")

        .col-md.col-lg-6(data-aos="fade-down")
          h3.yel Normas aplicadas a la cadena productiva del cacao
          p.mb-4 Tomado y modificada de nuevas normas o estándares disponibles para las cadenas de cacao y aguacate Hass, aprobados por ICONTEC y gestionados por ColombiaMide.
          
          a.boton.color-acento-botones(href="https://www.youtube.com/watch?time_continue=5&v=FLzlWoO3v0k&feature=emb_logo " target="_blank" type="application/pdf")
            span Ver video
            i.fas.fa-play-circle   

    .row.justify-content-center.align-items-center.mb-5   
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')
      .col  
        p(data-aos="fade-down").mb-0 Para el cacao en grano las normas de calidad están dadas principalmente por la NTC1252, a nivel mundial la norma que más se aplica a este ámbito es la ISO2451, ambas normas coinciden con los mismos indicadores de calidad para el grano del cacao. Los más importante a destacar son dentro de lo que se establece en las normas antes mencionadas es:

    .row.justify-content-center.mb-4         
      .col-lg-3.my-3(data-aos="fade-left")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')
          h5.bwn.mb-4 Humedad del grano
          p Medida en porcentaje, su nivel no debe superar el 7.5% para evitar la proliferación de moho y microorganismos indeseables.  


      .col-lg-3.my-3(data-aos="fade-right")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')
          h5.bwn.mb-4 Índice de fermentación
          p Es la forma de medir la eficacia en el proceso de fermentado del grano luego de la cosecha, se mide en porcentaje. 


      .col-lg-3.my-3(data-aos="fade-left")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')
          h5.bwn.mb-4 Índice de grano
          p Se obtiene en gramos y está relacionada con el tamaño del grano, es uno de los siete factores de calidad en el cacao, busca tener granos más grandes por mazorca para obtener un mejor rendimiento en los procesos de cosecha y postcosecha. Los valores son establecidos por Fedecacao.


      .col-lg-3.my-3(data-aos="fade-right")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')
          h5.bwn.mb-4 Porcentaje de cascarilla
          p Es un subproducto que se puede aprovechar para ser usado en infusiones, no es ideal tener gran porcentaje de este. Al desarrollar variedades especiales se busca que este porcentaje sea mínimo para mejorar el rendimiento en el procesamiento y obtener mayor cantidad de cacao.

    .bg4.mt-5
      .row.justify-content-center.align-items-start.py-5           
        .col-lg-6.my-3 
          p(data-aos="fade-down") Estos indicadores están dados para el cacao en grano bajo la siguiente clasificación: corriente, estándar, y premium o especial. Para ello, se hace necesario tener en cuenta los valores permitidos para estos indicadores.
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')

        .col-lg-6.my-3 
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Tabla 1 
            span Indicadores de calidad
          .tabla-a.color-primario.mb-5(data-aos="fade-left") 
            table.table1
              caption.bgcap Nota. Tomada y adaptada de NTC1252. 
              thead
                tr.bgth.text-center
                  th Indicador
                  th(colspan='3') Clasificación del cacao en grano
              tbody.text-center          
                tr
                  td.bgt
                  td.bgrose.text-bold Corriente
                  td.bgrose.text-bold Estándar
                  td.bgrose.text-bold Premium
                tr.bgw
                  td.bgt Humedad del grano (%)
                  td 7,5
                  td 7,5
                  td 7,0
                tr.bgw
                  td.bgt Índice de fermentación (% min)               
                  td 55
                  td 65
                  td 70
                tr
                  td.bgt
                  td.bgrose.text-bold Bajo
                  td.bgrose.text-bold Medio
                  td.bgrose.text-bold Alto
                tr
                  td.bgt Índice de grano (gramos) 
                  td.bgw ≤1,4
                  td.bgw ≤1,6
                  td.bgw ≥1,7
                tr.bgw
                  td.bgt Porcentaje de cascarilla %                
                  td 12
                  td 13
                  td 14

    .row.justify-content-center.align-items-center.mb-5   
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')
      .col  
        p(data-aos="fade-down").mb-0 La normatividad anterior y los parámetros generales para establecer la calidad de los granos de cacao aportan a las características deseables que se identificarán en el análisis sensorial, dado que, por ejemplo, granos mal fermentados no solo se evidencian visualmente, sino que generan sabores astringentes en el producto final, para lo cual es importante tener en cuenta: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/rWM-mxrlQ6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade-down").mb-5 Para considerar las normas aplicadas a la cadena productiva del cacao, se hace necesario mencionar como desde el Icontec también se puede acceder a la normatividad específica para el ámbito del análisis sensorial, a continuación, se enlistan las normas ISO relacionadas con este tema:  

    .row.justify-content-center.align-items-start      
      .col-lg-7(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-start(titulo="ISO 13299:2016")
            .col-11
              p Establece la metodología general para establecer el perfil sensorial. 
          .row.justify-content-center.align-items-start(titulo="ISO/DIS 5492")
            .col-11
              p Definiciones y vocabulario del ámbito del análisis sensorial.  
          .row.justify-content-center.align-items-start(titulo="ISO 5496:2006")
            .col-11
              p Establece la metodología para la iniciación y formación de los evaluadores en la detección y reconocimiento de olores. 
          .row.justify-content-center.align-items-start(titulo="ISO 8586:2012")
            .col-11
              p Directrices generales para la selección, formación y seguimiento de evaluadores seleccionados y evaluadores sensoriales expertos. 
          .row.justify-content-center.align-items-start(titulo="ISO 13300-1:2006")
            .col-11
              p Es la primera parte de la guía general para el personal de los laboratorios de evaluación sensorial. Enfocado a las responsabilidades del personal. 
          .row.justify-content-center.align-items-start(titulo="ISO 133300-2:2006")
            .col-11
              p Es la segunda parte de la guía general para el personal de los laboratorios de evaluación sensorial. Enfocado a la selección y formación de directores del jurado. 
          .row.justify-content-center.align-items-start(titulo="ISO 8589:2007")
            .col-11
              p Ofrece los lineamientos para la orientación general para el diseño de las salas de análisis. 
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')

    p(data-aos="fade-down").mb-5 En la ciencia del análisis sensorial se cuantifican los aspectos como sabor, mediante escalas de intensidad, el olor, el color y las texturas, una forma de estandarizar es dando parámetros específicos en los cuales los catadores puedan ubicar sus percepciones. Para esto se propone inicialmente una clasificación de las pruebas sensoriales en tres grupos, como se comparte continuación: 

    .bg5.my-5
      .pt-5
      .titulo-sexto.color-acento-contenido.mb-4(data-aos="zoom-in-left")
        h5 Tabla 2 
        span Clasificación de los métodos de prueba en la evaluación sensorial
      .row.justify-content-center.align-items-center  
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')

        .col-lg-9.my-3
          .tabla-a.color-primario.mb-5(data-aos="fade-left") 
            table.table1
              caption.bgcap Nota. Tomada de UNAD.
              thead
                tr.bgth.text-center
                  th Clasificación
                  th Objetivo de la prueba
                  th Pregunta de interés
                  th Características de los panelistas

              tbody.text-center          
                tr.bgw 
                  td.text-bold Discriminatoria
                  td Determinar si dos productos son percibidos de diferente manera por consumidores
                  td ¿Existen diferencias entre los productos?
                  td Seleccionados por la agudeza sensorial, conocimiento de norma, técnicas y con algún entrenamiento. 
                tr.bgt
                  td.text-bold Descriptiva 
                  td Determinar la naturaleza de las diferencias sensoriales.
                  td ¿En qué tipos de características específicas difieren los productos?
                  td Seleccionados por la agudeza sensorial y apoyados en normas técnicas y métodos de alto entrenamiento. 
                tr.bgw
                  td.text-bold Afectiva 
                  td Determinar la aceptabilidad de un producto alimenticio.
                  td <b>Hedónica</b>. ¿Qué productos te gustan más y cuáles son los preferidos?
                  td Seleccionados para evaluar un producto sin tener entrenamiento. 
      .pb-5
    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')
      .col-lg-7.my-3
        p(data-aos="fade-down").mb-0 Si se analizan las pruebas sensoriales, se observa en la parte descriptiva que es un reporte de las características identificadas por los panelistas. Dichas características, como se mencionó, #[b.or se obtienen mediante los sentidos de la vista, olfato, gusto y tacto.] Para ello, se establecen las bases mediante las que se percibe como seres humanos, y se observan en el siguiente diagrama.  

    .bg7
      ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img.img-a.img-t(src='@/assets/curso/temas/21.png', alt='')

        .tarjeta.color-acento-botones.p-3(x="15%" y="83%" numero="+")
          h5.mb-2 Oido 
          p.mb-0 Se percibe la crocancia de los alimentos. 
        .tarjeta.color-acento-botones.p-3(x="32%" y="83%" numero="+")
          h5.mb-2 Tacto 
          p.mb-0 Brinda información acerca de la textura, la temperatura y la consistencia. 
        .tarjeta.color-acento-botones.p-3(x="50.5%" y="83%" numero="+")
          h5.mb-2 Gusto 
          p.mb-0 La consistencia o textura también son establecidas mediante la sensación en la boca.  
        .tarjeta.color-acento-botones.p-3(x="69%" y="83%" numero="+")
          h5.mb-2 Olfato 
          p.mb-0 Percibe sustancias aromáticas volátiles.    
        .tarjeta.color-acento-botones.p-3(x="85.5%" y="83%" numero="+")
          h5.mb-2 Vista
          p.mb-0 Observa la forma, el color, el brillo y en tamaño.

      .row.justify-content-center.align-items-center.mb-5   
        .col-auto
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')
        .col  
          p(data-aos="fade-down").mb-0 Según este diagrama, se reconoce de qué manera se puede obtener la información de los alimentos mediante cada uno de los órganos de los sentidos, favoreciendo estímulos en el sistema nervioso que brindan la información y percepción frente a estos. Este comportamiento fisiológico parte de un instinto de supervivencia, dado que permite establecer qué alimentos tienen olores, sabores y colores, detectando además su grado de descomposición, lo que genera alertas para su consumo, previniendo enfermedades e infecciones.   

      .row.justify-content-center.align-items-center.mb-4 
        .col-lg-7.my-3
          .bgp.p-4
            p(data-aos="fade-down").mb-0 De acuerdo con Leite et al. (citado por Quintana, 2021), #[b.or el primer estímulo para el sistema sensorial es el olfato] que percibe el aroma de los alimentos, dicho aroma son moléculas volátiles (ésteres, cetonas, aldehídos) #[b.or el segundo es la vista.]  El olor y la apariencia dan la información y el cerebro decide si el alimento es apetitoso o no. El tacto ofrece, aunque no tan participativamente, información sobre textura, consistencia, temperatura y al masticar, además de generar estímulos al oído como la crocancia, mediante los ruidos de la acción mecánica contra el alimento también se logra tener información de textura: si es duro, cremoso, si se derrite en la boca, etc. El sabor no es exclusivo de las papilas gustativas que se encuentran en la lengua, influye también el olfato para dar la información sensorial del alimento que se esté degustando, por eso, al tener afectado este sentido por alguna congestión nasal los alimentos ya no nos saben igual. A esto se le llama anosmia.             
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')
            
    .bg8
      p(data-aos="fade-down").mb-5 Para efecto del análisis sensorial se estima que el sabor se logra en tres fases: 

      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
        h5 Figura 1
        span Fases de la evaluación del sabor o el olor. 
      .row.justify-content-center.align-items-start.mb-4 
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.svg', alt='')                
        .col-lg-8.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')
          figcaption.mt-4 Nota. Tomada y adaptada de UNAD.  

    .row.justify-content-start.align-items-center         
      .col-auto
        .list(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1.bwnt Perfil de la textura 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down").mb-0 Consiste en cómo se califica este atributo, ya que es la mejor forma de estandarizarlo. La textura está dada por la reología y geometría de la estructura, entre otros. Se puede llegar a pensar que la textura en un alimento está dada solo por lo que se puede percibir mediante el tacto, pero en este atributo influyen aspectos visuales y auditivos e incluso mecánicos al realizar los movimientos de masticación.                
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')

    .bg9
      .row.justify-content-center.align-items-start.py-5           
        .col-lg-5
          p(data-aos="fade-down") Dar una escala de medida escueta puede no ofrecer una información estandarizada para todos, por eso muchos autores optan por hacer una escala con aspectos descriptivos y comparativos de otros alimentos en los que se identifican plenamente dichos atributos, como lo demuestra la siguiente tabla: 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')
               
        .col-lg-7
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Tabla 3 
            span Ejemplos de muestra anclada 
          .tabla-a.color-primario(data-aos="fade-left") 
            table.table1
              caption.bgcap Nota. Tomada y adaptada de  Domínguez (2017)
              thead
                tr.bgth.text-center
                  th Atributo de textura 
                  th Escala
                  th Producto
              tbody.text-center          
                tr
                  td(rowspan='3') <b>Dureza:</b> se mide por la fuerza requerida para masticar el producto. 
                  td Bajo
                  td Queso crema.
                tr
                  td Medio
                  td Salchicha Frankfurter.
                tr
                  td Alto
                  td Caramelo duro. 
                tr
                  td(rowspan='3') <b>Adhesividad al paladar:</b> se mide por la fuerza necesaria para remover el producto totalmente del paladar usando la lengua. 
                  td Bajo
                  td Aceite vegetal hidrogenado.
                tr
                  td Medio
                  td Malvaviscos.
                tr
                  td Alto
                  td Mantequilla de maní. 
                tr
                  td(rowspan='3') <b>Fracturabilidad:</b> se mide por la fuerza aplicada mediante los molares con la que el producto se quiebra.
                  td Bajo
                  td Panecillo de maíz.
                tr
                  td Medio
                  td Crujido del jengibre.
                tr
                  td Alto
                  td Caramelo duro.
                tr
                  td(rowspan='3') <b>Sequedad:</b> cantidad de humedad percibida en la superficie del producto cuando entra en contacto con el labio superior. 
                  td Bajo
                  td Galletas Cracker.
                tr
                  td Medio
                  td Jamón.
                tr
                  td Alto
                  td Wafer. 
        .col-12
          .row.justify-content-center.align-items-center          
            .col-lg-12.imgs-flotantes1(data-aos="fade-left") 
              img.img-flotante1(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='Imagen decorativa') 

    .row.justify-content-center.align-items-center.mb-4.pt-5              
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down").mb-0 Cada alimento tiene un grupo descriptor de atributos los cuales son los que se buscan medir en las pruebas sensoriales, jueces que hagan la valoración del cacao, (licor de cacao) requieren un entrenamiento específico en los siguientes sabores: los básicos, los sabores adquiridos, es decir aquellos sabores u olores externos que se adhirieron en alguno de los pasos del procesamiento debido a la propiedad higroscópica que posee; y los sabores específicos de cacaos finos, como se presenta a continuación masticación.

    .row.justify-content-center.align-items-center.mb-5.bgw.brad.sha
      .col-lg-7
        .p-4
          h4.bwnt Sabores básicos:  
          p(data-aos="fade-down").mb-0 Son los sabores típicos característicos de cualquier tipo de cacao y son aquellas notas que un experto debe memorizar como referencia para juzgar a todos los tipos de cacao, estos son:         
      .col-lg-5.img-e
        img.img-e(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='') 

    .bg10.pt-5
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/32.png", alt="alt")
            .crd_hover_txt--body
              h3.yel.mb-3.text-center Astringente: 
              p.mb-0.text-white Se describe como aquel sabor que produce resequedad en la boca y, posteriormente, un aumento en la salivación; se debe a una alta concentración de polifenoles y a deficiencias en el proceso de fermentación del grano.

        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/33.png", alt="alt")
            .crd_hover_txt--body
              h3.yel.mb-3.text-center Ácido:
              p.mb-0.text-white Son los sabores asociados a los cítricos, como el limón. Produce una sensación en la boca que causa estremecimiento, pues  los sabores ácidos generan una alerta en el sistema nervioso al estar ligados por el inconsciente con sabores de venenos y toxinas.  

        .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/34.png", alt="alt")
            .crd_hover_txt--body
              h3.yel.mb-3.text-center Amargo: 
              p.mb-0.text-white Está asociado a sabores como el café oscuro sin dulce. El cacao puro sin edulcorantes posee un sabor amargo. Se dice que apreciar este sabor como agradable es un gusto adquirido, ya que al igual que el sabor ácido también genera una reacción del sistema nervioso.

      .row.justify-content-center.align-items-center.mb-5.bgw.brad.sha
        .col-lg-7
          .p-4
            h4.bwnt Sabores adquiridos:
            p(data-aos="fade-down").mb-0 Son aquellos sabores externos que se adhieren al cacao en cualquiera de sus fases de procesamiento ya sea en la cosecha o en postcosecha: fermentado, secado, tostado e incluso un mal almacenamiento puede causar su contaminación; estos se clasifican en:       
        .col-lg-5.img-e
          img.img-e(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='') 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12.p-0.bgw.sha(data-aos="fade-rigt")          
          SlyderE(indicadores="derecha")
            .row.justify-content-center.align-items-start
              .col-md-6.mb-4.mb-md-0
                .pt-5.ps-5.smov
                  h4.mb-4 Verde/crudo: 
                  p Es el sabor con el que se describe al cacao que no ha cumplido bien el proceso de fermentación o de tostado. Son notas que los expertos deben memorizar en sus entrenamientos, pues son sabores específicos.   
              .col-md-6 
                img.img-a.img-t(src='@/assets/curso/temas/37.png', alt='')
            .row.justify-content-center.align-items-start
              .col-md-6.mb-4.mb-md-0
                .pt-5.ps-5.smov
                  h4.mb-4 Ahumado.
                  p Este sabor se asocia con los alimentos preparados en estufa de leña, o han pasado por procesos de ahumado como algunos embutidos. El cacao se debe a los procesos de secado artificial y no por acción de los rayos solares. 
              .col-md-6 
                img.img-a.img-t(src='@/assets/curso/temas/38.png', alt='')   
            .row.justify-content-center.align-items-start
              .col-md-6.mb-4.mb-md-0
                .pt-5.ps-5.smov
                  h4.mb-4 Mohoso.
                  p Este sabor resulta de un mal proceso de secado donde el grano sobrepasa el porcentaje de humedad aceptado y el proceso de fermentación no es el adecuado permitiendo el crecimiento de levaduras y hongos.
              .col-md-6 
                img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')   
            .row.justify-content-center.align-items-start
              .col-md-6.mb-4.mb-md-0
                .pt-5.ps-5.smov
                  h4.mb-4 Terroso.
                  p Sabores que evocan al olor de la tierra luego de una lluvia. Algunos lo identifican como un sabor tosco. 
              .col-md-6 
                img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='')                                                   
    .row.justify-content-center.align-items-center.mb-5.bgw.brad.sha
      .col-lg-7
        .p-4
          h4.bwnt Sabores específicos: 
          p(data-aos="fade-down") Son los que provienen de un material específico de cacao, es decir, son características deseables que se buscan perpetuar por medio de manejo fitogenético cruzando variedades resistentes con variedades de sabor característico, para obtener el vigor híbrido y altas cualidades sensoriales. Igualmente se debe considerar el cuidadoso proceso de cosecha y postcosecha para no llegar a contaminar los olores y sabores, de ahí la importancia realizar un excelente fermentado, secado y tostado que potencien los sabores propios del material fino.

          p(data-aos="fade-down").mb-0 Generalmente aquellos cacaos de sabores y olores finos no son tan productivos en términos de kg/ha  ni tan resistentes a enfermedades y cambios climáticos los cuales los hacen más costosos pero que los grandes procesadores de cacao están dispuestos a pagar por sus características, las cuales corresponden a:       
      .col-lg-5.img-e
        img.img-e(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')

    .row.justify-content-center.mb-4         
      .col-lg-3.my-3(data-aos="fade-left")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')
          h5.bwn.mb-4 Sabor a cacao:
          p Es el sabor y olor a chocolate, como por ejemplo la manteca de cacao. Se genera por una reacción de la glutamina con la glucosa cuando los granos han sido bien fermentados y tostados.  


      .col-lg-3.my-3(data-aos="fade-right")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')
          h5.bwn.mb-4 Frutal:
          p Evoca los sabores asociados a la fruta madura.


      .col-lg-3.my-3(data-aos="fade-left")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='')
          h5.bwn.mb-4 Nuez:
          p Es aquel sabor que se relaciona con los frutos secos como almendras, nueces, etc.


      .col-lg-3.my-3(data-aos="fade-right")
        .bg3.p-3.text-center.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')
          h5.bwn.mb-4 Floral: 
          p Es aquel sabor que evoca el aroma de las flores, entre dulce y fresco.

    .row.justify-content-center.align-items-center.mb-4              
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='')
      .col-lg-8.my-3
        p(data-aos="fade-down") Los descriptores de sabor son una lista considerable, su descripción muchas veces suele no ser fácil y se recurre más a que recuerdos llegan a nuestra mente cuando se está identificando un sabor. Por eso, los jueces expertos deben tener un entrenamiento constante y disciplinado para ir almacenando estas sensaciones y sabores en su memoria y poder dar un análisis más acertado.
 
        p(data-aos="fade-down").mb-0 Entre otros descriptores están:  
        
    .row.justify-content-center.align-items-center.mb-4         
      .col-lg-2.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.svg', alt='')   
      .col-lg-2.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.svg', alt='')    
      .col-lg-2.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.svg', alt='')    
      .col-lg-2.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg', alt='')    
      .col-lg-2.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/51.svg', alt='')    
      .col-lg-2.my-3  
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5   
      .col-auto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')
      .col  
        p(data-aos="fade-down").mb-0 Para presentar una definición amplia de todos los descriptores de olores en los paneles de análisis sensorial se hace uso de una rueda, existen ruedas específicas para evaluar el grano del cacao o para el análisis del licor de cacao como tal. Se invita a observar algunos ejemplos:   

    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')

    .row.justify-content-center.align-items-center.mb-4.pt-5 
      .col-lg-7.my-3
        p(data-aos="fade-down") #[b.bwn Para el análisis sensorial a través de la rueda, se tiene presente:] la agrupación general y luego unas subcategorías. Se habla de notas de sabor, ya que por ejemplo en el caso de sabores no deseados como sucio, no se refiere a que la muestra tenga como ingrediente mugre o suciedad. Igualmente pasa con el sabor a estiércol, no es que el chocolate tenga heces en su muestra, sino que en algún paso de proceso se pudo contaminar con el olor.
        .row.justify-content-center.align-items-center          
          .col-lg-12.imgs-flotantes3(data-aos="fade-left") 
            img.img-flotante3(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='Imagen decorativa')         
            .bgp.p-4
              p(data-aos="fade-down").mb-0 En el caso de que los jueces realicen una evaluación sensorial del grano como tal y no de licor de cacao preparado, se aplica una prueba con descriptores como los del siguiente ejemplo. Donde las categorías que agrupan los descriptores no son sabores en general sino referencias al proceso de beneficio y postcosecha.                         
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.png', alt='')
    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.png', alt='')
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
