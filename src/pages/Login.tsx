import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, Fingerprint, Shield } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [activeMethod, setActiveMethod] = useState<'bankid' | 'otp' | 'pin'>('bankid');
  const [personalNumber, setPersonalNumber] = useState('');
  const [pin, setPin] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app would validate credentials
    navigate('/konto');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-[#002D62]">Logga in</h2>
          <p className="mt-2 text-sm text-gray-600">
            Välj inloggningsmetod nedan
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveMethod('bankid')}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                activeMethod === 'bankid'
                  ? 'bg-blue-50 border-2 border-[#005CA8]'
                  : 'border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src="https://www.bankid.com/assets/bankid/logo/BankID_logo.png"
                alt="BankID"
                className="h-8 mb-2"
              />
              <span className="text-sm font-medium text-gray-700">BankID</span>
            </button>

            <button
              onClick={() => setActiveMethod('otp')}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                activeMethod === 'otp'
                  ? 'bg-blue-50 border-2 border-[#005CA8]'
                  : 'border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <Shield className="h-8 w-8 mb-2 text-[#002D62]" />
              <span className="text-sm font-medium text-gray-700">Engångskod</span>
            </button>

            <button
              onClick={() => setActiveMethod('pin')}
              className={`flex flex-col items-center p-4 rounded-lg transition-all ${
                activeMethod === 'pin'
                  ? 'bg-blue-50 border-2 border-[#005CA8]'
                  : 'border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <KeyRound className="h-8 w-8 mb-2 text-[#002D62]" />
              <span className="text-sm font-medium text-gray-700">PIN-kod</span>
            </button>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {activeMethod === 'bankid' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="personalNumber" className="block text-sm font-medium text-gray-700">
                    Personnummer
                  </label>
                  <input
                    id="personalNumber"
                    type="text"
                    placeholder="ÅÅÅÅMMDD-XXXX"
                    value={personalNumber}
                    onChange={(e) => setPersonalNumber(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#005CA8] focus:border-[#005CA8]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005CA8] hover:bg-[#004C8C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005CA8]"
                >
                  <Fingerprint className="h-5 w-5 mr-2" />
                  Logga in med BankID
                </button>
              </div>
            )}

            {activeMethod === 'otp' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="personalNumber" className="block text-sm font-medium text-gray-700">
                    Personnummer
                  </label>
                  <input
                    id="personalNumber"
                    type="text"
                    placeholder="ÅÅÅÅMMDD-XXXX"
                    value={personalNumber}
                    onChange={(e) => setPersonalNumber(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#005CA8] focus:border-[#005CA8]"
                  />
                </div>
                <div>
                  <label htmlFor="otpCode" className="block text-sm font-medium text-gray-700">
                    Engångskod
                  </label>
                  <input
                    id="otpCode"
                    type="text"
                    placeholder="Ange din engångskod"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#005CA8] focus:border-[#005CA8]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005CA8] hover:bg-[#004C8C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005CA8]"
                >
                  <Shield className="h-5 w-5 mr-2" />
                  Logga in med engångskod
                </button>
              </div>
            )}

            {activeMethod === 'pin' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="personalNumber" className="block text-sm font-medium text-gray-700">
                    Personnummer
                  </label>
                  <input
                    id="personalNumber"
                    type="text"
                    placeholder="ÅÅÅÅMMDD-XXXX"
                    value={personalNumber}
                    onChange={(e) => setPersonalNumber(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#005CA8] focus:border-[#005CA8]"
                  />
                </div>
                <div>
                  <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
                    PIN-kod
                  </label>
                  <input
                    id="pin"
                    type="password"
                    placeholder="Ange din PIN-kod"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#005CA8] focus:border-[#005CA8]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#005CA8] hover:bg-[#004C8C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005CA8]"
                >
                  <KeyRound className="h-5 w-5 mr-2" />
                  Logga in med PIN-kod
                </button>
              </div>
            )}
          </form>

          <div className="text-sm text-center mt-6">
            <a href="#" className="font-medium text-[#005CA8] hover:text-[#004C8C]">
              Behöver du hjälp att logga in?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;