import LandingPage from "@/components/LandingPage/Home";
import Navbar from "@/components/shared/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Home;
