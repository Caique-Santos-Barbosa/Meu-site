import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PlansSection from '../components/PlansSection';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PlansSection onSelectPlan={handleSelectPlan} />
      <FAQ />
      
      <section id="contato" className="py-20 px-6 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar 
              a TI da sua empresa em um diferencial competitivo.
            </p>
          </div>
          
          <ContactForm selectedPlan={selectedPlan} />
        </div>
      </section>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}