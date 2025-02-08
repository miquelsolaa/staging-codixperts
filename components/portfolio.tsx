import Image from "next/image"

const projects = [
  {
    name: "Projecte 1",
    description: "Disseny web per a una botiga en línia",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Projecte 2",
    description: "Optimització SEO per a un blog de viatges",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Projecte 3",
    description: "Gestió de perfil de Google Business per a un restaurant local",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Portfolio() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Projectes recents</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Explora alguns dels nostres treballs més recents i exitosos.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="relative overflow-hidden rounded-lg border bg-background">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              width={400}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-bold">{project.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

