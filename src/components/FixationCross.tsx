// Файл: components/FixationCross.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface FixationCrossProps {
  nextPage: string;
  duration?: number;
}

export default function FixationCross({ nextPage, duration = 180000 }: FixationCrossProps) {
  const router = useRouter();
  const [ , setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(nextPage);
    }, duration);

    const interval = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1000));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [nextPage, duration, router]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-sky-50 fixed top-0 left-0">
      <div className="text-8xl font-bold text-sky-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">+</div>
    </div>
  );
}