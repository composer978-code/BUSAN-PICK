import { Package, Users, MapPin, Lightbulb } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'WHAT',
      question: '무엇을 기획하고 있나요?',
      examples: ['디저트', '패션 / 굿즈', '콘텐츠', '전시 / 팝업', '식음료'],
      icon: <Package className="text-accent w-6 h-6" />
    },
    {
      num: '02',
      title: 'WHO',
      question: '누구를 위한 상품인가요?',
      examples: ['10대', '20대', '30대', '가족', '관광객', '외국인 관광객'],
      icon: <Users className="text-accent w-6 h-6" />
    },
    {
      num: '03',
      title: 'WHERE',
      question: '어디에서 시작할까요?',
      examples: ['부산의 지역 데이터를 분석하여', '상품과 타깃에 적합한', '지역을 탐색한다.'],
      icon: <MapPin className="text-accent w-6 h-6" />
    },
    {
      num: '04',
      title: 'HOW',
      question: '어떻게 보여줄까요?',
      examples: ['지역과 소비자 특성을 기반으로', '상품 방향과 콘텐츠·마케팅', '전략을 제안한다.'],
      icon: <Lightbulb className="text-accent w-6 h-6" />
    }
  ];

  return (
    <section className="py-32 px-6 bg-surface relative border-t border-surface-border">
      <div className="absolute top-0 left-6 text-[10px] text-muted font-mono tracking-widest uppercase mt-4">
        02 / PROCESS
      </div>
      
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-24">
          데이터를 보고,<br />
          <span className="text-muted">선택을 만듭니다.</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="glass p-8 group hover:glow-hover transition-all duration-300 flex flex-col h-full border-surface-border/50">
              <div className="flex justify-between items-start mb-12">
                <div className="text-xs font-mono tracking-widest text-muted border border-surface-border px-2 py-1">
                  STEP {step.num}
                </div>
                {step.icon}
              </div>
              
              <div className="mb-8">
                <h4 className="text-3xl font-black text-foreground tracking-widest mb-2">{step.title}</h4>
                <p className="text-accent font-medium">{step.question}</p>
              </div>

              <div className="mt-auto space-y-3">
                {step.examples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-1 h-1 bg-surface-border rounded-full group-hover:bg-accent transition-colors duration-300"></span>
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
