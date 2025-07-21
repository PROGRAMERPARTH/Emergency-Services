import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageCircle, MapPin, User, Bell, Shield, 
  Languages, Lock, Share2, Video, FileText, Map, 
  Wifi, Settings, BarChart3, BookOpen, Volume2, 
  Watch, Search, AlertTriangle, Heart, Zap, 
  Camera, Mic, Navigation, Clock, Battery,
  ChevronRight, Star, Globe, Activity, Eye,
  Headphones, Users, Database, Smartphone
} from 'lucide-react';

const EmergencyServicesApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [language, setLanguage] = useState('en');
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [location, setLocation] = useState('Pune, Maharashtra, IN');
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: 'Police', number: '100', type: 'police' },
    { name: 'Fire', number: '101', type: 'fire' },
    { name: 'Ambulance', number: '102', type: 'medical' }
  ]);

  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    hi: { name: 'हिंदी', flag: '🇮🇳' },
    mr: { name: 'मराठी', flag: '🇮🇳' },
    es: { name: 'Español', flag: '🇪🇸' },
    fr: { name: 'Français', flag: '🇫🇷' },
    de: { name: 'Deutsch', flag: '🇩🇪' },
    ar: { name: 'العربية', flag: '🇸🇦' },
    zh: { name: '中文', flag: '🇨🇳' }
  };

  const translations = {
    en: {
      emergency: 'Emergency',
      sos: 'SOS',
      search: 'Search Help',
      location: 'Location',
      profile: 'Profile',
      settings: 'Settings',
      firstAid: 'First Aid',
      reports: 'Reports',
      help: 'Help',
      contacts: 'Contacts',
      medical: 'Medical Info',
      panic: 'Panic Alarm',
      offline: 'Offline Mode',
      dashboard: 'Dashboard'
    },
    hi: {
      emergency: 'आपातकाल',
      sos: 'एसओएस',
      search: 'खोज सहायता',
      location: 'स्थान',
      profile: 'प्रोफ़ाइल',
      settings: 'सेटिंग्स',
      firstAid: 'प्राथमिक चिकित्सा',
      reports: 'रिपोर्ट',
      help: 'सहायता',
      contacts: 'संपर्क',
      medical: 'चिकित्सा जानकारी',
      panic: 'पैनिक अलार्म',
      offline: 'ऑफलाइन मोड',
      dashboard: 'डैशबोर्ड'
    }
  };

  const t = translations[language] || translations.en;

  const handleSOSPress = () => {
    setIsSOSActive(true);
    // Simulate emergency activation
    setTimeout(() => {
      setIsSOSActive(false);
    }, 3000);
  };

  const emergencyFeatures = [
    { icon: Phone, title: 'Emergency Call', color: 'bg-red-500', action: () => setCurrentView('call') },
    { icon: MessageCircle, title: 'Quick Message', color: 'bg-blue-500', action: () => setCurrentView('message') },
    { icon: MapPin, title: 'Share Location', color: 'bg-green-500', action: () => setCurrentView('location') },
    { icon: Video, title: 'Video Call', color: 'bg-purple-500', action: () => setCurrentView('video') },
    { icon: Camera, title: 'Send Photo', color: 'bg-orange-500', action: () => setCurrentView('photo') },
    { icon: Mic, title: 'Voice Message', color: 'bg-yellow-500', action: () => setCurrentView('voice') }
  ];

  const aiFeatures = [
    { 
      icon: Eye, 
      title: 'AI Risk Detection',
      description: 'Real-time threat assessment using computer vision',
      status: 'Active'
    },
    { 
      icon: Activity, 
      title: 'Health Monitoring',
      description: 'Continuous vital signs tracking via wearables',
      status: 'Connected'
    },
    { 
      icon: Zap, 
      title: 'Smart Alerts',
      description: 'Predictive emergency notifications',
      status: 'Learning'
    },
    { 
      icon: Globe, 
      title: 'Context Analysis',
      description: 'Environmental hazard detection',
      status: 'Scanning'
    }
  ];

  const quickActions = [
    { icon: BookOpen, title: t.firstAid, color: 'bg-emerald-500' },
    { icon: Volume2, title: t.panic, color: 'bg-red-600' },
    { icon: Watch, title: 'Wearable Sync', color: 'bg-blue-600' },
    { icon: Shield, title: 'Safe Mode', color: 'bg-gray-600' }
  ];

  const renderHomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-b-3xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('home')}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <Shield className="w-6 h-6 text-white" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{t.emergency} Services</h1>
              <p className="text-sm text-gray-600">{location}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Battery className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">{batteryLevel}%</span>
            </div>
            <div className={`w-2 h-2 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`} />
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="mx-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Languages className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Language</span>
            </div>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1 text-sm"
            >
              {Object.entries(languages).map(([code, lang]) => (
                <option key={code} value={code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main SOS Button */}
      <div className="mx-4 mb-6">
        <div className="relative">
          <button
            onClick={handleSOSPress}
            className={`w-full h-40 rounded-3xl font-bold text-3xl text-white shadow-2xl transition-all duration-300 transform ${
              isSOSActive 
                ? 'bg-red-600 scale-105 animate-pulse' 
                : 'bg-gradient-to-r from-red-500 to-red-600 hover:scale-105'
            }`}
          >
            {isSOSActive ? 'EMERGENCY ACTIVATED!' : `${t.sos} ${t.emergency}`}
          </button>
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar for Non-Hazardous Activities */}
      <div className="mx-4 mb-6">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-400">
            <h3 className="text-white font-semibold mb-2">Non-Emergency Help</h3>
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for animal encounters, poison info, gas leaks..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setCurrentView('animals')}>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
              </div>
              <span className="text-sm font-medium">Animal Encounters</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setCurrentView('poison')}>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium">Poison Information</span>
            </div>
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer" onClick={() => setCurrentView('gasleak')}>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Eye className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Gas Leak Detection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Actions */}
      <div className="mx-4 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Emergency Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {emergencyFeatures.map((feature, index) => (
            <button
              key={index}
              onClick={feature.action}
              className={`${feature.color} text-white rounded-2xl p-4 flex flex-col items-center justify-center space-y-2 shadow-lg hover:shadow-xl transition-all`}
            >
              <feature.icon className="w-8 h-8" />
              <span className="text-sm font-medium">{feature.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* AI Features */}
      <div className="mx-4 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">AI-Powered Features</h3>
        <div className="bg-white rounded-2xl shadow-md p-4">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                  {feature.status}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mx-4 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} text-white rounded-2xl p-4 flex flex-col items-center justify-center space-y-2 shadow-lg hover:shadow-xl transition-all`}
            >
              <action.icon className="w-6 h-6" />
              <span className="text-xs font-medium text-center">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="mx-4 mb-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Emergency Contacts</h3>
        <div className="bg-white rounded-2xl shadow-md p-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{contact.name}</h4>
                  <p className="text-sm text-gray-600">{contact.number}</p>
                </div>
              </div>
              <button className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {[
            { icon: Shield, label: 'Home', id: 'home' },
            { icon: MapPin, label: t.location, id: 'map' },
            { icon: User, label: t.profile, id: 'profile' },
            { icon: BarChart3, label: t.dashboard, id: 'dashboard' },
            { icon: Settings, label: t.settings, id: 'settings' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-all ${
                currentView === item.id ? 'bg-red-100 text-red-600' : 'text-gray-600'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProfileView = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-lg rounded-b-3xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
          </button>
          <h2 className="text-xl font-bold text-gray-800">Profile</h2>
          <button 
            onClick={() => setCurrentView('settings')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Emergency Profile</p>
          </div>
        </div>
      </div>

      <div className="mx-4 space-y-6">
        {/* Medical Information */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Heart className="w-5 h-5 text-red-500 mr-2" />
            Medical Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Blood Type</label>
              <p className="text-lg font-semibold text-red-600">O+</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Allergies</label>
              <p className="text-gray-800">Penicillin, Peanuts</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Medical Conditions</label>
              <p className="text-gray-800">Diabetes Type 2</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Emergency Contact</label>
              <p className="text-gray-800">Jane Doe - +91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Lock className="w-5 h-5 text-blue-500 mr-2" />
            Privacy & Security
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">End-to-End Encryption</span>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Location Sharing</span>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Data Sharing with Authorities</span>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Wearable Devices */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Watch className="w-5 h-5 text-purple-500 mr-2" />
            Connected Devices
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Watch className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium">Apple Watch Series 9</h4>
                  <p className="text-sm text-gray-600">Heart Rate, Fall Detection</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">iPhone 15 Pro</h4>
                  <p className="text-sm text-gray-600">Location, Camera, Mic</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboardView = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-lg rounded-b-3xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
          </button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Analytics Dashboard</h2>
            <p className="text-gray-600">Emergency response insights</p>
          </div>
          <button 
            onClick={() => setCurrentView('reports')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <FileText className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mx-4 space-y-6">
        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Response Time</h3>
              <Clock className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-blue-600">2.3</p>
            <p className="text-sm text-gray-600">minutes average</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">Incidents</h3>
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-red-600">0</p>
            <p className="text-sm text-gray-600">this month</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Safety Check Completed</h4>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Watch className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">Wearable Device Connected</h4>
                <p className="text-sm text-gray-600">Yesterday</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Eye className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium">AI Risk Assessment Updated</h4>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel for Authorities */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Users className="w-5 h-5 text-orange-500 mr-2" />
            Authority Control Panel
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setCurrentView('database')}
              className="bg-blue-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-blue-600 transition-colors"
            >
              <Database className="w-6 h-6" />
              <span className="text-sm font-medium">Incident Database</span>
            </button>
            <button 
              onClick={() => setCurrentView('monitoring')}
              className="bg-green-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-green-600 transition-colors"
            >
              <Activity className="w-6 h-6" />
              <span className="text-sm font-medium">Live Monitoring</span>
            </button>
            <button 
              onClick={() => setCurrentView('analytics')}
              className="bg-purple-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-purple-600 transition-colors"
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-sm font-medium">Analytics</span>
            </button>
            <button 
              onClick={() => setCurrentView('alerts')}
              className="bg-red-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-red-600 transition-colors"
            >
              <Bell className="w-6 h-6" />
              <span className="text-sm font-medium">Alert System</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMapView = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-lg rounded-b-3xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
          </button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Location Services</h2>
            <p className="text-gray-600">Real-time tracking and navigation</p>
          </div>
          <button 
            onClick={() => setCurrentView('navigation')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <Navigation className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mx-4 space-y-6">
        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <Map className="w-12 h-12 text-blue-500 mx-auto mb-2" />
              <p className="text-gray-600">Interactive Map View</p>
              <p className="text-sm text-gray-500">Current Location: {location}</p>
            </div>
          </div>
        </div>

        {/* Location Features */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Location Features</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2">
              <Navigation className="w-6 h-6" />
              <span className="text-sm font-medium">Navigation</span>
            </button>
            <button className="bg-green-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6" />
              <span className="text-sm font-medium">Share Location</span>
            </button>
            <button className="bg-purple-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium">Safe Zones</span>
            </button>
            <button className="bg-red-500 text-white rounded-xl p-4 flex flex-col items-center space-y-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-sm font-medium">Danger Areas</span>
            </button>
          </div>
        </div>

        {/* Nearby Emergency Services */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Nearby Emergency Services</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-medium">Police Station</h4>
                  <p className="text-sm text-gray-600">0.5 km away</p>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-600">2 min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">Hospital</h4>
                  <p className="text-sm text-gray-600">1.2 km away</p>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-600">5 min</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-medium">Fire Station</h4>
                  <p className="text-sm text-gray-600">0.8 km away</p>
                </div>
              </div>
              <span className="text-sm font-medium text-blue-600">3 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingsView = () => (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-lg rounded-b-3xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => setCurrentView('home')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
          </button>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Settings</h2>
            <p className="text-gray-600">Configure your emergency preferences</p>
          </div>
          <button 
            onClick={() => setCurrentView('profile')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="mx-4 space-y-6">
        {/* Notification Settings */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Bell className="w-5 h-5 text-blue-500 mr-2" />
            Notifications & Alerts
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Emergency Alerts</h4>
                <p className="text-sm text-gray-600">Receive critical emergency notifications</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Location Alerts</h4>
                <p className="text-sm text-gray-600">Notify when entering dangerous areas</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">AI Predictions</h4>
                <p className="text-sm text-gray-600">Get AI-powered risk assessments</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Offline Mode */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Wifi className="w-5 h-5 text-green-500 mr-2" />
            Offline Mode
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Offline Emergency Features</h4>
                <p className="text-sm text-gray-600">Essential functions work without internet</p>
              </div>
              <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end p-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Available Offline:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Emergency calling</li>
                <li>• Basic first aid guide</li>
                <li>• Panic alarm</li>
                <li>• Location sharing via SMS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* First Aid Guide */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BookOpen className="w-5 h-5 text-red-500 mr-2" />
            First Aid Guide
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setCurrentView('cpr')}
              className="bg-red-100 text-red-700 rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-red-200 transition-colors"
            >
              <Heart className="w-6 h-6" />
              <span className="text-sm font-medium">CPR Guide</span>
            </button>
            <button 
              onClick={() => setCurrentView('choking')}
              className="bg-blue-100 text-blue-700 rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-blue-200 transition-colors"
            >
              <Shield className="w-6 h-6" />
              <span className="text-sm font-medium">Choking Aid</span>
            </button>
            <button 
              onClick={() => setCurrentView('wounds')}
              className="bg-green-100 text-green-700 rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-green-200 transition-colors"
            >
              <AlertTriangle className="w-6 h-6" />
              <span className="text-sm font-medium">Wound Care</span>
            </button>
            <button 
              onClick={() => setCurrentView('poisoning')}
              className="bg-purple-100 text-purple-700 rounded-xl p-4 flex flex-col items-center space-y-2 hover:bg-purple-200 transition-colors"
            >
              <Eye className="w-6 h-6" />
              <span className="text-sm font-medium">Poisoning</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Main render function
  const renderCurrentView = () => {
    switch (currentView) {
      case 'profile':
        return renderProfileView();
      case 'dashboard':
        return renderDashboardView();
      case 'map':
        return renderMapView();
      case 'settings':
        return renderSettingsView();
      default:
        return renderHomeView();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white">
      {renderCurrentView()}
    </div>
  );
};

export default EmergencyServicesApp;