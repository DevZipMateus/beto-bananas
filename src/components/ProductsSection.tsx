
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProductsSection = () => {
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

  return (
    <section id="produtos" ref={sectionRef} className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            Bananas de Primeira Qualidade
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Oferecemos as melhores variedades de banana, selecionadas com cuidado para garantir 
            frescor, sabor e qualidade nutricional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProductCard 
            title="Banana Caturra"
            description="Banana de polpa doce e consistente, ideal para consumo in natura. Rica em potássio e vitaminas, perfeita para lanches saudáveis e receitas."
            features={[
              "Polpa doce e consistente",
              "Rica em potássio",
              "Ideal para consumo direto",
              "Ótima para vitaminas"
            ]}
            image="🍌"
          />
          
          <ProductCard 
            title="Banana Prata"
            description="Banana de sabor marcante e textura firme, excelente para diversas preparações culinárias. Muito apreciada pelo seu sabor característico."
            features={[
              "Sabor marcante",
              "Textura firme",
              "Versátil para receitas",
              "Muito nutritiva"
            ]}
            image="🍌"
          />
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground cta-button"
            onClick={handleWhatsAppClick}
          >
            Fazer Pedido Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ProductCard = ({ title, description, features, image }: ProductCardProps) => (
  <Card className="animate-on-scroll product-card border border-border/50 shadow-card overflow-hidden">
    <CardContent className="p-0">
      <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-8 text-center">
        <div className="text-6xl mb-4">{image}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default ProductsSection;
