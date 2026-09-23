import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-accent relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200%] border border-black/20 rounded-[100%] animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] border border-black/20 rounded-[100%] animate-[spin_45s_linear_infinite_reverse]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-black leading-tight mb-12 tracking-tight">
          당신의 아이디어를<br />
          부산의 데이터 위에 올려보세요.
        </h2>

        <Link 
          to="/analysis" 
          className="group inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 font-bold tracking-wider hover:bg-surface-border transition-colors duration-300"
        >
          분석 시작하기
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
