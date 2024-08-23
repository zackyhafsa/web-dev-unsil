import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const SideNavbar = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-between py-10 relative">
      <div className="my-auto">
        <div className="w-1 h-10 bg-slate-100 mb-3"></div>
        <div className="w-1 h-10 bg-slate-500 mb-3"></div>
        <div className="w-1 h-10 bg-slate-500 mb-3"></div>
        <div className="w-1 h-10 bg-slate-500"></div>
      </div>
      <div className="text-white flex flex-col gap-4 absolute bottom-10">
        <FaFacebookF size={30} className="hover:text-primary ease-in-out duration-100" />
        <FaInstagram size={30} className="hover:text-primary ease-in-out duration-100" />
        <FaYoutube size={30} className="hover:text-primary ease-in-out duration-100" />
        <FaTiktok size={30} className="hover:text-primary ease-in-out duration-100" />
      </div>
    </div>
  );
};

export default SideNavbar;
