"use client";

import { useState } from "react"; // Import React hook for state management

interface ActionCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

function ActionCard({ title, description, bgColor, textColor }: ActionCardProps) {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor} ${textColor} flex flex-col items-center text-center`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-20 font-sans">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            {/* StrataLink Title */}
            <h1 className="text-4xl font-bold text-gray-800">StrataLink</h1>
            {/* Image beside the title */}
            <img
              src="/images/building.svg"  // Image path
              alt="Building"
              className="w-12 h-12"  // Adjust the size of the image
            />
          </div>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Your comprehensive strata management portal for seamless property
            administration, maintenance coordination, and community engagement.
          </p>
        </header>
      </main>
    </div>
  );
}
