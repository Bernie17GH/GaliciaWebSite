/* ═══════════════════════════════════════════════════
   partners.js — partner data, category config,
   and bilingual map popup builders.
   To add a new language, add a block to POPUP_I18N.
   ═══════════════════════════════════════════════════ */

const PROPERTY = { lat: 42.470, lng: -8.595, name: 'Lugar a Mota · The Pazo', cat: 'property' };

const PARTNERS = [
  // River Fishing
  { slug:'rio-lerez',       lat:42.4830, lng:-8.5490, name:'Río Lérez · Coto de Cutián',           cat:'fishing',   subcatLabel:'🎣 River',        dist:'~5 km',  phone:'',              rating:'🎣 Trout' },
  { slug:'rios-verdugo',    lat:42.3530, lng:-8.5640, name:'Ríos Verdugo & Oitavén · Coto de Soutomaior', cat:'fishing', subcatLabel:'🎣 River',   dist:'~12 km', phone:'',              rating:'🎣 Trout' },
  // Fishing and Game
  { slug:'pescaturismo',    lat:42.5092, lng:-8.8170, name:'Pescaturismo Cambados',   cat:'fishing',   subcatLabel:'🎣 Coastal',      dist:'~19 km', phone:'+34 622 34 73 89', rating:'★ 5.0' },
  { slug:'escaparia',       lat:42.3989, lng:-8.8061, name:'Escaparía',               cat:'fishing',   subcatLabel:'🎣 Coastal',      dist:'~19 km', phone:'+34 669 61 53 61', rating:'★ 4.9' },
  { slug:'barco-latoja',    lat:42.4889, lng:-8.8500, name:'Barco La Toja',           cat:'fishing',   subcatLabel:'🎣 Coastal',      dist:'~24 km', phone:'+34 609 88 46 50', rating:'★ 4.7' },
  { slug:'cruceiros',       lat:42.4972, lng:-8.8636, name:'Cruceiros Rías Baixas',   cat:'fishing',   subcatLabel:'🎣 Coastal',      dist:'~24 km', phone:'+34 986 73 13 43', rating:'★ 4.6' },
  // Hiking
  { slug:'mountainpics',    lat:42.4306, lng:-8.6430, name:'MountainPics Adventures',              cat:'hiking',    subcatLabel:'🥾 Hiking',       dist:'~6 km',  phone:'+34 603 56 08 07', rating:'★ 5.0' },
  { slug:'sendeiro-azul',    lat:42.39123, lng:-8.49997, name:'Sendeiro Azul do Río Verdugo',         cat:'hiking',  subcatLabel:'🥾 Hiking',       dist:'~10 km', phone:'',  rating:'🥾 Blue Trail' },
  { slug:'sendero-poio',     lat:42.4410,  lng:-8.6310,  name:'Sendero Litoral · Poio',                cat:'hiking',  subcatLabel:'🥾 Hiking',       dist:'~5 km',  phone:'',  rating:'🥾 4.9 km · Easy' },
  { slug:'sendero-marin',    lat:42.3900,  lng:-8.6960,  name:'Ruta Montes y Playas · Marín',          cat:'hiking',  subcatLabel:'🥾 Hiking',       dist:'~14 km', phone:'',  rating:'🥾 11 km · Easy–Med' },
  { slug:'sendero-sanxenxo', lat:42.3910,  lng:-8.8130,  name:'Sendero Litoral Sanxenxo–Portonovo',   cat:'hiking',  subcatLabel:'🥾 Hiking',       dist:'~20 km', phone:'',  rating:'🥾 8.6 km · Easy' },
  { slug:'sendero-cabo-udra',lat:42.3280,  lng:-8.7940,  name:'Sendero Cabo Udra · Bueu',              cat:'hiking',  subcatLabel:'🥾 Hiking',       dist:'~25 km', phone:'',  rating:'🥾 11.3 km · Medium' },
  { slug:'rio-barosa',        lat:42.5135,  lng:-8.6390,  name:'Parque Natural del Río Barosa · PR-G 105', cat:'hiking', subcatLabel:'🥾 Hiking',  dist:'~15 km', phone:'',  rating:'🥾 3.2 km · Easy' },
  { slug:'cascada-segade',    lat:42.6020,  lng:-8.6440,  name:'Cascada de Segade · Río Umia',            cat:'hiking', subcatLabel:'🥾 Hiking',  dist:'~20 km', phone:'',  rating:'🥾 6.8 km · Moderate' },
  { slug:'monteros-galaicos', lat:42.4667,  lng:-7.9833,  name:'Monteros Galaicos · San Cristóbal de Cea', cat:'fishing', subcatLabel:'🎯 Game Hunting', dist:'~58 km', phone:'+34 618 78 42 82', rating:'🎯 Big Game' },
  { slug:'monteros-galaicos', lat:41.9919,  lng:-8.7436,  name:'Monteros Galaicos · Tomiño',              cat:'fishing', subcatLabel:'🎯 Game Hunting', dist:'~45 km', phone:'+34 618 78 42 82', rating:'🎯 Big Game' },
  // Horseback
  { slug:'hipica-appalaosa',lat:42.4145, lng:-8.5957, name:'Hípica Appalaosa',        cat:'horseback', subcatLabel:'🐴 Horseback',    dist:'~6 km',  phone:'+34 697 29 03 55', rating:'★ 4.7' },
  { slug:'o-casal',         lat:42.3986, lng:-8.6650, name:'O Casal Equitación',      cat:'horseback', subcatLabel:'🐴 Horseback',    dist:'~9 km',  phone:'+34 671 07 72 80', rating:'★ 4.3' },
  { slug:'hipica-rabadeira',lat:42.3994, lng:-8.5044, name:'Hípica Rabadeira',        cat:'horseback', subcatLabel:'🐴 Horseback',    dist:'~11 km', phone:'+34 659 13 19 99', rating:'★ 5.0' },
  // Wine
  { slug:'pazo-senorans',   lat:42.5471, lng:-8.7088, name:'Pazo de Señorans',        cat:'wine',      subcatLabel:'🍷 Wine',         dist:'~13 km', phone:'+34 986 71 53 73', rating:'★ 4.8' },
  { slug:'terras-lantano',  lat:42.5694, lng:-8.6871, name:'Terras de Lantaño',       cat:'wine',      subcatLabel:'🍷 Wine',         dist:'~13 km', phone:'+34 615 64 64 42', rating:'★ 4.7' },
  { slug:'mar-de-frades',   lat:42.5033, lng:-8.7490, name:'Bodega Mar de Frades',    cat:'wine',      subcatLabel:'🍷 Wine',         dist:'~14 km', phone:'+34 637 47 94 69', rating:'★ 4.5' },
  { slug:'vionta',          lat:42.4287, lng:-8.7637, name:'Bodegas Vionta',          cat:'wine',      subcatLabel:'🍷 Wine',         dist:'~15 km', phone:'+34 986 74 75 66', rating:'★ 4.8' },
  { slug:'pazo-baion',      lat:42.5629, lng:-8.7196, name:'Bodega Pazo Baión',       cat:'wine',      subcatLabel:'🍷 Wine',         dist:'~15 km', phone:'+34 636 80 02 34', rating:'★ 4.7' },
  { slug:'granbazan',       lat:42.5398, lng:-8.7866, name:'Bodegas Granbazán',       cat:'wine',      subcatLabel:'🍷 Wine',         dist:'~16 km', phone:'+34 986 55 55 62', rating:'★ 4.8' },
  { slug:'martin-codax',    lat:42.5201, lng:-8.7924, name:'Bodegas Martín Códax',    cat:'wine',      subcatLabel:'🍷 Wine',         dist:'~17 km', phone:'+34 986 52 60 40', rating:'★ 4.6' },
  // Events — located at the property (slight offset so pins don't overlap)
  { slug:'consejo-silvia',  lat:42.4715, lng:-8.5935, name:'El Consejo de Silvia',    cat:'events',    subcatLabel:'💒 Events',       dist:'At the Pazo',  phone:'+34 647 03 25 75', rating:'★ 5.0' },
  { slug:'la-narunera',     lat:42.4685, lng:-8.5965, name:'La Narunera',             cat:'events',    subcatLabel:'💒 Events',       dist:'At the Pazo',  phone:'+34 657 63 04 14', rating:'★ 5.0' },
];

const CAT_CONFIG = {
  property:  { color:'#3d5235', emoji:'🏰', label:'The Pazo' },
  fishing:   { color:'#2a6b80', emoji:'🎣', label:'Fishing & Coast' },
  hiking:    { color:'#3d5235', emoji:'🥾', label:'Hiking' },
  horseback: { color:'#8a4a20', emoji:'🐴', label:'Horseback' },
  wine:      { color:'#6b2a5a', emoji:'🍷', label:'Wine' },
  events:    { color:'#2a3a6b', emoji:'💒', label:'Events' },
};

// Bilingual popup strings
const POPUP_I18N = {
  en: {
    fromPazo: 'from the Pazo',
    yourEstate: 'Your estate · Lugar a Mota, 9',
    thePazo: 'The Pazo',
    atPazo: 'At the Pazo',
    subcatLabels: {
      '🎣 River':        '🎣 River',
      '🎣 Coastal':      '🎣 Coastal',
      '🎯 Game Hunting': '🎯 Game Hunting',
      '🥾 Hiking':       '🥾 Hiking',
      '🐴 Horseback':    '🐴 Horseback',
      '🍷 Wine':         '🍷 Wine',
      '💒 Events':       '💒 Events',
    },
    ratings: {}
  },
  es: {
    fromPazo: 'desde el Pazo',
    yourEstate: 'La finca · Lugar a Mota, 9',
    thePazo: 'El Pazo',
    atPazo: 'En el Pazo',
    subcatLabels: {
      '🎣 River':        '🎣 Río',
      '🎣 Coastal':      '🎣 Costa',
      '🎯 Game Hunting': '🎯 Caza Mayor',
      '🥾 Hiking':       '🥾 Senderismo',
      '🐴 Horseback':    '🐴 Equitación',
      '🍷 Wine':         '🍷 Vino',
      '💒 Events':       '💒 Celebraciones',
    },
    ratings: {
      '🎣 Trout':               '🎣 Trucha',
      '🎣 Trout · Reo':         '🎣 Trucha · Reo',
      '🎣 Trout · Barbel':      '🎣 Trucha · Barbo',
      '🎯 Big Game':            '🎯 Caza Mayor',
      '🥾 Blue Trail':          '🥾 Sendero Azul',
      '🥾 Blue Trail · All levels': '🥾 Sendero Azul · Todos los niveles',
      '🥾 3.2 km · Easy':       '🥾 3,2 km · Fácil',
      '🥾 4.9 km · Easy':       '🥾 4,9 km · Fácil',
      '🥾 6.8 km · Moderate':   '🥾 6,8 km · Moderado',
      '🥾 8.6 km · Easy':       '🥾 8,6 km · Fácil',
      '🥾 11 km · Easy–Med':    '🥾 11 km · Fácil–Medio',
      '🥾 11.3 km · Medium':    '🥾 11,3 km · Medio',
    }
  }
};

function buildPartnerPopup(p, lang) {
  const cfg = CAT_CONFIG[p.cat];
  const t = POPUP_I18N[lang] || POPUP_I18N.en;
  const label = (t.subcatLabels[p.subcatLabel] || p.subcatLabel) || (cfg.emoji + ' ' + cfg.label);
  const rating = t.ratings[p.rating] || p.rating;
  const dist = p.dist === 'At the Pazo' ? t.atPazo : p.dist;
  return `<div class="popup-inner">
    <div class="popup-cat" style="color:${cfg.color}">${label}</div>
    <div class="popup-name">${p.name}</div>
    <div class="popup-dist">${dist} ${t.fromPazo} &nbsp;·&nbsp; ${rating}</div>
    ${p.phone ? `<div class="popup-phone">${p.phone}</div>` : ''}
  </div>`;
}

function buildPropertyPopup(lang) {
  const t = POPUP_I18N[lang] || POPUP_I18N.en;
  return `<div class="popup-inner popup-property">
    <div class="popup-cat">${t.thePazo}</div>
    <div class="popup-name">🏰 ${PROPERTY.name}</div>
    <div class="popup-dist" style="color:#3d5235;font-weight:400">${t.yourEstate}</div>
  </div>`;
}

function rebindPopups(lang) {
  propMarker.setPopupContent(buildPropertyPopup(lang));
  PARTNERS.forEach(p => {
    const entries = markersBySlug[p.slug] || [];
    entries.forEach(({ marker, data }) => {
      if (data.lat === p.lat && data.lng === p.lng) {
        marker.setPopupContent(buildPartnerPopup(p, lang));
      }
    });
  });
}
