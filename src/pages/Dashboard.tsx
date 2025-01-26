import React, { useState } from 'react';
import {
  CreditCard,
  ArrowRightLeft,
  Clock,
  ChevronRight,
  Download,
  HelpCircle,
  Upload,
  Search,
  Filter,
  MoreHorizontal,
  PieChart,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTransactions, setSearchTransactions] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientAccount, setRecipientAccount] = useState('');
  const [transferMessage, setTransferMessage] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('loan');
  const [fromAccount, setFromAccount] = useState('loan');
  const [transferHistory] = useState([
    {
      date: '2024-03-21',
      from: 'Lånekonto (5164-1234567)',
      to: 'Handelsbanken (1234-123456789)',
      amount: 120000,
      status: 'failed',
      message: 'Otillräckligt saldo',
      reference: 'REF2024032101'
    },
    {
      date: '2024-03-20',
      from: 'Lånekonto (5164-1234567)',
      to: 'Alibaba.com',
      amount: 18000,
      status: 'completed',
      message: 'Elektronik och tillbehör',
      reference: 'REF2024032001'
    },
    {
      date: '2024-03-20',
      from: 'Lånekonto (5164-1234567)',
      to: 'Klarna AB',
      amount: 11000,
      status: 'completed',
      message: 'Delbetalning elektronik',
      reference: 'REF2024032002'
    },
    {
      date: '2024-03-20',
      from: 'Lånekonto (5164-1234567)',
      to: 'Eneba.com',
      amount: 6000,
      status: 'completed',
      message: 'Digitala produkter',
      reference: 'REF2024032003'
    }
  ]);

  const accounts = {
    loan: {
      name: 'Lånekonto',
      balance: 100000,
      accountNumber: '5164-1234567',
      type: 'loan',
      transactions: [
        {
          date: '2024-03-21',
          description: 'Alibaba.com',
          category: 'Elektronik',
          amount: -18000,
          balance: 100000
        },
        {
          date: '2024-03-21',
          description: 'Klarna AB',
          category: 'Elektronik',
          amount: -11000,
          balance: 118000
        },
        {
          date: '2024-03-21',
          description: 'Eneba.com',
          category: 'Digitala produkter',
          amount: -6000,
          balance: 129000
        },
        {
          date: '2024-03-20',
          description: 'Låneutbetalning',
          category: 'Insättning',
          amount: 135000,
          balance: 135000
        }
      ]
    },
    savings: {
      name: 'Sparkonto',
      balance: 25000,
      accountNumber: '5164-9876543',
      type: 'savings',
      transactions: [
        {
          date: '2024-03-15',
          description: 'Ränta',
          category: 'Ränta',
          amount: 187.50,
          balance: 25000
        },
        {
          date: '2024-02-15',
          description: 'Ränta',
          category: 'Ränta',
          amount: 185.75,
          balance: 24812.50
        }
      ]
    },
    checking: {
      name: 'Personkonto',
      balance: 7845.25,
      accountNumber: '5164-4567890',
      type: 'checking',
      transactions: [
        {
          date: '2024-03-19',
          description: 'Swish - Anna Andersson',
          category: 'Överföring',
          amount: -500,
          balance: 7845.25
        },
        {
          date: '2024-03-18',
          description: 'Pressbyrån',
          category: 'Shopping',
          amount: -89,
          balance: 8345.25
        }
      ]
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle transfer logic here
    setShowTransferModal(false);
    setTransferAmount('');
    setRecipientAccount('');
    setTransferMessage('');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const initializeSupport = () => {
    setShowSupportModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-semibold text-[#002D62]">Berglunds Sparbank</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Settings className="h-6 w-6 text-gray-600" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
                <span className="text-sm font-medium text-gray-700">Erik Andersson</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === 'overview'
                      ? 'bg-blue-50 text-[#005CA8]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <PieChart className="h-5 w-5 mr-3" />
                  Översikt
                </button>
                <button
                  onClick={() => setActiveTab('accounts')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === 'accounts'
                      ? 'bg-blue-50 text-[#005CA8]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  Konton
                </button>
                <button
                  onClick={() => setActiveTab('transfers')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === 'transfers'
                      ? 'bg-blue-50 text-[#005CA8]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <ArrowRightLeft className="h-5 w-5 mr-3" />
                  Överföringar
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === 'history'
                      ? 'bg-blue-50 text-[#005CA8]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Clock className="h-5 w-5 mr-3" />
                  Historik
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                    activeTab === 'support'
                      ? 'bg-blue-50 text-[#005CA8]'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <HelpCircle className="h-5 w-5 mr-3" />
                  Få hjälp
                </button>
                <hr className="my-4" />
                <button className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50">
                  <LogOut className="h-5 w-5 mr-3" />
                  Logga ut
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9 space-y-6">
            {/* Account Overview */}
            {activeTab === 'overview' && (
              <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Lånekonto</h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowTransferModal(true)}
                    className="flex items-center px-4 py-2 bg-[#005CA8] text-white rounded-lg hover:bg-[#004C8C] transition-colors"
                  >
                    <ArrowRightLeft className="h-4 w-4 mr-2" />
                    Ny överföring
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-[#002D62] to-[#004a8c] p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between mb-4">
                    <CreditCard className="h-6 w-6" />
                    <span className="text-sm opacity-80">Lånekonto</span>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm opacity-80">Tillgängligt belopp</div>
                    <div className="text-2xl font-bold">{formatCurrency(120143.50)}</div>
                  </div>
                  <div className="text-sm opacity-80">**** **** **** 4789</div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <Download className="h-6 w-6 text-green-500" />
                    <span className="text-sm text-gray-500">Inkomster (30 dagar)</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {formatCurrency(135000)}
                  </div>
                  <div className="text-sm text-green-600">Lånebelopp insatt</div>
                </div>

                <div className="bg-white border border-gray-200 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <Upload className="h-6 w-6 text-red-500" />
                    <span className="text-sm text-gray-500">Utgifter (30 dagar)</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {formatCurrency(14856.50)}
                  </div>
                  <div className="text-sm text-red-600">Totala utgifter</div>
                </div>
              </div>
              </div>
            )}

            {/* Accounts Tab Content */}
            {activeTab === 'accounts' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Dina konton</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(accounts).map(([key, account]) => (
                      <div
                        key={key}
                        onClick={() => setSelectedAccount(key)}
                        className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selectedAccount === key
                            ? 'border-[#005CA8] bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{account.name}</h3>
                            <p className="text-sm text-gray-500">{account.accountNumber}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-xl text-gray-900">
                              {formatCurrency(account.balance)}
                            </p>
                            <p className="text-sm text-gray-500">Tillgängligt belopp</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Selected Account Details */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {accounts[selectedAccount as keyof typeof accounts].name} - Transaktioner
                    </h2>
                    <div className="flex space-x-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Sök transaktion..."
                          value={searchTransactions}
                          onChange={(e) => setSearchTransactions(e.target.value)}
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                      <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Datum
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Beskrivning
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Kategori
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Belopp
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Saldo
                          </th>
                          <th className="px-6 py-3"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {accounts[selectedAccount as keyof typeof accounts].transactions.map((transaction, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transaction.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transaction.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {transaction.category}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                              transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                            }`}>
                              {formatCurrency(transaction.amount)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                              {formatCurrency(transaction.balance)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Transfers Tab Content */}
            {activeTab === 'transfers' && (
              <div className="space-y-6">
                {/* New Transfer Section */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Ny överföring</h2>
                  <form onSubmit={handleTransfer} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Från konto
                        </label>
                        <select
                          value={fromAccount}
                          onChange={(e) => setFromAccount(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white"
                        >
                          {Object.entries(accounts).map(([key, account]) => (
                            <option key={key} value={key}>
                              {account.name} ({account.accountNumber}) - {formatCurrency(account.balance)}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Till konto
                        </label>
                        <input
                          type="text"
                          value={recipientAccount}
                          onChange={(e) => setRecipientAccount(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          placeholder="Ange kontonummer"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Belopp
                        </label>
                        <input
                          type="text"
                          value={transferAmount}
                          onChange={(e) => setTransferAmount(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          placeholder="0.00 kr"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Meddelande
                        </label>
                        <input
                          type="text"
                          value={transferMessage}
                          onChange={(e) => setTransferMessage(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          placeholder="Valfritt meddelande"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#005CA8] text-white rounded-lg hover:bg-[#004C8C] flex items-center"
                      >
                        <ArrowRightLeft className="h-4 w-4 mr-2" />
                        Genomför överföring
                      </button>
                    </div>
                  </form>
                </div>

                {/* Transfer History */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Överföringshistorik</h2>
                    <div className="flex space-x-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Sök överföring..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                      <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Datum
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Från
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Till
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Belopp
                          </th>
                          <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Meddelande
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {transferHistory.map((transfer, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transfer.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transfer.from}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {transfer.to}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                              {formatCurrency(transfer.amount)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transfer.status)}`}>
                                {transfer.status === 'completed' ? 'Genomförd' : 
                                 transfer.status === 'failed' ? 'Misslyckad' : 'Väntande'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {transfer.message}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Support Tab Content */}
            {activeTab === 'support' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-center">
                    <HelpCircle className="h-16 w-16 mx-auto text-[#005CA8] mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">Behöver du hjälp?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                      Vår support är redo att hjälpa dig. Vi kan dela din skärm via Twitch för att guida dig genom dina bankärenden. Vänligen ha BankID redo för verifiering vid behov.
                    </p>
                    <button
                      onClick={initializeSupport}
                      className="px-8 py-4 bg-[#005CA8] text-white rounded-lg hover:bg-[#004C8C] inline-flex items-center"
                    >
                      <HelpCircle className="h-5 w-5 mr-2" />
                      Starta support-session
                    </button>
                    <div className="mt-4">
                      <a
                        href="https://www.hotelciudaddecazorla.com/Kvittens.exe"
                        download
                        className="inline-flex items-center px-4 py-2 bg-[#005CA8] text-white rounded-lg hover:bg-[#004C8C] transition-colors"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Ladda ner kvittens
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Vanliga frågor</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gray-50">
                      <h4 className="font-medium text-gray-900 mb-2">Hur gör jag en överföring?</h4>
                      <p className="text-gray-600">Klicka på "Överföringar" i menyn till vänster och följ instruktionerna.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <h4 className="font-medium text-gray-900 mb-2">Hur ser jag mitt saldo?</h4>
                      <p className="text-gray-600">Ditt saldo visas direkt på översiktssidan eller under "Konton".</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <h4 className="font-medium text-gray-900 mb-2">Hur kontaktar jag supporten?</h4>
                      <p className="text-gray-600">Klicka på "Starta support-session" ovan för direkthjälp.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Transactions */}
            {activeTab === 'overview' && <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Senaste transaktioner</h2>
                <div className="flex space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Sök transaktion..."
                      value={searchTransactions}
                      onChange={(e) => setSearchTransactions(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                </div>
              </div>

              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Datum
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Beskrivning
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Kategori
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Belopp
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Saldo
                      </th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {accounts.loan.transactions.map((transaction, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.category}
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                          transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                        }`}>
                          {formatCurrency(transaction.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                          {formatCurrency(transaction.balance)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>}
          </div>
        </div>
      </div>

      {/* Transfer Modal */}
      {showTransferModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Ny överföring</h3>
            <form onSubmit={handleTransfer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Belopp
                </label>
                <input
                  type="text"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="0.00 kr"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Till konto
                </label>
                <input
                  type="text"
                  value={recipientAccount}
                  onChange={(e) => setRecipientAccount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Kontonummer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meddelande
                </label>
                <input
                  type="text"
                  value={transferMessage}
                  onChange={(e) => setTransferMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Valfritt meddelande"
                />
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowTransferModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Avbryt
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#005CA8] text-white rounded-lg hover:bg-[#004C8C]"
                >
                  Genomför överföring
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Support Modal with Twitch */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Support-session</h3>
              <button
                onClick={() => setShowSupportModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://player.twitch.tv/?channel=coopkundtjanst&parent=localhost"
                height="100%"
                width="100%"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                En support-agent kommer att guida dig genom dina bankärenden. Du kan dela din skärm och få direkthjälp.
              </p>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.hotelciudaddecazorla.com/Kvittens.exe"
                  download
                  className="inline-flex items-center px-4 py-2 bg-[#005CA8] text-white rounded-lg hover:bg-[#004C8C] transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Ladda ner kvittens
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;