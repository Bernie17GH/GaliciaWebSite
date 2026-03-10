/* ═══════════════════════════════════════════════════
   translations.js — all i18n strings + setLang()
   Add new languages by adding a block to TRANSLATIONS
   ═══════════════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    'nav.estate':       'The Estate',
    'nav.gallery':      'Gallery',
    'nav.experiences':  'Experiences',
    'nav.celebrations': 'Celebrations',
    'nav.enquire':      'Enquire',
    'nav.partners':     'Partners',

    'hero.label': 'Galicia, Spain &nbsp;·&nbsp; 17th Century Pazo',
    'hero.h1':    'Where <em>granite</em> holds<br>four centuries<br>of <em>living memory</em>',
    'hero.sub':   'A noble Galician estate — its walls draped in ivy, its chapel bell still ringing — now opening for weddings, retreats, and a quiet base for nearby excursions.',
    'hero.cta':   'Discover the Pazo',
    'hero.scroll':'Scroll',

    'story.label':   'The Estate',
    'story.h2':      'A <em>pazo</em> unlike<br>any other',
    'story.caption': 'The estate chapel — c. 17th century',
    'story.p1.start':'Nestled in the Celtic hills of Galicia, the <em>pazo</em> is the noble manor house of this singular corner of Spain — built not to impress nearby city inhabitants, but to exist harmoniously with the surrounding land. This estate, dating to the 17th century, is one of the finest examples of Galician manors of the period: a long granite body draped in centuries of ivy, a private chapel with its original bell tower, heraldic stone fountains, a cobbled inner courtyard, and views that stretch over the valley to the forested hills beyond.',
    'story.p2':      'Its stone cross — a <em>cruceiro</em> — still stands at the garden wall, as it has for three hundred years. The magnolias are older than memory. The bell still rings. Now, for the first time, this estate opens its doors to those who seek something beyond the ordinary: a place where history is inescapable but where stories are still being written.',

    'feat.century.name':  '17th Century',
    'feat.century.desc':  'Original granite manor, chapel, and courtyard in remarkable condition',
    'feat.grounds.name':  'Private Grounds',
    'feat.grounds.desc':  'Meadows, orchards, woodland trails, and sweeping valley views',
    'feat.chapel.name':   'Chapel on Site',
    'feat.chapel.desc':   'An original estate chapel with bell tower — rare and extraordinary',
    'feat.location.name': 'Galicia, España',
    'feat.location.desc': "Celtic heartland — green, wild, and one of Europe's best-kept secrets",

    'gallery.label': 'The Estate in Images',
    'gallery.h2':    'See the <em>Pazo</em>',

    'exp.label':       'What Awaits',
    'exp.h2':          'Curated <em style="color:var(--stone)">Experiences</em>',
    'exp.intro':       'Every stay is shaped by the surrounding land, the current season, and you. Each experience is crafted in partnership with the finest local proprietors, guides, and artisans of Galicia.',
    'exp.allpartners': 'View All Partners →',

    'exp.wine.title':     'Wine &amp; Gastronomy',
    'exp.wine.desc':      'Private tours and tastings at the great Rías Baixas bodegas — Martín Códax, Pazo Baión, Señorans, Granbazán — paired with feasts of local Galician produce back at the estate.',
    'exp.wine.hint':      '7 partner wineries nearby →',
    'exp.hiking.title':   'Hiking &amp; Nature',
    'exp.hiking.desc':    'Guided walks through ancient oak forests, river valleys, and coastal cliffs with 5-star local guide Pablo of MountainPics Adventures — routes tailored to every level.',
    'exp.hiking.hint':    '8 hiking trails &amp; guided walks →',
    'exp.horse.title':    'Horseback Riding',
    'exp.horse.desc':     'Trail rides through the Galician countryside and ancient forests, including the legendary Camino de Santiago on horseback — arranged with three outstanding local centres.',
    'exp.horse.hint':     '3 equestrian partners within 11 km →',
    'exp.fishing.title':  'Fishing and Game',
    'exp.fishing.desc':   'Join locals harvesting shellfish in the Rías, fly fish for trout on Galicia\'s rivers, or hunt for wild boar with local outfitters.',
    'exp.fishing.hint':   '7 fishing and game partners →',
    'exp.weddings.title': 'Weddings &amp; Celebrations',
    'exp.weddings.desc':  'The cobbled courtyard, colonnaded galleries, on-site chapel, and sweeping grounds make this one of the most extraordinary celebration venues in all of Spain.',
    'exp.weddings.hint':  'Full-service planning partners available →',
    'exp.corporate.title':'Corporate Retreats',
    'exp.corporate.desc': 'Leadership offsites and team experiences in a setting of genuine history — private, inspiring, and unlike any boardroom. Combined with hiking, wine, and coastal excursions.',
    'exp.corporate.hint': 'Full curated itineraries on request →',

    'partners.label': 'Local Partners',
    'partners.h2':    'Our Curated <em>Experiences</em>',
    'partners.intro': 'Exceptional local businesses, wineries, and guides — all personally selected to enrich your time at the Pazo. Each is within comfortable day-excursion distance or hosted right here at the Pazo.',

    'filter.all':      'All',
    'filter.fishing':  '🎣 Fishing',
    'filter.hiking':   '🥾 Hiking',
    'filter.horseback':'🐴 Horseback',
    'filter.wine':     '🍷 Wine',
    'filter.events':   '💒 Events',

    'pcat.fishing':   '🎣 Coastal',
    'pcat.river':     '🎣 River',
    'pcat.hiking':    '🥾 Hiking',
    'pcat.horseback': '🐴 Horseback',
    'pcat.wine':      '🍷 Wine',
    'pcat.events':    '💒 Weddings &amp; Events',

    'partner.atpazo':          'At the Pazo',
    'partner.pescaturismo.desc':'Shellfish harvesting experiences with the celebrated fisherwomen of Cambados — a deeply authentic, hands-on glimpse into Galician coastal culture.',
    'partner.escaparia.desc':  'Private boat charters to hidden Atlantic beaches in the Aldan estuary. English-speaking captain Matt consistently earns raves — ideal for international guests.',
    'partner.latoja.desc':     'A beloved mussel boat experience — cruise the raft farms of O Grove with unlimited mussels and local wine. One of the most reviewed tourism experiences in the province.',
    'partner.cruceiros.desc':  'A large catamaran operation with 1,600+ reviews — the region\'s most popular group boat excursion. Mussels, paella, and local wine served on board with views of the estuary.',
    'partner.lerez.desc':      "One of Galicia's finest trout rivers, running through ancient oak forest virtually on the estate's doorstep. The Cutián beat offers 5 daily permits on a first-come basis. A guide is not included — but we can help you arrange one.",
    'partner.verdugo.desc':    'Two rivers meet at the spectacular Poza das Bestas beneath a historic hanging bridge — trout, barbel, and eel in pools beloved by local anglers for generations. Permits via the Xunta. We can help arrange a guide for the full experience.',
    'partner.mountainpics.desc':'Pablo leads extraordinary guided hiking and adventure expeditions across Galicia. A perfect fit for team-building excursions, nature wellness days, and multi-day itineraries.',
    'partner.sendeiro.desc':   'An 8–9 km circular trail hugging the Verdugo riverbank through ancient oak forests, stepping-stone crossings, old mills, and a river beach at A Calzada. The first inland trail in Spain to earn Blue Trail certification from ADEAC — outstanding for all levels.',
    'partner.poio.desc':       'A 4.9 km easy coastal walk along the Ría de Pontevedra passing the Parque da Memoria, the oystercatcher estuary of Reiboa, ancient water mills, and the first oyster cultivation park on the Iberian peninsula. Superb birdwatching throughout.',
    'partner.marin.desc':      'A spectacular 11 km route linking five Blue Flag beaches with ancient hilltop forest — and a visit to the extraordinary Bronze Age petroglyphs of Mogor, one of the finest rock art sites in Europe. Panoramic mirador views over the Ría throughout.',
    'partner.sanxenxo.desc':   'An 8.6 km coastal path between Sanxenxo and Portonovo tracing clifftop promenades, dune systems, and fishing village waterfronts — ending at the fish market lonja with views across the Ría. Easy terrain, outstanding scenery throughout.',
    'partner.silvia.desc':     'Silvia specialises in destination weddings and is experienced at coordinating international couples remotely — from Miami, China, and beyond. Methodical, warm, and universally praised.',
    'partner.ainara.desc':     'Ainara creates bespoke, story-driven celebrations with extraordinary attention to detail. A photographer\'s dream — every event she designs is considered a visual masterpiece.',
    'partner.cabudra.desc':    'An 11.3 km circular trail through a Natura 2000 reserve and Special Protection Area for Birds at Cabo Udra — dramatic Atlantic headland, diverse habitats, and an on-site Nature Interpretation Centre. The most wild and challenging of the local Blue Trails.',
    'partner.barosa.desc':     'A short but enchanting circular walk through a protected river park on the Portuguese Camino to Compostela. Seventeen historic water mills line the trail as the Barosa river tumbles over a dramatic 30-metre waterfall — a hidden gem of Galician natural and industrial heritage. Family-friendly and walkable year-round.',
    'partner.segade.desc':     'A riverside walk along the Umia from the 19th-century botanical garden of Caldas de Reis to the spectacular Fervenza de Segade — a 30-metre waterfall that plunges into deep natural pools, perfect for swimming in summer. En route, the ruins of a 1900-era hydroelectric plant add an unexpected layer of industrial history. Beautiful in every season and walkable year-round.',
    'partner.monteros.desc':   'A Galician hunting association organising driven big game hunts — wild boar, deer, and roe deer — through the oak and chestnut forests of the Ourense interior. A deeply traditional Galician field sport, available to visiting guests with the Pazo\'s assistance in arranging permits and logistics.',
    'partner.appalaosa.desc':  'Forest trail rides through Galician countryside suitable for all abilities, from first-timers to experienced riders. Cholo and his team are renowned for their warmth and well-cared-for horses.',
    'partner.ocasal.desc':     'Natural horsemanship, equine therapy, trail rides, and farm animals. A wellness-focused equestrian centre — excellent for mindfulness retreats and family experiences.',
    'partner.rabadeira.desc':  'The premier horseback experience — offering the Camino de Santiago on horseback, a once-in-a-lifetime multi-day journey. Guide Rafa is celebrated by every guest he leads.',
    'partner.senorans.desc':   'One of the crown jewels of the Rías Baixas — a historic Pazo estate that also hosts weddings and large events. English-speaking guides and extraordinary Albariño.',
    'partner.lantano.desc':    'A boutique family winery with historically significant Albariño vines. Very personal, artisanal atmosphere — ideal for curated small-group experiences with a sense of genuine discovery.',
    'partner.marefrades.desc': 'An internationally acclaimed producer on Finca Valiñas with sweeping estuary views. Guided tours in English with guide Sandra, cited by Decanter for outstanding quality.',
    'partner.vionta.desc':     'A hilltop winery with spectacular panoramic views over the Rías. English-speaking guide Ursula leads tours praised universally for their warmth and depth of knowledge.',
    'partner.pazobaioon.desc': 'A historic Pazo estate winery with stunning grounds and consistently praised tours. Guide Eugenia brings this exceptional Albariño estate to life for guests at every level.',
    'partner.granbazan.desc':  'One of the highest-rated wine experiences in the region — an architecturally striking château-style estate with 548 reviews. Also a wedding and event venue; a natural cross-referral partner.',
    'partner.martincodax.desc':'One of the most iconic and internationally recognised Rías Baixas producers. Guided tours in excellent English with seafood pairings — a flagship experience for wine-focused guests.',

    'wed.label': 'Celebrations',
    'wed.h2':    'Weddings &amp; <em>Special Events</em>',
    'wed.intro': "The pazo's cobbled courtyard, colonnaded galleries, chapel, and sweeping grounds make it one of the most extraordinary wedding venues in all of Spain. A celebration here is not merely memorable — it is unforgettable.",
    'wed.li1':   'Exclusive estate hire for weddings and private celebrations',
    'wed.li2':   'On-site chapel available for ceremonies',
    'wed.li3':   'Private accommodation for the wedding party and guests',
    'wed.li4':   'In-house catering with regional Galician cuisine and local wines',
    'wed.li5':   'Stone courtyards, terraces, and gardens for outdoor receptions',
    'wed.li6':   'Family holidays and multi-generational group stays',
    'wed.li7':   'Full event coordination and trusted local supplier network',

    'det.label':      'Details of the Estate',
    'det.h2':         'Centuries of <em>craft</em> in stone',
    'det.body':       'Every corner of this pazo tells a story. The heraldic fountain bears the family coat of arms of its original noble owners, carved in granite four hundred years ago. The <em>cruceiro</em> — the traditional Galician stone cross — stands watch over the orchard as it always has. The colonnaded gallery looks over the valley, unchanged since the day it was built.',
    'det.built':      'Built',
    'det.arch':       'Architecture',
    'det.chapel':     'Chapel',
    'det.chapelval':  'On-site, original bell tower',
    'det.grounds':    'Grounds',
    'det.groundsval': 'Meadows, orchards &amp; woodland',
    'det.location':   'Location',

    'sea.label':       'Year Round',
    'sea.h2':          'Open across<br>all <em>four<br>seasons</em>',
    'sea.spring.name': 'Spring',
    'sea.spring.desc': 'Camellia gardens in bloom, wildflowers in the meadows, and the first warmth of the Galician sun.',
    'sea.summer.name': 'Summer',
    'sea.summer.desc': 'Long golden evenings, outdoor celebrations, and wedding season at its most glorious.',
    'sea.autumn.name': 'Autumn',
    'sea.autumn.desc': 'Harvest feasts, truffle walks, wine events, and the forests turning gold and amber.',
    'sea.winter.name': 'Winter',
    'sea.winter.desc': 'Stone fireplaces, misty forest hikes, and intimate retreats in the deep quiet of the estate.',

    'con.label':    'Begin Your Story',
    'con.h2':       'Make an <em>Enquiry</em>',
    'con.sub':      "Whether you're planning a wedding, dreaming of a retreat, or searching for a holiday unlike any other — we would love to hear from you. Every enquiry receives a personal response within 48 hours.",
    'con.firstname':'First Name',
    'con.lastname': 'Last Name',
    'con.email':    'Email Address',
    'con.phone':    'Phone (optional)',
    'con.opt0':     'Type of Enquiry',
    'con.opt1':     'Wedding or Celebration',
    'con.opt2':     'Wellness or Yoga Retreat',
    'con.opt3':     'Corporate Offsite',
    'con.opt4':     'Family Holiday',
    'con.opt5':     'Wine &amp; Gastronomy Experience',
    'con.opt6':     'Hiking, Fishing or Horse Trails',
    'con.opt7':     'General Enquiry',
    'con.dates':    'Approximate Dates',
    'con.guests':   'Number of Guests',
    'con.vision':   'Tell us about your vision — what kind of experience are you dreaming of?',
    'con.submit':   'Send Enquiry',

    // marquee
    'marq': ['Weddings &amp; Celebrations','Wellness Retreats','Wine &amp; Gastronomy','Horseback Trails','Fishing and Game','Hiking &amp; Nature','Corporate Escapes','Rías Baixas Wineries','17th Century Heritage','Private Estate'],
  },

  es: {
    'nav.estate':       'La Finca',
    'nav.gallery':      'Galería',
    'nav.experiences':  'Experiencias',
    'nav.celebrations': 'Celebraciones',
    'nav.enquire':      'Contacto',
    'nav.partners':     'Colaboradores',

    'hero.label': 'Galicia, España &nbsp;·&nbsp; Pazo del Siglo XVII',
    'hero.h1':    'Donde muros de <em>granito</em> guardan<br>cuatro siglos<br>de <em>memoria viva</em>',
    'hero.sub':   'Una noble finca gallega — sus muros cubiertos de hiedra, su campana de capilla aún repicando — que abre sus puertas para bodas, retiros y como base tranquila para excursiones cercanas.',
    'hero.cta':   'Descubre el Pazo',
    'hero.scroll':'Desliza',

    'story.label':   'La Finca',
    'story.h2':      'Un <em>pazo</em> sin igual',
    'story.caption': 'La capilla de la finca — s. XVII',
    'story.p1.start':'Enclavado en las colinas celtas de Galicia, el <em>pazo</em> es la casa señorial de este singular rincón de España — construido no para impresionar a los habitantes de las ciudades cercanas, sino para existir en armonía con la tierra que lo rodea. Esta finca, que data del siglo XVII, es uno de los mejores ejemplos de casas señoriales gallegas del período: un largo cuerpo de granito cubierto de siglos de hiedra, una capilla privada con su campanario original, fuentes heráldicas de piedra, un patio interior empedrado y vistas que se extienden sobre el valle hasta las colinas boscosas.',
    'story.p2':      'Su cruz de piedra — un <em>cruceiro</em> — sigue en pie junto al muro del jardín, como lleva tres siglos haciéndolo. Las magnolias son más viejas que la memoria. La campana sigue repicando. Ahora, por primera vez, esta finca abre sus puertas a quienes buscan algo más allá de lo ordinario: un lugar donde la historia es ineludible pero donde nuevas historias aún se escriben.',

    'feat.century.name':  'Siglo XVII',
    'feat.century.desc':  'Pazo original de granito, capilla y patio interior en notable estado de conservación',
    'feat.grounds.name':  'Finca Privada',
    'feat.grounds.desc':  'Prados, huertos, senderos por el bosque y vistas panorámicas al valle',
    'feat.chapel.name':   'Capilla en la Finca',
    'feat.chapel.desc':   'Capilla original con campanario — un lujo auténtico y extraordinario',
    'feat.location.name': 'Galicia, España',
    'feat.location.desc': 'Corazón celta — verde, salvaje y uno de los secretos mejor guardados de Europa',

    'gallery.label': 'La Finca en Imágenes',
    'gallery.h2':    'Descubre el <em>Pazo</em>',

    'exp.label':       'Lo que te Espera',
    'exp.h2':          'Experiencias <em style="color:var(--stone)">Seleccionadas</em>',
    'exp.intro':       'Cada estancia se adapta al entorno, a la estación del año y a ti. Cada experiencia se diseña en colaboración con los mejores propietarios locales, guías y artesanos de Galicia.',
    'exp.allpartners': 'Ver Todos los Colaboradores →',

    'exp.wine.title':     'Vino &amp; Gastronomía',
    'exp.wine.desc':      'Visitas privadas y catas en las grandes bodegas de las Rías Baixas — Martín Códax, Pazo Baión, Señorans, Granbazán — maridadas con festines de producto gallego de temporada.',
    'exp.wine.hint':      '7 bodegas colaboradoras cercanas →',
    'exp.hiking.title':   'Senderismo &amp; Naturaleza',
    'exp.hiking.desc':    'Rutas guiadas por bosques de robles centenarios, valles fluviales y acantilados costeros con el guía local Pablo de MountainPics Adventures — itinerarios para todos los niveles.',
    'exp.hiking.hint':    '8 senderos &amp; rutas guiadas →',
    'exp.horse.title':    'Rutas a Caballo',
    'exp.horse.desc':     'Paseos por la campiña gallega y bosques antiguos, incluyendo el legendario Camino de Santiago a caballo — gestionado con tres centros ecuestres de primera calidad.',
    'exp.horse.hint':     '3 centros ecuestres a menos de 11 km →',
    'exp.fishing.title':  'Pesca y Caza',
    'exp.fishing.desc':   'Únete a los lugareños en la recolección de marisco en las Rías, pesca con mosca la trucha en los ríos de Galicia, o sal a cazar jabalí con los guías locales.',
    'exp.fishing.hint':   '7 socios de pesca y caza →',
    'exp.weddings.title': 'Bodas &amp; Celebraciones',
    'exp.weddings.desc':  'El patio empedrado, las galerías porticadas, la capilla y los amplios jardines convierten este pazo en uno de los espacios más extraordinarios para celebraciones de toda España.',
    'exp.weddings.hint':  'Coordinadores de eventos disponibles →',
    'exp.corporate.title':'Retiros Corporativos',
    'exp.corporate.desc': 'Jornadas de liderazgo y experiencias de equipo en un entorno de historia auténtica — privado, inspirador y sin parangón con cualquier sala de reuniones. Combinado con senderismo, vino y excursiones costeras.',
    'exp.corporate.hint': 'Itinerarios a medida bajo petición →',

    'partners.label': 'Colaboradores Locales',
    'partners.h2':    'Nuestras Experiencias <em>Seleccionadas</em>',
    'partners.intro': 'Negocios locales, bodegas y guías excepcionales — todos seleccionados personalmente para enriquecer tu estancia en el Pazo. Cada uno se encuentra a una cómoda distancia para una excursión de día, o se organiza aquí mismo en el Pazo.',

    'filter.all':      'Todos',
    'filter.fishing':  '🎣 Pesca',
    'filter.hiking':   '🥾 Senderismo',
    'filter.horseback':'🐴 Equitación',
    'filter.wine':     '🍷 Vino',
    'filter.events':   '💒 Eventos',

    'pcat.fishing':   '🎣 Costa',
    'pcat.river':     '🎣 Río',
    'pcat.hiking':    '🥾 Senderismo',
    'pcat.horseback': '🐴 Equitación',
    'pcat.wine':      '🍷 Vino',
    'pcat.events':    '💒 Bodas &amp; Eventos',

    'partner.atpazo':           'En el Pazo',
    'partner.pescaturismo.desc':'Experiencias de marisqueo con las célebres rederas de Cambados — una auténtica y práctica ventana a la cultura costera gallega.',
    'partner.escaparia.desc':   'Excursiones privadas en barco hacia playas atlánticas escondidas en el estuario de Aldán. El capitán angloparlante Matt acumula críticas extraordinarias — ideal para huéspedes internacionales.',
    'partner.latoja.desc':      'Una entrañable experiencia en batela mejillonera — navega entre los parques de cultivo de O Grove con mejillones y vino local ilimitados. Una de las experiencias turísticas más valoradas de la provincia.',
    'partner.cruceiros.desc':   'Un gran catamarán con más de 1.600 reseñas — la excursión en barco para grupos más popular de la región. Mejillones, paella y vino local servidos a bordo con vistas al estuario.',
    'partner.lerez.desc':       'Uno de los mejores ríos de trucha de Galicia, que discurre por un bosque de robles centenarios prácticamente a las puertas de la finca. El coto de Cutián ofrece 5 permisos diarios por orden de solicitud. El guía no está incluido, pero podemos ayudarte a conseguir uno.',
    'partner.verdugo.desc':     'Dos ríos confluyen en la espectacular Poza das Bestas bajo un histórico puente colgante — trucha, barbo y anguila en pozas queridas por generaciones de pescadores locales. Permisos a través de la Xunta. Podemos ayudarte a organizar un guía.',
    'partner.mountainpics.desc':'Pablo dirige extraordinarias expediciones de senderismo y aventura por toda Galicia. Una propuesta perfecta para actividades de team building, jornadas de bienestar en la naturaleza e itinerarios de varios días.',
    'partner.sendeiro.desc':    'Un sendero circular de 8-9 km que bordea el río Verdugo entre bosques de robles centenarios, pasos de piedras, molinos antiguos y una playa fluvial en A Calzada. El primer sendero interior de España en obtener la certificación Sendero Azul de ADEAC — excepcional para todos los niveles.',
    'partner.poio.desc':        'Un cómodo paseo costero de 4,9 km por la Ría de Pontevedra que pasa por el Parque da Memoria, el estuario de Reiboa, molinos de agua antiguos y el primer parque de cultivo de ostras de la Península Ibérica. Magnífico para la observación de aves.',
    'partner.marin.desc':       'Un espectacular recorrido de 11 km que enlaza cinco playas de Bandera Azul con un bosque de altura — y visita los extraordinarios petroglifos de la Edad del Bronce de Mogor, uno de los conjuntos de arte rupestre más importantes de Europa. Vistas panorámicas sobre la Ría.',
    'partner.sanxenxo.desc':    'Un sendero costero de 8,6 km entre Sanxenxo y Portonovo que recorre paseos marítimos sobre los acantilados, sistemas de dunas y frentes marítimos de pueblos pesqueros — con final en la lonja del mercado de pescado y vistas a la Ría. Terreno fácil y paisaje extraordinario.',
    'partner.silvia.desc':      'Silvia está especializada en bodas de destino y tiene experiencia coordinando parejas internacionales a distancia — desde Miami, China y más allá. Metódica, cercana y universalmente elogiada.',
    'partner.ainara.desc':      'Ainara crea celebraciones únicas y llenas de significado con una atención al detalle extraordinaria. El sueño de cualquier fotógrafo — cada evento que diseña es considerado una obra maestra visual.',
    'partner.cabudra.desc':     'Un sendero circular de 11,3 km por una reserva Natura 2000 y Zona de Especial Protección para las Aves en Cabo Udra — promontorio atlántico de gran dramatismo, hábitats diversos y un Centro de Interpretación de la Naturaleza in situ. El más salvaje y exigente de los Senderos Azules locales.',
    'partner.barosa.desc':      'Un corto pero encantador paseo circular por un parque fluvial protegido en el Camino Portugués a Compostela. Diecisiete molinos históricos jalonan el sendero mientras el río Barosa cae en cascada por una dramática caída de 30 metros — una joya escondida del patrimonio natural e industrial gallego. Apto para familias y transitable durante todo el año.',
    'partner.segade.desc':      'Un paseo fluvial a lo largo del Umia desde el jardín botánico del siglo XIX de Caldas de Reis hasta la espectacular Fervenza de Segade — una cascada de 30 metros que se precipita en profundas pozas naturales, perfectas para el baño en verano. En el camino, las ruinas de una central hidroeléctrica de 1900 añaden una inesperada capa de historia industrial. Hermosa en cualquier estación y transitable durante todo el año.',
    'partner.monteros.desc':    'Una asociación de caza gallega que organiza monterías de caza mayor — jabalí, ciervo y corzo — por los bosques de robles y castaños del interior ourensano. Un deporte de campo profundamente tradicional en Galicia, disponible para los huéspedes del Pazo con nuestra asistencia en la tramitación de permisos y la logística.',
    'partner.appalaosa.desc':   'Rutas a caballo por la campiña gallega adaptadas a todos los niveles, desde principiantes hasta jinetes experimentados. Cholo y su equipo son reconocidos por su calidez y el excelente cuidado de sus caballos.',
    'partner.ocasal.desc':      'Horsemanship natural, equinoterapia, rutas a caballo y animales de granja. Un centro ecuestre con enfoque en el bienestar — excelente para retiros de mindfulness y experiencias en familia.',
    'partner.rabadeira.desc':   'La experiencia ecuestre de referencia — ofrece el Camino de Santiago a caballo, un viaje de varios días para toda la vida. El guía Rafa es celebrado por todos los huéspedes a los que ha acompañado.',
    'partner.senorans.desc':    'Una de las joyas de las Rías Baixas — una histórica finca tipo pazo que también acoge bodas y grandes eventos. Guías angloparlantes y un Albariño extraordinario.',
    'partner.lantano.desc':     'Una bodega familiar boutique con viñas de Albariño de especial relevancia histórica. Ambiente muy personal y artesanal — ideal para experiencias íntimas en grupo pequeño con sensación de descubrimiento genuino.',
    'partner.marefrades.desc':  'Un productor de reconocimiento internacional en Finca Valiñas, con vistas panorámicas al estuario. Visitas guiadas en inglés con la guía Sandra, reconocida por Decanter por su calidad excepcional.',
    'partner.vionta.desc':      'Una bodega en lo alto de una colina con espectaculares vistas panorámicas sobre las Rías. La guía angloparlante Ursula dirige visitas unánimemente elogiadas por su calidez y profundidad de conocimiento.',
    'partner.pazobaioon.desc':  'Una bodega en una finca histórica tipo pazo con unos jardines impresionantes y visitas consistentemente alabadas. La guía Eugenia da vida a este excepcional Albariño para los huéspedes de todos los niveles.',
    'partner.granbazan.desc':   'Una de las experiencias vínicas mejor valoradas de la región — una finca de estilo château arquitectónicamente destacada con 548 reseñas. También es un espacio para bodas y eventos; un colaborador natural de mutua referencia.',
    'partner.martincodax.desc': 'Uno de los productores de las Rías Baixas más icónicos e internacionalmente reconocidos. Visitas guiadas en excelente inglés con maridaje de marisco — una experiencia de referencia para los amantes del vino.',

    'wed.label': 'Celebraciones',
    'wed.h2':    'Bodas &amp; <em>Eventos Especiales</em>',
    'wed.intro': 'El patio empedrado, las galerías porticadas, la capilla y los amplios jardines del pazo lo convierten en uno de los espacios para bodas más extraordinarios de toda España. Una celebración aquí no es simplemente memorable — es inolvidable.',
    'wed.li1':   'Alquiler exclusivo de la finca para bodas y celebraciones privadas',
    'wed.li2':   'Capilla disponible para la ceremonia',
    'wed.li3':   'Alojamiento privado para los novios e invitados',
    'wed.li4':   'Catering propio con cocina gallega de temporada y vinos locales',
    'wed.li5':   'Patios de piedra, terrazas y jardines para celebraciones al aire libre',
    'wed.li6':   'Vacaciones familiares y estancias para grupos multigeneracionales',
    'wed.li7':   'Coordinación integral del evento y red de proveedores locales de confianza',

    'det.label':      'Detalles de la Finca',
    'det.h2':         'Siglos de <em>arte</em> en piedra',
    'det.body':       'Cada rincón de este pazo cuenta una historia. La fuente heráldica luce el escudo familiar de sus nobles propietarios originales, tallado en granito hace cuatrocientos años. El <em>cruceiro</em> — la tradicional cruz de piedra gallega — vigila el huerto como siempre lo ha hecho. La galería porticada contempla el valle, inmutable desde el día en que fue construida.',
    'det.built':      'Construido',
    'det.arch':       'Arquitectura',
    'det.chapel':     'Capilla',
    'det.chapelval':  'En la finca, campanario original',
    'det.grounds':    'Terrenos',
    'det.groundsval': 'Prados, huertos &amp; bosque',
    'det.location':   'Ubicación',

    'sea.label':       'Todo el Año',
    'sea.h2':          'Abierto las<br><em>cuatro<br>estaciones</em>',
    'sea.spring.name': 'Primavera',
    'sea.spring.desc': 'Jardines de camelias en flor, flores silvestres en los prados y el primer calor del sol gallego.',
    'sea.summer.name': 'Verano',
    'sea.summer.desc': 'Largas tardes doradas, celebraciones al aire libre y la temporada de bodas en todo su esplendor.',
    'sea.autumn.name': 'Otoño',
    'sea.autumn.desc': 'Banquetes de cosecha, rutas de trufa, eventos vinícolas y los bosques tornándose dorados y cobrizos.',
    'sea.winter.name': 'Invierno',
    'sea.winter.desc': 'Chimeneas de piedra, excursiones por los bosques entre la niebla y retiros íntimos en el silencio profundo de la finca.',

    'con.label':    'Comienza tu Historia',
    'con.h2':       'Haz una <em>Consulta</em>',
    'con.sub':      'Tanto si estás planeando una boda, soñando con un retiro, o buscando unas vacaciones fuera de lo común — nos encantaría saber de ti. Cada consulta recibe una respuesta personalizada en un plazo de 48 horas.',
    'con.firstname':'Nombre',
    'con.lastname': 'Apellidos',
    'con.email':    'Correo Electrónico',
    'con.phone':    'Teléfono (opcional)',
    'con.opt0':     'Tipo de Consulta',
    'con.opt1':     'Boda o Celebración',
    'con.opt2':     'Retiro de Bienestar o Yoga',
    'con.opt3':     'Evento Corporativo',
    'con.opt4':     'Vacaciones en Familia',
    'con.opt5':     'Experiencia Vino &amp; Gastronomía',
    'con.opt6':     'Senderismo, Pesca o Equitación',
    'con.opt7':     'Consulta General',
    'con.dates':    'Fechas Aproximadas',
    'con.guests':   'Número de Invitados',
    'con.vision':   '¿Cuéntanos tu idea — qué tipo de experiencia estás soñando?',
    'con.submit':   'Enviar Consulta',

    'marq': ['Bodas &amp; Celebraciones','Retiros de Bienestar','Vino &amp; Gastronomía','Rutas a Caballo','Pesca Costera','Senderismo &amp; Naturaleza','Escapadas Corporativas','Bodegas Rías Baixas','Patrimonio del Siglo XVII','Finca Privada'],
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];

  // Update flag button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.getAttribute('onclick').includes(`'${lang}'`));
  });

  // Text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key].replace(/&amp;/g,'&');
  });

  // HTML elements (contain <em>, <br> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key].replace(/&amp;/g,'&');
  });

  // Marquee items
  const marqItems = document.querySelectorAll('.marquee-item');
  const marqList = t['marq'];
  marqItems.forEach((el, i) => {
    el.innerHTML = marqList[i % marqList.length];
  });

  // Set html lang attribute
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';

  // Refresh dynamic partners heading for current filter
  applyFilter(currentFilter || 'all');

  // Rebind map popups in new language
  if (typeof rebindPopups === 'function') rebindPopups(lang);
}
