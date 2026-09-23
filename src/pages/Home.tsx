import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import ProcessSection from '../components/ProcessSection';
import DataSection from '../components/DataSection';
import QuestionSection from '../components/QuestionSection';
import ExampleSection from '../components/ExampleSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-background min-h-screen font-sans">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ProcessSection />
      <DataSection />
      <QuestionSection />
      <ExampleSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
