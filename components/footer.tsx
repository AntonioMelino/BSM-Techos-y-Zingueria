import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/techosbsm/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/techosbsm/?igshid=MmJiY2I4NDBkZg%3D%3D",
      label: "Instagram",
    },
  ];

  const quickLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Galería", href: "#galeria" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo BSM Techos y Zingueria.jpeg"
                alt="Techos BSM"
                width={120}
                height={60}
                className="h-14 w-auto"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold">BSM</span>
                <span className="text-xl font-bold text-accent">
                  TECHOS Y ZINGUERÍA
                </span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Expertos en techos y zinguería con más de 15 años protegiendo
              hogares y negocios.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Instalación de Techos</li>
              <li>Reparación y Mantenimiento</li>
              <li>Impermeabilización</li>
              <li>Zinguería</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a
                  href="tel:+5491157748201"
                  className="hover:text-accent transition-colors"
                >
                  +54 9 11 5774-8201
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@techosbsm.com"
                  className="hover:text-accent transition-colors"
                >
                  info@techosbsm.com
                </a>
              </li>
              <li>Buenos Aires, Argentina</li>
              <li className="pt-2">
                <span className="text-accent font-semibold">
                  Lun - Vie: 8:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm opacity-80">
            <p>
              &copy; {currentYear} Techos BSM. Todos los derechos reservados.
              Hecho por Antonio Melino.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
