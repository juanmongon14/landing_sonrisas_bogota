import { Link } from 'react-router-dom';
import { Calendar, Shield, Users, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-dental.jpg';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Tecnología Avanzada',
      description: 'Equipos de última generación para tratamientos precisos y cómodos'
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Odontólogos certificados con años de experiencia en cada área'
    },
    {
      icon: Star,
      title: 'Atención Premium',
      description: 'Servicio personalizado y seguimiento completo de tu tratamiento'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Sonrisas saludables - Sonrisas Bogotá" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-dark/40"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
              Tu Sonrisa Perfecta
              <br />
              <span className="text-primary-light">Nos Inspira</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto slide-up">
              En Sonrisas Bogotá transformamos vidas a través de sonrisas saludables. 
              Descubre la excelencia en odontología con nuestro equipo de especialistas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Agenda tu Cita
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-dark"
                asChild
              >
                <Link to="/servicios">
                  Ver Servicios
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-primary-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                ¿Por qué elegir Sonrisas Bogotá?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nos diferenciamos por nuestro compromiso con la excelencia 
                y la satisfacción de nuestros pacientes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="card-dental text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos una amplia gama de tratamientos dentales 
                para cuidar tu salud oral integral
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Limpieza Dental', description: 'Higiene profesional completa' },
                { name: 'Ortodoncia', description: 'Corrección de posición dental' },
                { name: 'Blanqueamiento', description: 'Sonrisa más blanca y brillante' },
                { name: 'Implantes', description: 'Reemplazo de dientes perdidos' }
              ].map((service) => (
                <Card key={service.name} className="card-dental">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/servicios">Más Info</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="btn-primary" asChild>
                <Link to="/servicios">
                  Ver Todos los Servicios
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para tu nueva sonrisa?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Agenda tu consulta gratuita y descubre cómo podemos 
              transformar tu sonrisa con nuestros tratamientos especializados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-4"
                asChild
              >
                <Link to="/contacto">
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Cita Gratuita
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => window.open('https://wa.me/5712345678', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;