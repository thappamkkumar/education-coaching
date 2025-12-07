export const siteConfig = {
  businessName: "Your Business Name",
  logoUrl: "/images/logo.png",

  header: {
    navItems: [
      { label: "Home", href: "#" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" }
    ]
  },

  hero: {
    heading: "Transform Your Look with Professional Care",
    subheading: "Modern, clean, and trusted services for every customer.",
    primaryCTA: { label: "Call Now", href: "tel:+910000000000" },
    secondaryCTA: { label: "WhatsApp Chat", href: "https://wa.me/910000000000" },
    imageUrl: "/images/hero.jpg"
  },

  highlights: [
    { icon: "star", text: "10+ Years Experience" },
    { icon: "rupee", text: "Affordable Pricing" },
    { icon: "team", text: "Professional Team" },
    { icon: "shield", text: "Trusted by 1000+ Customers" }
  ],

  about: {
    title: "About Us",
    description:
      "We provide modern, clean, and professional services with a focus on customer satisfaction.",
    bulletPoints: [
      "Certified and experienced professionals",
      "Premium quality tools and products",
      "Fast and reliable service",
      "Affordable pricing options"
    ],
    imageUrl: "/images/about.jpg"
  },

  services: [
    { title: "Service One", price: "₹499", imageUrl: "/images/service1.jpg" },
    { title: "Service Two", price: "₹999", imageUrl: "/images/service2.jpg" },
    { title: "Service Three", price: "₹799", imageUrl: "/images/service3.jpg" },
    { title: "Service Four", price: "₹899", imageUrl: "/images/service4.jpg" },
    { title: "Service Five", price: "₹1299", imageUrl: "/images/service5.jpg" },
    { title: "Service Six", price: "₹699", imageUrl: "/images/service6.jpg" }
  ],

  gallery: [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg"
  ],

  testimonials: [
    {
      name: "Customer One",
      rating: 5,
      comment: "Amazing service and very professional!",
      photo: "/images/customer1.jpg"
    },
    {
      name: "Customer Two",
      rating: 4,
      comment: "Great experience, would definitely recommend!",
      photo: "/images/customer2.jpg"
    },
    {
      name: "Customer Three",
      rating: 5,
      comment: "Best in town! Super friendly team.",
      photo: "/images/customer3.jpg"
    }
  ],

  contact: {
    phone: "+91 00000 00000",
    email: "info@business.com",
    address: "123 Main Street, Your City",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=..."
  },

  footer: {
    copyright:
      "© 2025 Your Business Name. All rights reserved.",
    socialLinks: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" }
    ]
  }
};
