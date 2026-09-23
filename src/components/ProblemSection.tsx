
const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-32 px-6 bg-background relative border-t border-surface-border">
      <div className="absolute top-0 left-6 text-[10px] text-muted font-mono tracking-widest uppercase mt-4">
        01 / PROBLEM
      </div>
      
      <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-24">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold text-foreground leading-[1.3] tracking-tight">
            좋은 상품은<br />
            <span className="text-muted">좋은 감각만으로 만들어지지 않습니다.</span>
          </h3>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-muted leading-relaxed font-medium">
          <p>
            사람이 많은 곳이 항상 좋은 상권은 아닙니다.
          </p>
          <p>
            20대가 많은 곳과 20대가 실제로 움직이는 곳도 다를 수 있습니다.
          </p>
          <p>
            관광객이 많은 지역과 상품을 구매할 가능성이 높은 지역도 다를 수 있습니다.
          </p>
        </div>

        <div className="pt-12 border-t border-surface-border">
          <h4 className="text-2xl md:text-4xl font-bold text-foreground leading-[1.4] tracking-tight">
            그래서 BUSAN PICK은<br />
            <span className="text-accent">“사람”</span>과 <span className="text-accent">“지역”</span>과 <span className="text-accent">“상품”</span>을 함께 봅니다.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
