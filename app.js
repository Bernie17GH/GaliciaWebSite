/* ═══════════════════════════════════════════════
   app.js — all interaction logic:
   carousels, filter, map init, card clicks,
   nav scroll, reveal-on-scroll, weddings
   ═══════════════════════════════════════════════ */

// Signal that JS has loaded — enables reveal animations
document.documentElement.classList.add('js-ready');

/* ── EXPERIENCE TILE CAROUSEL ── */
function advanceCard(card) {
  const imgs = card.querySelectorAll('.exp-img');
  if (imgs.length < 2) return;
  const activeIdx = [...imgs].findIndex(i => i.classList.contains('exp-img-active'));
  imgs[activeIdx].classList.remove('exp-img-active');
  imgs[(activeIdx + 1) % imgs.length].classList.add('exp-img-active');
}

document.querySelectorAll('.exp-card').forEach((card, i) => {
  // Stagger start so all 6 don't flip at the same moment
  setTimeout(() => {
    setInterval(() => advanceCard(card), 10000);
  }, i * 1667); // ~1.67s apart across 6 cards

  // Click the tile (not the hint link) to advance image immediately
  card.addEventListener('click', (e) => {
    if (e.target.closest('.exp-partners-hint')) return;
    advanceCard(card);
    // toggle active state for touch devices
    const isActive = card.classList.contains('active');
    document.querySelectorAll('.exp-card').forEach(c => c.classList.remove('active'));
    if (!isActive) card.classList.add('active');
  });
});

/* ── EXPERIENCE TILE → PARTNER FILTER LINK ── */
document.querySelectorAll('.exp-partners-hint').forEach(hint => {
  hint.addEventListener('click', () => {
    applyFilter(hint.dataset.filter);
    document.getElementById('partners').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ── NAV SCROLL ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── REVEAL ON SCROLL ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 90);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => observer.observe(el));

/* ── UNIFIED PARTNER + MAP FILTER ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const partnerCards = document.querySelectorAll('.partner-card');

function applyFilter(f) {
  currentFilter = f;

  // Dynamic partners heading
  const catLabels = {
    en: { all:'', fishing:'Fishing and Game', hiking:'Hiking', horseback:'Horseback', wine:'Wine', events:'Events' },
    es: { all:'', fishing:'Pesca y Caza', hiking:'Senderismo', horseback:'Equitación', wine:'Vino', events:'Celebraciones' }
  };
  const noSuffix = { events:true, celebraciones:true };
  const label = (catLabels[currentLang] || catLabels.en)[f];
  const h2 = document.getElementById('partners-h2');
  if (h2) h2.innerHTML = label
    ? (noSuffix[f] ? `Our Curated <em>${label}</em>` : `Our Curated <em>${label}</em> Experiences`)
    : `Our Curated Experiences`;

  // Clear any active card/marker selection
  if (activeCard) { activeCard.classList.remove('active'); activeCard = null; }
  activeMarkers.forEach(({ marker, data }) => marker.setIcon(makeIcon(data.cat, false)));
  activeMarkers = [];

  // Update active button state
  filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === f));

  // Filter partner cards
  partnerCards.forEach(card => {
    if (f === 'all' || card.dataset.cat === f) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  // Filter map markers and reset view to show all visible
  if (typeof markersByCategory !== 'undefined') {
    Object.entries(markersByCategory).forEach(([cat, markers]) => {
      markers.forEach(m => {
        if (f === 'all' || cat === f) {
          if (!map.hasLayer(m)) map.addLayer(m);
        } else {
          if (map.hasLayer(m)) map.removeLayer(m);
        }
      });
    });
    if (!map.hasLayer(propMarker)) map.addLayer(propMarker);
    resetMapView();
  }
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

/* ── LEAFLET MAP INIT ── */
function makeIcon(cat, isProperty) {
  const cfg = CAT_CONFIG[cat];
  const size = isProperty ? 44 : 36;
  const fontSize = isProperty ? '20px' : '16px';
  const border = isProperty ? '3px solid #b8913a' : '2px solid rgba(255,255,255,0.8)';
  return L.divIcon({
    className: '',
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${cfg.color};
      display:flex;align-items:center;justify-content:center;font-size:${fontSize};
      border:${border};box-shadow:0 2px 8px rgba(0,0,0,0.35);cursor:pointer;">${cfg.emoji}</div>`,
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -(size/2+4)]
  });
}

const map = L.map('map', { zoomControl:true }).setView([42.46, -8.72], 10);

// Ensure map knows its size whenever the layout settles or window resizes
setTimeout(() => map.invalidateSize(), 300);
window.addEventListener('resize', () => map.invalidateSize());

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution:'&copy; <a href="https://carto.com/">CARTO</a>',
  maxZoom: 19
}).addTo(map);


/* ── PROPERTY & PARTNER MARKERS ── */
// Property marker
const propMarker = L.marker([PROPERTY.lat, PROPERTY.lng], { icon: makeIcon('property', true) }).addTo(map);
propMarker.bindPopup(buildPropertyPopup('en'), { maxWidth: 220 });

// Partner markers — stored by slug for card click lookup
const markersByCategory = {};
const markersBySlug = {};

PARTNERS.forEach(p => {
  const m = L.marker([p.lat, p.lng], { icon: makeIcon(p.cat, false) });
  m.bindPopup(buildPartnerPopup(p, 'en'), { maxWidth: 240 });
  m.addTo(map);
  if (!markersByCategory[p.cat]) markersByCategory[p.cat] = [];
  markersByCategory[p.cat].push(m);
  if (!markersBySlug[p.slug]) markersBySlug[p.slug] = [];
  markersBySlug[p.slug].push({ marker: m, data: p });
});

// Highlighted icon — larger, gold ring
function makeIconHighlighted(cat) {
  const cfg = CAT_CONFIG[cat];
  return L.divIcon({
    className: '',
    html: `<div style="width:52px;height:52px;border-radius:50%;background:${cfg.color};
      display:flex;align-items:center;justify-content:center;font-size:22px;
      border:3px solid #b8913a;box-shadow:0 0 0 4px rgba(184,145,58,0.35),0 3px 12px rgba(0,0,0,0.45);
      cursor:pointer;transition:transform 0.2s;">${cfg.emoji}</div>`,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
    popupAnchor: [0, -30]
  });
}

// Card click → highlight or deselect
let activeMarkers = []; // replaces single activeMarker
let activeCard = null;
let currentFilter = 'all';

// Fit map to show all visible markers + property
function resetMapView() {
  map.invalidateSize();
  map.closePopup();
  const points = [[PROPERTY.lat, PROPERTY.lng]];
  PARTNERS.forEach(p => {
    if (currentFilter === 'all' || p.cat === currentFilter) {
      points.push([p.lat, p.lng]);
    }
  });
  map.fitBounds(L.latLngBounds(points), { padding: [48, 48], maxZoom: 12 });
}

document.querySelectorAll('.partner-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const slug = card.querySelector('[data-partner-slug]')?.dataset.partnerSlug;
    if (!slug || !markersBySlug[slug]) return;

    const entries = markersBySlug[slug]; // array of {marker, data}

    // Re-click active card → deselect
    if (activeCard === card) {
      card.classList.remove('active');
      activeMarkers.forEach(({ marker, data }) => {
        marker.setIcon(makeIcon(data.cat, false));
        marker.closePopup();
      });
      activeCard = null;
      activeMarkers = [];
      resetMapView();
      return;
    }

    // Reset previous active card + markers
    if (activeCard) activeCard.classList.remove('active');
    activeMarkers.forEach(({ marker, data }) => {
      marker.setIcon(makeIcon(data.cat, false));
    });

    // Activate new card + all its markers
    activeCard = card;
    activeMarkers = entries;
    card.classList.add('active');
    entries.forEach(({ marker, data }) => {
      marker._partnerCat = data.cat;
      marker.setIcon(makeIconHighlighted(data.cat));
    });

    // Fit map to show all partner locations + property
    const points = [[PROPERTY.lat, PROPERTY.lng], ...entries.map(({ data }) => [data.lat, data.lng])];
    map.invalidateSize();
    map.fitBounds(L.latLngBounds(points), { padding: [60, 60], maxZoom: 13 });

    // Open all location popups simultaneously after map settles
    setTimeout(() => {
      entries.forEach(({ marker }) => marker.openPopup());
    }, 420);
  });
});

// Always show property
if (!map.hasLayer(propMarker)) map.addLayer(propMarker);


/* ── WEDDINGS IMAGE CAROUSEL ── */
(function() {
  const imgs = document.querySelectorAll('.wed-img');
  if (imgs.length < 2) return;
  let idx = 0;
  setInterval(() => {
    imgs[idx].classList.remove('wed-img-active');
    idx = (idx + 1) % imgs.length;
    imgs[idx].classList.add('wed-img-active');
  }, 8000);
})();


