import React, { useState } from 'react';
import { WhatsAppIcon, TelegramIcon } from './Icons';

export const GroupFinder: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (platform: 'whatsapp' | 'telegram') => {
    if (!searchTerm.trim()) return;

    let query = '';
    if (platform === 'whatsapp') {
      query = `${searchTerm.trim()} "chat.whatsapp.com"`;
    } else {
      query = `${searchTerm.trim()} site:t.me`;
    }

    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg">
      <label htmlFor="group-search" className="block text-xl font-semibold mb-3 text-cyan-300">
        Buscador de Grupos
      </label>
      <p className="text-slate-400 mb-4 text-sm">
        Digite um tópico para encontrar grupos públicos de WhatsApp ou Telegram.
      </p>
      <input
        id="group-search"
        type="text"
        className="w-full p-3 bg-slate-900 border border-slate-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 placeholder-slate-500"
        placeholder="Ex: Cibersegurança, OSINT Brasil, Jogos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={() => handleSearch('whatsapp')}
          disabled={!searchTerm.trim()}
          className="flex items-center justify-center py-3 px-6 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-emerald-500"
        >
          <WhatsAppIcon className="w-5 h-5 mr-2" />
          Buscar no WhatsApp
        </button>
        <button
          onClick={() => handleSearch('telegram')}
          disabled={!searchTerm.trim()}
          className="flex items-center justify-center py-3 px-6 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500"
        >
          <TelegramIcon className="w-5 h-5 mr-2" />
          Buscar no Telegram
        </button>
      </div>
    </div>
  );
};