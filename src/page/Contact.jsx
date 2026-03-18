import React from 'react';
import { Phone, Mail } from 'lucide-react';
import BreadCrump from '../components/BreadCrump';

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-12 font-sans">
      <BreadCrump />
      <div className="flex flex-col md:flex-row gap-8 mt-20 mb-35">
        <div className="w-full md:w-1/3 shadow-sm border border-gray-100 rounded-sm p-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-2 rounded-full text-white">
                <Phone size={20} fill="currentColor" />
              </div>
              <h3 className="font-bold text-lg">Call To Us</h3>
            </div>
            <div className="text-sm space-y-2">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-red-500 p-2 rounded-full text-white">
                <Mail size={20} />
              </div>
              <h3 className="font-bold text-lg">Write To Us</h3>
            </div>
            <div className="text-sm space-y-3">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 shadow-sm border border-gray-100 rounded-sm p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Your Name *" 
                className="w-full bg-gray-100 border-none p-3 rounded-sm text-sm focus:ring-1 focus:ring-red-500 outline-none"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email *" 
                className="w-full bg-gray-100 border-none p-3 rounded-sm text-sm focus:ring-1 focus:ring-red-500 outline-none"
                required
              />
              <input 
                type="tel" 
                placeholder="Your Phone *" 
                className="w-full bg-gray-100 border-none p-3 rounded-sm text-sm focus:ring-1 focus:ring-red-500 outline-none"
                required
              />
            </div>
            <textarea 
              placeholder="Your Message" 
              rows="8"
              className="w-full bg-gray-100 border-none p-3 rounded-sm text-sm focus:ring-1 focus:ring-red-500 outline-none resize-none"
            ></textarea>
            <div className="flex justify-end">
              <button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-sm transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
