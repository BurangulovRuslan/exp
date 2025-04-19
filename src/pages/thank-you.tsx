// Файл: pages/thank-you.tsx (Экран 12)
import { useEffect } from 'react';
import { useExperiment } from '../context/ExperimentContext';

export default function ThankYou() {
  const { exportToExcel, username } = useExperiment();

  // Экспорт результатов в Excel при загрузке страницы
  useEffect(() => {
    exportToExcel();
  }, [exportToExcel]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-50 p-4">
      <div className="twitter-container py-10 max-w-md text-center">
        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16 text-sky-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
        <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Спасибо за участие!</h1>
        <p className="text-lg text-gray-600 mb-6">Эксперимент завершен. Ваши ответы были сохранены.</p>
        <div className="twitter-card">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div>
              <span className="font-bold text-gray-900">{username || 'Участник'}</span>
              <span className="text-gray-500 text-sm ml-2">@completed</span>
            </div>
          </div>
          <p className="text-gray-800">Результаты вашего эксперимента были успешно сохранены в Excel-файл. Спасибо за ваш вклад в науку! 🔬🧠</p>
        </div>
      </div>
    </div>
  );
}