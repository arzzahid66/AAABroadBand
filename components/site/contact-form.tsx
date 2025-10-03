"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

type PackageValue = "basic" | "standard" | "premium" | ""

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [pkg, setPkg] = useState<PackageValue>("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const onSelect = (e: Event) => {
      const value = (e as CustomEvent).detail as PackageValue
      setPkg(value)
      // focus the form for accessibility
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    window.addEventListener("select-package" as any, onSelect)
    return () => window.removeEventListener("select-package" as any, onSelect)
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Basic validation
    if (!name || !email || !phone || !pkg) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" })
      return
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const phoneOk = /^[+]?[0-9\s-]{10,}$/.test(phone)
    if (!emailOk) {
      toast({ title: "Please enter a valid email address.", variant: "destructive" })
      return
    }
    if (!phoneOk) {
      toast({ title: "Please enter a valid phone number.", variant: "destructive" })
      return
    }

    setLoading(true)
    // Simulate API latency
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    toast({ title: "Thank you for your interest! We will contact you soon." })

    // Reset
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setPkg("")
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Get Connected Today</h2>
        <p className="text-muted-foreground">Ready to experience fast, reliable internet? Contact us now!</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div className="space-y-4">
          <ContactItem title="Call Us" value="03007979272" />
          <ContactItem title="Email Us" value="aaabroadband@gmail.com" />
          <ContactItem title="Visit Us" value="1st Floor Zainab Plaza, Gojra Road, Adda Painsera, Faisalabad" />
        </div>

        <form id="contact-form" onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-border p-4 md:p-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Your Phone Number</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="grid gap-2">
            <Label>Package</Label>
            <Select value={pkg} onValueChange={(v: PackageValue) => setPkg(v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Package" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic Plan - 2–20 Mbps</SelectItem>
                <SelectItem value="standard">Standard Plan - 20–60 Mbps</SelectItem>
                <SelectItem value="premium">Premium Plan - 60–100 Mbps</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
}

function ContactItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="font-medium">{value}</div>
    </div>
  )
}
