"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-20 font-sans">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            {/* StrataLink Title */}
            <h1 className="text-4xl font-bold text-gray-800">StrataLink</h1>
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
