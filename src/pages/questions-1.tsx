// Файл: pages/questions-1.tsx (Экран 5)
import { useExperiment } from '../context/ExperimentContext';
import QuestionScreen from '../components/QuestionScreen';
import { questions1 } from '../utils/data';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Questions1() {
  const router = useRouter();
  const { 
    currentQuestion1, 
    setCurrentQuestion1, 
    answers1, 
    setAnswers1, 
    timerEnded1, 
    setTimerEnded1 
  } = useExperiment();

  // Перенаправление, если таймер истек
  useEffect(() => {
    if (timerEnded1) {
      router.push('/call-experimenter-2');
    }
  }, [timerEnded1, router]);

  return (
    <QuestionScreen
      questions={questions1}
      currentQuestion={currentQuestion1}
      setCurrentQuestion={setCurrentQuestion1}
      answers={answers1}
      setAnswers={setAnswers1}
      nextPage="/call-experimenter-2"
      setTimerEnded={setTimerEnded1}
    />
  );
}
