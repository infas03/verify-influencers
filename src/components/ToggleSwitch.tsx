import React from "react";

type ToggleSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className="w-12 h-7 bg-gray-600 rounded-full peer-checked:bg-emerald-600 peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-2 after:rounded-full after:w-6 after:h-6 after:transition-all peer-focus:ring-2 peer-focus:ring-emerald-500"></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
