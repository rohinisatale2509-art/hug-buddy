import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import NewsSection from './components/NewsSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <NewsSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
