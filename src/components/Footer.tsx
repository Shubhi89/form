import React, { useState } from 'react';
import { Activity, Facebook, Twitter, Linkedin, Send, Heart, Leaf, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import footer from '../assets/footer.png';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 pt-16">
        <div className="max-w-4xl mx-auto text-center px-4 mb-16">
        <div className="flex justify-center gap-4 mb-8">
            <Button variant="primary" className="rounded-full !px-3 !py-3"><Facebook size={20}/></Button>
            <Button variant="primary" className="rounded-full !px-3 !py-3"><Twitter size={20}/></Button>
            <Button variant="primary" className="rounded-full !px-3 !py-3"><Send size={20}/></Button>
            <Button variant="primary" className="rounded-full !px-3 !py-3"><Linkedin size={20}/></Button>
        </div>
        </div>

        {/* Info Columns */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-16">
        <div className="p-6">
            <h4 className="font-bold text-lg mb-4">Have a Question?</h4>
            <p className="text-gray-600 mb-4 text-sm">Check out our FAQs where we answer the most commonly asked questions</p>
            <Button variant="outline" className="w-full md:w-auto">Read FAQs</Button>
        </div>
        <div className="p-6">
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <p className="text-gray-600 mb-2 text-sm">Enjoy free shipping for all orders.</p>
            <p className="text-xl font-bold text-gray-900">1-800-822-7777</p>
        </div>
        <div className="p-6">
            <h4 className="font-bold text-lg mb-4">We're Social</h4>
            <p className="text-gray-600 text-sm">Like us, love us, follow us!</p>
        </div>
        </div>

        {/* Blue Footer Strip */}
        <div className="bg-[#1D64D0] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left text-white">
                <h3 className="text-2xl font-bold">Let's Grow Together</h3>
                <p className="text-blue-100 text-sm">We'll keep it simple. Only the news and updates you need.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto gap-2">
                <input 
                    type="email" 
                    placeholder="Please Enter Your Email" 
                    className="px-4 py-3 rounded w-full md:w-80 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="bg-white text-[#1D64D0] font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors">
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
                        <Activity className="text-blue-500" size={24} />
                        <span className="font-bold">Health Desk</span>
                </div>
                <p className="mb-2">Address: 7823 Red Oak Trail, Austin, TX, 78745, United States</p>
                <p className="mb-2">Phone: (512) 555-2376</p>
                <p>Email: Ereforce@outlook.com</p>
            </div>

            <div className="lg:col-span-3">
                <h4 className="font-bold text-blue-500 mb-4">Our Products</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-blue-600">Vita Renew</a>
                        <a href="#" className="hover:text-blue-600">TestoBites</a>
                        <a href="#" className="hover:text-blue-600">Audizen</a>
                    </div>
                    {/* Add more links as needed */}
                </div>
            </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
            <p className="mb-4 max-w-3xl mx-auto">These statements have not been evaluated by the Food and Drug Administration.</p>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <span>© 2025, Health Desk Clinic. All Rights Reserved.</span>
                <div className="flex gap-4">
                    <a href="#" className="hover:underline">Terms</a>
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
