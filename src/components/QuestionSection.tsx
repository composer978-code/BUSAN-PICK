import { useEffect, useState, Fragment } from 'react';

const QuestionSection: React.FC = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const words = ['무엇을', '누구에게', '어디서', '어떻게'];

  return (
    <section className="py-40 px-6 bg-surface relative border-t border-surface-border">
      <div className="absolute top-0 left-6 text-[10px] text-muted font-mono tracking-widest uppercase mt-4">
        04 / CORE QUESTION
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-7xl font-black text-foreground leading-[1.3] mb-20 tracking-tight">
          “부산에서<br />
          {words.map((word, idx) => (
            <Fragment key={idx}>
              <span className={`transition-all duration-700 ${highlightIndex === idx ? 'text-accent text-glow' : 'text-muted'}`}>
                {word}
              </span>
              {idx < 3 && <br className="hidden md:block" />}
              {idx < 3 && <span className="md:hidden"> </span>}
            </Fragment>
          ))}
          <br />보여줄 것인가?”
        </h2>

        <div className="flex flex-col items-center gap-4">
          <div className="text-sm font-bold tracking-[0.3em] text-foreground">
            BUSAN PICK
          </div>
          <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-muted border border-surface-border px-6 py-3 rounded-full bg-background/50">
            <span>DATA</span>
            <span className="text-accent">→</span>
            <span>INSIGHT</span>
            <span className="text-accent">→</span>
            <span className="text-foreground">ACTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
