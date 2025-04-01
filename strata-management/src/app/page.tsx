import { FaBuilding as BuildingIcon } from "react-icons/fa"; // Importing the building icon from react-icons
import { FaTools as MaintenanceIcon } from "react-icons/fa"; // Importing the maintenance icon
import { FaMoneyBillWave as PaymentIcon } from "react-icons/fa"; // Importing the payment icon

// Defining the Home component, which is the main part of the application
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-20 font-sans">
      {/* Outer div with minimum height, background color, padding, and font style */}
      <main className="max-w-4xl mx-auto">
        {/* Main content area with max width and centered */}

        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          {/* Header with flexbox for vertical alignment */}
          <div className="flex items-center gap-4 mb-6">
            {/* Flex container for icon and title */}
            <BuildingIcon className="w-12 h-12 text-blue-600" />
            {/* Building icon with size and color */}
            <h1 className="text-4xl font-bold text-gray-800">StrataLink</h1>
            {/* Main title with size and color */}
          </div>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            {/* Description paragraph with styling */}
            Your comprehensive strata management portal for seamless property
            administration, maintenance coordination, and community engagement.
          </p>
        </header>
      </main>
    </div>
  );
}
