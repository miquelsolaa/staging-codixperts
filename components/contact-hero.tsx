export default function ContactHero() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container flex flex-col items-center justify-center text-center">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Contacte
        </h1>
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20" />
    </section>
  )
}

