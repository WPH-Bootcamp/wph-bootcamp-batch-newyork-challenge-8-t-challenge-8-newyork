import { useState } from 'react';

export interface StepItem {
  title: string;
  desc: string;
}
export const useProcessTimeLine = (initialSteps: StepItem[]) => {
  const [openIndex, setOpenIndex] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (openIndex.includes(index)) {
      setOpenIndex(openIndex.filter((i) => i !== index));
    } else {
      setOpenIndex([...openIndex, index]);
    }
  };

  const isStepOpen = (index: number) => openIndex.includes(index);

  // Garis di bawah lingkaran 'index' akan menyala menuju 'index + 1'
  // ketika accordion di bawahnya (index + 1) di-klik/terbuka
  const isLineActive = (index: number) => {
    return openIndex.includes(index + 1);
  };

  return {
    steps: initialSteps,
    toggleAccordion,
    isStepOpen,
    isLineActive,
  };
};




