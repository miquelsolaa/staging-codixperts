import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Preparat per impulsar el teu negoci en línia?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Contacta amb CodiXperts avui mateix i descobreix com podem ajudar-te a assolir els teus objectius digitals.
        </p>
        <Button size="lg" className="mt-4" asChild>
          <a href="/contact">Contacta'ns ara</a>
        </Button>
      </div>
    </section>
  )
}

