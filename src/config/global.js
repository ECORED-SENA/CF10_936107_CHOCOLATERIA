export default {
  global: {
    componenteFormativo: 'Planificación de la prueba sensorial',
    descripcionCurso:
      'Por medio de este componente formativo podrá conocer la importancia de realizar una prueba sensorial en el chocolate, donde se identifican las bases teóricas de estas pruebas y la normatividad que se aplica en su realización. Así mismo, tendrá los fundamentos necesarios para planear una cata, las muestras y el tipo de prueba a realizar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Marco normativo del análisis sensorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Laboratorio del análisis sensorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Panel de evaluación sensorial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tipos de pruebas y normas correspondientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Muestras',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco Normativo Análisis Sensorial ',
      referencia:
        'Quintana, L., y Jerez, A. (2021). <i>Evaluación integral de la calidad sensorial del cacao</i>. Sello Editorial UNAD.',
      tipo: 'PDF',
      link:
        'https://hemeroteca.unad.edu.co/index.php/book/article/download/4852/4570/16800',
    },
    {
      tema: 'Tipos de pruebas y normas correspondientes ',
      referencia:
        'Domínguez, M. (2017).  <i>Guía para la evaluación sensorial de alimentos</i>. Agrosalud.',
      tipo: 'PDF',
      link:
        'https://lac.harvestplus.org/wp-content/uploads/2008/02/Guia-para-la-evaluacion-sensorial-de-alimentos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis sensorial',
      significado:
        'estudio y análisis de las propiedades organolépticas de un producto.',
    },
    {
      termino: 'Anosmia',
      significado:
        'pérdida del olfato que conlleva a una insensibilidad para percibir los sabores.',
    },
    {
      termino: 'Astringencia',
      significado:
        'sabor que produce sensaciones de amargor y sequedad intensa en la boca. ',
    },
    {
      termino: 'Contramuestras',
      significado:
        'muestra de respaldo, tomada en las mismas condiciones que la muestra principal. ',
    },
    {
      termino: 'Panel sensorial',
      significado:
        'grupo de profesionales y técnicos encargados de coordinar y aplicar las pruebas sensoriales a alimentos. ',
    },
    {
      termino: 'Organolépticas',
      significado:
        'atributos físicos de un producto o alimento que podemos percibir y describir gracias a los órganos de los sentidos. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Camargo, C. (2017). <i>Conformación de un grupo de jueces, expertos en entrenamiento para el funcionamiento de un panel de evaluación sensorial en la UNAD</i>. (Tesis de Grado). UNAD, Bucaramanga.',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/18598/1095794698.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Chabers, E. (2019) Analysis of sensory properties in foods: A special Issue. <i>Foods</i>, 8(8), 291.',
      link: 'https://www.mdpi.com/2304-8158/8/8/291/htm',
    },
    {
      referencia:
        'Curso Superior de Degustación de Vinos. (2007). <i>El análisis sensorial</i>. EEAMendoza. INTA',
      link:
        'https://inta.gob.ar/sites/default/files/script-tmp-29__el_anlisis_sensorial.pdf',
    },
    {
      referencia:
        'Domínguez, M. (2017).  <i>Guía para la evaluación sensorial de alimentos</i>. Agrosalud.',
      link:
        'https://lac.harvestplus.org/wp-content/uploads/2008/02/Guia-para-la-evaluacion-sensorial-de-alimentos.pdf',
    },
    {
      referencia:
        'Drewnowski, A., & Moskowitz, H. (1985). Sensory characteristics of foods: New evaluation techniques. T<i>he American Journal of Clinical Nutrition</i>, 42, 924-931.',
      link:
        'https://www.researchgate.net/publication/19101309_Sensory_characteristics_of_foods_New_evaluation_techniques',
    },
    {
      referencia:
        'Quintana, L., y Jerez, A. (2021). <i>Evaluación integral de la calidad sensorial del cacao</i>. Sello Editorial UNAD.',
      link:
        'https://hemeroteca.unad.edu.co/index.php/book/article/download/4852/4570/16800',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Pachón Meneses',
        cargo: 'Experta temática',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Leydy Jhuliana Jaramillo Mejía',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital- Centro de Gestión Industrial',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica y pedagógica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
