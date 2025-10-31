
import React from 'react';
import { SearchCode } from './Icons';

export const Header: React.FC = () => (
  <header className="text-center">
    <div className="flex items-center justify-center gap-4">
      <SearchCode className="w-12 h-12 text-cyan-400" />
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
        Gerador de Google Dorks com IA
      </h1>
    </div>
    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
      Descreva o que você quer encontrar e a IA criará um termo de pesquisa avançado para o Google.
    </p>
  </header>
);
