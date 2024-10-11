import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="bg-gray-800 text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Gym</h1>
          <p className="text-lg mb-8">
            Join the best fitness community and achieve your goals with our top
            trainers and classes.
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full hover:bg-yellow-600 transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-gray-900">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/feature1.png"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Top Trainers</h3>
              <p>
                Our certified trainers will help you achieve your fitness goals
                with personalized training plans.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/feature2.png"
                alt="Feature 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
              <p>
                We provide state-of-the-art gym equipment to ensure the best
                workout experience.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/images/feature3.png"
                alt="Feature 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedules</h3>
              <p>
                Our gym offers flexible class schedules to fit into your busy
                lifestyle.
              </p>
            </div>
          </div>
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
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg mb-8">
            Sign up today and start your journey towards a healthier and
            stronger you!
          </p>
          <button className="bg-white text-yellow-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-all">
            Sign Up Now
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Gym Landing Page. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
