import Image from "next/image";
import React from "react";

interface CardProps {
  text: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ text, imageUrl }) => {
  return (
    <div className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300 cursor-pointer">
      <p className="font-medium">{text}</p>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Task Illustration"
          className="mt-2 rounded w-full h-auto"
        />
      )}
    </div>
  );
};

export default Card;
