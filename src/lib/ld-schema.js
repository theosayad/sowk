// src/lib/ld-schema.js
export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.sowk.org/#website",
      "url": "https://www.sowk.org/",
      "name": "SOWK Guesthouse",
      "description": "Getaway Villa in Smar Jbeil, Batroun — stone architecture, pool & Crusader-era views.",
      "inLanguage": "en",
      "publisher": { "@id": "https://www.sowk.org/#business" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.sowk.org/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // Home page entity + breadcrumbs (helps context + sitelinks)
    {
      "@type": "WebPage",
      "@id": "https://www.sowk.org/#webpage",
      "url": "https://www.sowk.org/",
      "name": "SOWK Guesthouse — Batroun",
      "isPartOf": { "@id": "https://www.sowk.org/#website" },
      "about": { "@id": "https://www.sowk.org/#business" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.sowk.org/images/hero.jpg"
      },
      "breadcrumb": { "@id": "https://www.sowk.org/#breadcrumbs" },
      "inLanguage": "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sowk.org/#breadcrumbs",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sowk.org/" },
        { "@type": "ListItem", "position": 2, "name": "Batroun Guesthouse" }
      ]
    },

    // The business/place itself
    {
      "@type": "LodgingBusiness",
      "@id": "https://www.sowk.org/#business",
      "name": "SOWK Guesthouse",
      "alternateName": "Somewhere Only We Know",
      "url": "https://www.sowk.org/",
      "image": [
        "https://www.sowk.org/images/main-home.jpg",
        "https://www.sowk.org/images/hero.jpg"
      ],
      "photo": [
        { "@type": "ImageObject", "url": "https://www.sowk.org/images/main-home.jpg" },
        { "@type": "ImageObject", "url": "https://www.sowk.org/images/hero.jpg" }
      ],
      "description": "Gated stone villa with private pool and garden fireplace. Footsteps from Smar Jbeil’s Crusader citadel. Sleeps up to 4 guests.",
      "slogan": "Boutique Escape in Batroun",
      "priceRange": "$$ – $$$",
      "telephone": "+961-76-492-276",
      "email": "sayadtheos@gmail.com",

      // Clear, accurate address + Batroun relation
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Road",
        "addressLocality": "Smar Jbeil",
        "addressRegion": "North Governorate",
        "addressCountry": "LB"
      },
      "containedInPlace": { "@id": "https://www.sowk.org/#batroun" },

      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.2211667,
        "longitude": 35.6891111
      },
      "hasMap": "https://maps.app.goo.gl/S5VhCWK7YR14cPT5A",

      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Private pool", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Firepit & wood", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Optional breakfast", "value": true }
      ],
      "petsAllowed": true,

      "numberOfRooms": { "@type": "QuantitativeValue", "value": 3 },

      // Subtle, non-spammy discoverability nudge
      "keywords": "Batroun guesthouse, Smar Jbeil villa, Batroun Airbnb, North Lebanon boutique lodging",

      "currenciesAccepted": "USD, LBP",
      "paymentAccepted": "Cash, Credit Card",

      "sameAs": [
        "https://www.instagram.com/sowklb"
      ],
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sowk.org/images/sowk_logo-min.png",
        "width": 180,
        "height": 180
      },

      // local landmark for contextual relevance
      "nearby": { "@id": "https://www.sowk.org/#smar-jbeil-citadel" }
    },

    // Batroun District as a Place/AdministrativeArea node
    {
      "@type": ["AdministrativeArea", "Place"],
      "@id": "https://www.sowk.org/#batroun",
      "name": "Batroun District",
      "alternateName": "Caza Batroun",
      "containedInPlace": {
        "@type": "Place",
        "name": "North Governorate"
      }
    },

    // Referenced landmark (kept elegant and factual)
    {
      "@type": ["LandmarksOrHistoricalBuildings", "TouristAttraction"],
      "@id": "https://www.sowk.org/#smar-jbeil-citadel",
      "name": "Smar Jbeil Citadel",
      "isPartOf": { "@id": "https://www.sowk.org/#batroun" },
      "description": "Crusader-era hilltop fortress overlooking Batroun District.",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.sowk.org/images/smarjbeilcitadel.jpg"
      }
    }
  ]
};