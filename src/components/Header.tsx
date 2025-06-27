
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5547988638192?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20bananas%20disponíveis.', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-nav' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-20 flex items-center gap-3">
            <img 
              src="/lovable-uploads/5dfbe546-aade-4fbf-8d0f-b350c37481d8.png" 
              alt="Beto Bananas Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-display font-bold text-foreground">
                <span className={`${isMobile ? 'text-blue-600' : 'text-primary'}`}>Beto</span> Bananas
              </h1>
              <p className="text-xs text-muted-foreground hidden md:block">Frutas e Verduras</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLinks />
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 text-foreground">
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                    >
                      Solicitar Orçamento
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile 
              ? 'text-xl text-foreground hover:text-primary mb-2 w-full text-center py-3' 
              : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'
            }`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
