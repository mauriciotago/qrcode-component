import React from "react";
import qrcodeImage from "../assets/image-qr-code.png";

export function Card() {
  return (
    <div className="flex flex-col items-center text-center justify-center w-80 m-auto bg-white rounded-lg p-8 border-2">
      <img
        src={qrcodeImage}
        alt="QR code image"
        className="mb-4 w-max rounded-lg"
      />

      <h1 className="font-bold mb-3 text-dark-blue text-header">
        Componente de um QR code
      </h1>
      <p className="font-regular text-grayish-blue text-paragraph">
        Treinando o uso do Tailwind CSS junto com React 👍
      </p>
    </div>
  );
}
