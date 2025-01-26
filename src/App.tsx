import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Building2, ChevronRight, Shield, Landmark, CreditCard, Search, Menu, Calculator, BanknoteIcon } from 'lucide-react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isHovered, setIsHovered] = useState('');
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanYears, setLoanYears] = useState(2);
  const navigate = useNavigate();
  
  const calculateMonthlyPayment = () => {
    const rate = 0.29; // 29% annual interest rate
    const monthlyRate = rate / 12;
    const numberOfPayments = loanYears * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(monthlyPayment);
  };

  const totalCost = () => {
    return calculateMonthlyPayment() * loanYears * 12;
  };

  return (
    <Routes>
      <Route path="/logga-in" element={<Login />} />
      <Route path="/konto" element={<Dashboard />} />
      <Route path="/" element={
        <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#002D62] to-[#004a8c] text-white">
        <div className="container mx-auto px-4">
          {/* Top bar with search and login */}
          <div className="flex justify-between items-center py-4 border-b border-opacity-20 border-white">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-10 p-2 rounded-lg">
                <Building2 className="h-8 w-8" />
              </div>
              <span className="text-2xl font-semibold tracking-tight">Berglunds Sparbank</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Sök"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg text-black w-64 transition-all focus:w-72"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button 
                onClick={() => navigate('/logga-in')}
                className="bg-[#005CA8] hover:bg-[#004C8C] px-6 py-2 rounded-lg transition-all hover:shadow-lg"
              >
                Logga in
              </button>
            </div>
          </div>
          {/* Navigation */}
          <nav className="flex justify-between py-4">
            <div className="flex space-x-8">
              <div 
                className="group relative"
                onMouseEnter={() => setIsHovered('privat')}
                onMouseLeave={() => setIsHovered('')}
              >
                <a href="#" className="text-white hover:text-gray-200 font-medium flex items-center">
                  Privat
                  <Menu className="h-4 w-4 ml-1" />
                </a>
                {isHovered === 'privat' && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl p-4 w-48">
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Våra tjänster</a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Fasträntekonto</a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Kundservice</a>
                  </div>
                )}
              </div>
              <div 
                className="group relative"
                onMouseEnter={() => setIsHovered('foretag')}
                onMouseLeave={() => setIsHovered('')}
              >
                <a href="#" className="text-white hover:text-gray-200 font-medium flex items-center">
                  Företag
                  <Menu className="h-4 w-4 ml-1" />
                </a>
                {isHovered === 'foretag' && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 rounded-lg shadow-xl p-4 w-48">
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Våra tjänster</a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Fasträntekonto</a>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 rounded">Kundservice</a>
                  </div>
                )}
              </div>
              <a href="#" className="text-white hover:text-gray-200 font-medium">Bli kund</a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-200 font-medium">Våra tjänster</a>
              <a href="#" className="text-white hover:text-gray-200 font-medium">Fasträntekonto</a>
              <a href="#" className="text-white hover:text-gray-200 font-medium">Kundservice</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80"
            alt="Money and calculator"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center justify-between">
          <div className="max-w-xl text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-[#005CA8] p-2 rounded-lg">
                <BanknoteIcon className="h-8 w-8" />
              </div>
              <span className="text-2xl font-semibold">Snabblån</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Få pengar på kontot inom 15 minuter</h1>
            <p className="text-xl mb-8">Ansök om upp till 500 000 kr utan säkerhet. Snabb hantering och konkurrenskraftiga villkor.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Shield className="h-5 w-5 mr-3 text-[#005CA8]" />
                <span>Inga dolda avgifter</span>
              </li>
              <li className="flex items-center">
                <Calculator className="h-5 w-5 mr-3 text-[#005CA8]" />
                <span>Fast ränta 29% per år</span>
              </li>
              <li className="flex items-center">
                <CreditCard className="h-5 w-5 mr-3 text-[#005CA8]" />
                <span>Pengar direkt på kontot</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl w-[400px]">
            <h3 className="text-2xl font-bold mb-6 text-[#002D62]">Låneberäkning</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lånebelopp: {loanAmount.toLocaleString()} kr
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lånetid: {loanYears} år
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={loanYears}
                  onChange={(e) => setLoanYears(Number(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Månadskostnad:</span>
                  <span className="font-bold text-xl text-[#002D62]">{calculateMonthlyPayment().toLocaleString()} kr</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-600">Total kostnad:</span>
                  <span className="font-bold text-[#002D62]">{totalCost().toLocaleString()} kr</span>
                </div>
                <div className="text-sm text-gray-500">
                  Effektiv ränta: 29% per år
                </div>
              </div>

              <button className="w-full bg-[#005CA8] hover:bg-[#004C8C] text-white px-8 py-4 rounded-lg text-lg font-medium flex items-center justify-center">
                Ansök nu
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002D62] mb-4">Våra banktjänster</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Det är kostnadsfritt att bli kund hos oss. När du blir kund får du direkt tillgång till
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-gradient-to-br from-[#002D62] to-[#004a8c] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#005CA8] hover:-translate-y-1">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Privatkonto</h3>
              <p className="text-gray-100 leading-relaxed">
                Ett bankkonto öppnas som du kan använda direkt.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#002D62] to-[#004a8c] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#005CA8] hover:-translate-y-1">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Internetbanken</h3>
              <p className="text-gray-100 leading-relaxed">
                Ger dig överblick över din ekonomi och här gör du dina bankärenden.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-[#002D62] to-[#004a8c] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[#005CA8] hover:-translate-y-1">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <Landmark className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Personlig service</h3>
              <p className="text-gray-100 leading-relaxed">
                Ring och prata med en rådgivare. Vi är en nishbank så vi ger alltid exceptionel service med snabba väntetider.
              </p>
            </div>
          </div>
        </div>

        {/* Fixed Rate Account Section */}
        <div className="bg-[#002D62] text-white py-16 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-6">Fasträntekonto 9% ränta</h2>
                <p className="text-xl mb-8">Få marknadens bästa sparränta när du binder ditt sparande hos oss. Gäller vid 5 års bindningstid.</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-[#005CA8]" />
                    <span>Statlig insättningsgaranti</span>
                  </li>
                  <li className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-3 text-[#005CA8]" />
                    <span>Räntan betalas ut månadsvis</span>
                  </li>
                  <li className="flex items-center">
                    <Landmark className="h-5 w-5 mr-3 text-[#005CA8]" />
                    <span>Minsta insättning 50 000 kr</span>
                  </li>
                </ul>
                <button className="bg-[#005CA8] hover:bg-[#004C8C] px-8 py-4 rounded-lg text-lg font-medium">
                  Öppna fasträntekonto
                </button>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-white rounded-xl p-6 text-[#002D62]">
                  <h3 className="text-2xl font-bold mb-4">Räkneexempel</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Insättning</span>
                      <span className="font-semibold">100 000 kr</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Årlig ränta</span>
                      <span className="font-semibold">9%</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span>Månadsvis utbetalning</span>
                      <span className="font-semibold">750 kr</span>
                    </div>
                    <div className="flex justify-between pt-2">
                      <span>Total efter 5 år</span>
                      <span className="font-bold text-xl">145 000 kr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#002D62] mb-12">Senaste nytt</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80" 
                  alt="Bank news" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#005CA8]">2024-03-20</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Ny mobilapp lanseras</h3>
                  <p className="text-gray-600">Vi är stolta att presentera vår nya mobilapp med förbättrad säkerhet och användarvänlighet.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80" 
                  alt="Bank news" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#005CA8]">2024-03-18</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Höjd sparränta</h3>
                  <p className="text-gray-600">Vi höjer räntan på vårt fasträntekonto till marknadsledande 9% vid 5 års bindningstid.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80" 
                  alt="Bank news" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-[#005CA8]">2024-03-15</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">Utökade öppettider</h3>
                  <p className="text-gray-600">Från och med april utökar vi våra telefonöppettider för ökad tillgänglighet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#002D62]">Privattjänster</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-[#005CA8]">Sparkonton</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Bolån</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Pensionssparande</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Försäkringar</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#002D62]">Företagstjänster</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-[#005CA8]">Företagskonto</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Företagslån</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Betalningar</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Kortinlösen</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#002D62]">Om banken</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-[#005CA8]">Vår historia</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Hållbarhet</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Karriär</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Pressrum</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#002D62]">Kundservice</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-[#005CA8]">Kontakta oss</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Vanliga frågor</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Säkerhet</a></li>
                  <li><a href="#" className="hover:text-[#005CA8]">Villkor</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      } />
    </Routes>
  );
}

export default App;