import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bottom-0 h-10 flex justify-between items-center text-[#9A9090]">
      <div>
        <p className="">© {new Date().getFullYear()}. All rights reserved.</p>
      </div>
      <div className="flex space-x-4">
        <div className="hover:text-black hover:scale-125 transition-colors duration-300">
          <FaXTwitter />
        </div>
        <div>
          <FaFacebook className="hover:text-blue-600 hover:scale-125 transition-colors duration-300" />
        </div>
        <div>
          <FaInstagram className="hover:text-pink-500 hover:scale-125 transition-colors duration-300" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
