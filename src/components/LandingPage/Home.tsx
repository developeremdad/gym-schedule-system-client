import Link from "next/link";
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Gym</h1>
          <p className="text-lg mb-8">
            Join the best fitness community and achieve your goals with our top
            trainers and classes.
          </p>
          <Link href="/login">
            <button className="bg-gray-500 text-white px-8 py-3 rounded-full hover:bg-gray-600 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Personal Training</h3>
              <p>
                Get one-on-one attention and tailored workouts with our expert
                personal trainers.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Group Classes</h3>
              <p>
                Enjoy a variety of group fitness classes ranging from yoga to
                high-intensity interval training.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Nutritional Advice</h3>
              <p>
                Work with our nutritionists to create a diet plan that
                complements your fitness routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-500 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg mb-8">
            Sign up today and start your journey towards a healthier and
            stronger you!
          </p>
          <Link href="/register">
            <button className="bg-white text-gray-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
              Sign Up Now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Smart Gym. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
