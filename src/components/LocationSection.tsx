
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const LocationSection = () => {
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

  return (
    <section id="localizacao" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossa Localização
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Venha nos Visitar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Estamos localizados em Ilhota, Santa Catarina, prontos para atender você com as melhores bananas da região.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Teodoro Reichert, 576<br />
                      Bairro Braço do Baú<br />
                      Ilhota - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">
                      <a href="tel:+5547988638192" className="hover:text-primary transition-colors">
                        (47) 98863-8192
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      <a href="mailto:reichertclaudiney992@gmail.com" className="hover:text-primary transition-colors">
                        reichertclaudiney992@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 08:00 - 18:00<br />
                      Sábado: 08:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <Card className="border border-border/50 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[400px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1750945226469!6m8!1m7!1stli8tntAVlrVT-gXCwHT8Q!2m2!1d-26.80250052772453!2d-48.90359407314221!3f275.5008937566985!4f-0.24211780993039156!5f1.6544628575330793"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Beto Bananas - Rua Teodoro Reichert, 576, Ilhota - SC"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
