
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary-foreground text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/5dfbe546-aade-4fbf-8d0f-b350c37481d8.png" 
                alt="Beto Bananas Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-primary">Beto</span> Bananas
                </h3>
                <p className="text-white/80 text-sm">Frutas e Verduras</p>
              </div>
            </div>
            <p className="text-white/80 max-w-xs">
              Reichert Comércio de Frutas e Verduras - Especialistas em bananas Caturra e Prata de alta qualidade.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#sobre">Sobre</FooterNavItem>
              <FooterNavItem href="#produtos">Produtos</FooterNavItem>
              <FooterNavItem href="#localizacao">Localização</FooterNavItem>
              <FooterNavItem href="#contato">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li>(47) 98863-8192</li>
              <li>reichertclaudiney992@gmail.com</li>
              <li>Rua Teodoro Reichert, 576</li>
              <li>Braço do Baú, Ilhota - SC</li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} Beto Bananas - Reichert Comércio de Frutas e Verduras. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary/80 border-primary/20 hover:bg-primary/90 text-primary-foreground"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-primary transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;
