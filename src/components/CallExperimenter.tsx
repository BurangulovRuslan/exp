// Файл: components/CallExperimenter.tsx
import { useRouter } from 'next/router';

interface CallExperimenterProps {
  nextPage: string;
}

export default function CallExperimenter({ nextPage }: CallExperimenterProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-50 p-4">
      <div className="twitter-container py-8">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-sky-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
        <div className="flex items-center justify-center mb-6">
          <div className="bg-gray-100 rounded-full p-3">
            <svg className="w-8 h-8 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">Позовите экспериментатора</h1>
        <div className="flex justify-center">
          <button
            onClick={() => router.push(nextPage)}
            className="twitter-btn"
          >
            Далее
          </button>
        </div>
      </div>
    </div>
  );
}
