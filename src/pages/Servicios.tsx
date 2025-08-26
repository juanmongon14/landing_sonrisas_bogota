import { Sparkles, Move3D, Shield, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Servicios = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Limpieza Dental',
      description: 'Limpieza profunda y profesional para mantener tus dientes saludables y brillantes.',
      features: ['Eliminación de placa', 'Pulido dental', 'Fluorización', 'Examen completo'],
      price: 'Desde $80.000'
    },
    {
      icon: Move3D,
      title: 'Ortodoncia',
      description: 'Corrección de la posición dental con brackets tradicionales y transparentes.',
      features: ['Brackets metálicos', 'Brackets estéticos', 'Invisalign', 'Seguimiento mensual'],
      price: 'Desde $2.500.000'
    },
    {
      icon: Shield,
      title: 'Blanqueamiento',
      description: 'Tratamientos de blanqueamiento seguros para una sonrisa más blanca y brillante.',
      features: ['Blanqueamiento LED', 'Blanqueamiento láser', 'Kit para casa', 'Resultados garantizados'],
      price: 'Desde $300.000'
    },
    {
      icon: Zap,
      title: 'Implantes Dentales',
      description: 'Reemplazo de dientes perdidos con implantes de alta calidad y durabilidad.',
      features: ['Implantes de titanio', 'Corona personalizada', 'Cirugía guiada', 'Garantía de por vida'],
      price: 'Desde $1.800.000'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="hero-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto slide-up">
              Ofrecemos tratamientos dentales de alta calidad con tecnología avanzada 
              y el mejor equipo profesional de Bogotá.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="card-dental h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <p className="text-lg font-semibold text-primary">{service.price}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        Incluye:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full btn-primary">
                      Agendar Consulta
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-light py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              ¿Necesitas una consulta personalizada?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nuestro equipo de especialistas está listo para evaluar tu caso 
              y recomendarte el mejor tratamiento para tu sonrisa.
            </p>
            <Button size="lg" className="btn-primary">
              Agenda tu Cita Gratuita
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;