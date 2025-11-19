import React, { useState } from 'react';
import { Sparkles, Send, Loader2, MessageSquare, X, Bot } from 'lucide-react';
import { getAiSeoAdvice } from '../services/geminiService';
import { ChatStatus } from '../types';

const AiAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<ChatStatus>(ChatStatus.IDLE);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus(ChatStatus.LOADING);
    const answer = await getAiSeoAdvice(query);
    setResponse(answer);
    setStatus(ChatStatus.SUCCESS);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white shadow-2xl rounded-2xl w-80 sm:w-96 mb-4 border border-gray-100 overflow-hidden animate-fade-in-up ring-1 ring-black/5">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center font-bold">
              <Bot className="w-5 h-5 mr-2" />
              <span>Alphalogic AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 rounded-full p-1 transition-colors">
               <X size={18} />
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-surface">
            {!response && status !== ChatStatus.LOADING && (
              <div className="text-center py-8 px-4">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-primary">
                  <Sparkles size={20} />
                </div>
                <p className="text-gray-600 text-sm">
                  Hi! I'm your digital assistant. Ask me about SEO, Rankings, or our Development services.
                </p>
              </div>
            )}
            
            {status === ChatStatus.LOADING && (
              <div className="flex justify-center items-center h-full text-primary">
                <Loader2 className="animate-spin w-8 h-8" />
              </div>
            )}

            {response && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white">
                   <Bot size={16}/>
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                  <p className="text-charcoal text-sm leading-relaxed">{response}</p>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleAsk} className="p-3 bg-white border-t border-gray-100 flex">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask something..."
              className="flex-grow text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-charcoal placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none mr-2 transition-all"
            />
            <button 
              type="submit" 
              disabled={status === ChatStatus.LOADING}
              className="bg-primary text-white rounded-lg p-2 hover:bg-primary-600 transition-colors shadow-sm disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary-600 text-white p-4 rounded-full shadow-xl shadow-primary/30 transition-all transform hover:scale-105 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AiAssistant;