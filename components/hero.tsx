import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                +15 años de experiencia
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              Protegemos
              <span className="block text-accent">tu hogar</span>
              desde arriba
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Expertos en instalación, reparación e impermeabilización de
              techos. Calidad garantizada y atención personalizada para cada
              proyecto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base group"
              >
                <Link href="#contacto">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base bg-transparent"
              >
                <Link href="#galeria">Ver Trabajos Realizados</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <p className="text-2xl font-bold text-primary">100%</p>
                </div>
                <p className="text-sm text-muted-foreground">Garantizado</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <p className="text-2xl font-bold text-primary">24/7</p>
                </div>
                <p className="text-sm text-muted-foreground">Disponibilidad</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <p className="text-2xl font-bold text-primary">+500</p>
                </div>
                <p className="text-sm text-muted-foreground">Proyectos</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/professional-roofer-installing-new-roof-on-house.jpg"
                alt="Instalación profesional de techos"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-2xl max-w-[200px]">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm opacity-90">Años protegiendo hogares</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
