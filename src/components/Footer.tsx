import React, { useState } from 'react';
import { Activity, Facebook, Twitter, Linkedin, Send, Heart, Leaf, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import footer from '../assets/footer.png';
import payment from '../assets/payment.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 pt-16">
        

        {/* Info Columns */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-16">
        <div className="p-6">
            <h4 className="font-bold text-lg mb-4">Have a Question?</h4>
            <p className="text-black mb-4">Check out our FAQs where we answer the most commonly asked questions</p>
            <Button variant="outline" className="w-full md:w-auto rounded-none px-12 h-10">Read FAQs</Button>
        </div>
        <div className="p-6">
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <p className="text-black mb-2">Enjoy free shipping for all orders.</p>
            <p className="text-xl font-bold text-gray-900">1-800-822-7777</p>
        </div>
        <div className="p-6">
            <h4 className="font-bold text-lg mb-4">We're Social</h4>
            <p className="text-black">Like us, love us, follow us!</p>
        </div>
        </div>

        {/* Blue Footer Strip */}
        <div className="bg-[#1D64D0] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left text-white">
                <h3 className="text-3xl font-bold">Let's Grow Together</h3>
                <p className="text-blue-100 text-lg mt-2">We'll keep it simple. Only the news and updates you need.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
                <input 
                    type="email" 
                    placeholder="Please Enter Your Email" 
                    className="px-4 py-3 rounded-r-none w-full md:w-80 bg-transparent border border-white text-white placeholder:text-blue-200 focus:outline-none focus:ring-1 focus:ring-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    
                />
                <button type="submit" className="bg-white text-black font-bold px-8 py-3 rounded-none hover:bg-gray-100 transition-colors">
                    Submit
                </button>
                
            </form>
        </div>
        </div>

        {/* Final Footer Links */}
        <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 text-sm text-gray-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-4 text-gray-900">
                        <img src={footer} className='h-16 w-16'/>
                </div>
                <p className="mb-2">Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
                <p className="mb-2">Phone: (512) 555-2376</p>
                <p>Email: Ereforce@outlook.com</p>
            </div>

            <div className="lg:col-span-3">
                <h4 className="font-bold text-blue-500 mb-4 text-xl">Our Products</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-blue-600">Vita Renew</a>
                        <a href="#" className="hover:text-blue-600">TestoBites</a>
                        <a href="#" className="hover:text-blue-600">Audizen</a>
                        <a href="#" className="hover:text-blue-600">Nerve Flow</a>
                        <a href="#" className="hover:text-blue-600">Uro flow</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-blue-600">Vita Renew</a>
                        <a href="#" className="hover:text-blue-600">TestoBites</a>
                        <a href="#" className="hover:text-blue-600">Audizen</a>
                        <a href="#" className="hover:text-blue-600">Nerve Flow</a>
                        <a href="#" className="hover:text-blue-600">Uro flow</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-blue-600">Vita Renew</a>
                        <a href="#" className="hover:text-blue-600">TestoBites</a>
                        <a href="#" className="hover:text-blue-600">Audizen</a>
                        <a href="#" className="hover:text-blue-600">Nerve Flow</a>
                        <a href="#" className="hover:text-blue-600">Uro flow</a>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-blue-600">Vita Renew</a>
                        <a href="#" className="hover:text-blue-600">TestoBites</a>
                        <a href="#" className="hover:text-blue-600">Audizen</a>
                        <a href="#" className="hover:text-blue-600">Nerve Flow</a>
                        <a href="#" className="hover:text-blue-600">Uro flow</a>
                    </div>
                    
                    {/* Add more links as needed */}
                </div>
            </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-200 mt-5">
                <div className="flex flex-col items-center text-center">
                    {/* Disclaimer Text */}
                    <p className="text-gray-500 mb-2">
                        These statements have not been evaluated by the Food and Drug Administration.
                    </p>
                    <p className="text-gray-500 mb-6">
                        These products are not intended to diagnose, treat, cure or prevent any disease. Individual results may vary.
                    </p>

                    {/* Payment Icons */}
                    <div className="mb-8">
                        <img src={payment} alt="Payment Methods" className="h-8 object-contain" />
                    </div>

                    {/* Bottom Row: Copyright & Links */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
                        <div className="mb-4 md:mb-0 font-medium">
                            © 2025, Health Desk Clinic. All Rights Reserved.
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-gray-900 transition-colors">Terms And Conditions</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                            <span className="text-gray-400">|</span>
                            <a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
                
        </footer>
    </div>
  );
};

export default Footer;
