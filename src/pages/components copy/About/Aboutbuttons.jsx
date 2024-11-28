import { ArrowLeft, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
const Aboutbuttons = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Aboutbuttons */}
      <div className="flex flex-col md:flex-row justify-center items-center py-10  gap-6 px-5">
        <Link
          onClick={() => navigate("/about")}
          className="w-full md:w-60 py-3 px-2 rounded-5 bg-cyan-500 border-2  border-zinc-600 hover:bg-cyan-600  Amiri-font text-white text-xl font-bold flex justify-center items-center shadow-lg shadow-zinc-500 transition-colors duration-200">
          <ArrowLeft className="mr-2" />
          المزيد عنا
        </Link>
        <Link
          to="https://www.canva.com/design/DAGUYXJhvBs/jZ-V4h5elBxVZjvYh-xXag/edit"
          target="_blank"
          className="w-full md:w-60 rounded-5 py-3 px-2 bg-zinc-300 hover:bg-zinc-500 border-2 border-cyan-600 Amiri-font text-black hover:text-white text-xl font-bold flex justify-center items-center shadow-lg shadow-zinc-500 transition-colors duration-200">
          <FileText className="mr-2" /> بروفايل الشركة
        </Link>
      </div>
    </>
  );
};

export default Aboutbuttons;
