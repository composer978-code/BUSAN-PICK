import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExampleSection: React.FC = () => {
  const examples = [
    {
      num: '01',
      title: '20대가 좋아할 디저트 팝업을 연다면 어디가 좋을까?',
      tags: ['디저트', '20대', '팝업스토어']
    },
    {
      num: '02',
      title: '일본인 관광객을 위한 부산 기념 굿즈를 만든다면 어디에서 시작해야 할까?',
      tags: ['굿즈', '외국인관광객', '기념품']
    },
    {
      num: '03',
      title: '부산의 대학생을 타깃으로 한 콘텐츠 상품을 기획한다면 어떤 지역이 적합할까?',
      tags: ['콘텐츠', '대학생', '문화']
    }
  ];

  return (
    <section className="py-32 px-6 bg-background relative border-t border-surface-border">
      <div className="absolute top-0 left-6 text-[10px] text-muted font-mono tracking-widest uppercase mt-4">
        05 / USE CASES
      </div>

      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-16">
          예를 들어,<br />
          <span className="text-muted">이런 질문을 할 수 있습니다.</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {examples.map((ex, idx) => (
            <Link 
              to="/analysis" 
              key={idx}
              className="group glass p-8 border border-surface-border hover:border-accent/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full group-hover:bg-accent/10 transition-colors duration-300"></div>
              
              <div className="text-xs font-mono tracking-widest text-accent mb-8">
                EXAMPLE {ex.num}
              </div>
              
              <h4 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-12 group-hover:text-accent transition-colors duration-300">
                {ex.title}
              </h4>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {ex.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-muted bg-surface border border-surface-border px-3 py-1 rounded-full group-hover:border-accent/30 transition-colors duration-300">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-bold tracking-widest text-muted group-hover:text-foreground transition-colors duration-300 uppercase">
                  분석해보기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform group-hover:text-accent" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleSection;
