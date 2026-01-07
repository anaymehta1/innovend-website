import React, { useState } from 'react';
import { ChevronRight, Check, X, Phone, Mail, MapPin, Zap, Shield, Users, TrendingUp, Menu } from 'lucide-react';

const InnoVendWebsite = () => {
  const [showForm, setShowForm] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    businessName: '',
    phone: '',
    contactMethod: '',
    hearAbout: '',
    referral: '',
    additionalInfo: '',
    termsAgreed: false,
    finalTermsAgreed: false
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const canProceedStep1 = formData.email && validateEmail(formData.email) && formData.termsAgreed;
  const canProceedStep2 = formData.firstName && formData.lastName && formData.businessName && formData.phone && formData.contactMethod;
  const canSubmit = formData.finalTermsAgreed;

  const handleSubmit = () => {
    alert('Form submitted successfully! We will be in touch soon. (In production, this would send to your backend/email service)');
    setShowForm(false);
    setFormStep(1);
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      businessName: '',
      phone: '',
      contactMethod: '',
      hearAbout: '',
      referral: '',
      additionalInfo: '',
      termsAgreed: false,
      finalTermsAgreed: false
    });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-slate-900">
                IV
              </div>
              <span className="text-xl font-bold">InnoVend LLC</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition">About</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition">Services</button>
              <button onClick={() => scrollToSection('machines')} className="hover:text-blue-400 transition">Machines</button>
              <button onClick={() => scrollToSection('products')} className="hover:text-blue-400 transition">Products</button>
              <button onClick={() => setShowForm(true)} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">Request Services</button>
            </div>

            <button onClick={() => setShowMenu(!showMenu)} className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {showMenu && (
            <div className="md:hidden py-4 space-y-2">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-blue-400 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-blue-400 transition">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-blue-400 transition">Services</button>
              <button onClick={() => scrollToSection('machines')} className="block w-full text-left py-2 hover:text-blue-400 transition">Machines</button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left py-2 hover:text-blue-400 transition">Products</button>
              <button onClick={() => { setShowForm(true); setShowMenu(false); }} className="block w-full text-left bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">Request Services</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
            <span className="text-blue-300 text-sm font-medium">Serving North Potomac, Rockville, Gaithersburg & Surrounding Areas</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Innovating Convenience<br />One Vend at a Time
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Providing Convenient Vending Solutions for Local Businesses — At No Cost To You
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowForm(true)}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Request Services <ChevronRight className="ml-2" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition border border-white/20"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                InnoVend LLC is a premier vending machine service provider dedicated to enhancing your business environment with convenient, modern vending solutions. We specialize in placing and maintaining state-of-the-art vending machines at businesses throughout the North Potomac, Rockville, and Gaithersburg areas.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our mission is simple: to provide your customers, employees, or clients with easy access to quality snacks and beverages while improving the overall experience at your facility — all at zero cost to you.
              </p>
              <p className="text-lg text-gray-300">
                With cutting-edge technology, including touchscreen interfaces and UV sanitization, we bring innovation and convenience to every location we serve. We handle everything from installation to restocking, so you can focus on running your business.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-400/30">
                <Zap className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Modern Technology</h3>
                <p className="text-sm text-gray-300">Touchscreen interfaces & UV sanitization</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-400/30">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Zero Cost</h3>
                <p className="text-sm text-gray-300">Free placement & maintenance</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-400/30">
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Customizable</h3>
                <p className="text-sm text-gray-300">Product selection tailored to you</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-400/30">
                <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Full Service</h3>
                <p className="text-sm text-gray-300">We handle restocking & cleaning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose InnoVend?</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            We provide complete vending solutions that enhance your business and delight your customers — all at no cost to you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Completely Free</h3>
              <p className="text-gray-300">
                No upfront costs, no monthly fees, no hidden charges. We cover everything — you only provide power and WiFi. Plus, we may offer commission opportunities to our partners.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enhance Customer Experience</h3>
              <p className="text-gray-300">
                Improve client satisfaction and drive return visits by offering convenient access to snacks and beverages. A well-placed vending machine can transform your waiting area or break room into a more welcoming space.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Hassle-Free Maintenance</h3>
              <p className="text-gray-300">
                We handle all restocking, cleaning, and repairs. Our machines feature modern touchscreen technology and UV sanitization to ensure a clean, professional appearance that reflects well on your business.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customizable Selection</h3>
              <p className="text-gray-300">
                You have input on what products go into your machine. We work with you to stock items that match your clientele's preferences and dietary needs.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Local Service</h3>
              <p className="text-gray-300">
                We're a local business serving North Potomac, Rockville, Gaithersburg, and surrounding areas. Quick response times and personalized service you can count on.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20 hover:border-blue-400/40 transition">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Perfect For High-Traffic Locations</h3>
              <p className="text-gray-300">
                Ideal for salons, laundromats, fitness centers, office buildings, medical offices, car washes, and any location where customers wait or need convenient refreshments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <section id="machines" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Vending Machines</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            We offer a variety of state-of-the-art vending machines to fit your space and needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-400/20">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🍫</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Snack Machines</h3>
              <p className="text-gray-300 text-sm mb-4">
                MarketOne 6 Wide with 48 selections and up to 738 items. Features touchscreen interface, guaranteed delivery, and UV sanitization.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 10.1" Touchscreen</li>
                <li>• iVend Guaranteed Delivery</li>
                <li>• UVend Sanitization</li>
                <li>• 48 Product Selections</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-400/20">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🥤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Drink Machines</h3>
              <p className="text-gray-300 text-sm mb-4">
                Cold Drink Elevator Machine with 36 selections and 216 items. Features pre-cool storage area and 7" touchscreen.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 7" Touchscreen</li>
                <li>• Pre-Cool Storage</li>
                <li>• UVend Sanitization</li>
                <li>• 36 Product Selections</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-400/20">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🍿</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Combo Machines</h3>
              <p className="text-gray-300 text-sm mb-4">
                MarketOne 5 Wide Combo offering both snacks and drinks. Features anti-fog heated glass and 7" touchscreen.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 7" Touchscreen</li>
                <li>• Snacks & Drinks</li>
                <li>• Anti-Fog Heated Glass</li>
                <li>• 38 Product Selections</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-400/20">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">☕</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Coffee Machines</h3>
              <p className="text-gray-300 text-sm mb-4">
                MarketOne Coffee Machine with 34 combo options including coffee, tea, cappuccino, and espresso. Fresh brew technology.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Fresh Brew Technology</li>
                <li>• 34 Beverage Options</li>
                <li>• UVend Sanitization</li>
                <li>• Hot Chocolate & Tea</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-400/20">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🍦</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ice Cream Machines</h3>
              <p className="text-gray-300 text-sm mb-4">
                Specialized ice cream vending with 36 selections. Features anti-fog heated glass and 7" touchscreen for easy selection.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 7" Touchscreen</li>
                <li>• 36 Ice Cream Selections</li>
                <li>• Anti-Fog Heated Glass</li>
                <li>• Temperature Controlled</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-blue-400/20">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-6xl">🏋️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Specialty Machines</h3>
              <p className="text-gray-300 text-sm mb-4">
                Fitness centers, laundromats, car washes, and more. We have specialized machines for unique business needs.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Fitness & Wellness Products</li>
                <li>• Laundry Supplies</li>
                <li>• School Supplies</li>
                <li>• PPE Options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What We Offer</h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            A wide selection of popular snacks and beverages to keep your customers satisfied.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🥤</span> Beverages
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-blue-300 mb-2">Sodas & Soft Drinks</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Coca-Cola & Diet Coke</li>
                    <li>• Pepsi & Diet Pepsi</li>
                    <li>• Dr. Pepper</li>
                    <li>• Mountain Dew</li>
                    <li>• Sprite & Fanta</li>
                    <li>• 7-Up & Root Beer</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-300 mb-2">Energy & Sports</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Monster Energy</li>
                    <li>• Bang Energy</li>
                    <li>• Gatorade</li>
                    <li>• Powerade</li>
                    <li>• Prime</li>
                  </ul>
                  <p className="font-semibold text-blue-300 mb-2 mt-4">Other</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Water & Smart Water</li>
                    <li>• Starbucks Frappuccino</li>
                    <li>• Arizona Tea</li>
                    <li>• Gold Peak Tea</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-400/20">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-3xl mr-3">🍫</span> Snacks
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-blue-300 mb-2">Chips & Savory</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Doritos</li>
                    <li>• Ruffles</li>
                    <li>• Takis</li>
                    <li>• Sun Chips</li>
                    <li>• Pretzels</li>
                    <li>• Goldfish</li>
                    <li>• Skinny Pop</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-blue-300 mb-2">Candy & Sweets</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Snickers & Twix</li>
                    <li>• M&M's & Skittles</li>
                    <li>• Reese's</li>
                    <li>• KitKat</li>
                    <li>• Starburst</li>
                    <li>• Sour Patch Kids</li>
                  </ul>
                  <p className="font-semibold text-blue-300 mb-2 mt-4">Healthy Options</p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Nature Valley Bars</li>
                    <li>• Kind Bars</li>
                    <li>• Rice Krispies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8">
            *Prices range from $1.00 - $3.00. Product selection can be customized based on your preferences.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join local businesses who have enhanced their customer experience with InnoVend's convenient vending solutions.
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 shadow-lg"
          >
            Request Services Today
          </button>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-slate-900">
                  IV
                </div>
                <span className="text-xl font-bold">InnoVend LLC</span>
              </div>
              <p className="text-gray-400">
                Innovating Convenience, One Vend at a Time
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> hello@innovend.net</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> North Potomac, MD 20878</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => setShowForm(true)} className="block text-gray-400 hover:text-blue-400 transition">Request Services</button>
                <button onClick={() => setShowTerms(true)} className="block text-gray-400 hover:text-blue-400 transition">Terms & Conditions</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 InnoVend LLC. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Service Request Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl max-w-2xl w-full my-8 border border-blue-400/30 shadow-2xl">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold">InnoVend Services Request</h2>
              <button onClick={() => { setShowForm(false); setFormStep(1); }} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex justify-between mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      formStep >= step ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
                    }`}>
                      {formStep > step ? <Check className="w-5 h-5" /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`flex-1 h-1 mx-2 ${
                        formStep > step ? 'bg-blue-500' : 'bg-gray-700'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {formStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Welcome!</h3>
                    <p className="text-gray-300 mb-4">
                      Thank you for your interest in requesting our services for your business. Complete the following form accurately and we will get back to you soon regarding placing a machine at your business location.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-300 mb-2"><strong>A few things to note:</strong></p>
                      <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                        <li>The purpose of this form is for InnoVend LLC to place a machine at your facility/location. This will be of no cost to you, aside from WiFi connectivity and power costs.</li>
                        <li>This form does not guarantee that a Vending Machine will be placed at your location. We will be in touch with you shortly regarding your services request.</li>
                      </ul>
                    </div>
                    <p className="text-gray-300 mb-4">
                      Again, thank you for your interest in our services and we look forward to speaking with you. If you have any questions, please contact us at <a href="mailto:hello@innovend.net" className="text-blue-400 hover:underline">hello@innovend.net</a> and we will get back to you as soon as we can.
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      checked={formData.termsAgreed}
                      onChange={(e) => updateFormData('termsAgreed', e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-300">
                      By continuing with this form, I confirm that I have read, understood, and agree to the{' '}
                      <button onClick={() => setShowTerms(true)} className="text-blue-400 hover:underline">
                        Terms and Conditions
                      </button>.
                    </label>
                  </div>

                  <button
                    onClick={() => setFormStep(2)}
                    disabled={!canProceedStep1}
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      canProceedStep1
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Personal Information</h3>
                    <p className="text-gray-300 mb-4">
                      This section is for your personal information so we can efficiently contact you in the future.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Legal Name of Your Business *</label>
                    <p className="text-xs text-gray-400 mb-2">This should be the official legal entity name your business is filed under.</p>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => updateFormData('businessName', e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <p className="text-xs text-gray-400 mb-2">Message and data rates may apply.</p>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Method of Contact *</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="Email"
                          checked={formData.contactMethod === 'Email'}
                          onChange={(e) => updateFormData('contactMethod', e.target.value)}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="Phone"
                          checked={formData.contactMethod === 'Phone'}
                          onChange={(e) => updateFormData('contactMethod', e.target.value)}
                          className="mr-2"
                        />
                        Phone
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          value="Other"
                          checked={formData.contactMethod === 'Other'}
                          onChange={(e) => updateFormData('contactMethod', e.target.value)}
                          className="mr-2"
                        />
                        Other
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setFormStep(1)}
                      className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setFormStep(3)}
                      disabled={!canProceedStep2}
                      className={`flex-1 py-3 rounded-lg font-semibold transition ${
                        canProceedStep2
                          ? 'bg-blue-500 hover:bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Additional Information</h3>
                    <p className="text-gray-300 mb-4">
                      This section is just some additional information we would like (Optional).
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
                    <input
                      type="text"
                      value={formData.hearAbout}
                      onChange={(e) => updateFormData('hearAbout', e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="e.g., Google search, referral, social media"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Do you have a business or person referral?</label>
                    <p className="text-xs text-gray-400 mb-2">If so, type it below. Otherwise, leave blank.</p>
                    <input
                      type="text"
                      value={formData.referral}
                      onChange={(e) => updateFormData('referral', e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Name of person or business"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Would you like to share any additional information?</label>
                    <p className="text-xs text-gray-400 mb-2">If so, type it below. Otherwise, leave blank.</p>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Any additional details about your location, business hours, customer demographics, etc."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setFormStep(2)}
                      className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setFormStep(4)}
                      className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {formStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Submission</h3>
                    <p className="text-gray-300 mb-4">
                      Thank you so much for your continued interest in our services! InnoVend LLC will be in touch with you soon, and we look forward to your business.
                    </p>
                    <p className="text-gray-300 mb-4">
                      When you are ready, please click the Submit button below to submit your responses to us. If you have any questions, feel free to email us at{' '}
                      <a href="mailto:hello@innovend.net" className="text-blue-400 hover:underline">hello@innovend.net</a> and we will get back to you as soon as we can.
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Review Your Information:</p>
                    <div className="space-y-1 text-sm text-gray-300">
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                      <p><strong>Business:</strong> {formData.businessName}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      <p><strong>Preferred Contact:</strong> {formData.contactMethod}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      checked={formData.finalTermsAgreed}
                      onChange={(e) => updateFormData('finalTermsAgreed', e.target.checked)}
                      className="mt-1 mr-3"
                    />
                    <label className="text-sm text-gray-300">
                      By submitting the form, I confirm that I have read, understood, and agree to the{' '}
                      <button onClick={() => setShowTerms(true)} className="text-blue-400 hover:underline">
                        Terms and Conditions
                      </button>. *
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setFormStep(3)}
                      className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!canSubmit}
                      className={`flex-1 py-3 rounded-lg font-semibold transition ${
                        canSubmit
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full my-8 border border-blue-400/30 shadow-2xl max-h-[90vh] flex flex-col">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
              <h2 className="text-2xl font-bold">Terms and Conditions for Service Request Form</h2>
              <button onClick={() => setShowTerms(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <p className="text-sm text-gray-400 mb-6">Last Updated: December 3, 2024</p>
              
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">1. Purpose of Information Collection</h3>
                  <p>The information collected through this form will be used solely to evaluate and process your service request. By submitting this form, you acknowledge and consent to our use of the provided information for this purpose.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">2. Privacy Policy</h3>
                  <p>We respect your privacy. Any personal or contact information submitted through this form will be securely stored and used only to fulfill your request. Your data will not be shared with any third parties without your explicit consent, except as required by law.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">3. Fees and Costs</h3>
                  <p>If applicable, fees for services will be clearly communicated to you after your request has been reviewed. Submission of this form does not create a binding contract or obligation to pay unless explicitly agreed upon in writing.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">4. Service Limitations</h3>
                  <p>While we strive to fulfill all requests to the best of our ability, submission of this form does not guarantee service. We reserve the right to decline any request that falls outside our scope of offerings or for any reason.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">5. Liability</h3>
                  <p>We are not liable for delays, interruptions, or issues arising from unforeseen circumstances beyond our control. Any costs, damages, or inconveniences incurred as a result of using our services are limited to the extent permitted by law.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">6. Consent to Contact</h3>
                  <p>By submitting this form, you agree to be contacted using the email or phone number provided. Standard message and data rates may apply for SMS or calls.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-2">7. Modifications</h3>
                  <p>We reserve the right to update or modify these terms and conditions at any time. Changes will be effective immediately upon posting to the form or via direct communication.</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-700 flex-shrink-0">
              <button
                onClick={() => setShowTerms(false)}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnoVendWebsite;