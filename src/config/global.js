export default {
  global: {
    componenteFormativo: 'Promoción de procesos formativos en seguridad vial',
    descripcionCurso:
      'A través de este componente formativo el aprendiz identificará la importancia de desarrollar competencias para ser un promotor de procesos educativos y formativos en seguridad vial, el cual tiene como base el aspecto normativo en materia de tránsito y transporte, acompañado de conceptos pedagógicos y didácticos necesarios para enseñar a cualquier tipo de público las temáticas de la seguridad vial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad en tránsito y transporte',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos pedagógicos en seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Conceptos de andragogía y formación preescolar en seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Modelos pedagógicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Fundamentos sobre competencias ciudadanas en tránsito y seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Características de la enseñanza aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Fundamentos en evaluación del aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Educación vial y Factor Humano',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Aspectos generales sobre infraestructura vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Plan Nacional de Seguridad Vial 2022-2031',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/638100_CF05_DU.pdf',
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
      tema: 'Normatividad en tránsito y transporte',
      referencia:
        'Decreto 1079 de 2015. [Presidente de la República de Colombia]. pública. Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. Mayo 26 de 2015.',
      tipo: 'Documento legal',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte',
    },

    {
      tema: 'Modelos pedagógicos y enfoques didácticos',
      referencia:
        'Agencia Nacional de Seguridad Vial. (s.f.). Campañas pedagógicas en seguridad vial. ANSV.',
      tipo: 'Página web',
      link:
        'https://ansv.gov.co/contenidos/escuela/fase1/on/ANSV_PT019_HTML06/index.html',
    },

    {
      tema: 'Plan Nacional de Seguridad Vial 2022-2031',
      referencia:
        'Decreto 1430 de 2022 [Ministerio de Transporte]. Por medio del cual se aprueba el Plan Nacional de Seguridad Vial 2022-2031. Julio 29 de 2022.',
      tipo: 'Decreto / Documento',
      descarga: '/downloads/anexo1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acera o andén',
      significado:
        'Franja longitudinal de la vía urbana, destinada exclusivamente a la circulación de peatones, ubicada a los costados de ésta.',
    },
    {
      termino: 'Alcoholemia',
      significado:
        'Cantidad de alcohol que tiene una persona en determinado momento en su sangre.',
    },
    {
      termino: 'Alcoholimetría',
      significado:
        'Examen o prueba de laboratorio, o por medio técnico que determina el nivel de alcohol etílico en la sangre.',
    },
    {
      termino: 'Alcoholuria',
      significado:
        'Examen o prueba de laboratorio, o por otro medio técnico que determina el nivel de alcohol etílico en la orina.',
    },
    {
      termino: 'Andragogía',
      significado:
        'Conjunto de técnicas de enseñanza orientadas a educar personas adultas',
    },
    {
      termino: 'Aplicación de la norma',
      significado:
        'Desarrollar procedimientos de realización de órdenes de comparendo por infracciones de tránsito o de transporte',
    },
    {
      termino: 'Bocacalle',
      significado: 'Embocadura de una calle en una intersección.',
    },
    {
      termino: 'Carreteable',
      significado:
        'Vía sin pavimentar destinada a la circulación de vehículos.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Parte de la pedagogía que estudia las técnicas y métodos de enseñanza.',
    },
    {
      termino: 'Educación vial',
      significado:
        'Cualquier tipo de proceso educativo cuyo fin sea generar hábitos y comportamientos seguros en la vía.',
    },
    {
      termino: 'Embriaguez',
      significado:
        'Estado de alteración transitoria de las condiciones físicas y mentales, causada por intoxicación aguda que no permite una adecuada realización de actividades de riesgo.',
    },
    {
      termino: 'OMS',
      significado: 'Organización Mundial de la Salud.',
    },
    {
      termino: 'Pedagogía',
      significado:
        'La pedagogía es una ciencia social e interdisciplinaria enfocada en la investigación y reflexión de las teorías educativas en todas las etapas de la vida, no solo en la infancia',
    },
    {
      termino: 'Prevención de la accidentalidad',
      significado:
        'Cualquier tipo de actividad que busque prevenir accidentes de tránsito, puede ser educativa, activa en vía pública o controles específicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Seguridad Vial. (s.f.). <em>Campañas pedagógicas en seguridad vial.</em> ANSV.',
      link:
        'https://ansv.gov.co/contenidos/escuela/fase1/on/ANSV_PT019_HTML06/index.html',
    },
    {
      referencia:
        'Ausubel, D. (1990). Psicología educativa: un punto de vista cognoscitivo. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Blanco, A. (2000). Los modelos pedagógicos. Universidad Abierta Revista del Instituto de Educación a Distancia de la Universidad de Tolima, 7, p. 1-10.',
      link: '',
    },
    {
      referencia:
        'Castillero, O. (2016). La teoría del aprendizaje de Robert Gagné. Psicología y Mente.',
      link:
        'https://psicologiaymente.com/desarrollo/teoria-aprendizaje-robert-gagne',
    },
    {
      referencia:
        'Centro de Investigación y Formación en Educación -CIFE- y Departamento de Psicología Universidad de Los Andes. (2003). Estándares básicos de competencias ciudadanas. Ministerio de Educación Nacional.',
      link:
        'https://www.mineducacion.gov.co/1621/articles-75768_archivo_pdf.pdf',
    },
    {
      referencia:
        'Contreras, J. (2012). La realidad de la práctica pedagógica y curricular en la educación básica y bachillerato del colegio Técnico Carlos Lenin Ávila de la Parroquia Bayas del Cantón Azogues, Provincia del Cañar, durante el año lectivo 2011-2012. [Tesis de Maestría]. Universidad Técnica Particular de Loja.',
      link:
        'https://1library.co/document/9yn69pqv-practica-pedagogica-curricular-educacion-bachillerato-tecnico-parroquia-provincia.html',
    },
    {
      referencia:
        'DANE. (2021). Censo nacional de población y vivienda 2018 – Colombia. DANE',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/censo-nacional-de-poblacion-y-vivenda-2018/cuantos-somos',
    },
    {
      referencia:
        'Decreto 1079 de 2015. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. Mayo 26 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte.',
    },
    {
      referencia:
        'De Zubiría, J. (1994). Tratado de pedagogía conceptual: los modelos pedagógicos. Fundación Merani. Fondo de Publicaciones Bernardo Herrera Merino 8.',
      link: '',
    },
    {
      referencia:
        'Díaz, F. (2002). Capítulo 8 Tipos de evaluación. Universidad Nacional Abierta.',
      link:
        'https://des-for.infd.edu.ar/sitio/upload/diazbarrigacap8_EVALUACION.pdf',
    },
    {
      referencia: 'EUROINNOVA. (s.f.). Escuela activa. EUROINNOVA.',
      link: 'https://www.euroinnova.co/blog/escuela-activa',
    },
    {
      referencia:
        'Flórez, R. (1994). Hacia una pedagogía del conocimiento. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Fundación MAPFRE. (s.f.). El factor humano en la seguridad vial. Fundación MAPFRE.',
      link:
        'https://www.fundacionmapfre.org/educacion-divulgacion/seguridad-vial/movilidad-segura-salud/sabias-que/factor-humano-seguridad-vial/',
    },
    {
      referencia: 'Gagné, R. (1970). Las condiciones del aprendizaje. Aguilar.',
      link: '',
    },
    {
      referencia:
        'Grupo Educativo IMEI Plantel Zinapécuaro. (2019). Fundamento de la Pedagogía. IMEI.',
      link: 'https://www.grupoimei.mx/blog/2',
    },
    {
      referencia:
        'Ibáñez, C. (2020). Sobre el uso de los conceptos de ciclo de vida e historia de vida en ecología y evolución. Gayana (Concepción), 84(2), p. 93-100.',
      link: 'https://dx.doi.org/10.4067/S0717-65382020000200093',
    },
    {
      referencia:
        'Klein, S. (1994). Aprendizaje, principios y aplicaciones. McGraw–Hill.',
      link: '',
    },
    {
      referencia:
        'Knowles, M. (1980). The modern practice of adult education: from pedagogy to andragogy. Association Press.',
      link: 'https://adams.marmot.org/Record/.b13242921',
    },
    {
      referencia:
        'Ley 1811 de 2016. [Congreso de la República]. Por la cual se otorgan incentivos para promover el uso de la bicicleta en el territorio nacional y se modifica el Código Nacional de Tránsito. Octubre 21 de 2016',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1811_2016.html#:~:text=OBJETO.,y%20mejorar%20la%20movilidad%20urbana.',
    },
    {
      referencia:
        'Ley 1696 de 2013. [Congreso de Colombia]. Por medio de la cual se dictan disposiciones penales y administrativas para sancionar la conducción bajo el influjo del alcohol u otras sustancias psicoactivas. Diciembre 19 de 2013.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=55964',
    },
    {
      referencia:
        'Ley 769 de 2002. [Poder Público – Rama Legislativa]. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Julio 6 de 2002.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (s.f.). Pedagogía. Ministerio de Educación Nacional.',
      link: 'https://www.mineducacion.gov.co/1621/article-80185.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Sistema educativo colombiano. Ministerio de Educación Nacional.',
      link:
        'https://www.mineducacion.gov.co/portal/Educacion-superior/Sistema-de-Educacion-Superior/231235:Sistema-Educativo-Colombiano',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2022). Traumatismos causados por el tránsito. Organización Mundial de la Salud.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/road-traffic-injuries',
    },
    {
      referencia:
        'Ortiz, A. (2013). Modelos pedagógicos y teorías del aprendizaje. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Paniagua, K. y Umaña, M. (2008). La teoría de las inteligencias múltiples en la práctica docente en educación preescolar. Revista Electrónica Educare, XII (1), p. 135 - 149.',
      link: 'https://www.redalyc.org/articulo.oa?id=194114582017',
    },
    {
      referencia:
        'Personería de Bogotá. (s.f.). ABC Derechos fundamentales. Personería de Bogotá.',
      link:
        'https://www.personeriabogota.gov.co/images/ABC/ABC-Derechos-fundamentales.pdf',
    },
    {
      referencia:
        'Saborio, A. (2019). Teorías del aprendizaje según Bruner. Psicología-Online.',
      link:
        'https://www.psicologia-online.com/teorias-del-aprendizaje-segun-bruner-2605.html',
    },
    {
      referencia:
        'Truyols, S. y Sampedro, A. (2010). Fundamentos de la seguridad vial. Delta Publicaciones.',
      link: '',
    },
    {
      referencia:
        'Vygotski, L. (2015). Obras escogidas II Pensamiento y lenguaje-conferencias sobre Psicología. Antonio Machado Libros.',
      link: '',
    },
    {
      referencia:
        'Zaragoza, M. (2020). Diferencia entre Pedagogía y Andragogía. Educar para el cambio.',
      link:
        'https://educarparaelcambio.com/2020/02/17/diferencia-entre-pedagogia-y-andragogia/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zaida Fernanda Sotelo Peña',
          cargo: 'Experta Temática',
          centro:
            'Centro de la Industria la Empresa y los Servicios - Regional norte de Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria la Empresa y los Servicios - Regional norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
