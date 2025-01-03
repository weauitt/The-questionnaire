import { useQuestionStorage } from "@/app/components/Hooks/useQuestionStorage";

interface Option {
  id: number;
  text: string;
}

interface Question {
  id: number;
  text: string;
  is_required: boolean;
  options: Option[];
}

interface Question_Nine_Props {
  questions: Question[];
}

export default function Question_Nine({ questions }: Question_Nine_Props) {
  const { otherText, handleOptionChange, handleOtherTextChange, selectedOption } = useQuestionStorage({
    localStorageKey: "Question_9",
  });
  
  const question = questions.find((q) => q.id === 10);

  if (!question) {
    return <div>Вопрос не найден</div>;
  }

  return (
    <section className="p-6 P-515">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 textSizeTittle">{question.text}</h2>
        <div className="text-gray-700 mb-6 mt-8 textSizeOptions">
          {question.options.map((option: Option, i) => (
            <div key={i} className="flex items-center mb-2 mt-4">
              <input
                id={`optionNine-${i}`}
                name="Question_9"
                type="radio"
                className="h-5 w-5 RadioSize text-blue-600 focus:ring-0 border-2 border-gray-300 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
                onChange={() => handleOptionChange(option.text)}
                checked={selectedOption === option.text}
              />
              <label htmlFor={`optionNine-${i}`} className="ml-3 block text-gray-700">
                {option.text}
              </label>
            </div>
          ))}
        </div>
      </div>

      {selectedOption === "Другое:" && (
        <div className="mt-4 transition-all duration-300">
          <input
            type="text"
            value={otherText}
            onChange={handleOtherTextChange}
            className="w-full border-0 border-b-2 InputAnotherSizeBlankTwo border-gray-300 focus:border-blue-500 focus:ring-0 text-gray-700 outline-none transition-all duration-300"
            placeholder="Введите ваш ответ..."
          />
        </div>
      )}

    </section>
  );
}
