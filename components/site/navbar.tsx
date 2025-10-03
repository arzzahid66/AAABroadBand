"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [elevated, setElevated] = useState(false)

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 80)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        elevated ? "shadow-md" : "shadow-none"
      }`}
      role="banner"
    >
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2 group">
            <img
              src="/images/aaa-logo.jpeg"
              alt="AAA Broadband logo"
              className="h-8 w-auto md:h-9"
              loading="eager"
              decoding="async"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                AAA Broadband
              </span>
              <span className="text-xs text-muted-foreground">Better Than Ever</span>
            </div>
            <span className="sr-only">AAA Broadband Home</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {[
              { href: "#home", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#packages", label: "Packages" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-primary" onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <a href="#contact">Get Connected</a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle navigation"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-modal="true">
            <ul className="flex flex-col gap-2 border-t border-border pt-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#services", label: "Services" },
                { href: "#packages", label: "Packages" },
                { href: "#about", label: "About" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="block px-1 py-2 rounded hover:bg-muted" onClick={close}>
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button asChild className="w-full">
                  <a href="#contact" onClick={close}>
                    Get Connected
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
