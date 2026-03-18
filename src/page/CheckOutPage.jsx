import React from 'react';

const CheckoutPage = () => {



  return (
    <div className="max-w-6xl mx-auto px-4 md:px-12 py-12 font-sans">
      <h1 className="text-3xl font-medium mb-10">Billing Details</h1>
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-1/2 space-y-6">
          {/* {.map((field, index) => (
            <div key={index} className="space-y-2">
              <label className="text-gray-400 text-sm">{field.label}</label>
              <input 
                type={field.type}
                className="w-full bg-[#F5F5F5] border-none rounded-sm p-3 focus:ring-1 focus:ring-red-500 outline-none transition-all"
              />
            </div>
          ))} */}
          <label className="flex items-center gap-3 cursor-pointer group pt-2">
            <input 
              type="checkbox" 
              className="w-5 h-5 accent-[#DB4444] rounded-sm"
              defaultChecked
            />
            <span className="text-sm">Save this information for faster check-out next time</span>
          </label>
        </div>
        <div className="w-full lg:w-1/3 lg:ml-auto space-y-8 pt-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-sm">🎮</div>
                <span className="text-sm font-medium">LCD Monitor</span>
              </div>
              <span className="text-sm font-medium">$650</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-sm">🕹️</div>
                <span className="text-sm font-medium">HI Gamepad</span>
              </div>
              <span className="text-sm font-medium">$1100</span>
            </div>
          </div>
          <div className="space-y-4 border-b border-gray-200 pb-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-medium text-lg pt-2">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="w-5 h-5 accent-black" />
                <span className="text-sm">Bank</span>
              </div>
              <div className="flex gap-2 opacity-70">
                <span className="text-xs border px-1 rounded">Bkash</span>
                <span className="text-xs border px-1 rounded">Visa</span>
                <span className="text-xs border px-1 rounded">Mastercard</span>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="payment" className="w-5 h-5 accent-black" defaultChecked />
              <span className="text-sm">Cash on delivery</span>
            </label>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Coupon Code"
                className="flex-1 border border-black rounded-sm p-3 text-sm focus:outline-none"
              />
              <button className="bg-[#DB4444] text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-red-600 transition-colors">
                Apply Coupon
              </button>
            </div>
            <button className="w-full md:w-auto bg-[#DB4444] text-white px-12 py-4 rounded-sm font-medium hover:bg-red-600 transition-colors">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
