import { Target, Users, ThumbsUp, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Precisión",
    description: "Cada proyecto es ejecutado con exactitud y atención al detalle",
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Nos comprometemos con la satisfacción total de nuestros clientes",
  },
  {
    icon: ThumbsUp,
    title: "Calidad",
    description: "Utilizamos solo materiales de primera calidad y técnicas certificadas",
  },
  {
    icon: TrendingUp,
    title: "Mejora Continua",
    description: "Constantemente actualizamos nuestros conocimientos y técnicas",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nosotros</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
                Más de 15 años protegiendo lo que más valoras
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed opacity-90">
              <p>
                <strong className="text-accent">Techos BSM</strong> nace de la pasión por la construcción y el
                compromiso de brindar soluciones duraderas para cada hogar y negocio.
              </p>
              <p>
                Somos un equipo de profesionales especializados en <strong>techos y zinguería</strong>, con más de 15
                años de experiencia en el sector. Cada proyecto lo enfrentamos como si fuera nuestro propio hogar,
                garantizando trabajo de calidad que perdura en el tiempo.
              </p>
              <p>
                Nuestro compromiso va más allá de la instalación: nos preocupamos por la <strong>tranquilidad</strong>{" "}
                de nuestros clientes, ofreciendo garantías reales y un servicio post-venta excepcional.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">500+</p>
                <p className="text-sm opacity-80">Proyectos completados</p>
              </div>
              <div className="w-px h-16 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">100%</p>
                <p className="text-sm opacity-80">Clientes satisfechos</p>
              </div>
              <div className="w-px h-16 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-4xl font-bold text-accent">15+</p>
                <p className="text-sm opacity-80">Años de experiencia</p>
              </div>
            </div>
          </div>

          {/* Right Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-sm opacity-80 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
