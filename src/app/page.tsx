"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function UpsellPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress >= 95) {
            clearInterval(interval);
            return 95;
          }
          return prevProgress + 1;
        });
      }, 30); // Updates roughly every 30ms to reach 95% in ~3 seconds

      return () => clearInterval(interval);
    }, 100);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12 font-body text-foreground">
        <div className="w-full max-w-2xl mx-auto text-center">

          <div className="w-full max-w-md mx-auto my-8">
            <p className="text-lg text-muted-foreground mb-2">Seu acesso está sendo criado.. ⏳</p>
            <div className="relative">
              <Progress value={progress} indicatorClassName="bg-green-500 transition-all duration-100 ease-linear" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>
          
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl tracking-tight font-bold">
              <span className="text-green-500">Parabéns por<br/>essa escolha 🎉</span>
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground">
              Antes de acessar, existe um detalhe que define se as Frases Secretas vão funcionar ou não.
            </h2>
          </header>

          <section className="my-10 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p>
              Ansiedade, pressa e medo de errar são percebidos — mesmo em silêncio.
              <br/>
              E quando isso aparece, o impacto das Frases Secretas diminui.
            </p>

            <p>
              O Confiança Silenciosa foi criado para te ensinar a manter calma, presença e segurança emocional, mesmo quando você gosta e sente vontade de responder no impulso.
            </p>

            <p>
              <b>Aqui, não é sobre falar mais.</b>
              <br/>
              <b>É sobre se posicionar melhor.</b>
            </p>
            
            <p className="font-medium">
              <b>Quando sua postura muda, a percepção muda.</b>
              <br/>
              <b>E quando a percepção muda, o interesse acontece naturalmente.</b>
            </p>
          </section>

          <section className="my-12 p-8 bg-card border border-border rounded-2xl shadow-2xl text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-px -mt-px">
                <div className="bg-green-500 text-white font-bold uppercase py-2 px-6 rounded-bl-xl rounded-tr-xl shadow-lg">
                  APENAS HOJE
                </div>
              </div>

              <p className="text-xl md:text-2xl mt-8 font-bold">Treinamento Confiança Silenciosa</p>
              <p className="text-base text-muted-foreground">Sem essa postura, até a frase certa pode perder o efeito.</p>
              <div className="space-y-2">
                 <p className="text-2xl md:text-3xl">
                  <span className="line-through">De R$ 97,00</span><br/>
                  <span className="font-bold">Por <span className="text-green-500">R$ 37,00</span></span>
                </p>
              </div>

              <div className="space-y-2 mt-4">
                <p className="text-2xl md:text-3xl font-bold text-green-500">Você vai potencializar<br/>em até 10X MAIS o poder<br/>das Frases Secretas</p>
              </div>
              
              <div className="text-left my-6 space-y-3 text-lg">
                <div className="flex items-center gap-2">
                  <Check className="h-6 w-6 text-green-500" />
                  <span>Mais interesse sem esforço</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-6 w-6 text-green-500" />
                  <span>Não responder no impulso e se arrepender depois</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-6 w-6 text-green-500" />
                  <span>Fazer as Frases Secretas serem levadas a sério</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-6 w-6 text-green-500" />
                  <span>Manter postura firme sem se explicar</span>
                </div>
              </div>

              <Image src="https://i.imgur.com/LDq7qCx.png" alt="Confiança Silenciosa" width={600} height={400} className="mx-auto rounded-md my-4 w-[450px] h-auto" />
              <p className="mt-2 text-muted-foreground">Conteúdo digital com acesso imediato.</p>
              
              <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true" className="block">
                <Button size="lg" className="uppercase font-bold text-xl py-8 px-10 animate-subtle-scale shadow-lg w-full max-w-lg bg-green-600 hover:bg-green-700 text-white">
                  <ArrowRight className="mr-2 h-6 w-6" /> Ativar a Confiança Silenciosa
                </Button>
              </a>
             <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true">
              <p className="mt-2 text-sm underline text-muted-foreground cursor-pointer">
                Não, obrigado
              </p>
            </a>
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
