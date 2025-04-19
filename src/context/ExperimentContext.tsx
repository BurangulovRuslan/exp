// Файл: context/ExperimentContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ExperimentContextType, Answers } from '../types';

const ExperimentContext = createContext<ExperimentContextType | undefined>(undefined);

export const useExperiment = (): ExperimentContextType => {
  const context = useContext(ExperimentContext);
  if (context === undefined) {
    throw new Error('useExperiment must be used within an ExperimentProvider');
  }
  return context;
};

interface ExperimentProviderProps {
  children: ReactNode;
}

export const ExperimentProvider = ({ children }: ExperimentProviderProps) => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const [answers1, setAnswers1] = useState<Answers>({});
  const [answers2, setAnswers2] = useState<Answers>({});
  const [currentQuestion1, setCurrentQuestion1] = useState<number>(0);
  const [currentQuestion2, setCurrentQuestion2] = useState<number>(0);
  const [timerEnded1, setTimerEnded1] = useState<boolean>(false);
  const [timerEnded2, setTimerEnded2] = useState<boolean>(false);

  const exportToExcel = (): void => {
    // Подготовка данных для экспорта
    const data = [
      {
        Username: username,
        Condition: condition,
        ...Object.keys(answers1).reduce<Record<string, string>>((acc, key) => {
          acc[`Question1_${key}`] = answers1[Number(key)];
          return acc;
        }, {}),
        ...Object.keys(answers2).reduce<Record<string, string>>((acc, key) => {
          acc[`Question2_${key}`] = answers2[Number(key)];
          return acc;
        }, {})
      }
    ];

    // Создаем новую книгу Excel
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");

    // Сохранение файла
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
    // Генерация имени файла с датой и временем
    const fileName = `experiment_results_${username}_${new Date().toISOString().slice(0,19).replace(/:/g,'-')}.xlsx`;
    saveAs(dataBlob, fileName);
  };

  const value: ExperimentContextType = {
    username,
    setUsername,
    condition,
    setCondition,
    answers1,
    setAnswers1,
    answers2,
    setAnswers2,
    currentQuestion1,
    setCurrentQuestion1,
    currentQuestion2,
    setCurrentQuestion2,
    timerEnded1,
    setTimerEnded1,
    timerEnded2,
    setTimerEnded2,
    exportToExcel
  };

  return (
    <ExperimentContext.Provider value={value}>
      {children}
    </ExperimentContext.Provider>
  );
};
