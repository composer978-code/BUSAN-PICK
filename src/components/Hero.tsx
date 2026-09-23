import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Abstract Background Data Graphic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-[-10%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[10%] w-[600px] h-[600px] border-[0.5px] border-accent/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 right-[5%] w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent transform -rotate-12"></div>
        
        {/* Grid and Points */}
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent rounded-full glow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-accent rounded-full glow"></div>
        <div className="absolute top-1/2 right-[15%] w-1.5 h-1.5 bg-accent rounded-full glow"></div>
        
        {/* Tiny labels */}
        <div className="absolute top-[32%] right-[24%] text-[10px] text-accent/50 font-mono tracking-widest uppercase">LAT 35.1796</div>
        <div className="absolute bottom-[32%] right-[32%] text-[10px] text-accent/50 font-mono tracking-widest uppercase">LON 129.0756</div>
        
        {/* Abstract Wave lines */}
        <svg className="absolute top-0 right-0 w-[60%] h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" className="text-accent/20" strokeWidth="0.1" />
          <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" className="text-accent/20" strokeWidth="0.1" />
          <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="currentColor" className="text-accent/10" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-start justify-center h-full">
        
        <div className="mb-4 opacity-0 animate-fade-up">
          <h1 className="text-sm md:text-base font-bold tracking-[0.3em] text-accent">
            BUSAN PICK
          </h1>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] mb-8 opacity-0 animate-fade-up delay-100">
          부산에서<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-muted">
            무엇을, 누구에게,
          </span><br />
          어디서 팔아야 할까?
        </h2>

        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-up delay-200">
          부산의 공공데이터를 분석해<br className="hidden md:block" />
          상품 기획과 마케팅 의사결정을 도와드립니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-up delay-300 w-full sm:w-auto">
          <Link 
            to="/analysis" 
            className="group flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-none font-bold tracking-wider hover:bg-accent hover:text-black transition-colors duration-300 w-full sm:w-auto"
          >
            분석 시작하기
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#problem" 
            className="flex items-center justify-center gap-3 border border-surface-border bg-surface/30 backdrop-blur-sm text-foreground px-8 py-4 rounded-none font-medium tracking-wider hover:bg-surface-border transition-colors duration-300 w-full sm:w-auto"
          >
            서비스 알아보기
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
