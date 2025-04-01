import { useState } from "react"; // Import React hook for state management

// ActionCardProps Interface for Login Card (reused as needed)
interface ActionCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}

// ActionCard component for reusable cards (updated for login)
function ActionCard({ title, description, bgColor, textColor }: ActionCardProps) {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bgColor} ${textColor} flex flex-col items-center text-center`}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
}

// Defining the Home component
export default function Home() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission to check password
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Mock password validation for illustration (replace with real API call)
    if (password === "securePassword") {
      // Redirect or show message if password is correct
      alert("Login successful! Redirecting to payment section...");
      window.location.href = "/payment"; // Example of redirect to the payment page
    } else {
      // Show error if password is incorrect
      setErrorMessage("Invalid password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-20 font-sans">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl font-bold text-gray-800">StrataLink</h1>
          </div>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Your comprehensive strata management portal for seamless property
            administration, maintenance coordination, and community engagement.
          </p>
        </header>

        {/* Login Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login to Access Payment Section</h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Login form */}
            <form onSubmit={handleLogin} className="flex flex-col items-center">
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                  required
                  placeholder="Enter password"
                />
              </div>
              <button type="submit" className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md">
                Login
              </button>
            </form>
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </div>
        </section>
      </main>
    </div>
  );
}
