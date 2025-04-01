import { FaBuilding as BuildingIcon } from "react-icons/fa";
import { FaMoneyBillWave as PaymentIcon } from "react-icons/fa"; // Importing icons from react-icons library

// ActionCard component that was being used but not defined
const ActionCard = ({ icon, title, description, href, bgColor, textColor }) => {
  return (
    <a 
      href={href} 
      className={`block p-6 rounded-lg shadow-sm ${bgColor} hover:shadow-md transition-shadow`}
    >
      <div className={`${textColor} mb-3`}>{icon}</div>
      <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

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

        {/* Quick Actions Section - Fixed placement and syntax */}
        <section className="mb-16">
          {/* Section for quick actions with margin at the bottom */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
          {/* Subheading for quick actions*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Grid layout for action cards*/}
            <ActionCard
              icon={<PaymentIcon className="w-8 h-8" />}
              title="Pay Fees"
              description="View and pay your strata levies online"
              href="/payments"
              bgColor="bg-green-100"
              textColor="text-green-600"
            />
            {/* You can add more ActionCard components here as needed */}
          </div>
        </section>
      </main>
    </div>
  );
}