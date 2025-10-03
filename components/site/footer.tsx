export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <img
              src="/images/aaa-logo.jpeg"
              alt="AAA Broadband"
              className="h-8 w-auto mt-1"
              loading="lazy"
              decoding="async"
            />
            <div>
              <h3 className="font-semibold">AAA Broadband</h3>
              <p className="text-muted-foreground mt-2">
                PTA Licensed Internet Service Provider delivering fast, reliable, and affordable internet solutions
                across Pakistan.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="grid gap-1 text-muted-foreground">
              <li>
                <a href="#home" className="hover:text-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-foreground">
                  Packages
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact Info</h4>
            <ul className="grid gap-1 text-muted-foreground">
              <li>03007979272</li>
              <li>aaabroadband@gmail.com</li>
              <li>1st Floor Zainab Plaza, Gojra Road, Adda Painsera, Faisalabad</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-muted-foreground mt-8">
          © {year} AAA Broadband. All rights reserved. | PTA Licensed ISP
        </div>
      </div>
    </footer>
  )
}
