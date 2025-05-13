'use client';
import { useState } from 'react';
import Image from 'next/image';
interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string[];
  estimatedQuantity: string;
  otherProducts: string; // Added this line
}
interface PDFLeadFormData {
  name: string;
  email: string;
}
export default function Home() {
  // Contact form state
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: [],
    estimatedQuantity: '',
    otherProducts: '', // Added this line
  });
  // PDF lead capture state
  const [pdfLeadData, setPdfLeadData] = useState<PDFLeadFormData>({
    name: '',
    email: '',
  });
  const [showLightsModal, setShowLightsModal] = useState(false);
  const [showMarblesModal, setShowMarblesModal] = useState(false);
  const [showFurnituresModal, setShowFurnituresModal] = useState(false);
  const [pdfFormSubmitted, setPdfFormSubmitted] = useState(false);
  const [currentPdf, setCurrentPdf] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'productInterest' && e.target instanceof HTMLSelectElement) {
      const options = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData({ ...formData, productInterest: options });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handlePdfLeadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPdfLeadData({ ...pdfLeadData, [name]: value });
  };
  const openPdfModal = (pdfType: string) => {
    setPdfFormSubmitted(false);
    setPdfLeadData({ name: '', email: '' });
    setCurrentPdf(pdfType);
    
    if (pdfType === 'lights') {
      setShowLightsModal(true);
    } else if (pdfType === 'marbles') {
      setShowMarblesModal(true);
    } else if (pdfType === 'furnitures') {
      setShowFurnituresModal(true);
    }
  };
  const closePdfModal = () => {
    setShowLightsModal(false);
    setShowMarblesModal(false);
    setShowFurnituresModal(false);
    setPdfFormSubmitted(false);
  };
  const handlePdfLeadSubmit = (e: React.FormEvent, pdfType: string) => {
    e.preventDefault();
    // In a real implementation, you would submit this to your server or Formspree
    console.log(`PDF Lead for ${pdfType}:`, pdfLeadData);
    setPdfFormSubmitted(true);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed header with higher z-index */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            {/* Replace with your actual logo path */}
            <Image 
              src="/logo.png" 
              alt="Build & Design Logo" 
              width={250} 
              height={100} 
              className="h-16 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-black hover:text-gray-600 transition-colors">Home</a>
            <a href="#products" className="text-black hover:text-gray-600 transition-colors">Products</a>
            <a href="#about" className="text-black hover:text-gray-600 transition-colors">About Us</a>
            <a href="#contact" className="text-black hover:text-gray-600 transition-colors">Contact</a>
            <a href="#contact" className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black">Get a Free Quote</a>
          </nav>
          <button className="md:hidden text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      
      {/* Main content with proper top padding to account for fixed header */}
      <main className="flex-grow pt-16"> {/* Changed mt-16 to pt-16 for better spacing */}
        <section id="home" className="relative">
          <div className="relative h-[500px] w-full">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Cape Town cityscape with Table Mountain" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Supplying South Africa's Builders with Premium Construction Materials in Bulk</h1>
              <p className="text-lg md:text-xl mb-8 text-white">Lights, Marbles & Furnitures—wholesale delivery nationwide</p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black">Get a Free Quote</a>
                <a href="https://forms.gle/BLWs79ZZtfFTaCaG8" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors shadow-md">Make a Custom Request</a>
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="container mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="https://oprjperexnkidjndkjpx.supabase.co/storage/v1/object/public/buildanddesign//33-%20lights.jpg" 
                  alt="Modern lighting fixtures" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Lights</h3>
                <p className="text-gray-600 mb-4">Premium lighting solutions for all construction needs</p>
                <button 
                  onClick={() => openPdfModal('lights')}
                  className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black inline-block"
                >
                  View PDF catalogue
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="https://oprjperexnkidjndkjpx.supabase.co/storage/v1/object/public/buildanddesign//Marbles.jpg" 
                  alt="Stack of marble tiles" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Marbles</h3>
                <p className="text-gray-600 mb-4">High-quality marble for elegant finishes</p>
                <button 
                  onClick={() => openPdfModal('marbles')}
                  className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black inline-block"
                >
                  View PDF catalogue
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="https://oprjperexnkidjndkjpx.supabase.co/storage/v1/object/public/buildanddesign//Furnitures.jpg" 
                  alt="Modern furniture for homes and offices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Furnitures</h3>
                <p className="text-gray-600 mb-4">Durable and stylish furnitures for all spaces</p>
                <button 
                  onClick={() => openPdfModal('furnitures')}
                  className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black inline-block"
                >
                  View PDF catalogue
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="https://oprjperexnkidjndkjpx.supabase.co/storage/v1/object/public/buildanddesign//Alloy-Steel.jpg" 
                  alt="Metal and steel construction materials" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Others (Coming Soon)</h3>
                <p className="text-gray-600 mb-4">More construction materials coming soon</p>
                <a href="https://forms.gle/BLWs79ZZtfFTaCaG8" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black inline-block">Make a Custom Request</a>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-black">About Us</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-black">Our Business</h3>
                  <p className="text-gray-700 mb-2">Bulk‐only supplier of lighting, marble, furnitures & more</p>
                  <p className="text-gray-700">Backed by Gigimobile / Gigi Group (PTY) Ltd</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-black">Our Operations</h3>
                  <p className="text-gray-700 mb-2">Cape Town & Durban logistics</p>
                  <p className="text-gray-700">Flexible payments: PayGate, Paystack, EFT, Visa, Mastercard, Crypto</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-black text-white px-4 py-2 rounded-full shadow-md bg-gradient-to-b from-gray-700 to-black">Wholesale Only</div>
                <div className="bg-black text-white px-4 py-2 rounded-full shadow-md bg-gradient-to-b from-gray-700 to-black">Nationwide Delivery</div>
                <div className="bg-black text-white px-4 py-2 rounded-full shadow-md bg-gradient-to-b from-gray-700 to-black">Bulk Orders</div>
                <div className="bg-black text-white px-4 py-2 rounded-full shadow-md bg-gradient-to-b from-gray-700 to-black">Premium Quality</div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="container mx-auto py-20 px-4">
          <h2 className="text-3xl font-bold text-center mb-2 text-black">Inquiry Form</h2>
          <p className="text-center mb-8 text-gray-600">We will get back to you ASAP!</p>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form action="https://formspree.io/f/xeogpane" method="POST" encType="multipart/form-data">
              <input type="hidden" name="_next" value="https://buildanddesign.co.za?submitted=true" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    name="company" 
                    id="company" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">Product Interest (Select multiple)</label>
                <select 
                  name="productInterest" 
                  id="productInterest" 
                  multiple 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
                >
                  <option value="Lights">Lights</option>
                  <option value="Marbles">Marbles</option>
                  <option value="Furnitures">Furnitures</option>
                  <option value="Steel & Rebar">Steel & Rebar</option>
                  <option value="Cement & Aggregates">Cement & Aggregates</option>
                  <option value="Timber & Lumber">Timber & Lumber</option>
                  <option value="Windows & Doors">Windows & Doors</option>
                  <option value="Plumbing & Fixtures">Plumbing & Fixtures</option>
                  <option value="Electrical Supplies">Electrical Supplies</option>
                  <option value="Paint & Finishes">Paint & Finishes</option>
                  {/* Removed the "Other" option */}
                </select>
                <p className="text-sm text-gray-500 mt-1">Hold Ctrl (or Cmd on Mac) to select multiple options</p>
              </div>
              
              <div className="mt-6">
                <label htmlFor="estimatedQuantity" className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity (optional)</label>
                <input 
                  type="text" 
                  name="estimatedQuantity" 
                  id="estimatedQuantity" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                  placeholder="e.g., 500 units, 1000 sq meters, etc."
                />
              </div>
              
              {/* Added standalone Other Products field */}
              <div className="mt-6">
                <label htmlFor="otherProducts" className="block text-sm font-medium text-gray-700 mb-1">Other Products (if not listed above)</label>
                <input 
                  type="text" 
                  name="otherProducts" 
                  id="otherProducts" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                  placeholder="Enter any other products you're interested in"
                />
              </div>
              
              <div className="mt-8">
                <button 
                  type="submit" 
                  className="w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="mb-4">
                <Image 
                  src="/logo-white.png" 
                  alt="Build & Design Logo" 
                  width={250} 
                  height={100} 
                  className="h-16 w-auto"
                />
              </div>
              <p className="mb-4">Supplying South Africa's Builders with Premium Construction Materials in Bulk</p>
              
              {/* Social Media Icons - WhatsApp and Email */}
              <div className="flex space-x-4 mt-4">
                <a href="https://wa.me/27736500843" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="mailto:sales@buildanddesign.co.za" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="flex items-center hover:text-gray-300 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7m-7-7v14"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="flex items-center hover:text-gray-300 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="flex items-center hover:text-gray-300 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="flex items-center hover:text-gray-300 transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+27 73 650 0843 (South Africa)</span>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+234 813 934 0155 (Nigeria)</span>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:sales@buildanddesign.co.za" className="hover:text-gray-300 transition-colors">sales@buildanddesign.co.za</a>
              </div>
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Durban & Cape Town, South Africa</span>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Lekki, Nigeria</span>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-3">Accepted Payments:</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white text-gray-800 p-2 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
                    </svg>
                    <span className="ml-1 text-xs">PayGate</span>
                  </div>
                  <div className="bg-white text-gray-800 p-2 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
                    </svg>
                    <span className="ml-1 text-xs">Paystack</span>
                  </div>
                  <div className="bg-white text-gray-800 p-2 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 10V17H7V10H4ZM10 10V17H13V10H10ZM2 22H21V19H2V22ZM16 10V17H19V10H16ZM11.5 1L2 6V8H21V6L11.5 1Z" />
                    </svg>
                    <span className="ml-1 text-xs">EFT</span>
                  </div>
                  <div className="bg-white text-gray-800 p-2 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
                    </svg>
                    <span className="ml-1 text-xs">Visa</span>
                  </div>
                  <div className="bg-white text-gray-800 p-2 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
                    </svg>
                    <span className="ml-1 text-xs">Mastercard</span>
                  </div>
                  <div className="bg-white text-gray-800 p-2 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.06 11.57C17.65 10.88 18 10 18 9C18 7.14 16.73 5.57 15 5.13V4C15 2.9 14.1 2 13 2H11C9.9 2 9 2.9 9 4V5.13C7.27 5.57 6 7.14 6 9C6 10 6.35 10.88 6.94 11.57C5.19 12.22 4 13.97 4 16V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V16C20 13.97 18.81 12.22 17.06 11.57ZM9 9C9 8.45 9.45 8 10 8H14C14.55 8 15 8.45 15 9C15 9.55 14.55 10 14 10H10C9.45 10 9 9.55 9 9ZM12 19C10.9 19 10 18.1 10 17C10 15.9 10.9 15 12 15C13.1 15 14 15.9 14 17C14 18.1 13.1 19 12 19Z" />
                    </svg>
                    <span className="ml-1 text-xs">Crypto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>Build & Design is a subsidiary of Gigi Group (PTY) Ltd</p>
            <p className="mt-2">© 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
      {/* PDF Lead Capture Modals */}
      {/* Lights PDF Modal */}
      {showLightsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">Download Lights Catalogue</h3>
              <button onClick={closePdfModal} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {!pdfFormSubmitted ? (
              <form action="https://formspree.io/f/xeogpane" method="POST" onSubmit={(e) => handlePdfLeadSubmit(e, 'lights')}>
                <input type="hidden" name="catalogue" value="Lights Catalogue" />
                
                <div className="mb-4">
                  <label htmlFor="pdf-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="pdf-name" 
                    value={pdfLeadData.name}
                    onChange={handlePdfLeadChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="pdf-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="pdf-email" 
                    value={pdfLeadData.email}
                    onChange={handlePdfLeadChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black"
                >
                  Download Catalogue
                </button>
              </form>
            ) : (
              <div className="text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Thank you!</h4>
                <p className="text-gray-600 mb-4">Your download is ready.</p>
                <a 
                  href="/catalogues/lights.pdf" 
                  download
                  className="inline-block bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black"
                >
                  Download Now
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Marbles PDF Modal */}
      {showMarblesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">Download Marbles Catalogue</h3>
              <button onClick={closePdfModal} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {!pdfFormSubmitted ? (
              <form action="https://formspree.io/f/xeogpane" method="POST" onSubmit={(e) => handlePdfLeadSubmit(e, 'marbles')}>
                <input type="hidden" name="catalogue" value="Marbles Catalogue" />
                
                <div className="mb-4">
                  <label htmlFor="pdf-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="pdf-name" 
                    value={pdfLeadData.name}
                    onChange={handlePdfLeadChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="pdf-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="pdf-email" 
                    value={pdfLeadData.email}
                    onChange={handlePdfLeadChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black"
                >
                  Download Catalogue
                </button>
              </form>
            ) : (
              <div className="text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Thank you!</h4>
                <p className="text-gray-600 mb-4">Your download is ready.</p>
                <a 
                  href="/catalogues/marbles.pdf" 
                  download
                  className="inline-block bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black"
                >
                  Download Now
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Furnitures PDF Modal */}
      {showFurnituresModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-black">Download Furnitures Catalogue</h3>
              <button onClick={closePdfModal} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            {!pdfFormSubmitted ? (
              <form action="https://formspree.io/f/xeogpane" method="POST" onSubmit={(e) => handlePdfLeadSubmit(e, 'furnitures')}>
                <input type="hidden" name="catalogue" value="Furnitures Catalogue" />
                
                <div className="mb-4">
                  <label htmlFor="pdf-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="pdf-name" 
                    value={pdfLeadData.name}
                    onChange={handlePdfLeadChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="pdf-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="pdf-email" 
                    value={pdfLeadData.email}
                    onChange={handlePdfLeadChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                    required 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black"
                >
                  Download Catalogue
                </button>
              </form>
            ) : (
              <div className="text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Thank you!</h4>
                <p className="text-gray-600 mb-4">Your download is ready.</p>
                <a 
                  href="/catalogues/furnitures.pdf" 
                  download
                  className="inline-block bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black"
                >
                  Download Now
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
