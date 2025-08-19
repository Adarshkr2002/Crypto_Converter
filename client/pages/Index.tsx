import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Crypto data with static INR prices
const cryptoData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 6300000,
    icon: '₿',
    color: 'text-orange-400',
    change: '+2.45%'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 320000,
    icon: 'Ξ',
    color: 'text-blue-400',
    change: '+1.83%'
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'USDT',
    price: 83.50,
    icon: '₮',
    color: 'text-green-400',
    change: '+0.01%'
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 11.32,
    icon: 'Ð',
    color: 'text-yellow-400',
    change: '+5.67%'
  }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass backdrop-blur-lg py-3' : 'bg-transparent py-6'
    }`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">
          Adarsh Kumar Jha
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-gray-300 hover:text-crypto-green transition-colors duration-300"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('calculator')}
            className="text-gray-300 hover:text-crypto-green transition-colors duration-300"
          >
            Calculator
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-300 hover:text-crypto-green transition-colors duration-300"
          >
            About
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-crypto-green">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg
      className="absolute bottom-0 left-0 w-full h-64 wave-animation"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z"
        fill="url(#waveGradient)"
        fillOpacity="0.1"
      />
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--crypto-neon-green))" />
          <stop offset="100%" stopColor="hsl(var(--crypto-neon-blue))" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      className="absolute bottom-0 left-0 w-full h-48 wave-animation"
      style={{ animationDelay: '1s' }}
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C400,100 800,20 1200,40 L1200,120 L0,120 Z"
        fill="url(#waveGradient2)"
        fillOpacity="0.05"
      />
      <defs>
        <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--crypto-neon-blue))" />
          <stop offset="100%" stopColor="hsl(var(--crypto-neon-green))" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Track <span className="gradient-text">Crypto Prices</span> in INR
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Real-time cryptocurrency prices in Indian Rupees with advanced calculator tools
          </p>
          <button
            onClick={scrollToCalculator}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-crypto-green to-crypto-blue text-black font-semibold rounded-full hover:scale-105 transition-all duration-500 pulse-glow"
          >
            <span className="mr-2">Start Calculating</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const CryptoCard = ({ crypto }: { crypto: typeof cryptoData[0] }) => (
  <div className="glass-card p-6 hover:scale-105 transition-all duration-500 group cursor-pointer">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className={`text-3xl font-bold ${crypto.color}`}>
          {crypto.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{crypto.name}</h3>
          <p className="text-gray-400 text-sm">{crypto.symbol}</p>
        </div>
      </div>
      <div className={`text-sm font-medium ${crypto.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
        {crypto.change}
      </div>
    </div>
    <div className="text-right">
      <div className="text-2xl font-bold text-white">
        ₹{crypto.price.toLocaleString('en-IN')}
      </div>
      <div className="text-gray-400 text-sm">
        {crypto.price < 1000 ? 'INR' : 'Indian Rupees'}
      </div>
    </div>
  </div>
);

const PriceSection = () => (
  <section className="py-20 px-6">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Live Crypto Prices</span>
        </h2>
        <p className="text-xl text-gray-300">
          Track top cryptocurrencies in Indian Rupees
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cryptoData.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  </section>
);

const Calculator = () => {
  const [fromCrypto, setFromCrypto] = useState('BTC');
  const [toCrypto, setToCrypto] = useState('INR');
  const [cryptoAmount, setCryptoAmount] = useState('1');
  const [inrAmount, setInrAmount] = useState('');
  const [calculationType, setCalculationType] = useState<'crypto-to-inr' | 'inr-to-crypto'>('crypto-to-inr');

  const calculateConversion = () => {
    const crypto = cryptoData.find(c => c.symbol === fromCrypto);
    if (!crypto) return;

    if (calculationType === 'crypto-to-inr') {
      const result = parseFloat(cryptoAmount || '0') * crypto.price;
      setInrAmount(result.toLocaleString('en-IN', { maximumFractionDigits: 2 }));
    } else {
      const result = parseFloat(inrAmount.replace(/,/g, '') || '0') / crypto.price;
      setCryptoAmount(result.toFixed(8));
    }
  };

  useEffect(() => {
    calculateConversion();
  }, [fromCrypto, cryptoAmount, inrAmount, calculationType]);

  const handleCryptoAmountChange = (value: string) => {
    setCryptoAmount(value);
    setCalculationType('crypto-to-inr');
  };

  const handleInrAmountChange = (value: string) => {
    setInrAmount(value);
    setCalculationType('inr-to-crypto');
  };

  return (
    <section id="calculator" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Crypto Calculator</span>
          </h2>
          <p className="text-xl text-gray-300">
            Convert between cryptocurrencies and Indian Rupees instantly
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Crypto to INR */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-crypto-green">
              Crypto → INR
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Cryptocurrency
                </label>
                <select
                  value={fromCrypto}
                  onChange={(e) => setFromCrypto(e.target.value)}
                  className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white focus:ring-2 focus:ring-crypto-green focus:border-transparent transition-all duration-300"
                >
                  {cryptoData.map((crypto) => (
                    <option key={crypto.symbol} value={crypto.symbol} className="bg-gray-800">
                      {crypto.name} ({crypto.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={cryptoAmount}
                  onChange={(e) => handleCryptoAmountChange(e.target.value)}
                  className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white focus:ring-2 focus:ring-crypto-green focus:border-transparent transition-all duration-300"
                  placeholder="Enter amount"
                  step="0.00000001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Value in INR
                </label>
                <div className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white bg-white/5">
                  ₹{inrAmount || '0'}
                </div>
              </div>
            </div>
          </div>

          {/* INR to Crypto */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-crypto-blue">
              INR → Crypto
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Amount in INR
                </label>
                <input
                  type="text"
                  value={inrAmount}
                  onChange={(e) => handleInrAmountChange(e.target.value)}
                  className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white focus:ring-2 focus:ring-crypto-blue focus:border-transparent transition-all duration-300"
                  placeholder="Enter INR amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Cryptocurrency
                </label>
                <select
                  value={fromCrypto}
                  onChange={(e) => setFromCrypto(e.target.value)}
                  className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white focus:ring-2 focus:ring-crypto-blue focus:border-transparent transition-all duration-300"
                >
                  {cryptoData.map((crypto) => (
                    <option key={crypto.symbol} value={crypto.symbol} className="bg-gray-800">
                      {crypto.name} ({crypto.symbol})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  You'll get
                </label>
                <div className="w-full px-4 py-3 glass rounded-lg border border-white/20 text-white bg-white/5">
                  {cryptoAmount || '0'} {fromCrypto}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => (
  <section id="about" className="py-20 px-6">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        <span className="gradient-text">About This Tool</span>
      </h2>
      <p className="text-xl text-gray-300 leading-relaxed mb-8">
        This cryptocurrency price tracker and calculator provides real-time INR prices for popular 
        cryptocurrencies. Built for educational and demo purposes, it features a modern Web3-inspired 
        design with glassmorphism effects and smooth animations. Perfect for tracking crypto investments 
        and quick conversions between digital assets and Indian Rupees.
      </p>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
      >
        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        Watch on YouTube
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 py-12 px-6">
    <div className="container mx-auto">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold gradient-text mb-4">
          Adarsh Kumar Jha
        </div>
        <p className="text-gray-400 mb-6">
          Made with ❤️ by You B Tech | © 2025
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-crypto-green hover:scale-110 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Index() {
  return (
    <div className="min-h-screen bg-crypto-bg text-white">
      <Header />
      <HeroSection />
      <PriceSection />
      <Calculator />
      <AboutSection />
      <Footer />
    </div>
  );
}
