import { Palette, Search, Store } from "lucide-react"

const services = [
  {
    name: "Disseny web personalitzat",
    description:
      "Creem llocs web a mida que reflecteixen la identitat única del teu negoci i ofereixen una experiència d'usuari excepcional. El nostre equip de dissenyadors i desenvolupadors treballa en estreta col·laboració amb tu per crear un lloc web que no només sigui visualment atractiu, sinó també funcional i fàcil d'utilitzar.",
    icon: Palette,
  },
  {
    name: "Optimització SEO",
    description:
      "Millorem la visibilitat del teu lloc web als motors de cerca per atreure més clients potencials. La nostra estratègia SEO integral inclou optimització on-page, creació de contingut de qualitat, construcció de enllaços i anàlisi contínua per assegurar que el teu lloc web es mantingui al capdavant dels resultats de cerca.",
    icon: Search,
  },
  {
    name: "Creació i gestió de perfils de Google Business",
    description:
      "Optimitzem la teva presència local per augmentar la visibilitat i les vendes. Creem i gestionem el teu perfil de Google Business per assegurar-nos que la teva informació sigui precisa i actualitzada, gestionem les ressenyes i utilitzem estratègies per millorar el teu posicionament en les cerques locals.",
    icon: Store,
  },
]

export default function ServicesList() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-8">
        {services.map((service) => (
          <div key={service.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4 mb-4">
              <service.icon className="h-8 w-8" />
              <h3 className="text-2xl font-bold">{service.name}</h3>
            </div>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

