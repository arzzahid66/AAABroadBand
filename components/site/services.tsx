import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const items = [
    {
      title: "Residential Internet",
      desc: "High-speed internet for homes with unlimited data and 24/7 support.",
      imgAlt: "Home internet",
      imgSrc: "/home-internet-icon.png",
    },
    {
      title: "Business Internet",
      desc: "Dedicated business solutions with guaranteed uptime and priority support.",
      imgAlt: "Business internet",
      imgSrc: "/office-building-icon.jpg",
    },
    {
      title: "Technical Support",
      desc: "Expert technical support and maintenance services for all your connectivity needs.",
      imgAlt: "Technical support",
      imgSrc: "/support-tools-icon.jpg",
    },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
        <p className="text-muted-foreground">Comprehensive internet solutions for every need</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <Card key={s.title} className="transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <img src={s.imgSrc || "/placeholder.svg"} alt={s.imgAlt} className="h-10 w-10" />
                {s.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
