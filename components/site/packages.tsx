"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Pack = {
  name: string
  speed: string
  features: string[]
  variant?: "featured" | "default"
  value: "basic" | "standard" | "premium"
}

const packs: Pack[] = [
  {
    name: "Basic Plan",
    speed: "2–20 Mbps",
    features: ["Flexible Speed Options", "Unlimited Data", "24/7 Support", "Free Installation"],
    value: "basic",
  },
  {
    name: "Standard Plan",
    speed: "20–60 Mbps",
    features: ["Multiple Speed Options", "Unlimited Data", "Priority Support", "Free Installation"],
    variant: "featured",
    value: "standard",
  },
  {
    name: "Premium Plan",
    speed: "60–100 Mbps",
    features: ["Ultra High-Speed", "Unlimited Data", "Dedicated Support", "Free Installation"],
    value: "premium",
  },
]

export function Packages() {
  const selectPackage = (value: Pack["value"]) => {
    // Dispatch a cross-component event so Contact can prefill
    window.dispatchEvent(new CustomEvent("select-package", { detail: value }))
    // Scroll to contact
    const el = document.getElementById("contact")
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Internet Packages</h2>
        <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {packs.map((p) => (
          <Card
            key={p.name}
            className={`relative transition hover:shadow-md ${
              p.variant === "featured" ? "border-primary ring-2 ring-primary/20" : ""
            }`}
          >
            {p.variant === "featured" && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs">
                Most Popular
              </span>
            )}
            <CardHeader>
              <CardTitle className="space-y-1">
                <div className="text-lg">{p.name}</div>
                <div className="text-3xl font-semibold">{p.speed}</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="grid gap-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">
                    • {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={p.variant === "featured" ? "default" : "outline"}
                className="w-full"
                onClick={() => selectPackage(p.value)}
              >
                Contact for Pricing
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
