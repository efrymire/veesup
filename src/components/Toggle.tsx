import type { Dispatch, SetStateAction } from "react";

export default function Toggle({ 
  options, 
  selected,
  onChange 
} : { 
  options: string[], 
  selected: string,
  onChange: Dispatch<SetStateAction<string>>
}) {
  const [left, right] = options;

  const handleToggle = () => {
    onChange(options.find(option => option !== selected) || left);
  };

  return (
    <button
      onClick={handleToggle}
      className={`flex items-center gap-2 px-2 py-1 rounded-full border border-gray-300 bg-gray-100`}
    >
      <span className={`text-sm font-medium ${selected === left ? "text-primary" : "text-primary opacity-20"}`}>
        {left}
      </span>

      <div
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-tertiary`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            selected === left ? "translate-x-1" : "translate-x-6"
          }`}
        />
      </div>

      <span className={`text-sm font-medium ${selected === right ? "text-primary" : "text-primary opacity-20"}`}>
        {right}
      </span>
    </button>
  );
}
