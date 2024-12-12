"use client";
import { useState } from "react";

export default function Question_One({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>(() => {
    return localStorage.getItem("Question_1") || null;
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    setIsSubmitted(true);
    if (!selectedOption) {
      return;
    }
    localStorage.setItem("Question_1", selectedOption);
    onNext();
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        1. В качестве кого Вы обратились в суд?
      </h2>
      <div className="text-lg text-gray-700 mb-6 mt-8">
      {["Свидетель", "Посетитель (родственник, друг, сосед, коллега одной из сторон и др.)", "Сторона по делу (истец, ответчик, потерпевший, обвиняемый)", "Адвокат или представитель стороны"].map((option, index) => (
          <div key={option} className="flex items-center mb-2">
            <input
              id={option}
              name="source"
              type="radio"
              className="h-5 w-5 text-blue-600 focus:ring-0 border-2 border-gray-300 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 checked:bg-blue-600 checked:border-transparent"
              onChange={() => setSelectedOption(option)}
              checked={selectedOption === option}
            />
            <label htmlFor={option} className="ml-3 block text-gray-700">
              {[
                "Свидетель",
                "Посетитель (родственник, друг, сосед, коллега одной из сторон и др.)",
                "Сторона по делу (истец, ответчик, потерпевший, обвиняемый)",
                "Адвокат или представитель стороны",
              ][index]}
            </label>
          </div>
        ))}
        
      </div>
      {isSubmitted && !selectedOption && (
        <div className="text-sm text-red-500 mt-2">
          Этот обязательный вопрос.
        </div>
      )}
      <div className="flex justify-center mt-4 gap-4">
        <button
          type="button"
          onClick={onBack}
          className="outline-none w-28 bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-zinc-300 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Назад
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="outline-none w-28 bg-slate-800 text-white py-2 px-4 rounded-md hover:bg-zinc-300 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Далее
        </button>
      </div>
    </div>
  );
}
