import React from "react";
import qrcodeImage from "../assets/image-qr-code.png";

export function Card() {
  return (
    <div className="bg-white rounded-lg px-4 pb-8 max-w-xs">
      <div className="flex flex-col items-center text-center font-outfit">
        <img
          src={qrcodeImage}
          alt="QR code image"
          className="max-h-sm max-w-sm w-full rounded-lg m-4"
        />

        <div className="px-4">
          <h1 className="text-header font-bold text-dark-blue m-2">
            Improve your front-end skills by building projects
            {/* Componente de um QR code */}
          </h1>
          <p className="text-paragraph text-grayish-blue font-regular">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
            {/* Treinando o uso do Tailwind CSS junto com React 👍 */}
          </p>
        </div>
      </div>
    </div>
  );
}
