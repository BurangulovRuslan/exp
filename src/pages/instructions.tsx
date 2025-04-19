// Файл: pages/instructions.tsx (Экран 2)
import { useRouter } from 'next/router';
import { useExperiment } from '../context/ExperimentContext';
import { instructions } from '../utils/data';

export default function Instructions() {
  const router = useRouter();
  const { condition, username } = useExperiment();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50 p-4">
      <div className="w-full max-w-2xl">
        <div className="twitter-container">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div>
              <span className="font-bold text-gray-900">Инструкция</span>
              <span className="text-gray-500 text-sm ml-2">@{username || 'participant'}</span>
            </div>
          </div>
          
          <div className="mb-8 text-lg text-gray-800 p-4 bg-gray-50 rounded-xl border border-gray-100">
            <p>{instructions[condition]}</p>
          </div>
          
          <div className="flex justify-end">
            <button
              onClick={() => router.push('/fixation-cross-1')}
              className="twitter-btn"
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
