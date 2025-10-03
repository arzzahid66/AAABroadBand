import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-medium">
            <span>Better Than Ever</span>
            <span aria-hidden>•</span>
            <span>PTA Licensed ISP</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-pretty">
            Lightning-Fast Internet for Homes & Businesses
          </h1>
          <p className="opacity-90">Reliable • Affordable • 24/7 Support</p>
          <p className="text-pretty opacity-80">
            Experience the future of internet connectivity with AAA Broadband. We provide high-speed, reliable internet
            services across Pakistan with 24/7 customer support.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild variant="secondary">
              <a href="#packages">View Packages</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Get Connected</a>
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-border/80 bg-background/10 aspect-video grid place-items-center relative overflow-hidden">
          <Image
            src="/how-internet-works-the-network-of-networks.jpg"
            alt="Wi-Fi signal illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
