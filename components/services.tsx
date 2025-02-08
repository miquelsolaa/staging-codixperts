import { Palette, Search, Store } from "lucide-react"

const services = [
  {
    name: "Disseny web personalitzat",
    description: "Creem llocs web a mida que reflecteixen la identitat única del teu negoci.",
    icon: Palette,
  },
  {
    name: "Optimització SEO",
    description: "Millorem la visibilitat del teu lloc web als motors de cerca per atreure més clients.",
    icon: Search,
  },
  {
    name: "Gestió de perfils de Google Business",
    description: "Optimitzem la teva presència local per augmentar la visibilitat i les vendes.",
    icon: Store,
  },
]

export default function Services() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Els nostres serveis</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descobreix com CodiXperts pot transformar la presència en línia del teu negoci.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <service.icon className="h-8 w-8" />
              <h3 className="font-bold">{service.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

