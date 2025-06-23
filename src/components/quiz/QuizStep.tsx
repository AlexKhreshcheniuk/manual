import type { QuizOption, QuizQuestion } from "../../types/quiz";

interface QuizStepProps {
  step: number;
  totalSteps: number;
  question: QuizQuestion;
  selected: QuizOption | null;
  onAnswer: (option: QuizOption) => void;
  onBack: () => void;
}

export default function QuizStep({
  step,
  totalSteps,
  question,
  selected,
  onAnswer,
  onBack,
}: QuizStepProps) {
  return (
    <div className="max-w-2xl w-full">
      <div className="mb-6 text-gray-800">
        <h2 className="text-lg font-semibold mb-2">
          Question {step} of {totalSteps}
        </h2>
        <p className="text-2xl font-bold">{question.question}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            className={`p-4 border rounded-md text-left transition hover:bg-gray-100 ${
              selected?.value === option.value
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
            onClick={() => onAnswer(option)}
            dangerouslySetInnerHTML={{ __html: option.display }}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="text-sm underline text-gray-600 hover:text-black"
        >
          Back
        </button>
      </div>
    </div>
  );
}
