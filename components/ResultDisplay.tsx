import React, { useState, useCallback } from 'react';
import { Copy, ExternalLink } from './Icons';

interface ResultDisplayProps {
  dork: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ dork }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(dork);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [dork]);

  const handleSearch = () => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(dork)}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 animate-fade-in">
      <h3 className="text-xl font-semibold mb-3 text-cyan-300">Dork Gerado pela IA</h3>
      <div className="relative bg-slate-900 p-4 rounded-md font-mono text-teal-300 text-lg border border-slate-600">
        <p className="break-words pr-12">{dork}</p>
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={handleCopy}
            title={copied ? 'Copiado!' : 'Copiar'}
            className="p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors"
          >
            <Copy className="w-5 h-5 text-slate-300" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleSearch}
          className="w-full py-2 px-4 bg-slate-600 hover:bg-slate-500 text-white font-semibold rounded-md transition-colors flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Buscar no Google
        </button>
      </div>
    </div>
  );
};
