//Menú hamburguesa
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

//Script de traducción
const translations = {
  'idi-inicio': {
    ca: 'Inici',
    es: 'Inicio',
    en: 'Home'
  },
  'idi-contacto': {
    ca: 'Contacte',
    es: 'Contacto',
    en: 'Contact'
  },
  'idi-actividades': {
    ca: 'Activitats',
    es: 'Actividades',
    en: 'Activities'
  },
  'idi-eslogan': {
    ca: 'Si vols començar bé, contacta amb mi',
    es: 'Si quieres empezar bien, contacta conmigo',
    en: 'If you want to start right, get in touch with me'
  },
  'idi-visita': {
    ca: 'Visita guiada pel centre',
    es: 'Visita guiada por el centro',
    en: 'Guided tour of the center'
  },
  'idi-ofertas': {
    ca: 'Has vist tot el que ofereix el centre?',
    es: '¿Has visto todo lo que ofrece el centro?',
    en: 'Have you seen everything the center offers?'
  },
  'idi-act-quemaGrasa': {
    ca: 'Circuit d’entrenament cardiovascular',
    es: 'Circuito de entrenamiento cardiovascular',
    en: 'Cardiovascular training circuit'
  },
  'idi-genteTotal': {
    ca: '⏱️ 30m · 👥 Fins a 10 persones',
    es: '⏱️ 30m · 👥 Hasta 10 personas',
    en: '⏱️ 30m · 👥 Up to 10 people'
  },
  'idi-act-fuerza': {
    ca: 'Circuit d’entrenament de força',
    es: 'Circuito de entrenamiento de fuerza',
    en: 'Strength training circuit'
  },
  'idi-act-gap': {
    ca: 'Entrenament centrat en abdomen i glutis',
    es: 'Circuito de entrenamiento centrado en abdomen y glúteo',
    en: 'Training focused on abs and glutes'
  },
  'idi-act-trx': {
    ca: 'Entrenament amb material TRX',
    es: 'Circuito de entrenamiento con material TRX',
    en: 'TRX training circuit'
  },
  'idi-act-estiramientos': {
    ca: 'Sessió d’estiraments i relaxació',
    es: 'Sesión de estiramientos y relajación',
    en: 'Stretching and relaxation session'
  },
  'idi-act-pilates': {
    ca: 'Sessió de pilates',
    es: 'Sesión de pilates',
    en: 'Pilates session'
  },
  'idi-act-personal': {
    ca: 'Entrenament personal adaptat a tu',
    es: 'Entrenamiento personalizado a tus necesidades',
    en: 'Personal training adapted to your needs'
  },
  'idi-genteTotal2': {
    ca: '⏱️ 1h · 👤 Individual',
    es: '⏱️ 1h · 👤 Individual',
    en: '⏱️ 1h · 👤 Individual'
  },
  'idi-act-padel': {
    ca: 'Entrenaments de pàdel lliures o amb professional',
    es: 'Entrenos de pádel a tu cuenta o con un profesional',
    en: 'Padel training alone or with a professional'
  },
  'idi-genteTotal3': {
    ca: '⏱️ 1h · 👥 D’1 a 2 persones',
    es: '⏱️ 1h · 👥 De 1 a 2 personas',
    en: '⏱️ 1h · 👥 From 1 to 2 people'
  },
  'idi-horario': {
    ca: 'Veure horari de les activitats',
    es: 'Ver horario de las actividades',
    en: 'See activities schedule'
  },
  'idi-horarioBoton': {
    ca: 'Horari activitats',
    es: 'Horario Actividades',
    en: 'Activities Schedule'
  },
    //cambios en contacto.html
  'idi-contacto-titulo': { ca: 'Contacte', es: 'Contacto', en: 'Contact' },
  'idi-nombre': { ca: 'Nom complet:', es: 'Nombre completo:', en: 'Full name:' },
  'idi-correo': { ca: 'Correu electrònic:', es: 'Correo electrónico:', en: 'Email:' },
  'idi-telefono': { ca: 'Número de telèfon:', es: 'Número de teléfono:', en: 'Phone number:' },
  'idi-asunto': { ca: 'Assumpte:', es: 'Asunto:', en: 'Subject:' },
  'idi-mensaje': { ca: 'Missatge:', es: 'Mensaje:', en: 'Message:' },
  'idi-enviar': { ca: 'Enviar', es: 'Enviar', en: 'Send' },
  'idi-contacto-info': { ca: 'Per contactar', es: 'Para contactar', en: 'To contact' },
  'idi-contacto-detalle': { ca: '', es: '', en: '' },
  'idi-horario-centro': { ca: 'Horari d’atenció', es: 'Horario de atención', en: 'Opening hours' },
  'idi-dia': { ca: 'Dia', es: 'Día', en: 'Day' },
  'idi-horario': { ca: 'Horari', es: 'Horario', en: 'Hours' },
  'idi-lunes-viernes': { ca: 'Dilluns a Divendres', es: 'Lunes a Viernes', en: 'Monday to Friday' },
  'idi-sab-dom': { ca: 'Dissabte i Diumenge', es: 'Sábado y Domingo', en: 'Saturday & Sunday' },
  'idi-visitanos': { ca: 'Visita’ns', es: 'Visítanos', en: 'Visit us' },

  //Cambios en actividades.html
  'idi-horario-actividades': { ca: 'Horari d’Activitats Grupals', es: 'Horario de Actividades Grupales', en: 'Group Activities Schedule' },
  'idi-hora': {ca: 'Horari', es: 'Horario', en: 'Schedule'},
  'idi-lunes': { ca: 'Dilluns', es: 'Lunes', en: 'Monday' },
  'idi-martes': { ca: 'Dimarts', es: 'Martes', en: 'Tuesday' },
  'idi-miercoles': { ca: 'Dimecres', es: 'Miércoles', en: 'Wednesday' },
  'idi-jueves': { ca: 'Dijous', es: 'Jueves', en: 'Thursday' },
  'idi-viernes': { ca: 'Divendres', es: 'Viernes', en: 'Friday' },
  'idi-sabado': { ca: 'Dissabte', es: 'Sábado', en: 'Saturday' },
  'idi-leyenda': { ca: 'Llegenda d’Activitats:', es: 'Leyenda de Actividades:', en: 'Activity Legend:' },
  'idi-nota': {
    ca: 'Totes les activitats tenen una durada de 30 minuts amb un màxim de 10 persones per sessió.',
    es: 'Todas las actividades tienen una duración de 30 minutos con un máximo de 10 personas por sesión.',
    en: 'All activities last 30 minutes with a maximum of 10 participants per session.'
  },
  'idi-personal-pad': {
    ca: 'Entrenament Personal i Pàdel: disponibles amb reserva. Contacta amb recepció per més informació.',
    es: 'Entrenamiento Personal y Pádel: Disponibles bajo reserva. Contacta con recepción para más información.',
    en: 'Personal Training and Padel: Available by reservation. Contact reception for more information.'
  },

  //Actividades de tabla y leyenda
  'cardiovascular': { ca: 'Cardiovascular', es: 'Cardiovascular', en: 'Cardiovascular' },
  'fuerza': { ca: 'Força', es: 'Fuerza', en: 'Strength' },
  'abdomen': { ca: 'Abdomen i Glutis', es: 'Abdomen y Glúteo', en: 'Abs & Glutes' },
  'trx': { ca: 'TRX', es: 'TRX', en: 'TRX' },
  'estiramientos': { ca: 'Estiraments', es: 'Estiramientos', en: 'Stretching' },
  'pilates': { ca: 'Pilates', es: 'Pilates', en: 'Pilates' },
  'cardiovascular2': { 
      ca: 'Cardiovascular - Circuit de entrenament cardiovascular', 
      es: 'Cardiovascular - Circuito de entrenamiento cardiovascular', 
      en: 'Cardiovascular - Cardiovascular training circuit' 
    },
    'fuerza2': { 
      ca: 'Força - Circuit d’entrenament de força', 
      es: 'Fuerza - Circuito de entrenamiento de fuerza', 
      en: 'Strength - Strength training circuit' 
    },
    'abdomen2': { 
      ca: 'Abdomen i Glutis - Entrenament centrat en abdomen i glutis', 
      es: 'Abdomen y Glúteo - Entrenamiento centrado en abdomen y glúteo', 
      en: 'Abs & Glutes - Training focused on abs and glutes' 
    },
    'trx2': { 
      ca: 'TRX - Entrenament amb material TRX', 
      es: 'TRX - Entrenamiento con material TRX', 
      en: 'TRX - TRX training circuit' 
    },
    'estiramientos2': { 
      ca: 'Estiraments - Sessió d’estiraments i relaxació', 
      es: 'Estiramientos - Sesión de estiramientos y relajación', 
      en: 'Stretching - Stretching and relaxation session' 
    },
    'pilates2': { 
      ca: 'Pilates - Sessió de pilates', 
      es: 'Pilates - Sesión de pilates', 
      en: 'Pilates - Pilates session' 
    },
  };

//CAmbiamos el idioma
function setLanguage(lang) {
  for (const key in translations) {
    const element = document.getElementById(key);
    if (element) {
      element.innerHTML = translations[key][lang];
    }

    const elements = document.getElementsByClassName(key);
    for (const el of elements) {
      el.innerHTML = translations[key][lang];
    }
  }
}

//Evento para cambiar de idioma al clicar
const selectorIdiomas = document.getElementById('selector-idiomas');
selectorIdiomas.addEventListener('click', (event) => {
  const lang = event.target.getAttribute('data-lang');
  if (lang) {
    setLanguage(lang);     
    savePreference(lang);  
  }
});

//Guardar preferencias
function savePreference(lang) {
  localStorage.setItem('userLang', lang);
}

//Cargar preferencias al recargar
function loadPreference() {
  let preferredLang = localStorage.getItem('userLang');
  if (!preferredLang) {
    preferredLang = 'es'; 
  }
  setLanguage(preferredLang);
}

document.addEventListener('DOMContentLoaded', loadPreference);
