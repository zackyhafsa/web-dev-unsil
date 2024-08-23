import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import SideNavbar from "./Side";

const Hero = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="bg-[url('/hero-bg.png')] bg-center bg-no-repeat bg-cover h-screen w-full flex items-center">
        <div className="p-11 bg-gradient-to-b from-[#01A9C680] to-[#0D0D1480] h-screen hidden md:flex items-center">
          <SideNavbar />
        </div>
        <div>
          <h1 className="text-6xl uppercase ml-3 font-extrabold text-primary">
            Majestic <span className="block text-white">Majalengka</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
