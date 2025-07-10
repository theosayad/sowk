// src/lib/ld-schema.js
export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.sowk.org/#website",
      "url": "https://www.sowk.org/",
      "name": "SOWK Guesthouse",
      "description": "Private eco-villa in Smar Jbeil, Lebanon — stone architecture, pool & Crusader-era views.",
      "inLanguage": "en",
      "publisher": { "@id": "https://www.sowk.org/#business" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.sowk.org/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "LodgingBusiness",
      "@id": "https://www.sowk.org/#business",
      "name": "SOWK Guesthouse",
      "alternateName": "Somewhere Only We Know",
      "url": "https://www.sowk.org/",
      "image": [
        "https://www.sowk.org/images/hero.jpg",
        "https://www.sowk.org/images/smarjbeilcitadel.jpg"
      ],
      "description": "Gated stone villa with private pool, garden fireplace and optional breakfast. Footsteps from Smar Jbeil’s Crusader citadel. Sleeps up to 6 guests.",
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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.2211667,
        "longitude": 35.6891111
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Private pool",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Free Wi-Fi",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Firepit & wood",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Optional breakfast",
          "value": true
        }
      ],
      "petsAllowed": "yes",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "12"
      },
      "numberOfRooms": {
        "@type": "QuantitativeValue",
        "value": 3
      },
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
      }
    }
  ]
};