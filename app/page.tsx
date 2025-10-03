import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { Services } from "@/components/site/services"
import { Packages } from "@/components/site/packages"
import { About } from "@/components/site/about"
import { Contact } from "@/components/site/contact-form"
import { Footer } from "@/components/site/footer"
import { ScrollToTop } from "@/components/site/scroll-to-top"

export default function Page() {
  return (
    <>
      <Navbar />
      <main id="home" className="bg-background text-foreground">
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="packages">
          <Packages />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
