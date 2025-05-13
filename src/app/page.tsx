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
  plan: File | null;
}

export default function Home() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: [],
    estimatedQuantity: '',
    plan: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'productInterest' && e.target instanceof HTMLSelectElement) {
      const options = Array.from(e.target.selectedOptions).map(option => option.value);
      setFormData({ ...formData, productInterest: options });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, plan: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            {/* Replace with your actual logo path */}
            <Image 
              src="/logo.png" 
              alt="Build & Design Logo" 
              width={150} 
              height={50} 
              className="h-10 w-auto"
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
      <main className="flex-grow mt-16">
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
              <p className="text-lg md:text-xl mb-8 text-white">Lights, Marbles & Furniture—wholesale delivery nationwide</p>
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
                  src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Modern lighting fixtures" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Lights</h3>
                <p className="text-gray-600 mb-4">Premium lighting solutions for all construction needs</p>
                <a href="/catalogues/lights.pdf" className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black inline-block">View PDF catalogue</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Stack of marble tiles" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Marbles</h3>
                <p className="text-gray-600 mb-4">High-quality marble for elegant finishes</p>
                <a href="/catalogues/marbles.pdf" className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black inline-block">View PDF catalogue</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Modern furniture for homes and offices" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Furniture</h3>
                <p className="text-gray-600 mb-4">Durable and stylish furniture for all spaces</p>
                <a href="/catalogues/furniture.pdf" className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors shadow-md bg-gradient-to-b from-gray-700 to-black inline-block">View PDF catalogue</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md text-center hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
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
                  <p className="text-gray-700 mb-2">Bulk‐only supplier of lighting, marble, furniture & more</p>
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
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Contact Us</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
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
                    value={formData.company} 
                    onChange={handleInputChange} 
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
                    value={formData.email} 
                    onChange={handleInputChange} 
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
                    value={formData.phone} 
                    onChange={handleInputChange} 
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
                  onChange={handleInputChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
                >
                  <option value="Lights">Lights</option>
                  <option value="Marbles">Marbles</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Steel & Rebar">Steel & Rebar</option>
                  <option value="Cement & Aggregates">Cement & Aggregates</option>
                  <option value="Timber & Lumber">Timber & Lumber</option>
                  <option value="Windows & Doors">Windows & Doors</option>
                  <option value="Plumbing & Fixtures">Plumbing & Fixtures</option>
                  <option value="Electrical Supplies">Electrical Supplies</option>
                  <option value="Paint & Finishes">Paint & Finishes</option>
                  <option value="Other">Other</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Hold Ctrl (or Cmd on Mac) to select multiple options</p>
              </div>
              
              <div className="mt-6">
                <label htmlFor="estimatedQuantity" className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                <input 
                  type="text" 
                  name="estimatedQuantity" 
                  id="estimatedQuantity" 
                  value={formData.estimatedQuantity} 
                  onChange={handleInputChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                  required 
                  placeholder="e.g., 500 units, 1000 sq meters, etc."
                />
              </div>
              
              <div className="mt-6">
                <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">Upload Plan (optional)</label>
                <input 
                  type="file" 
                  name="plan" 
                  id="plan" 
                  onChange={handleFileChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" 
                />
                <p className="text-sm text-gray-500 mt-1">Accepted file formats: PDF, JPG, PNG (max 10MB)</p>
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
                  src="/logo.png" 
                  alt="Build & Design Logo" 
                  width={150} 
                  height={50} 
                  className="h-10 w-auto"
                />
              </div>
              <p className="mb-2">A subsidiary of Gigi Group (PTY) Ltd</p>
              <p className="mb-2">Cape Town & Umhlanga, Durban</p>
              <p>South Africa</p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
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
                <span>+27 73 650 0843</span>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Cape Town & Umhlanga, Durban</span>
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
    </div>
  );
}
