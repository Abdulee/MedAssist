
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Benefits from './components/Benefits';
import Security from './components/Security';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-gray-200">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Security />
      </main>
      <Footer />
    </div>
  );
};

export default App;
