import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      question: "As horas são acumulativas?",
      answer: "Não. As horas são mensais e renovadas a cada ciclo. Isso garante que você sempre tenha suporte disponível e evita a cobrança por horas não utilizadas."
    },
    {
      question: "E se eu precisar de mais horas?",
      answer: "Horas adicionais são cobradas a R$ 220/hora. Também podemos avaliar um upgrade de plano se o uso adicional for recorrente."
    },
    {
      question: "Existe fidelidade?",
      answer: "Sim, fidelidade mínima de 3 meses. Isso nos permite conhecer melhor sua infraestrutura e entregar um serviço mais eficiente."
    },
    {
      question: "Como funciona o atendimento?",
      answer: "Atendimento via WhatsApp Business, e-mail e sistema de tickets. Para planos Profissional e superiores, incluímos visitas presenciais."
    },
    {
      question: "Vocês atendem finais de semana?",
      answer: "O monitoramento é 24/7, mas atendimento ativo é de segunda a sexta, 8h às 18h. Emergências são atendidas conforme SLA do plano."
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Após o período de fidelidade de 3 meses, você pode cancelar com 30 dias de antecedência."
    },
    {
      question: "Vocês trabalham com quais tecnologias?",
      answer: "Windows, Linux, macOS, Office 365, Google Workspace, WordPress, automações n8n, serviços em nuvem (AWS, Azure, GCP) e muito mais."
    },
    {
      question: "Como é feito o backup?",
      answer: "Backup automatizado para nuvem com criptografia. Testamos restaurações mensalmente e fornecemos relatórios de integridade."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as principais questões sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openItem === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Fale conosco diretamente
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}