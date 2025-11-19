import React from 'react';
import { CLIENTS } from '../constants';

const Clients = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-display font-bold text-charcoal mb-8">Our Valued Clients</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-20">
          We proudly serve businesses across textiles, jewelry, real estate, education, and retail.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {CLIENTS.map((client) => (
            <div key={client.id} className="p-8 bg-surface rounded-2xl flex flex-col items-center justify-center hover:shadow-md transition-all border border-gray-100">
              <div className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 mb-4">
                 {/* Placeholder for actual logo */}
                 <span className="font-bold text-xl opacity-50">{client.name}</span>
              </div>
              <h3 className="font-bold text-charcoal">{client.name}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;