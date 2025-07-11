
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Clock, Users } from 'lucide-react';

export default function Hero() {
  const scrollToPlans = () => {
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-teal-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-lg">
            <Shield className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-gray-700">Suporte TI Profissional</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            TI Inteligente.
            <br />
            <span className="text-teal-600">Sem Complicações.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
            Pacotes mensais de suporte técnico profissional com foco em 
            <br />
            <span className="font-semibold text-gray-800">performance, segurança e automação</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToPlans}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Conheça os Planos
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.open('https://wa.me/5511964196205', '_blank')}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Falar com Especialista
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Monitoramento</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100+</div>
              <div className="text-sm text-gray-600">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
