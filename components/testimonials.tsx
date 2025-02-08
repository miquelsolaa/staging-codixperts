const testimonials = [
  {
    name: "Maria Garcia",
    company: "Botiga Online XYZ",
    testimonial:
      "CodiXperts ha transformat completament la nostra presència en línia. El nostre nou lloc web és impressionant i les vendes han augmentat significativament.",
  },
  {
    name: "Joan Puig",
    company: "Restaurant La Bona Taula",
    testimonial:
      "Gràcies a l'optimització del nostre perfil de Google Business per part de CodiXperts, hem vist un augment del 50% en les reserves en línia.",
  },
  {
    name: "Anna Martí",
    company: "Blog de Viatges Aventura",
    testimonial:
      "L'estratègia SEO implementada per CodiXperts ha duplicat el trànsit del nostre blog en només tres mesos. Estem encantats amb els resultats!",
  },
]

export default function Testimonials() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">El que diuen els nostres clients</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descobreix per què els nostres clients confien en CodiXperts per a les seves necessitats digitals.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <p className="text-muted-foreground mb-4">"{testimonial.testimonial}"</p>
            <div>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

