"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import Head from 'next/head';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    _wq: any[];
    Wistia: any;
  }
}

export default function UpsellPage() {
  const [showButton, setShowButton] = useState(false);

  const benefits = [
    { icon: Zap, text: "Acesso imediato e vitalício a todo o conteúdo." },
    { icon: CheckCircle, text: "Garantia de satisfação de 7 dias ou seu dinheiro de volta." },
    { icon: ShieldCheck, text: "Plataforma 100% segura e com suporte dedicado." },
  ];

  useEffect(() => {
    // Adiciona o script da Wistia ao head
    const script = document.createElement('script');
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.head.appendChild(script);

    // Inicializa o player e os eventos
    window._wq = window._wq || [];
    window._wq.push({
      id: "7ld00usp25",
      onReady: (video: any) => {
        let buttonShown = false;
        video.bind("timechange", (t: number) => {
          if (!buttonShown && t >= 42) {
            setShowButton(true);
            buttonShown = true; 
          }
        });
      }
    });

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-headline tracking-tight text-foreground">
              Parabéns, seu cadastro<br/>está sendo finalizado..
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground font-body">
              Antes de acessar o material,<br/>assista ao vídeo de 1 minuto 👇🏼
            </h2>
          </header>

          <section className="my-8">
            <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
              <div 
                className="wistia_embed wistia_async_7ld00usp25 videoFoam=true" 
                style={{ height: '100%', position: 'relative', width: '100%' }}
              >&nbsp;</div>
            </div>
          </section>
          
          <div className="text-center my-8 h-20">
            {showButton && (
              <Button size="lg" variant="destructive" className="font-bold text-xl py-8 px-12 animate-subtle-scale shadow-lg">
                Aceitar oferta agora
              </Button>
            )}
          </div>

          <section className="my-12">
            <Card className="w-full overflow-hidden shadow-lg bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <ul className="space-y-4 max-w-md mx-auto">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground/90">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <footer className="text-center mt-16 text-xs text-muted-foreground">
              <p>ApexUpsell &copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
              <div className="mt-2 space-x-4">
                  <a href="#" className="hover:underline">Termos de Uso</a>
                  <span>&bull;</span>
                  <a href="#" className="hover:underline">Política de Privacidade</a>
              </div>
          </footer>
        </div>
      </main>
    </>
  );
}
