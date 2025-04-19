// Файл: pages/questions-2.tsx (Экран 9)
import { useExperiment } from '../context/ExperimentContext';
import QuestionScreen from '../components/QuestionScreen';
import { questions2 } from '../utils/data';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Questions2() {
  const router = useRouter();
  const { 
    currentQuestion2, 
    setCurrentQuestion2, 
    answers2, 
    setAnswers2, 
    timerEnded2, 
    setTimerEnded2 
  } = useExperiment();

  // Перенаправление, если таймер истек
  useEffect(() => {
    if (timerEnded2) {
      router.push('/call-experimenter-4');
    }
  }, [timerEnded2, router]);

  return (
    <QuestionScreen
      questions={questions2}
      currentQuestion={currentQuestion2}
      setCurrentQuestion={setCurrentQuestion2}
      answers={answers2}
      setAnswers={setAnswers2}
      nextPage="/call-experimenter-4"
      setTimerEnded={setTimerEnded2}
    />
  );
}