"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hola! Me llamo ${formData.nombre}.%0A%0A${formData.mensaje}%0A%0AMi teléfono: ${formData.telefono}`;
    const whatsappUrl = `https://wa.me/5491157748201?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({ nombre: "", telefono: "", mensaje: "" });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+54 9 11-5774-8201",
      link: "https://wa.me/5491157748201",
      description: "Respondemos al instante",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "@techosbsm",
      link: "https://instagram.com/techosbsm",
      description: "Síguenos y mira nuestro trabajo",
    },
    {
      icon: Facebook,
      title: "Facebook",
      content: "/techosbsm",
      link: "https://facebook.com/techosbsm",
      description: "Conéctate con nosotros",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Buenos Aires, Argentina",
      link: null,
      description: "Servicio en toda la zona",
    },
  ];

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Solicita tu presupuesto sin compromiso
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contáctanos y resolveremos todas tus dudas. Respuesta rápida
            garantizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="space-y-8">
            {/* Form Card */}
            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium">
                      Nombre completo *
                    </label>
                    <Input
                      id="nombre"
                      placeholder="Juan Pérez"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium">
                      Teléfono *
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+54 9 11 2345-6789"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-sm font-medium">
                      Mensaje *
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold group"
                  >
                    Enviar por WhatsApp
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar, serás redirigido a WhatsApp para completar tu
                    consulta
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* CTA Box moved below form */}
            <Card className="bg-accent text-accent-foreground border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Atención 24/7</h4>
                <p className="text-sm opacity-90 mb-4">
                  ¿Emergencia con tu techo? Contáctanos en cualquier momento
                  para asistencia inmediata.
                </p>
                <Button
                  asChild
                  variant="secondary"
                  className="w-full bg-background text-foreground hover:bg-background/90"
                >
                  <a href="https://wa.me/5491157748201">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contactar por WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - Right column remains unchanged */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Información de contacto</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estamos disponibles para responder tus consultas. Síguenos en
                redes sociales o escríbenos directamente por WhatsApp.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card
                    key={index}
                    className="border-2 hover:border-accent/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold mb-1">{info.title}</p>
                          <p className="text-muted-foreground font-medium">
                            {info.content}
                          </p>
                          {info.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {info.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    className="block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
