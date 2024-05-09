import Image from "next/image";
import Forum from "./Components/Forum"
import Link from "next/link";

export default function Home() {
  return (
    <>
    {/* Hero Section */}
    <div className="landing-page">
      {/* Hero Section (you can add your own hero section here) */}

        <section className="m-auto py-56  ">
          <div className="max-w-7xl m-auto ">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Start your application here.</h2>
            <Forum/>
          </div>
        </section>

        {/* Call to action or other sections (you can add more content here) */}
     

      {/* Loan Types Section */}
      <section className="loan-types bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Loan Option</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="loan-card bg-white shadow-md rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">Personal Loans</h3>
              <p className="text-gray-700">Consolidate debt, cover expenses, and more.</p>
              <Link href="/loans/personal" className="btn mt-4 block px-4 py-2 bg-blue-500 text-white hover:bg-blue-700">
                Learn More
              </Link>
            </div>
            <div className="loan-card bg-white shadow-md rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">Auto Loans</h3>
              <p className="text-gray-700">Finance your new or used car with ease.</p>
              <Link href="/loans/auto" className="btn mt-4 block px-4 py-2 bg-blue-500 text-white hover:bg-blue-700">
                Learn More
              </Link>
            </div>
            <div className="loan-card bg-white shadow-md rounded-md p-4">
              <h3 className="text-xl font-bold mb-2">Home Loans</h3>
              <p className="text-gray-700">Purchase, refinance, or improve your dream home.</p>
              <Link href="/loans/home" className="btn mt-4 block px-4 py-2 bg-blue-500 text-white hover:bg-blue-700">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
   
  );
}
