"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

declare global {
  interface Window {
    _wq: any[];
    Wistia: any;
  }
}

export default function UpsellPage() {
  const [showOffer, setShowOffer] = useState(false);

  const benefits = [
    { icon: Zap, text: "Acesso imediato e vitalício a todo o conteúdo." },
    { icon: CheckCircle, text: "Garantia de satisfação de 7 dias ou seu dinheiro de volta." },
    { icon: ShieldCheck, text: "Plataforma 100% segura e com suporte dedicado." },
  ];

  useEffect(() => {
    window._wq = window._wq || [];
    window._wq.push({
      id: "7ld00usp25",
      onReady: function(video: any) {
        video.bind("timechange", function(t: number) {
          if (t >= 42) {
            setShowOffer(true);
            video.unbind("timechange");
          }
        });
      }
    });

    const script = document.createElement('script');
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    }
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-5xl mx-auto">
          
          <div className="w-full max-w-lg mx-auto mb-8">
            <Progress value={93} className="h-2" indicatorClassName="bg-destructive" />
          </div>

          <div className="mb-8 flex justify-center">
            <Image 
              src="https://i.imgur.com/EhUv9ej.png" 
              alt="Logo" 
              width={50} 
              height={12}
              objectFit="contain"
            />
          </div>

          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl tracking-tight text-foreground font-normal">
              Parabéns, seu cadastro<br/>está sendo finalizado...
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground font-body">
              Antes de acessar o material,<br/>assista ao vídeo de 1 minuto 👇🏼
            </h2>
          </header>

          <section className="my-8">
            <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
              <div 
                className="wistia_embed wistia_async_7ld00usp25 videoFoam=true" 
                style={{ height: '100%', position: 'relative', width: '100%' }}
              >&nbsp;</div>
            </div>
          </section>
          
          <div className="text-center my-8 min-h-[110px]">
            {showOffer && (
              <>
                <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true">
                  <Button size="lg" variant="destructive" className="uppercase font-bold text-xl py-8 px-12 animate-subtle-scale shadow-lg">
                    ACEITAR OFERTA AGORA
                  </Button>
                </a>
                <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true">
                  <p className="mt-4 text-sm underline text-muted-foreground cursor-pointer">
                    Não, obrigado
                  </p>
                </a>
              </>
            )}
          </div>
          
          {showOffer && (
            <section className="my-8 transition-opacity duration-500 ease-in-out opacity-100">
               <Card className="w-full max-w-2xl mx-auto overflow-hidden shadow-lg bg-card/50 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-center text-foreground/90 font-bold">
                    Confiança Silenciosa foi criado para garantir ainda mais o poder de usar frases e comportamentos para atrair qualquer homem.
                  </p>
                </CardContent>
              </Card>
            </section>
          )}

          <section className="my-12">
            <Card className="w-full overflow-hidden shadow-lg bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <ul className="space-y-4 max-w-md mx-auto">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <benefit.icon className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                        <span className="text-foreground/90">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <footer className="text-center mt-16 text-xs text-muted-foreground">
              <p>Confiança Silenciosa &copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
              <div className="mt-2 space-x-4">
                  <span>Termos de Uso</span>
                  <span>&bull;</span>
                  <span>Política de Privacidade</span>
              </div>
          </footer>
        </div>
      </main>
    </>
  );
}
