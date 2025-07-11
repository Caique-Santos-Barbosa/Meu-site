import React from 'react';
import { Button } from "@/components/ui/button";
import { X, CheckCircle2, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function PlanComparisonModal({ isOpen, onClose, plans }) {
  if (!isOpen) return null;

  const allFeatures = [
    { category: 'Suporte', name: 'Horas de Suporte' },
    { category: 'Suporte', name: 'Atendimento via WhatsApp e e-mail' },
    { category: 'Suporte', name: 'Atendimento prioritário 24/7' },
    { category: 'Suporte', name: 'Visitas Presenciais' },
    { category: 'Monitoramento e Manutenção', name: 'Monitoramento 24x7' },
    { category: 'Monitoramento e Manutenção', name: 'Análises Preventivas' },
    { category: 'Monitoramento e Manutenção', name: 'Manutenção de Sites WordPress' },
    { category: 'Segurança e Backup', name: 'Backup' },
    { category: 'Segurança e Backup', name: 'DRP (Recuperação de Desastres)' },
    { category: 'Automação e Relatórios', name: 'Automações com n8n' },
    { category: 'Automação e Relatórios', name: 'Painel de Alertas' },
    { category: 'Automação e Relatórios', name: 'Relatório mensal com métricas' },
    { category: 'Estratégia e Gestão', name: 'Reunião estratégica 1h/semana' },
    { category: 'Estratégia e Gestão', name: 'Treinamento' },
    { category: 'Estratégia e Gestão', name: 'Gestão total de TI e compliance' },
    { category: 'Estratégia e Gestão', name: 'Dashboard executivo personalizado' },
  ];

  const getFeatureValue = (planName, featureName) => {
    switch (planName) {
      case 'Essencial':
        switch (featureName) {
          case 'Horas de Suporte': return '10h/mês';
          case 'Atendimento via WhatsApp e e-mail': return true;
          case 'Análises Preventivas': return '1 mensal';
          case 'Backup': return 'Manual';
          case 'Painel de Alertas': return 'Básico';
          default: return false;
        }
      case 'Profissional':
        switch (featureName) {
          case 'Horas de Suporte': return '20h/mês';
          case 'Atendimento via WhatsApp e e-mail': return true;
          case 'Visitas Presenciais': return '3';
          case 'Monitoramento 24x7': return '3 ativos';
          case 'Análises Preventivas': return '3 mensais';
          case 'Manutenção de Sites WordPress': return '1 site';
          case 'Backup': return 'Automatizado';
          case 'Painel de Alertas': return 'Básico';
          default: return false;
        }
      case 'Empresarial':
        switch (featureName) {
          case 'Horas de Suporte': return '30h/mês';
          case 'Atendimento via WhatsApp e e-mail': return true;
          case 'Visitas Presenciais': return '5';
          case 'Monitoramento 24x7': return '5 ativos';
          case 'Análises Preventivas': return '5 mensais';
          case 'Manutenção de Sites WordPress': return 'Até 3 sites';
          case 'Backup': return 'Automatizado';
          case 'Automações com n8n': return 'Até 3';
          case 'Painel de Alertas': return 'Avançado';
          case 'Relatório mensal com métricas': return true;
          case 'Treinamento': return 'Trimestral';
          default: return false;
        }
      case 'Estratégico':
        switch (featureName) {
          case 'Horas de Suporte': return '40h consultivas';
          case 'Atendimento via WhatsApp e e-mail': return true;
          case 'Atendimento prioritário 24/7': return true;
          case 'Visitas Presenciais': return '10';
          case 'Monitoramento 24x7': return 'Ilimitado';
          case 'Análises Preventivas': return '10 mensais';
          case 'Manutenção de Sites WordPress': return 'Ilimitado';
          case 'Backup': return 'Premium';
          case 'DRP (Recuperação de Desastres)': return true;
          case 'Automações com n8n': return 'Ilimitado';
          case 'Painel de Alertas': return 'Executivo';
          case 'Relatório mensal com métricas': return true;
          case 'Reunião estratégica 1h/semana': return true;
          case 'Treinamento': return 'Mensal';
          case 'Gestão total de TI e compliance': return true;
          case 'Dashboard executivo personalizado': return true;
          default: return false;
        }
      default: return false;
    }
  };

  let lastCategory = '';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Compare nossos Planos</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th className="p-4 font-semibold text-gray-700 w-1/4">Recursos</th>
                {plans.map(plan => (
                  <th key={plan.id} className="p-4 text-center font-bold text-gray-900">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {allFeatures.map((feature, index) => {
                const showCategory = feature.category !== lastCategory;
                lastCategory = feature.category;
                return (
                  <React.Fragment key={index}>
                    {showCategory && (
                      <tr className="bg-gray-100">
                        <td colSpan={plans.length + 1} className="p-2 px-4 font-bold text-teal-700">
                          {feature.category}
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="p-4 font-medium text-gray-600">{feature.name}</td>
                      {plans.map(plan => {
                        const value = getFeatureValue(plan.name, feature.name);
                        return (
                          <td key={plan.id} className="p-4 text-center">
                            {typeof value === 'boolean' && value ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                            ) : typeof value === 'boolean' && !value ? (
                              <MinusCircle className="w-5 h-5 text-gray-300 mx-auto" />
                            ) : (
                              <span className="font-semibold text-gray-800">{value}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  </React.Fragment>
                );
              })}
              <tr className="bg-gray-50">
                <td className="p-4 font-semibold">Preço</td>
                {plans.map(plan => (
                   <td key={plan.id} className="p-4 text-center font-bold text-lg text-gray-900">
                     R$ {plan.price}<span className="text-sm font-normal text-gray-500">/mês</span>
                   </td>
                ))}
              </tr>
               <tr>
                <td></td>
                {plans.map(plan => (
                   <td key={plan.id} className="p-4 text-center">
                    <Link to={createPageUrl(`Checkout?plan=${plan.id}&price=${plan.price}&name=${plan.name}`)}>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-800 hover:bg-gray-700'}`}
                      >
                        Contratar
                      </Button>
                    </Link>
                   </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}