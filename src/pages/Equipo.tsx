import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import doctorMaria from '@/assets/doctor-maria.jpg';
import doctorCarlos from '@/assets/doctor-carlos.jpg';
import doctorAna from '@/assets/doctor-ana.jpg';

const Equipo = () => {
  const doctors = [
    {
      name: 'Dra. María Rodríguez',
      specialty: 'Odontología General y Estética',
      experience: '12 años de experiencia',
      education: 'Universidad Nacional de Colombia',
      specializations: ['Blanqueamiento', 'Carillas', 'Restauraciones'],
      image: doctorMaria
    },
    {
      name: 'Dr. Carlos Méndez',
      specialty: 'Ortodoncia y Ortopedia',
      experience: '15 años de experiencia',
      education: 'Universidad Javeriana',
      specializations: ['Brackets', 'Invisalign', 'Ortodoncia infantil'],
      image: doctorCarlos
    },
    {
      name: 'Dra. Ana Silva',
      specialty: 'Implantología y Cirugía Oral',
      experience: '10 años de experiencia',
      education: 'Universidad El Bosque',
      specializations: ['Implantes', 'Cirugía oral', 'Regeneración ósea'],
      image: doctorAna
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
              Nuestro Equipo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto slide-up">
              Conoce a nuestro equipo de odontólogos especializados, 
              comprometidos con brindarte la mejor atención dental en Bogotá.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <Card key={doctor.name} className="card-dental overflow-hidden">
                  <div className="relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{doctor.name}</h3>
                        <p className="text-muted-foreground font-medium">{doctor.specialty}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Experiencia:</span> {doctor.experience}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-medium">Formación:</span> {doctor.education}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-2">
                          Especializaciones:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {doctor.specializations.map((spec) => (
                            <Badge key={spec} variant="secondary" className="text-xs">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-primary-light py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Nuestros Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Trabajamos con los más altos estándares de calidad y profesionalismo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Excelencia</h3>
                <p className="text-muted-foreground text-sm">
                  Nos comprometemos con la más alta calidad en cada tratamiento
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">❤️</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Cuidado</h3>
                <p className="text-muted-foreground text-sm">
                  Tratamos a cada paciente con calidez y atención personalizada
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-foreground">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Innovación</h3>
                <p className="text-muted-foreground text-sm">
                  Utilizamos la tecnología más avanzada en odontología
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Equipo;