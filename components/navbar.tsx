import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-foreground">CodiXperts</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
            Inici
          </Link>
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            Qui Som
          </Link>
          <Link href="/services" className="text-muted-foreground transition-colors hover:text-foreground">
            Serveis
          </Link>
          <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Contacte
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/codixperts" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button size="sm">Contacta'ns</Button>
        </div>
      </div>
    </header>
  )
}

