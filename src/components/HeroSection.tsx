import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  const scrollToNextSection = () => {
    const sobreSection = document.getElementById('sobre');
    if (sobreSection) {
      sobreSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547988638192?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20bananas%20disponíveis.', '_blank');
  };
  return <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background with banana theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1604148482093-d55d6fc62400?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30"></div>
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle, rgba(255, 215, 0, 0.1) 2px, transparent 2px)`,
        backgroundSize: '60px 60px'
      }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-primary-foreground font-medium mb-6 animate-slide-up [animation-delay:300ms]">
                Frutas Frescas e de Qualidade
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
                <span className="text-primary">Beto Bananas</span><br />
                Seu Forte é <span className="text-accent">Bananas</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 max-w-xl animate-slide-up [animation-delay:700ms] text-zinc-950">
                Comércio especializado em bananas Caturra e Prata de alta qualidade. 
                Frutas frescas direto do produtor em Ilhota, Santa Catarina.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up [animation-delay:900ms] mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-lg group cta-button" onClick={handleWhatsAppClick}>
                  Faça seu Pedido
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={scrollToNextSection}>
                  Conheça Mais
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-muted-foreground text-sm animate-slide-up [animation-delay:1100ms]">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Bananas Caturra e Prata
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                  Direto do Produtor
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-up [animation-delay:800ms]">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-banana">
                  <img src="/lovable-uploads/5dfbe546-aade-4fbf-8d0f-b350c37481d8.png" alt="Beto Bananas - Mascote" className="w-full h-auto animate-float" />
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>;
};
export default HeroSection;