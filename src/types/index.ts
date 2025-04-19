// Файл: types/index.ts
export interface Condition {
    id: string;
    label: string;
  }
  
  export interface Question {
    id: number;
    text: string;
  }
  
  export interface Answers {
    [key: number]: string;
  }
  
  export interface ExperimentContextType {
    username: string;
    setUsername: (name: string) => void;
    condition: string;
    setCondition: (condition: string) => void;
    answers1: Answers;
    setAnswers1: (answers: Answers) => void;
    answers2: Answers;
    setAnswers2: (answers: Answers) => void;
    currentQuestion1: number;
    setCurrentQuestion1: (index: number) => void;
    currentQuestion2: number;
    setCurrentQuestion2: (index: number) => void;
    timerEnded1: boolean;
    setTimerEnded1: (ended: boolean) => void;
    timerEnded2: boolean;
    setTimerEnded2: (ended: boolean) => void;
    exportToExcel: () => void;
  }