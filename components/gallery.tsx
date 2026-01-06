"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    title: "Instalación de Techo Nuevo",
    category: "Instalación",
    thumbnail: "/new-roof-installation-residential.jpg",
    images: ["/new-roof-installation-residential-view-1.jpg", "/new-roof-installation-residential-view-2.jpg", "/new-roof-installation-residential-view-3.jpg"],
    description: "Instalación completa de techo de chapa en vivienda familiar",
  },
  {
    id: 2,
    title: "Impermeabilización de Terraza",
    category: "Impermeabilización",
    thumbnail: "/waterproofing-terrace-roof.jpg",
    images: ["/waterproofing-terrace-before.jpg", "/waterproofing-terrace-during.jpg", "/waterproofing-terrace-after.jpg"],
    description: "Impermeabilización completa con membrana asfáltica",
  },
  {
    id: 3,
    title: "Reparación de Filtración",
    category: "Reparación",
    thumbnail: "/roof-leak-repair-fixing.jpg",
    images: ["/roof-leak-repair-before.jpg", "/roof-leak-repair-process.jpg", "/roof-leak-repair-after.jpg"],
    description: "Reparación de filtración en techo de edificio comercial",
  },
  {
    id: 4,
    title: "Techo Industrial",
    category: "Instalación",
    thumbnail: "/industrial-roof-installation.jpg",
    images: [
      "/industrial-roof-installation-wide.jpg",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description: "Instalación de techo industrial de gran envergadura",
  },
  {
    id: 5,
    title: "Mantenimiento Preventivo",
    category: "Mantenimiento",
    thumbnail: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description: "Servicio de mantenimiento y limpieza integral",
  },
  {
    id: 6,
    title: "Techo Residencial Premium",
    category: "Instalación",
    thumbnail: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description: "Techo residencial con materiales de primera calidad",
  },
]

export function Gallery() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <section id="galeria" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Galería</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Nuestros trabajos realizados</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada proyecto es único y lo abordamos con el mismo nivel de profesionalismo y dedicación
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50"
              onClick={() => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium bg-accent px-2 py-1 rounded">{project.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gallery Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </DialogHeader>

                <div className="space-y-6 mt-6">
                  {/* Main Image */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === index
                            ? "border-accent ring-2 ring-accent/20"
                            : "border-transparent hover:border-accent/50"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Thumbnail ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
