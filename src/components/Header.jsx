import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/24e16f079_Propostacomercialmodernaazulservios1_Pgina_1_Imagem_0004.png" 
              alt="Bérith Tech Logo" 
              className="h-12 w-auto" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('planos')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Contato
            </button>
            <Button 
              onClick={() => window.open('https://wa.me/5511964196205', '_blank')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Falar Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="space-y-4">
              <button 
                onClick={() => scrollToSection('planos')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-gray-700 hover:text-teal-600 font-medium transition-colors"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/5511964196205', '_blank')}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Falar Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}