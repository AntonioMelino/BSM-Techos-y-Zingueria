import { Home, Droplets, Wrench, Hammer, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Home,
    title: "Techos Nuevos",
    description: "Instalación completa de techos nuevos con materiales de primera calidad y garantía extendida.",
    features: ["Diseño personalizado", "Materiales premium", "Instalación certificada"],
  },
  {
    icon: Wrench,
    title: "Reparación",
    description: "Reparación de filtraciones, grietas y daños estructurales. Diagnóstico profesional sin cargo.",
    features: ["Diagnóstico gratuito", "Reparación rápida", "Garantía de trabajo"],
  },
  {
    icon: Droplets,
    title: "Impermeabilización",
    description: "Impermeabilización total con productos de última generación para máxima protección.",
    features: ["Membrana asfáltica", "Pintura impermeabilizante", "Sellado de juntas"],
  },
  {
    icon: Hammer,
    title: "Mantenimiento",
    description: "Mantenimiento preventivo y correctivo para extender la vida útil de tu techo.",
    features: ["Inspección completa", "Limpieza de canaletas", "Prevención de problemas"],
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Servicios</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Soluciones completas para tu techo</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofrecemos servicios integrales de techado y zinguería con los más altos estándares de calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-8 w-8 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
