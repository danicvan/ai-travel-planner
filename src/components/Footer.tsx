
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-2xl font-display font-semibold tracking-tight mb-4 inline-block">
              EduSystem
            </Link>
            <p className="text-foreground/70 mt-4 max-w-xs">
              Transformando a gestão escolar com tecnologia avançada e design centrado no usuário.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-primary transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-foreground/70 hover:text-primary transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-foreground/70 hover:text-primary transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-foreground/70 hover:text-primary transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-foreground/70 hover:text-primary transition-colors">
                  Suporte
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-foreground/70 hover:text-primary transition-colors">
                  Demonstração
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-base mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-foreground/70 hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-foreground/70 hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-foreground/70 hover:text-primary transition-colors">
                  Segurança
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} EduSystem. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link to="/terms" className="text-foreground/60 hover:text-primary transition-colors">
                  Termos
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/60 hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-foreground/60 hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
