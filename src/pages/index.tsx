// Файл: pages/index.tsx (Экран 1)
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { useExperiment } from '../context/ExperimentContext';
import { experimentConditions } from '../utils/data';

export default function Home() {
  const router = useRouter();
  const { username, setUsername, condition, setCondition } = useExperiment();
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Пожалуйста, введите имя');
      return;
    }
    
    if (!condition) {
      setError('Пожалуйста, выберите условие эксперимента');
      return;
    }
    
    router.push('/instructions');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50 p-4">
      <div className="w-full max-w-md">
        <div className="twitter-container mb-6">
          <svg className="w-8 h-8 text-sky-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <h1 className="text-2xl font-bold mb-6 text-center text-sky-900">Психофизиологический эксперимент</h1>
          
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 font-medium text-gray-700">
                Имя пользователя
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="twitter-input"
                placeholder="Введите ваше имя"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">
                Условие эксперимента
              </label>
              {experimentConditions.map((option) => (
                <div key={option.id} className="mb-2 twitter-card">
                  <label className="flex items-center cursor-pointer">
                    <div className="relative w-5 h-5 mr-3">
                      <input
                        type="radio"
                        name="condition"
                        value={option.id}
                        checked={condition === option.id}
                        onChange={() => setCondition(option.id)}
                        className="opacity-0 absolute w-5 h-5"
                      />
                      <div className={`border-2 rounded-full w-5 h-5 ${condition === option.id ? 'border-sky-500' : 'border-gray-300'}`}>
                        {condition === option.id && <div className="bg-sky-500 rounded-full w-3 h-3 m-0.5"></div>}
                      </div>
                    </div>
                    <span className="text-gray-800">{option.label}</span>
                  </label>
                </div>
              ))}
            </div>
            
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            
            <button
              type="submit"
              className="twitter-btn w-full"
            >
              Перейти к тестированию
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}