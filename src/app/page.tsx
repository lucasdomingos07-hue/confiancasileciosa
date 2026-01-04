"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import Image from 'next/image';

export default function UpsellPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12 font-body text-foreground">
        <div className="w-full max-w-2xl mx-auto text-center">

          <div className="w-full max-w-md mx-auto my-8">
            <Progress value={97} indicatorClassName="bg-green-500" />
          </div>
          
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl tracking-tight font-bold">
              Seu acesso está<br/>quase liberado ⏳
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground">
              Antes de entrar, descubra<br/>o que faz as Frases Secretas<br/>funcionarem de verdade.
            </h2>
          </header>

          <section className="my-10 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p>Você acabou de aprender o que dizer para despertar interesse. Mas existe algo ainda mais decisivo do que as palavras.</p>
            
            <div className="py-4 px-6 bg-card/50 border border-primary/20 rounded-xl inline-block">
              <p className="text-xl md:text-2xl font-semibold">✅ A postura emocional<br/>por trás delas.</p>
            </div>

            <p>Muitas mulheres dizem a frase certa… mas sentem que o efeito não é o mesmo.</p>
            
            <p>O problema não está no texto. Está na ansiedade, no medo de errar e na vontade de agradar.</p>

            <p className="font-bold">E isso é percebido<br/>mesmo quando nada é dito.</p>

            <div className="py-8">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                O Confiança Silenciosa foi criado para te ensinar a sustentar calma, presença e segurança emocional — mesmo quando você gosta, mesmo quando sente vontade de responder no impulso.
              </p>
            </div>

            <p>Aqui, o foco não é falar mais. É se posicionar melhor.</p>
            
            <p>Quando sua postura muda, a percepção muda. E quando a percepção muda, o interesse acontece de forma natural</p>
          </section>

          <section className="my-12 p-8 bg-card border border-border rounded-2xl shadow-2xl text-center space-y-6">
              <div>
                <p className="text-2xl md:text-3xl font-bold">Por apenas R$ 37,00,<br/>Você vai potencializar<br/>ainda mais as Frases Secretas</p>
                <p className="mt-2 text-muted-foreground">Conteúdo digital com acesso imediato.</p>
              </div>
              <Image src="https://i.imgur.com/WkwpKxm.png" alt="Confiança Silenciosa" width={400} height={200} className="mx-auto rounded-md my-4" />
              <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true" className="block">
                <Button size="lg" variant="destructive" className="uppercase font-bold text-xl py-8 px-10 animate-subtle-scale shadow-lg w-full max-w-lg">
                  <ArrowRight className="mr-2 h-6 w-6" /> ACEITAR ESSA OFERTA
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
