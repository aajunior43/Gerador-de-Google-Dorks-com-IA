import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { QueryInput } from './components/QueryInput';
import { ResultDisplay } from './components/ResultDisplay';
import { generateDorkQuery } from './services/geminiService';
import { LoadingSpinner, AlertTriangle } from './components/Icons';
import { GroupFinder } from './components/GroupFinder';

const App: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [generatedDork, setGeneratedDork] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateDork = useCallback(async () => {
    if (!userInput.trim()) {
      setError('Por favor, insira uma descrição do que você deseja encontrar.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedDork('');

    try {
      const dork = await generateDorkQuery(userInput);
      setGeneratedDork(dork);
    } catch (err) {
      setError('Falha ao gerar o dork. Por favor, verifique sua chave de API e tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [userInput]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans antialiased">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <main className="mt-8 max-w-3xl mx-auto space-y-8">
          <QueryInput
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onSubmit={handleGenerateDork}
            isLoading={isLoading}
          />
          
          {isLoading && (
            <div className="flex justify-center items-center p-6 bg-slate-800 rounded-lg">
              <LoadingSpinner className="w-8 h-8 text-cyan-400" />
              <p className="ml-4 text-lg">Gerando dork com IA...</p>
            </div>
          )}

          {error && (
            <div className="flex items-center p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
              <AlertTriangle className="w-6 h-6 mr-3" />
              <span>{error}</span>
            </div>
          )}

          {generatedDork && !isLoading && (
            <ResultDisplay dork={generatedDork} />
          )}

          <hr className="border-slate-700" />

          <GroupFinder />

        </main>

        <footer className="text-center text-slate-500 mt-12">
          <p>Powered by Google Gemini</p>
        </footer>
      </div>
    </div>
  );
};

export default App;