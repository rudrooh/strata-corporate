import { FaBuilding as BuildingIcon } from "react-icons/fa"; // Importing the building icon from react-icons
import { FaMoneyBillWave as PaymentIcon } from "react-icons/fa"; // Importing payment icon

interface ActionCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
  bgColor: string;
  textColor: string;
}

// Retrieve payment URL from environment variables
const PAYMENT_URL = process.env.NEXT_PUBLIC_PAYMENT_URL || "/payments";

// ActionCard component for reusable quick action cards
function ActionCard({ icon, title, description, href, bgColor, textColor }: ActionCardProps) {
  return (
    <a href={href} className={`p-6 rounded-lg shadow-md ${bgColor} ${textColor} flex flex-col items-center text-center`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
    </a>
  );
}

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

        {/* Quick Actions Section */}
        <section className="mb-16">
          {/* Section for quick actions with margin at the bottom */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
          {/* Subheading for quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Grid layout for action cards */}
            <ActionCard
              icon={<PaymentIcon className="w-8 h-8" />}
              title="Pay Fees"
              description="View and pay your strata levies online"
              href={PAYMENT_URL}
              bgColor="bg-green-100"
              textColor="text-green-600"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
