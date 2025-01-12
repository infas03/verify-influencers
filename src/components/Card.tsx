import React from "react";

interface CardProps {
  value: string | number;
}

const Card: React.FC<CardProps> = ({ value }) => {
  return (
    <div className="border rounded-lg shadow px-4 py-1 w-fit text-center bg-gray-700 border-gray-800">
      <p className="text-sm font-normal text-gray-300">{value}</p>
    </div>
  );
};

export default Card;
