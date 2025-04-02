"use client";

import Image from "next/image";

export default function Home() {
  // Fetch the API URL from the environment variable
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-20 font-sans">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            {/* StrataLink Title */}
            <h1 className="text-4xl font-bold text-gray-800">StrataLink</h1>
            {/* Image beside the title */}
            <Image
              src="/images/building.svg"  // Image path
              alt="Building"
              width={48} 
              height={48} 
            />
          </div>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Your comprehensive strata management portal for seamless property
            administration, maintenance coordination, and community engagement.
          </p>
        </header>

        {/* Example display of the API URL */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            The API URL for your service is: <strong>{apiUrl}</strong>
          </p>
        </div>
      </main>
    </div>
  );
}
