
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

const SocialMediaIcons = () => {
  return (
    <div className="grid grid-cols-5 gap-3 py-4">
      <Link
        to="https://www.facebook.com/4thpyramidd/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-5  justify-center w-9 h-9 bg-gray-400 text-white rounded-md hover:bg-blue-800 transition-colors duration-300">
        <Facebook className="w-6 h-6" />
      </Link>
      <Link
        to="https://x.com/4thpyarmid"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-5 w-9 h-9 bg-gray-400 text-white rounded-md hover:bg-black transition-colors duration-300">
        <X className="w-6 h-6" />
      </Link>
      <Link
        to="https://www.instagram.com/4th_pyramid1/?fbclid=IwAR0dUdL6WBnR1Cdz9i6QzCX1ecER0DbAe_CHLJ5-1IH-qTQpSDa7xfEp_50"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-5 w-9 h-9 bg-gray-400 text-white rounded-md hover:bg-pink-700 transition-colors duration-300">
        <Instagram className="w-6 h-6" />
      </Link>
      <Link
        to="https://www.linkedin.com/company/4thpyramid/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-5 w-9 h-9 bg-gray-400 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link
        to="https://www.youtube.com/channel/UCvYRfIrNonoZOIpFPVB9uBw/featured"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-5 w-9 h-9 bg-gray-400 text-white rounded-md hover:bg-red-800 transition-colors duration-300">
        <Youtube className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
