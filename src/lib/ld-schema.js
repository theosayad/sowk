// src/lib/ld-schema.js
// One canonical origin — change if you prefer https://sowk.org
export const ORIGIN = "https://sowk.org";

export const siteGraph = [
  {
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    "url": `${ORIGIN}/`,
    "name": "SOWK Guesthouse",
    "description": "Getaway Villa in Smar Jbeil, Batroun — stone architecture, pool & Crusader-era views.",
    "inLanguage": "en",
    "publisher": { "@id": `${ORIGIN}/#business` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${ORIGIN}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@type": "LodgingBusiness",
    "@id": `${ORIGIN}/#business`,
    "name": "SOWK Guesthouse",
    "alternateName": "Somewhere Only We Know",
    "url": `${ORIGIN}/`,
    "image": [
      `${ORIGIN}/images/main-home.jpg`,
      `${ORIGIN}/images/hero.jpg`
    ],
    "photo": [
      { "@type": "ImageObject", "url": `${ORIGIN}/images/main-home.jpg` },
      { "@type": "ImageObject", "url": `${ORIGIN}/images/hero.jpg` }
    ],
    "description": "Gated stone villa with private pool and garden fireplace. Footsteps from Smar Jbeil’s Crusader citadel. Sleeps up to 4 guests.",
    "slogan": "Boutique Escape in Batroun",
    "priceRange": "$$ – $$$",
    "telephone": "+961-76-492-276",
    "email": "stay@sowk.org",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road",
      "addressLocality": "Smar Jbeil",
      "addressRegion": "North Governorate",
      "addressCountry": "LB"
    },
    "containedInPlace": { "@id": `${ORIGIN}/#batroun` },
    "geo": { "@type": "GeoCoordinates", "latitude": 34.2211667, "longitude": 35.6891111 },
    "hasMap": "https://maps.app.goo.gl/S5VhCWK7YR14cPT5A",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Private pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Firepit & wood", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Optional breakfast", "value": true }
    ],
    "petsAllowed": true,
    "numberOfRooms": { "@type": "QuantitativeValue", "value": 3 },
    "keywords": "Batroun guesthouse, Smar Jbeil villa, Batroun Airbnb, North Lebanon boutique lodging",
    "currenciesAccepted": "USD, LBP",
    "paymentAccepted": "Cash, Credit Card",
    "sameAs": ["https://www.instagram.com/sowklb"],
    "logo": {
      "@type": "ImageObject",
      "url": `${ORIGIN}/images/sowk_logo-min.png`,
      "width": 180,
      "height": 180
    },
    "nearby": { "@id": `${ORIGIN}/#smar-jbeil-citadel` }
  },
  {
    "@type": ["AdministrativeArea", "Place"],
    "@id": `${ORIGIN}/#batroun`,
    "name": "Batroun District",
    "alternateName": "Caza Batroun",
    "containedInPlace": { "@type": "Place", "name": "North Governorate" }
  },
  {
    "@type": ["LandmarksOrHistoricalBuildings", "TouristAttraction"],
    "@id": `${ORIGIN}/#smar-jbeil-citadel`,
    "name": "Smar Jbeil Citadel",
    "isPartOf": { "@id": `${ORIGIN}/#batroun` },
    "description": "Crusader-era hilltop fortress overlooking Batroun District.",
    "image": { "@type": "ImageObject", "url": `${ORIGIN}/images/smarjbeilcitadel.jpg` }
  }
];