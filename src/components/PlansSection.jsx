
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Wrench, Settings, Brain, Zap, Rows } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PlanComparisonModal from './PlanComparisonModal';

export default function PlansSection({ onSelectPlan }) {
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      id: 'essencial',
      name: 'Essencial',
      icon: Wrench,
      price: '2.200',
      description: 'Para autônomos e pequenas empresas que precisam de suporte confiável.',
      features: [
        '10h de suporte remoto/mês',
        'Atendimento via WhatsApp e e-mail',
        '1 análise preventiva mensal',
        'Backup manual assistido',
        'Painel básico de alertas'
      ],
      color: 'from-slate-500 to-slate-600',
      popular: false
    },
    {
      id: 'profissional',
      name: 'Profissional',
      icon: Settings,
      price: '4.400',
      description: 'Para empresas que querem TI com manutenção preventiva e previsibilidade.',
      features: [
        'Tudo do Essencial +',
        '20h de suporte remoto/mês (total)',
        '3 visitas presenciais',
        'Monitoramento 24x7 (3 ativos)',
        '3 análises preventivas mensais',
        'Manutenção de 1 site WordPress',
        'Backup automatizado'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      id: 'empresarial',
      name: 'Empresarial',
      icon: Zap,
      price: '6.600',
      description: 'Ideal para quem busca automação e segurança em escala.',
      features: [
        'Tudo do Profissional +',
        '30h de suporte remoto/mês (total)',
        '5 visitas presenciais (total)',
        'Monitoramento 24x7 (5 ativos)',
        'Até 3 automações com n8n',
        '5 análises preventivas mensais',
        'Manutenção de até 3 sites WordPress',
        'Treinamento trimestral',
        'Relatório mensal com métricas',
        'Painel avançado de alertas'
      ],
      color: 'from-teal-500 to-teal-600',
      popular: true
    },
    {
      id: 'estrategico',
      name: 'Estratégico',
      icon: Brain,
      price: '8.800',
      description: 'CTO-as-a-Service para quem enxerga TI como diferencial competitivo.',
      features: [
        'Tudo do Empresarial +',
        '40h suporte técnico e consultivo',
        '10 visitas presenciais (total)',
        'Atendimento prioritário 24/7',
        'Monitoramento 24x7 (ilimitado)',
        'Automações ilimitadas com n8n',
        'Reunião estratégica 1h/semana',
        'DRP (Recuperação de Desastres)',
        'Backup automatizado premium',
        'Dashboard executivo personalizado',
        'Gestão total de TI e compliance'
      ],
      color: 'from-gray-700 to-gray-800',
      popular: false
    }
  ];

  return (
    <>
      <PlanComparisonModal 
        isOpen={showComparison} 
        onClose={() => setShowComparison(false)} 
        plans={plans} 
      />
      <section id="planos" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossos Planos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para sua empresa. Todos incluem nossa expertise técnica 
              e atendimento personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <Card 
                  key={plan.id}
                  className={`flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                    plan.popular ? 'ring-2 ring-teal-500 shadow-xl' : 'shadow-lg'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {plan.name}
                    </CardTitle>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow space-y-6">
                    <div className="space-y-3 flex-grow">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="text-center mb-4">
                        <span className="text-3xl font-bold text-gray-900">
                          R$ {plan.price}
                        </span>
                        <span className="text-gray-500">/mês</span>
                      </div>
                      
                      <Link to={createPageUrl(`Checkout?plan=${plan.id}&price=${plan.price}&name=${plan.name}`)}>
                        <Button 
                          className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                            plan.popular 
                              ? 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg'
                              : 'bg-gray-900 hover:bg-gray-800 text-white'
                          }`}
                        >
                          Escolher Plano
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              onClick={() => setShowComparison(true)}
              className="mb-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-semibold rounded-xl"
            >
              <Rows className="w-5 h-5 mr-2" />
              Comparar Planos
            </Button>
            <p className="text-gray-600 mb-4">
              Horas adicionais: <strong>R$ 220/hora</strong> • Sem fidelidade
            </p>
            <Button 
              variant="outline"
              onClick={() => window.open('https://wa.me/5511964196205', '_blank')}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 font-semibold rounded-xl"
            >
              Precisa de algo personalizado?
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
