import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulación del envío del formulario
    console.log('Datos del formulario:', formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="hero-gradient py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 fade-in">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto slide-up">
              Estamos aquí para ayudarte. Agenda tu cita o resuelve tus dudas 
              sobre nuestros tratamientos dentales.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-dental">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Envíanos un mensaje
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Servicio de interés</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="limpieza">Limpieza Dental</SelectItem>
                            <SelectItem value="ortodoncia">Ortodoncia</SelectItem>
                            <SelectItem value="blanqueamiento">Blanqueamiento</SelectItem>
                            <SelectItem value="implantes">Implantes Dentales</SelectItem>
                            <SelectItem value="consulta">Consulta General</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Cuéntanos sobre tu consulta o solicitud..."
                      />
                    </div>

                    <Button type="submit" className="w-full btn-primary">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="card-dental">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Ubicación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Carrera 15 #93-45<br />
                      Bogotá, Colombia
                    </p>
                    <div className="bg-muted rounded-lg h-48 flex items-center justify-center">
                      <p className="text-muted-foreground">Mapa de ubicación</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-dental">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Teléfono
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">+57 (1) 234-5678</p>
                    <p className="text-muted-foreground text-sm">
                      Llámanos para agendar tu cita
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dental">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold">info@sonrisasbogota.com</p>
                    <p className="text-muted-foreground text-sm">
                      Respuesta en menos de 24 horas
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dental">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Horarios
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Lunes - Viernes:</span>
                      <span className="text-sm font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Sábados:</span>
                      <span className="text-sm font-medium">8:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Domingos:</span>
                      <span className="text-sm font-medium">Cerrado</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;