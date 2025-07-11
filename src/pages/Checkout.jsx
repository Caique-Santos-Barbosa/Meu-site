import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ArrowLeft, Shield, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const allPlansData = {
  essencial: {
    features: [
      '10h de suporte remoto/mês',
      'Atendimento via WhatsApp e e-mail',
      '1 análise preventiva mensal',
      'Backup manual assistido',
    ]
  },
  profissional: {
    features: [
      '20h de suporte remoto/mês',
      '3 visitas presenciais',
      'Monitoramento 24x7 (3 ativos)',
      'Manutenção de 1 site WordPress',
    ]
  },
  empresarial: {
    features: [
      '30h de suporte remoto/mês',
      '5 visitas presenciais',
      'Até 3 automações com n8n',
      'Relatório mensal com métricas',
    ]
  },
  estrategico: {
    features: [
      '40h suporte técnico e consultivo',
      '10 visitas presenciais',
      'Atendimento prioritário 24/7',
      'DRP (Recuperação de Desastres)',
    ]
  }
};


export default function Checkout() {
  const [planData, setPlanData] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const price = urlParams.get('price');
    const name = urlParams.get('name');
    
    if (plan && price && name) {
      setPlanData({ 
        plan, 
        price, 
        name,
        features: allPlansData[plan]?.features || []
      });
    }
  }, []);

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const bankingData = {
    bank: "0260 – Nu Pagamentos S.A.",
    agency: "0001",
    account: "31913025-7",
    pixEmail: "caique.barbosa@berithtech.com.br",
    cnpj: "49.811.794/0001-62",
    pixKey: "f09534b9-b34e-4825-a1b6-d761c4eebd2e"
  };

  if (!planData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Carregando detalhes do plano...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to={createPageUrl('Home')}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Finalizar Contratação</h1>
            <p className="text-gray-600">Complete seu pagamento via PIX</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resumo do Plano */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-600" />
                Resumo do Plano
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Plano {planData.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-teal-600">
                    R$ {planData.price}
                  </span>
                  <span className="text-gray-600">/mês</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Principais Recursos:</h4>
                {planData.features.map((feature, index) => (
                   <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Importante:</strong> Após o pagamento, entre em contato via WhatsApp para confirmar e agendar o início dos serviços.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dados para Pagamento */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-teal-600" />
                Pagamento via PIX
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* QR Code */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-xl shadow-lg inline-block mb-4">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f984ae321_Screenshot_1.png"
                    alt="QR Code PIX"
                    className="w-48 h-48 mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-600">
                  Escaneie o QR Code ou use os dados abaixo
                </p>
              </div>

              {/* Dados Bancários */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Chave PIX (E-mail)</p>
                      <p className="text-sm text-gray-900 font-mono">{bankingData.pixEmail}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(bankingData.pixEmail, 'pixEmail')}
                    >
                      {copiedField === 'pixEmail' ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">CNPJ</p>
                      <p className="text-sm text-gray-900 font-mono">{bankingData.cnpj}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(bankingData.cnpj, 'cnpj')}
                    >
                      {copiedField === 'cnpj' ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Banco</p>
                      <p className="text-sm text-gray-900">{bankingData.bank}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Agência</p>
                      <p className="text-sm text-gray-900 font-mono">{bankingData.agency}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Conta Corrente</p>
                      <p className="text-sm text-gray-900 font-mono">{bankingData.account}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="space-y-3">
                <Button 
                  onClick={() => window.open('https://wa.me/5511964196205', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 py-3 font-semibold"
                >
                  Confirmar Pagamento via WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => window.open('mailto:caique.barbosa@berithtech.com.br', '_blank')}
                  className="w-full"
                >
                  Enviar Comprovante por E-mail
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Próximos Passos
            </h3>
            <div className="space-y-2 text-left">
              <div className="flex items-start gap-3">
                <Badge className="bg-teal-100 text-teal-800 mt-1">1</Badge>
                <p className="text-sm text-gray-700">Realize o pagamento via PIX</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-teal-100 text-teal-800 mt-1">2</Badge>
                <p className="text-sm text-gray-700">Envie o comprovante via WhatsApp ou e-mail</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-teal-100 text-teal-800 mt-1">3</Badge>
                <p className="text-sm text-gray-700">Nossa equipe entrará em contato para iniciar os serviços</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}