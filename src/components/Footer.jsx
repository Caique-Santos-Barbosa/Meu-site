import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/24e16f079_Propostacomercialmodernaazulservios1_Pgina_1_Imagem_0004.png" 
                alt="Bérith Tech Logo" 
                className="h-14 w-auto bg-white p-2 rounded-lg" 
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos a TI da sua empresa em um diferencial competitivo. 
              Suporte técnico profissional, automação inteligente e segurança de dados.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => window.open('https://wa.me/5511964196205', '_blank')}
                className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                WhatsApp
              </button>
              <button 
                onClick={() => window.open('mailto:caique.barbosa@berithtech.com.br', '_blank')}
                className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Email
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#planos" className="hover:text-white transition-colors">Suporte Técnico</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Monitoramento 24/7</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Backup Automatizado</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Automação</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors">Consultoria Estratégica</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(11) 96419-6205</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>caique.barbosa@berithtech.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Bérith Tech. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}