
const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-16 px-6 border-t border-surface-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="text-2xl font-black tracking-widest text-foreground mb-4">
            BUSAN PICK
          </h2>
          <p className="text-muted text-sm max-w-sm leading-relaxed mb-12">
            부산 공공데이터 기반 소비자·상품·마케팅 인사이트 플랫폼
          </p>

          <div className="flex gap-6 text-xs font-mono tracking-widest text-muted">
            <span>DATA</span>
            <span>INSIGHT</span>
            <span>PRODUCT</span>
            <span>MARKETING</span>
          </div>
        </div>

        <div className="text-[10px] font-mono tracking-widest text-muted uppercase">
          Powered by Public Data
        </div>

      </div>
    </footer>
  );
};

export default Footer;
