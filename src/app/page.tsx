"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function UpsellPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12 font-body text-foreground">
        <div className="w-full max-w-2xl mx-auto text-center">
          
          <header className="text-center mb-8 mt-8">
            <h1 className="text-3xl md:text-4xl tracking-tight font-bold">
              Seu acesso está<br/>quase liberado.
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground">
              Antes de entrar, descubra<br/>o que faz as Frases Secretas<br/>funcionarem de verdade.
            </h2>
          </header>

          <section className="my-10 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p>Você acabou de aprender o que dizer<br/>para despertar interesse.</p>
            <p>Mas existe algo ainda mais<br/>decisivo do que as palavras.</p>
            
            <div className="py-4 px-6 bg-card/50 border border-primary/20 rounded-xl inline-block">
              <p className="text-xl md:text-2xl font-semibold">👉 A postura emocional por trás delas.</p>
            </div>

            <p>Muitas mulheres dizem a frase certa…<br/>mas sentem que o efeito não é o mesmo.</p>
            
            <p>O problema não está no texto. Está na ansiedade, no medo de errar e na vontade de agradar.</p>

            <p>E isso é percebido — mesmo quando nada é dito.</p>

            <div className="py-8">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                O <span className="text-destructive">Confiança Silenciosa</span> foi criado para te ensinar a sustentar <span className="font-bold">calma, presença e segurança emocional</span> — mesmo quando você gosta, mesmo quando sente vontade de responder no impulso.
              </p>
            </div>

            <p>Aqui, o foco não é falar mais.<br/><span className="font-bold">É se posicionar melhor.</span></p>
            
            <p>Quando sua postura muda,<br/>a percepção muda. E quando a<br/>percepção muda, o interesse<br/>acontece de forma natural</p>
          </section>

          <section className="my-12 p-6 bg-card border border-border rounded-2xl shadow-2xl">
              <p className="text-2xl md:text-3xl font-bold">Por apenas R$ 37,00,<br/>você pode dar esse próximo passo agora.</p>
              <p className="mt-2 text-muted-foreground">Conteúdo digital com acesso imediato.</p>
          </section>
          
          <div className="text-center my-8">
            <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true">
              <Button size="lg" variant="destructive" className="uppercase font-bold text-xl py-8 px-10 animate-subtle-scale shadow-lg w-full max-w-lg">
                <ArrowRight className="mr-2 h-6 w-6" /> SIM, QUERO DESENVOLVER MINHA CONFIANÇA SILENCIOSA
              </Button>
            </a>
             <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true">
              <p className="mt-4 text-sm underline text-muted-foreground cursor-pointer">
                Não, obrigado
              </p>
            </a>
          </div>
          
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
