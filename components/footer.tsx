export default function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container flex flex-col items-center space-y-8">
        <p className="text-sm text-muted-foreground">© 2023 CodiXperts. Tots els drets reservats.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-muted-foreground hover:text-primary">
            Privacitat
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary">
            Termes
          </a>
        </div>
      </div>
    </footer>
  )
}

