import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Head from 'next/head';
import { Progress } from '@/components/ui/progress';

export default function UpsellPage() {
  const expiryTime = new Date().getTime() + 15 * 60 * 1000; // 15 minutes from now

  const benefits = [
    { icon: Zap, text: "Acesso imediato e vitalício a todo o conteúdo." },
    { icon: CheckCircle, text: "Garantia de satisfação de 7 dias ou seu dinheiro de volta." },
    { icon: ShieldCheck, text: "Plataforma 100% segura e com suporte dedicado." },
  ];

  return (
    <>
      <Head>
        <script src="https://fast.wistia.com/player.js" async></script>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-5xl mx-auto">
          <header className="text-center mb-8">
            <div className="mb-8 max-w-lg mx-auto">
              <p className="text-sm text-muted-foreground mb-2">Seu cadastro está quase concluído...</p>
              <Progress value={90} indicatorClassName="bg-destructive" />
              <div className="mt-4">
                <Image 
                  src="https://i.imgur.com/EhUv9ej.png" 
                  alt="Chat finalizado" 
                  width={200} 
                  height={37} 
                  className="mx-auto" 
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
              Parabéns, seu cadastro está sendo finalizado.
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground font-body">
              Para acessar o material, assista ao vídeo de 1 minuto 👇🏼
            </h2>
          </header>

          <section className="my-8">
            <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
              <script src="https://fast.wistia.com/player.js" async></script><script src="https://fast.wistia.com/embed/7ld00usp25.js" async type="module"></script><style>{`wistia-player[media-id='7ld00usp25']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7ld00usp25/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style> <wistia-player media-id="7ld00usp25" aspect="0.5625"></wistia-player>
            </div>
          </section>
          
          <CountdownTimer expiryTimestamp={expiryTime} />

          <section className="my-12">
            <Card className="w-full overflow-hidden shadow-lg bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-center">O que você recebe no Acesso Premium:</h3>
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
