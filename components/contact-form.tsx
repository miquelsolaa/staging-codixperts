import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contacta'ns</h2>
          <p className="text-muted-foreground mb-4">
            Omple el formulari i ens posarem en contacte amb tu el més aviat possible.
          </p>
          <p className="text-muted-foreground">
            O envia'ns un correu electrònic directament a:{" "}
            <a href="mailto:contacte@codixperts.com" className="text-primary hover:underline">
              contacte@codixperts.com
            </a>
          </p>
        </div>
        <form className="space-y-4">
          <Input type="text" placeholder="Nom" required />
          <Input type="email" placeholder="Correu electrònic" required />
          <Textarea placeholder="Missatge" required />
          <Button type="submit" className="w-full">
            Enviar missatge
          </Button>
        </form>
      </div>
    </section>
  )
}

