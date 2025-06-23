import { useState } from "react";
import type { QuizData, QuizOption } from "@/types/quiz";
import QuizStep from "./QuizStep";
import Result from "./Result";

import "./quiz.css";

interface QuizProps {
  data: QuizData;
  setStartQuiz: (value: boolean) => void;
}

export function Quiz({ data, setStartQuiz }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<(QuizOption | null)[]>(
    Array(data.questions.length).fill(null)
  );
  const [isRejected, setIsRejected] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: QuizOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = option;
    setAnswers(updatedAnswers);

    if (option.isRejection) {
      setIsRejected(true);
      setShowResult(true);
    } else if (currentStep === data.questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setStartQuiz(false);
    }
  };

  if (showResult) {
    return <Result isRejected={isRejected} />;
  }

  return (
    <div className="quiz">
      <div className="min-h-screen flex items-center justify-center bg-white p-6 w-full">
        <QuizStep
          step={currentStep + 1}
          totalSteps={data.questions.length}
          question={data.questions[currentStep]}
          selected={answers[currentStep]}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      </div>
    </div>
  );
}
