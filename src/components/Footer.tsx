import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Sonrisas Bogotá</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-primary-light" />
                <div>
                  <p className="text-sm">Carrera 15 #93-45</p>
                  <p className="text-sm">Bogotá, Colombia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-light" />
                <p className="text-sm">+57 (1) 234-5678</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-light" />
                <p className="text-sm">info@sonrisasbogota.com</p>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Horarios de Atención</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-light" />
                <div className="text-sm">
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 8:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Acciones de contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <div className="space-y-3">
              <Button 
                variant="secondary" 
                className="w-full justify-start"
                onClick={() => window.open('https://wa.me/5712345678', '_blank')}
              >
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-primary-light text-primary-foreground hover:bg-primary-light hover:text-primary-dark"
                onClick={() => window.open('mailto:info@sonrisasbogota.com', '_blank')}
              >
                Enviar Email
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-light/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-light">
            © 2024 Sonrisas Bogotá. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;