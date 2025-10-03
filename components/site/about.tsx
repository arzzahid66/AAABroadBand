"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let start: number | null = null
    const step = (ts: number) => {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(p * target))
      if (p < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [target, duration])
  return value
}

export function About() {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const section = document.getElementById("about")
    if (!section) return
    const obs = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setInView(true)), {
      threshold: 0.3,
    })
    obs.observe(section)
    return () => obs.disconnect()
  }, [])

  const customers = useCountUp(inView ? 10000 : 0)
  const uptime = useCountUp(inView ? 99 : 0)
  const support = useCountUp(inView ? 24 : 0)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">About AAA Broadband</h2>
          <p>
            AAA Broadband is a PTA-licensed internet service provider committed to delivering high-quality, reliable
            internet connectivity across Pakistan. With years of experience in the telecommunications industry, we
            understand the importance of fast, stable internet for both personal and professional use.
          </p>
          <p>
            Our mission is to bridge the digital divide in Pakistan by providing affordable, high-speed internet
            services to homes and businesses nationwide. We pride ourselves on our customer-centric approach and
            technical excellence.
          </p>
          <ul className="grid gap-2">
            <li>• PTA Licensed</li>
            <li>• 24/7 Support</li>
            <li>• Reliable Service</li>
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-semibold">{customers.toLocaleString()}+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-semibold">{uptime}.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-semibold">{support}/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
