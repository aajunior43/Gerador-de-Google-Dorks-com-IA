
import React from 'react';
import { LoadingSpinner, Wand } from './Icons';

interface QueryInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const QueryInput: React.FC<QueryInputProps> = ({ value, onChange, onSubmit, isLoading }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg">
    <label htmlFor="dork-query" className="block text-xl font-semibold mb-3 text-cyan-300">
      Seu Objetivo de Busca
    </label>
    <textarea
      id="dork-query"
      className="w-full h-32 p-3 bg-slate-900 border border-slate-600 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 resize-none placeholder-slate-500"
      placeholder="Ex: Encontrar planilhas com informações financeiras em sites governamentais..."
      value={value}
      onChange={onChange}
      disabled={isLoading}
    />
    <button
      onClick={onSubmit}
      disabled={isLoading}
      className="mt-4 w-full flex items-center justify-center py-3 px-6 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
    >
      {isLoading ? (
        <>
          <LoadingSpinner className="w-5 h-5 mr-2" />
          Gerando...
        </>
      ) : (
        <>
          <Wand className="w-5 h-5 mr-2" />
          Gerar Dork
        </>
      )}
    </button>
  </div>
);
