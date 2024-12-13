"use client";
import { useState, useEffect } from "react";

export default function Question_Six_One() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(() => {
    const savedOptions = localStorage.getItem("Question_6_1");
    return savedOptions ? savedOptions.split(",") : [];
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Сохраняем данные в localStorage при каждом изменении selectedOptions
    localStorage.setItem("Question_6_1", selectedOptions.join(","));
  }, [selectedOptions]);

  const handleOptionChange = (option: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(option)) {
        return prev.filter((item) => item !== option); // Убираем опцию, если она уже выбрана
      } else {
        return [...prev, option]; // Добавляем опцию, если она не выбрана
      }
      setIsSubmitted(false);
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        6.1. Урматсыздык менен болгон мамиле болсо, кандай түрү? (мисалдарды же жагдайларды тандаңыз)
      </h2>
      <div className="text-lg text-gray-700 mb-6 mt-8">
        {[
          "орой мамиле кылды",
          "көрмөксөнгө салды",
          "сөздү үздү",
          "сөз бербеди",
        ].map((option) => (
          <div key={option} className="flex items-center mb-2 mt-4">
            <input
              id={option}
              name="Question_6_1"
              type="checkbox"
              className="h-5 w-5 text-blue-600 focus:ring-0 border-2 border-gray-300 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 checked:bg-blue-600 checked:border-transparent"
              onChange={() => handleOptionChange(option)}
              checked={selectedOptions.includes(option)} // Проверяем, выбрана ли опция
            />
            <label htmlFor={option} className="ml-3 block text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>

      {/* Показываем ошибку, если ни одна опция не выбрана */}
      {isSubmitted && selectedOptions.length === 0 && (
        <div className="text-sm text-red-500 mt-2">Этот обязательный вопрос.</div>
      )}
    </div>
  );
}
