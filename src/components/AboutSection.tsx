
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Heart, Star, Truck } from 'lucide-react';

const AboutSection = () => {
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
    <section id="sobre" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Reichert Comércio de Frutas e Verduras
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Com tradição familiar e comprometimento com a qualidade, oferecemos as melhores bananas 
            Caturra e Prata da região de Ilhota, Santa Catarina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-4">
                Nosso Forte é <span className="text-primary">Bananas</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                A Reichert Comércio de Frutas e Verduras se dedica há anos ao cultivo e comercialização 
                de bananas de alta qualidade. Especializados em variedades Caturra e Prata, garantimos 
                frutas frescas, saborosas e nutritivas para nossos clientes.
              </p>
              <ul className="space-y-3">
                {[
                  'Bananas Caturra de primeira qualidade',
                  'Bananas Prata selecionadas',
                  'Frutas frescas direto do produtor',
                  'Compromisso com a qualidade e frescor'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Star className="h-10 w-10 text-primary" />}
              title="Qualidade Superior"
              description="Bananas selecionadas uma a uma, garantindo sempre o melhor produto para nossos clientes."
            />
            <AboutCard 
              icon={<Heart className="h-10 w-10 text-primary" />}
              title="Tradição Familiar"
              description="Empresa familiar com valores sólidos, tratando cada cliente com carinho e dedicação."
            />
            <AboutCard 
              icon={<Truck className="h-10 w-10 text-primary" />}
              title="Entrega Rápida"
              description="Logística eficiente para garantir que suas bananas cheguem sempre frescas e no prazo."
            />
            <AboutCard 
              icon={<Check className="h-10 w-10 text-primary" />}
              title="Compromisso"
              description="Comprometidos com a satisfação dos clientes e a qualidade de nossos produtos."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => (
  <Card className="animate-on-scroll service-card border border-border/50 shadow-card">
    <CardContent className="p-6">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default AboutSection;
