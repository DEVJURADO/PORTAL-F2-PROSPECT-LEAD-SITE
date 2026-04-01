import { motion } from 'motion/react';
import { 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Target, 
  AlertCircle, 
  Search, 
  Zap, 
  Clock, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5516994188414&text=Ol%C3%A1%2C+eu+vim+do+an%C3%BAncio.+Tenho+interesse+na+ferramenta+do+PORTAL+F2.+";

function WhatsAppButton({ text, className = "", icon = true }: { text: string; className?: string, icon?: boolean }) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[#25D366] px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-bold text-black transition-all hover:bg-[#20bd5a] hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(37,211,102,0.5)] text-center ${className}`}
    >
      {icon && <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 shrink-0" />}
      <span>{text}</span>
      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-[#25D366]/30 selection:text-white overflow-x-hidden">
      
      {/* 1) HERO SECTION */}
      <section className="relative flex min-h-[100svh] sm:min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-[#25D366]/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 mx-auto max-w-5xl text-center mt-10 sm:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 sm:mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-white/80 backdrop-blur-md">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-[#25D366] animate-pulse"></span>
              Geração de Leads Inteligente
            </div>
            
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-[5.5rem] leading-[1.15] sm:leading-[1.1]">
              Descubra como algumas empresas estão gerando <br className="hidden lg:block" />
              <span className="text-gradient-accent">novos clientes todos os dias</span> pelo WhatsApp
            </h1>
            
            <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-xl font-light px-2 sm:px-0">
              Sem depender apenas de indicação ou tráfego pago. Uma forma mais inteligente de encontrar e conversar com clientes.
            </p>
            
            <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row w-full px-4 sm:px-0">
              <WhatsAppButton text="Quero entender como funciona" className="w-full sm:w-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2) PROBLEMA SECTION (Split Layout) */}
      <section className="relative border-t border-white/10 bg-[#0a0a0a] px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            
            {/* Sticky Left Column */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight"
              >
                A maioria das empresas não tem problema de produto, tem problema de <span className="text-rose-500">falta de clientes.</span>
              </motion.h2>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/50 font-light">
                O mercado mudou. Esperar o cliente vir até você ou queimar dinheiro em anúncios genéricos não é mais sustentável.
              </p>
            </div>

            {/* Scrolling Right Column */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  title: 'Dificuldade em gerar novos clientes',
                  description: 'O fluxo de novos contatos é inconstante e imprevisível, dificultando o planejamento financeiro.',
                  icon: AlertCircle,
                },
                {
                  title: 'Dependência de indicação',
                  description: 'Ficar esperando o telefone tocar ou depender exclusivamente do boca a boca limita o crescimento.',
                  icon: Users,
                },
                {
                  title: 'Custo alto com anúncios',
                  description: 'O tráfego pago está cada vez mais caro e complexo, com leads desqualificados que não respondem.',
                  icon: TrendingUp,
                },
                {
                  title: 'Equipe comercial sem volume de leads',
                  description: 'Vendedores ociosos ou gastando tempo tentando encontrar quem prospectar em vez de focar em vender.',
                  icon: Target,
                },
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-2xl sm:rounded-3xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-colors hover:bg-white/[0.04]"
                >
                  <div className="mb-4 sm:mb-6 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-white/5 text-white/80 group-hover:bg-rose-500/10 group-hover:text-rose-500 transition-colors">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mb-2 sm:mb-3 font-display text-lg sm:text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-white/50 leading-relaxed font-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3) SOLUÇÃO SECTION (Bento Grid) */}
      <section className="relative border-t border-white/10 bg-[#050505] px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-[#25D366]/5 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight"
            >
              Hoje já existem formas de encontrar pessoas com perfil de compra e iniciar a conversa <span className="text-gradient-accent">automaticamente pelo WhatsApp.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { text: 'Encontrar contatos com perfil ideal', icon: Search, delay: 0 },
              { text: 'Validar WhatsApp ativo', icon: ShieldCheck, delay: 0.1 },
              { text: 'Iniciar conversa automaticamente', icon: Zap, delay: 0.2 },
              { text: 'Entregar leads qualificados', icon: Target, delay: 0.3 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: item.delay }}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-8"
              >
                <div className="mb-4 sm:mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#25D366]/10 text-[#25D366]">
                  <item.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <p className="font-display text-base sm:text-lg font-bold leading-tight">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) BENEFÍCIOS SECTION (Oversized Typography) */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 sm:mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              O que muda na sua empresa?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-12 lg:grid-cols-2">
            {[
              { num: '01', text: 'Mais oportunidades comerciais todos os dias' },
              { num: '02', text: 'Aumento no volume de atendimentos' },
              { num: '03', text: 'Menos tempo perdido com curiosos' },
              { num: '04', text: 'Foco em quem realmente tem interesse' },
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 sm:gap-6 border-t border-white/10 pt-6 sm:pt-8"
              >
                <span className="font-display text-4xl sm:text-5xl font-bold text-white/20 leading-none shrink-0">{benefit.num}</span>
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-medium text-white/90">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5) PROVA SOCIAL & 6) CTA PRINCIPAL */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-4 py-20 sm:py-32 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 z-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_60%)] opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 lg:p-20 backdrop-blur-xl"
        >
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight mb-8 sm:mb-12">
            Algumas empresas já estão utilizando esse modelo para gerar novos atendimentos todos os dias.
          </h2>
          <div className="flex justify-center w-full">
            <WhatsAppButton text="Quero ver isso funcionando" className="w-full sm:w-auto" />
          </div>
        </motion.div>
      </section>

      {/* 7) SEÇÃO FINAL (QUEBRA DE OBJEÇÃO) */}
      <section className="bg-[#0a0a0a] px-4 py-16 sm:py-24 lg:py-32 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="font-display text-xl sm:text-2xl leading-relaxed text-white/60 font-light italic">
            "Se fizer sentido para o seu negócio, você pode aplicar. Caso contrário, pelo menos vai entender como empresas estão gerando clientes hoje."
          </p>
          <div className="mt-8 sm:mt-12 flex justify-center w-full">
            <WhatsAppButton text="Falar no WhatsApp agora" icon={false} className="bg-white text-black hover:bg-gray-200 shadow-none w-full sm:w-auto" />
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#050505] py-8 sm:py-12 text-center">
        <p className="text-xs sm:text-sm text-white/40 font-light">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}


