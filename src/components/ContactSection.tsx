
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547988638192?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20bananas.', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5547988638192', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:reichertclaudiney992@gmail.com', '_self');
  };

  return (
    <section id="contato" ref={sectionRef} className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Faça seu Pedido
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Entre em contato conosco para fazer seu pedido de bananas frescas e de qualidade. 
            Estamos prontos para atender você!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
                <p className="text-muted-foreground mb-8">
                  Escolha a forma mais conveniente para entrar em contato conosco. 
                  Garantimos atendimento rápido e personalizado para todos os nossos clientes.
                </p>
                
                <div className="space-y-4">
                  <ContactMethod 
                    icon={<Phone className="h-6 w-6" />}
                    title="Telefone"
                    description="Ligue agora para fazer seu pedido"
                    contact="(47) 98863-8192"
                    action={handleCallClick}
                    buttonText="Ligar Agora"
                    buttonClass="bg-accent hover:bg-accent/90 text-accent-foreground"
                  />
                  
                  <ContactMethod 
                    icon={<MessageCircle className="h-6 w-6" />}
                    title="WhatsApp"
                    description="Conversa rápida pelo WhatsApp"
                    contact="(47) 98863-8192"
                    action={handleWhatsAppClick}
                    buttonText="Chamar no WhatsApp"
                    buttonClass="bg-green-500 hover:bg-green-600 text-white"
                  />
                  
                  <ContactMethod 
                    icon={<Mail className="h-6 w-6" />}
                    title="E-mail"
                    description="Envie um e-mail para nós"
                    contact="reichertclaudiney992@gmail.com"
                    action={handleEmailClick}
                    buttonText="Enviar E-mail"
                    buttonClass="bg-primary hover:bg-primary/90 text-primary-foreground"
                  />
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <Card className="border border-border/50 shadow-card">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🍌</div>
                    <h3 className="text-2xl font-bold mb-2">Beto Bananas</h3>
                    <p className="text-muted-foreground">
                      Reichert Comércio de Frutas e Verduras
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Endereço:</p>
                        <p className="text-muted-foreground">
                          Rua Teodoro Reichert, 576<br />
                          Braço do Baú, Ilhota - SC
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Telefone:</p>
                        <p className="text-muted-foreground">(47) 98863-8192</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">E-mail:</p>
                        <p className="text-muted-foreground">reichertclaudiney992@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cta-button"
                      onClick={handleWhatsAppClick}
                    >
                      Fazer Pedido Agora
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  contact: string;
  action: () => void;
  buttonText: string;
  buttonClass: string;
}

const ContactMethod = ({ icon, title, description, contact, action, buttonText, buttonClass }: ContactMethodProps) => (
  <Card className="border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="flex items-start gap-4">
        <div className="text-primary">{icon}</div>
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <p className="text-sm font-medium mb-4">{contact}</p>
          <Button 
            size="sm" 
            className={buttonClass}
            onClick={action}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ContactSection;
