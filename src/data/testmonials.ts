export interface Testimonial {
    id: number;
    quote: string;
    couple: string;
    location: string;
    image: string;
  }

export const testimonials: Testimonial[] = [
    {
      id: 1,
      quote:
        "Working with Artistry was the best decision we made for our wedding. They captured moments we didn't even know happened!",
      couple: "Emily & James",
      location: "Tuscany, Italy",
      image:
        "https://plus.unsplash.com/premium_photo-1677676979463-20e30520b387?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      quote:
        "The photos exceeded our expectations. Every time we look at them, we're transported back to the happiest day of our lives.",
      couple: "Sophia & Michael",
      location: "Santorini, Greece",
      image:
        "https://images.unsplash.com/photo-1541089404510-5c9a779841fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cGxlfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      quote:
        "Not only are they incredible photographers, but they made us feel so comfortable throughout the entire day. True professionals!",
      couple: "Charlotte & William",
      location: "Cotswolds, England",
      image:
        "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y291cGxlfGVufDB8MHwwfHx8MA%3D%3D",
    },
  ]
  