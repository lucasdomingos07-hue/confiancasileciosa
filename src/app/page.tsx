import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import CountdownTimer from '@/components/countdown-timer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Head from 'next/head';

export default function UpsellPage() {
  const expiryTime = new Date().getTime() + 15 * 60 * 1000; // 15 minutes from now

  const upsellImage = PlaceHolderImages.find(p => p.id === 'upsell-product');

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
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-foreground">
              Parabéns, seu cadastro está sendo finalizado.
            </h1>
            <h2 className="mt-4 text-lg md:text-xl text-muted-foreground font-body">
              Para acessar o material, assista ao vídeo de 1 minuto 👇🏼
            </h2>
          </header>

          <section className="my-8">
            <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-border">
              <script src="https://fast.wistia.com/embed/7ld00usp25.js" async type="module"></script>
              <style>{`
                wistia-player[media-id='7ld00usp25']:not(:defined) { 
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/7ld00usp25/swatch'); 
                  display: block; 
                  filter: blur(5px); 
                  padding-top:177.78%; 
                }
              `}</style>
              <wistia-player media-id="7ld00usp25" aspect="0.5625"></wistia-player>
            </div>
          </section>
          
          <CountdownTimer expiryTimestamp={expiryTime} />

          <section className="my-12">
            <Card className="w-full overflow-hidden shadow-lg bg-card/50 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-primary">OFERTA ESPECIAL E ÚNICA</CardTitle>
                <CardDescription className="text-base">Adquira o Acesso Premium por um preço que não se repetirá.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-square md:aspect-[4/3] w-full rounded-lg overflow-hidden">
                    {upsellImage && (
                      <Image
                        src={upsellImage.imageUrl}
                        alt={upsellImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={upsellImage.imageHint}
                      />
                    )}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">O que você recebe no Acesso Premium:</h3>
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <benefit.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                          <span className="text-foreground/90">{benefit.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="text-center my-12 p-8 bg-card rounded-2xl shadow-lg border border-border">
              <p className="text-xl text-muted-foreground line-through">De <span className="font-semibold">R$297,00</span></p>
              <p className="text-2xl mt-2">Por apenas 12x de</p>
              <p className="text-7xl font-bold text-primary my-2 font-mono">R$19,70</p>
              <p className="text-muted-foreground">(ou R$197,00 à vista)</p>
              <Button size="lg" className="mt-8 w-full max-w-lg h-16 text-xl font-bold animate-subtle-scale shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300">
                  QUERO GARANTIR MEU ACESSO COM DESCONTO!
              </Button>
              <p className="text-sm text-muted-foreground mt-4">Clique no botão para finalizar a compra em ambiente seguro.</p>
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
