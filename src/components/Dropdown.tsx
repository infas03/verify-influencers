import React, { useState } from "react";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === selected);

  return (
    <div className="relative inline-block w-full text-white">
      <button
        className="w-full px-4 py-2 bg-gray-600/40 border border-gray-600 rounded-lg text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.label || "Select"}{" "}
        <span className="float-right">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 w-full bg-gray-600/40 border border-gray-600 rounded-lg mt-2 z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
