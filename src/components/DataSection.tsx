
const DataSection: React.FC = () => {
  const categories = [
    {
      title: 'CONSUMER',
      desc: '인구 / 연령 / 타깃 소비자',
      stats: ['DEMOGRAPHIC', 'BEHAVIOR']
    },
    {
      title: 'COMMERCIAL',
      desc: '상권 / 업종 / 점포',
      stats: ['DISTRICT', 'REVENUE']
    },
    {
      title: 'MOBILITY',
      desc: '지하철 / 이동 / 접근성',
      stats: ['TRANSIT', 'FLOW']
    },
    {
      title: 'TOURISM',
      desc: '관광객 / 관광지 / 방문 흐름',
      stats: ['VISITOR', 'SPOT']
    },
    {
      title: 'CULTURE',
      desc: '문화시설 / 콘텐츠 환경',
      stats: ['FACILITY', 'EVENT']
    },
    {
      title: 'LOCATION',
      desc: '행정동 / 상권 / 공간 정보',
      stats: ['SPATIAL', 'GIS']
    }
  ];

  return (
    <section className="py-32 px-6 bg-background relative border-t border-surface-border overflow-hidden">
      <div className="absolute top-0 left-6 text-[10px] text-muted font-mono tracking-widest uppercase mt-4">
        03 / DATA
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-grid opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-24">
          부산을 하나의<br />
          <span className="text-accent">소비자 데이터</span>로 읽습니다.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative glass p-8 border border-surface-border/40 hover:border-accent/30 transition-all duration-500 overflow-hidden">
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h4 className="text-2xl font-black tracking-widest text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {cat.title}
                </h4>
                
                <p className="text-muted font-medium mb-12">
                  {cat.desc}
                </p>

                <div className="mt-auto flex gap-2">
                  {cat.stats.map((stat, i) => (
                    <span key={i} className="text-[10px] font-mono border border-surface-border px-2 py-1 text-muted group-hover:border-accent/30 group-hover:text-accent/80 transition-colors duration-300">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSection;
