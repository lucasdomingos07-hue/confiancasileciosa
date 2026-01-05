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
              <span className="text-green-500">Seu acesso está<br/>quase liberado</span> ⏳
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground">
              Antes de entrar, descubra<br/>o que faz as Frases Secretas<br/>funcionarem de verdade.
            </h2>
          </header>

          <section className="my-10 space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
            <p>Você acabou de aprender o que dizer para <span className="text-blue-500">despertar interesse</span>. Mas existe algo ainda mais decisivo do que as palavras.</p>
            
            <div className="py-4 px-6 bg-card/50 border border-primary/20 rounded-xl inline-block">
              <p className="text-xl md:text-2xl font-semibold">✅ A postura emocional<br/>por trás delas.</p>
            </div>

            <p>Muitas mulheres dizem a frase certa… mas sentem que o efeito não é o mesmo.</p>
            
            <p>
              <span className="text-red-500">O problema não está no texto.</span> Está na ansiedade, no medo de errar e na vontade de agradar.
            </p>

            <p className="font-bold">E isso é percebido<br/>mesmo quando nada é dito.</p>

            <div className="my-8 p-6 bg-card border border-border rounded-xl shadow-lg">
              <p className="text-base text-foreground">
                O <b className="text-green-500">Confiança Silenciosa</b> foi criado para te ensinar a sustentar calma, presença e segurança emocional.
              </p>
            </div>

            <p><b>Aqui, o foco não é falar mais.</b> É se posicionar melhor.</p>
            
            <p className="font-semibold">Quando sua postura muda, a percepção muda. E quando a percepção muda, o interesse acontece de forma natural.</p>
          </section>

          <section className="my-12 p-8 bg-card border border-border rounded-2xl shadow-2xl text-center space-y-6">
              <div>
                <p className="text-2xl md:text-3xl font-bold uppercase text-green-500">Apenas Hoje</p>
                <p className="text-2xl md:text-3xl">De <span className="line-through">R$ 97,00</span> por <span className="text-green-500 font-bold">R$ 37,00</span></p>
                <p className="text-2xl md:text-3xl mt-4">Você vai potencializar<br/>em até <span className="font-bold text-green-500">10x mais</span> o poder<br/>das Frases Secretas</p>
              </div>
              <Image src="https://i.imgur.com/WkwpKxm.png" alt="Confiança Silenciosa" width={400} height={200} className="mx-auto rounded-md my-4" />
              <p className="mt-2 text-muted-foreground">Conteúdo digital com acesso imediato.</p>
              <a href="https://checkout.dinamicasdafe.site/VCCL1O8SCNW2?upsell=true" className="block">
                <Button size="lg" className="uppercase font-bold text-xl py-8 px-10 animate-subtle-scale shadow-lg w-full max-w-lg bg-green-600 hover:bg-green-700 text-white">
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
