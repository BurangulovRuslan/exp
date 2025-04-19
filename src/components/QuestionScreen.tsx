// Файл: components/QuestionScreen.tsx
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Question, Answers } from '../types';

interface QuestionScreenProps {
  questions: Question[];
  currentQuestion: number;
  setCurrentQuestion: (index: number) => void;
  answers: Answers;
  setAnswers: (answers: Answers) => void;
  nextPage: string;
  timerDuration?: number;
  setTimerEnded: (ended: boolean) => void;
}

export default function QuestionScreen({ 
  questions, 
  currentQuestion, 
  setCurrentQuestion, 
  answers, 
  setAnswers, 
  nextPage, 
  timerDuration = 1200000, // 20 минут в миллисекундах
  setTimerEnded 
}: QuestionScreenProps) {
  const router = useRouter();
  const [answer, setAnswer] = useState<string>('');
  const [charCount, setCharCount] = useState<number>(0);
  
  // Старт таймера при первой загрузке экрана
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerEnded(true);
      router.push(nextPage);
    }, timerDuration);

    return () => clearTimeout(timer);
  }, [nextPage, timerDuration, router, setTimerEnded]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Сохраняем ответ
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);
    
    // Проверяем, есть ли следующий вопрос
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
      setCharCount(0);
    } else {
      // Если вопросы закончились, переходим на следующую страницу
      router.push(nextPage);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setAnswer(value);
    setCharCount(value.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-50 p-4">
      <div className="w-full max-w-2xl">
        <div className="twitter-container">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-sky-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div>
                <span className="font-bold text-gray-900">Вопрос #{questions[currentQuestion]?.id}</span>
                <span className="text-gray-500 text-sm ml-2">@experiment</span>
              </div>
            </div>
            <div className="text-gray-500">
              <span className="text-sm">{currentQuestion + 1} из {questions.length}</span>
            </div>
          </div>
          
          <div className="mb-4 text-lg font-medium text-gray-900">
            {questions[currentQuestion]?.text}
          </div>
          
          <form onSubmit={handleSubmit} className="w-full">
            <div className="border border-gray-200 rounded-2xl p-4 bg-white mb-4">
              <textarea
                value={answer}
                onChange={handleTextChange}
                className="w-full h-36 resize-none border-none outline-none text-gray-800"
                placeholder="Введите ваш ответ здесь..."
              />
              
              <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                <div className="flex items-center space-x-1 text-sky-500">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-500">
                  {charCount} символов
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="twitter-btn"
              >
                {currentQuestion < questions.length - 1 ? 'Далее' : 'Подтвердить'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}