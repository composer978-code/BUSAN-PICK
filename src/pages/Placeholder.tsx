import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const Placeholder: React.FC = () => {
  const location = useLocation();
  const pathName = location.pathname.replace('/', '').toUpperCase();

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center p-6 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
        
        <div className="text-center relative z-10 glass p-12 max-w-2xl w-full border-surface-border">
          <div className="text-sm font-mono tracking-widest text-accent mb-4">
            COMING SOON
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8">
            {pathName || 'PAGE'}
          </h1>
          
          <p className="text-muted mb-12">
            이 페이지는 현재 준비 중입니다.<br />
            BUSAN PICK의 전체 서비스는 곧 공개될 예정입니다.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-foreground hover:text-accent transition-colors duration-300"
          >
            <ArrowLeft size={16} /> 홈으로 돌아가기
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Placeholder;
