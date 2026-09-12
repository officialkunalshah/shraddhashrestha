/* ============================================================
   SITE CONTENT — edit this file to change anything on the site.
   Text, images, links, section on/off — all live here. Change a
   value, save, refresh the browser. render.js reads this object
   and builds the whole page from it.

   TO SWAP IN REAL PHOTOS: replace the files in images/ (keep the
   same filenames) or update the "src" paths below to match new
   filenames. See the note at the very top of images/ for the
   full shot list this file expects.
   ============================================================ */

window.SITE_CONTENT = {

  // ---------------------------------------------------------
  // PERSON
  // ---------------------------------------------------------
  person: {
    name: "Shraddha Shrestha",
    email: "makeupwithshraddha79@gmail.com",
    social: [
      { label: "Instagram", href: "https://instagram.com/makeupwithshraddha_" },
      { label: "Facebook", href: "https://www.facebook.com/makeupwithshraddha" }
    ]
  },

  // ---------------------------------------------------------
  // NAVIGATION — order here controls menu order.
  // navLabel: null keeps a section on the page without a menu link.
  // ---------------------------------------------------------
  sections: [
    { id: "hero",         enabled: true,  navLabel: "Home" },
    { id: "about",        enabled: true,  navLabel: "About" },
    { id: "stats",        enabled: true,  navLabel: null },
    { id: "work",         enabled: true,  navLabel: "Work" },
    { id: "glam",         enabled: true,  navLabel: null },
    { id: "expertise",    enabled: true,  navLabel: "Expertise" },
    { id: "services",     enabled: true,  navLabel: "Services" },
    { id: "testimonials", enabled: true,  navLabel: null },
    { id: "training",     enabled: true,  navLabel: null },
    { id: "consultation", enabled: true,  navLabel: null },
    { id: "travel",       enabled: true,  navLabel: null },
    { id: "finalCta",     enabled: true,  navLabel: null },
    { id: "contact",      enabled: true,  navLabel: "Contact" }
  ],

  // Primary nav button, separate from the section links above.
  nav: {
    ctaLabel: "Book Now",
    ctaHref: "#contact"
  },

  // ---------------------------------------------------------
  // HERO
  // ---------------------------------------------------------
  hero: {
    eyebrow: "Where Beauty Meets Precision.",
    headlineLines: ["Shraddha Shrestha"],
    subheadline: "Professional Makeup Artist",
    meta: ["Kathmandu, Nepal", "700+ Clients", "Freelance Makeup Artist"],
    buttons: [
      { label: "Book a Makeup Session", href: "#contact", style: "primary" },
      { label: "Explore My Work", href: "#work", style: "secondary" }
    ],
    background: {
      type: "video",
      video: "images/Animate_luxury_makeup_hero_image_20260912161219.mp4",
      poster: "images/ee.jpg",
      posterAlt: "Shraddha Shrestha bridal makeup artistry"
    }
  },

  // ---------------------------------------------------------
  // ABOUT — "The Artist"
  // ---------------------------------------------------------
  about: {
    heading: "The Artist",
    lead: "I'm Shraddha Shrestha, a professional certified makeup artist based in Kathmandu, Nepal, known for refined technique, attention to detail, and a personalized approach to beauty.",
    paragraphs: [
      "With experience working with 700+ clients, I create makeup looks designed around each individual's features, personality, occasion and desired level of glam — from subtle elegance to sophisticated full glam.",
      "My approach focuses on thoughtful skin preparation, complexion refinement, eye detailing, face sculpting, color coordination and long-lasting application, creating polished results that remain comfortable, balanced and camera-ready.",
      "I work as a freelance makeup artist in Kathmandu and I'm available to travel for bookings across Nepal."
    ],
    image: { src: "images/Shraddha Shrestha about me image.jpg", alt: "Shraddha Shrestha, professional makeup artist in Kathmandu, Nepal" }
  },

  // ---------------------------------------------------------
  // STATS — 700+ Clients / Experience
  // ---------------------------------------------------------
  stats: {
    number: "700+",
    numberLabel: "Clients",
    details: ["Freelance Makeup Artist", "Kathmandu Based", "Available for Travel"],
    statement: "Every face is different. Every look should be intentional.",
    image: { src: "images/WhatsApp Image 2026-09-12 at 5.36.23 PM (1).jpeg", alt: "A finished bridal makeup look by Shraddha Shrestha" }
  },

  // ---------------------------------------------------------
  // SELECTED WORK — editorial gallery of finished looks
  // ---------------------------------------------------------
  work: {
    heading: "Selected Work",
    intro: "Bridal · Engagement · Party · Editorial · Events",
    items: [
      { image: "images/ee.jpg", alt: "Bridal makeup look with ceremonial veil by Shraddha Shrestha", size: "large" },
      { image: "images/IMG_0288.JPG", alt: "Bridal makeup look in gold by Shraddha Shrestha", size: "small" },
      { image: "images/new.jpeg", alt: "Bridal makeup close-up by Shraddha Shrestha", size: "small" },
      { image: "images/IMG_4751.JPG", alt: "Bridal makeup look with floral garland by Shraddha Shrestha", size: "large" },
      { image: "images/WhatsApp Image 2026-09-12 at 5.36.23 PM.jpeg", alt: "Traditional Nepali bridal makeup look by Shraddha Shrestha", size: "small" },
      { image: "images/WhatsApp Image 2026-09-12 at 5.36.22 PM.jpeg", alt: "Engagement makeup look in lavender by Shraddha Shrestha", size: "large" },
      { image: "images/IMG_1224.JPG", alt: "Party glam makeup look in ice blue by Shraddha Shrestha", size: "large" }
    ]
  },

  // ---------------------------------------------------------
  // BEHIND THE GLAM — process / BTS photos
  // ---------------------------------------------------------
  glam: {
    heading: "Behind the Glam",
    statement: "Every finished look begins with precision, patience and attention to detail.",
    items: [
      { image: "images/IMG_2543.JPG", alt: "Shraddha Shrestha applying blush on a bridal client" },
      { image: "images/IMG_2531.JPG", alt: "Shraddha Shrestha applying precise eyeliner detailing on a client" }
    ]
  },

  // ---------------------------------------------------------
  // EXPERTISE — "The Art of Detail"
  // ---------------------------------------------------------
  expertise: {
    heading: "The Art of Detail",
    intro: "Every face is different, so I never apply the same look twice — here is where I put the most care.",
    items: [
      { title: "Complexion Artistry", desc: "I create smooth, balanced and radiant complexions with a refined, natural-looking finish." },
      { title: "Eye Makeup", desc: "Detailed eyeshadow blending, eyeliner, lash application and eye-shape tailored techniques." },
      { title: "Face Sculpting", desc: "I use contour, highlight and blush thoughtfully to enhance your natural facial structure." },
      { title: "Bridal Glam", desc: "Elegant and long-lasting bridal looks designed to photograph beautifully while remaining true to you." },
      { title: "Color & Feature Coordination", desc: "I select shades and techniques that complement your skin tone, features, outfit and occasion." },
      { title: "Long-Wear Makeup", desc: "Durable, comfortable and polished makeup designed to perform throughout your important occasions." },
      { title: "Attention to Detail", desc: "Precision from complexion preparation to the smallest eye and lip details." },
      { title: "Personalized Makeup", desc: "Every look is adapted to your features, preferences, personality and desired level of glam." }
    ]
  },

  // ---------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------
  services: {
    heading: "Services",
    intro: "A few of the ways I typically work with clients. Custom requests are always welcome.",
    items: [
      { title: "Bridal Glam", description: "Timeless and sophisticated bridal makeup designed to complement your natural features, outfit and wedding aesthetic." },
      { title: "Engagement Glam", description: "Polished and radiant makeup designed for one of life's special celebrations." },
      { title: "Reception Glam", description: "Elegant, refined and camera-ready glam for your reception celebration." },
      { title: "Mehendi Makeup", description: "Fresh, vibrant and defined makeup designed to complement the energy of mehendi celebrations." },
      { title: "Party Glam", description: "From sophisticated elegance to statement glam, tailored to the occasion and your personal style." },
      { title: "Birthday Glam", description: "A polished and radiant look designed to make your celebration feel even more special." },
      { title: "Photoshoot & Editorial", description: "Camera-ready makeup with precise detailing, complexion refinement and controlled definition." },
      { title: "Makeup Consultation", description: "Personalized guidance on makeup style, complexion, colors, features, products and your desired final look." }
    ]
  },

  // ---------------------------------------------------------
  // ⚠️ SAMPLE / DEMO TESTIMONIALS — NOT REAL REVIEWS ⚠️
  // These six entries are placeholder content written for design
  // preview only. They are NOT verified reviews, Google reviews,
  // Facebook reviews, or genuine client feedback of any kind.
  // The names below (Aastha, Priya, Sunita, Nisha, Kriti, Anjali)
  // are generic Nepali first names used only for visual variety —
  // they are NOT real clients, and every quote is fictional.
  //
  // TO REPLACE WITH A REAL REVIEW: in the matching `items` entry
  // below, change `name` to the real client's first name (or
  // preferred display name), and replace `quote` with their
  // actual words. `rating` is a 1-5 number of filled stars.
  // Nothing else needs to change — the layout, stars and
  // animation all keep working automatically.
  // ---------------------------------------------------------
  testimonials: {
    heading: "What My Clients Say",
    intro: "Every client is different, and I love creating looks that make each person feel confident, comfortable and beautifully themselves.",
    overallRating: 5.0,
    sampleLabel: "Sample Client Feedback",
    items: [
      {
        rating: 5,
        quote: "I absolutely loved how my makeup turned out. The complexion looked so smooth and natural, and the entire look felt exactly like what I had imagined. I felt confident and comfortable throughout the event.",
        name: "Aastha"
      },
      {
        rating: 5,
        quote: "From the very beginning, I felt completely comfortable. She paid attention to every little detail and understood exactly what kind of look I wanted. The final makeup was elegant, polished and beautiful.",
        name: "Priya"
      },
      {
        rating: 5,
        quote: "I loved the way my eyes turned out. The blending was beautiful and the overall makeup looked amazing in photographs without feeling too heavy. I would definitely love to work with her again.",
        name: "Sunita"
      },
      {
        rating: 5,
        quote: "I wanted something glamorous but still natural enough to feel like myself, and she understood that perfectly. The makeup looked refined, lasted beautifully and made me feel so confident.",
        name: "Nisha"
      },
      {
        rating: 5,
        quote: "Such a lovely experience from start to finish. She was patient, professional and really took the time to understand what I wanted. The final look was even better than I had pictured.",
        name: "Kriti"
      },
      {
        rating: 5,
        quote: "I was especially impressed by the attention to detail. Everything from the skin preparation to the eyes and final touches felt carefully done. I felt beautiful and completely ready for my special day.",
        name: "Anjali"
      }
    ]
  },

  // ---------------------------------------------------------
  // PROFESSIONAL TRAINING
  // ---------------------------------------------------------
  training: {
    heading: "Professional Training",
    institution: "My Sangalo Luxury Studio",
    qualification: "Professional Master Class in Makeup",
    paragraph: "I completed professional master-class training at My Sangalo Luxury Studio, developing advanced knowledge across professional makeup techniques, complexion work, eye artistry, face sculpting, color coordination, bridal makeup and photography-ready application."
  },

  // ---------------------------------------------------------
  // MAKEUP CONSULTATION
  // ---------------------------------------------------------
  consultation: {
    headingLines: ["Your Look.", "Your Features.", "Your Style."],
    paragraph: "Not sure what makeup style is right for you? I offer personalized makeup consultations to understand your features, occasion, outfit, preferred level of glam and desired finish — helping you find a look that feels naturally you while still feeling beautifully elevated.",
    cta: { label: "Book a Consultation", href: "#contact" },
    image: { src: "images/WhatsApp Image 2026-09-12 at 5.36.22 PM (1).jpeg", alt: "Close-up finished makeup look by Shraddha Shrestha" }
  },

  // ---------------------------------------------------------
  // AVAILABLE FOR BOOKINGS / TRAVEL
  // ---------------------------------------------------------
  travel: {
    heading: "Available for Bookings",
    paragraph: "Based in Kathmandu, Nepal, I work as a freelance makeup artist and accept bookings for weddings, celebrations, photoshoots, events and private appointments. For bookings outside Kathmandu, travel arrangements can be discussed in advance.",
    tags: ["Kathmandu", "Nepal", "Available for Travel"]
  },

  // ---------------------------------------------------------
  // FINAL CTA
  // ---------------------------------------------------------
  finalCta: {
    heading: "Ready for Your Glam?",
    paragraph: "Let's create a look that feels unmistakably you.",
    buttons: [
      { label: "Book a Makeup Session", href: "#contact", style: "primary" },
      { label: "View Instagram", href: "https://instagram.com/makeupwithshraddha_", style: "secondary" }
    ],
    image: { src: "images/WhatsApp Image 2026-09-12 at 5.36.23 PM (3).jpeg", alt: "A finished party makeup look by Shraddha Shrestha" }
  },

  // ---------------------------------------------------------
  // CONTACT
  // ---------------------------------------------------------
  contact: {
    heading: "Let's Create Your Look",
    intro: "Have an event coming up? Planning your bridal look? Looking for professional makeup for a photoshoot? Get in touch to discuss your requirements and availability.",
    email: "makeupwithshraddha79@gmail.com",
    socialLinks: [
      { label: "Instagram", href: "https://instagram.com/makeupwithshraddha_" },
      { label: "Facebook", href: "https://www.facebook.com/makeupwithshraddha" }
    ],
    location: "Kathmandu, Nepal",
    availability: "Freelance · Available for Travel"
  },

  // ---------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------
  footer: {
    tagline: "Where Beauty Meets Precision.",
    email: "makeupwithshraddha79@gmail.com",
    localTime: { enabled: true, timezone: "Asia/Kathmandu", label: "Kathmandu" },
    legalName: "Shraddha Shrestha",
    year: "2026"
  }
};
