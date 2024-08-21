import Image from "next/image";
import Logo from "../../public/logo.png";

const SideNavbar = () => {
  return (
    <div className="h-screen bg-red-50">
      <div>
        <Image src={Logo} />
      </div>
      <div>
        <span className="w-0.5 h-8"></span>
      </div>
    </div>
  );
};

export default SideNavbar;
