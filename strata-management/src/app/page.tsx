import Image from "next/image";
import { FaBuilding as BuildingIcon } from 'react-icons/fa';
import { FaTools as MaintenanceIcon } from 'react-icons/fa';
import { FaMoneyBillWave as PaymentIcon } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 pb-20 font-sans">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-4 mb-6">
            <BuildingIcon className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">StrataLink</h1>
          </div>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Your comprehensive strata management portal for seamless property administration, 
            maintenance coordination, and community engagement.
          </p>
        </header>

        {/* Quick Actions Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ActionCard 
              icon={<MaintenanceIcon className="w-8 h-8" />}
              title="Report Maintenance"
              description="Submit a new maintenance request for your property"
              href="/maintenance"
              bgColor="bg-blue-100"
              textColor="text-blue-600"
            />
            <ActionCard 
              icon={<PaymentIcon className="w-8 h-8" />}
              title="Pay Fees"
              description="View and pay your strata levies online"
              href="/payments"
              bgColor="bg-green-100"
              textColor="text-green-600"
            />
            <ActionCard 
              icon={<BuildingIcon className="w-8 h-8" />}
              title="Committee Portal"
              description="Access committee tools and documents"
              href="/committee"
              bgColor="bg-purple-100"
              textColor="text-purple-600"
            />
          </div>
        </section>

        {/* Announcements Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Community Announcements</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <Announcement 
                title="Annual General Meeting"
                date="May 15, 2024"
                content="The AGM will be held in the community lounge at 7pm. Please RSVP by May 10."
              />
              <Announcement 
                title="Pool Maintenance"
                date="April 22-24, 2024"
                content="The swimming pool will be closed for annual maintenance during these dates."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-gray-600 mb-6">Our strata manager is available Monday-Friday, 9am-5pm</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            Contact Strata Manager
          </button>
        </section>
      </main>

      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>© 2024 StrataLink Property Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Reusable Action Card Component
function ActionCard({ icon, title, description, href, bgColor, textColor }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <a 
      href={href}
      className={`${bgColor} p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
    >
      <div className={`${textColor} mb-4`}>{icon}</div>
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
}

// Reusable Announcement Component
function Announcement({ title, date, content }: {
  title: string;
  date: string;
  content: string;
}) {
  return (
    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );}