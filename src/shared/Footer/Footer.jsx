import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// import { cells } from "./useFooter";
import SocialMediaIcons from "../../shared/SocialMediaIcons";
import logoimg from "../../assets/logo.webp";
// footer images
import footer1 from "../../assets/footer/instagram1.webp";
import footer2 from "../../assets/footer/instagram2.webp";
import footer3 from "../../assets/footer/instagram3.webp";
import footer4 from "../../assets/footer/instagram4.webp";
import footer5 from "../../assets/footer/instagram5.webp";
import footer6 from "../../assets/footer/instagram6.webp";

import CellFooter from "../../components/Ui/CellFooter";
import {
  MapPin,
  Phone,
  Mail,
  Home,
  Clipboard,
  FileText,
  CheckCircle,
} from "lucide-react";

const cells = [
  { content: footer1 },
  { content: footer2 },
  { content: footer3 },
  { content: footer4 },
  { content: footer5 },
  { content: footer6 },
];
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200   footer">
        <div className="container  max-w-7xl max-h-full mx-auto md:px-18">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 pt-6 px-4">
            <div className="text-right px-3 py-2 ">
              <h4 className="text-xl font-bold   ">
                شَرِكَةُ
                <span className="text-primary shadow-3d px-1">
                  الْهَرَمِ الرَّابِعِ
                </span>
              </h4>
              <h5 className="shadow-md text-shadow hover:shadow-xl transition-all duration-500  text-xl  text-cyan-600 py-2">
                لِلِاسْتِشَارَاتِ الْهَنْدَسِيَّةِ
              </h5>
              <p className="text-md shadow-sm  my-4 py-5 ">
                نحن بناة تمكنت المواهب المشتركة لفريقنا من بناء وتصميم أكثر من
                500 مشروع للهندسة.
              </p>
              <SocialMediaIcons className="shadow-xl" />
            </div>
            <div className="text-right px-3 py-2  ">
              <h5 className="text-xl ps-6 text-shadow font-bold text-cyan-600 hover:text-cyan-500 hover:font-bold  hover:shadow-3d hover:shadow-cyan-500 transition-colors duration-200">
                <Link to="/contact">قائمة العناوين</Link>
              </h5>

              <div className="space-y-5 py-5 ">
                <Link
                  to="https://www.google.com/maps/search/%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+%D8%A8%D8%AD%D9%8A+%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D9%8A+%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%AD%D9%85%D8%B2%D8%A9+%D8%A8%D9%86+%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%A8+%D9%88%D9%81%D8%B1%D8%B9%D9%87+%D8%A8%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D9%88%D9%8A%D8%B9%D9%8A%D8%A9:+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D8%B9%D8%A8%D8%AF+%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2+%D9%85%D9%83%D8%AA%D8%A8+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9:+%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-7+%D8%B9%D9%85%D8%A7%D8%B1%D8%A7%D8%AA+%D8%A7%D9%84%D8%B4%D8%B1%D8%B7%D8%A9-%D8%AC%D8%B3%D8%B1+%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%B3%E2%80%AD/@25.2551439,27.9300571,7z?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  className="flex items-center hover:text-cyan-900  transition-colors duration-200 text-right "
                  target="_blank">
                  <MapPin className="w-8 h-8 text-gray-500 " />
                  <span className="ml-2 px-2">
                    المركز الرئيسي: مدينة الرياض _حي السويدي الغربي _شارع حمزه
                    بن عبد المطلب
                  </span>
                </Link>
                <Link
                  to="https://www.google.com/maps/search/++++++++++++++++++++%D9%88%D9%81%D8%B1%D8%B9%D9%87+%D8%A8%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D9%82%D9%88%D9%8A%D8%B9%D9%8A%D9%87:+%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%85%D9%84%D9%83+%D8%B9%D8%A8%D8%AF+%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%E2%80%AD/@24.067046,45.2454202,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                  className="flex items-center hover:text-cyan-900  transition-colors duration-200 text-right"
                  target="_blank">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 px-2">
                    وفرعه بمحافظة القويعيه: شارع الملك عبد العزيز
                  </span>
                </Link>
                <Link
                  to="tel:+966554183175"
                  target="_blank"
                  className="flex items-center hover:text-cyan-900  transition-colors duration-200 text-right">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <span className=" ml-2 px-2 ">السعودية: 0554183175</span>
                </Link>
                <Link
                  className="flex items-center hover:text-cyan-900  transition-colors duration-200 text-right"
                  to="mailto:contact@4thpyarmids.com">
                  <Mail className="w-5 h-5 text-gray-500 " />
                  <span className="ml-2 px-2">contact@4thpyarmids.com</span>
                </Link>
              </div>
            </div>
            <div className=" px-3  py-2 ">
              <h5 className="text-xl text-right ps-6 text-shadow font-bold text-cyan-600 hover:text-cyan-500 hover:font-bold  hover:shadow-3d hover:shadow-cyan-500 transition-colors duration-200">
                <Link to="/services"> خدماتنا</Link>
              </h5>
              <div className="space-y-5 py-5">
                <div className="flex items-center  text-right ">
                  <Home className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 px-2">
                    التصميم المعماري و التصميم الإنشائي
                  </span>
                </div>
                <div className="flex items-center  text-right">
                  <Clipboard className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 px-2">
                    إدارة المشاريع و العقود والمناقصات
                  </span>
                </div>
                <div className="flex items-center  text-right">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 px-2 ">
                    إعداد المخططات التنفيذية و المخططات الهندسية
                  </span>
                </div>
                <div className="flex items-center  text-right">
                  <CheckCircle className="w-5 h-5 text-gray-500" />
                  <span className="ml-2 lg:px-2 px-2">
                    الإشراف الهندسي وتنظيم عقود الإشراف
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right px-3 py-2">
              <h5 className="text-xl ps-6 text-shadow font-bold  text-cyan-600 text-right hover:text-cyan-500 hover:font-bold  hover:shadow-3d hover:shadow-cyan-500 transition-colors duration-200">
                <Link
                  to="https://www.instagram.com/4th_pyramid1/?fbclid=IwAR0dUdL6WBnR1Cdz9i6QzCX1ecER0DbAe_CHLJ5-1IH-qTQpSDa7xfEp_50"
                  target="_blank"
                  rel="noopener noreferrer">
                  انستجرام
                </Link>
              </h5>

              <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-0 my-5">
                {cells.map((cell, i) => (
                  <div
                    key={i}
                    className={cn(
                      "p-1 h-24 md:h-24 lg:h-28 rounded-lg aspect-w-1 aspect-h-1",
                      (i === 2 || i === 3) && "col-span-2 md:col-span-2"
                    )}>
                    <CellFooter content={cell.content} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-right  bg-gray-300 border-t-2 border-gray-400 px-4">
          <div className="container flex items-center justify-between max-w-5xl max-h-full mx-auto md:px-18">
            <p className="text-sm lg:text-lg text-gray-600 py-2">
              جميع الحقوق محفوظة © لشركة الْهَرَمِ الرَّابِعِ لِلِاسْتِشَارَاتِ
              الْهَنْدَسِيَّةِ
              {` ${new Date().getFullYear()}`}
            </p>

            <Link className="" to="/home">
              <img src={logoimg} alt="" className="w-24 h-20" />
            </Link>
          </div>
        </div>
        <p className="text-sm  text-center bg-gray-300 text-gray-700 pb-5 font-bold ">
          <span> This website was designed and developed by</span>
          <Link
            to="https://www.linkedin.com/in/asmaa-samir-698250266/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 Amiri-font cursor-pointer hover:text-blue-800 font-bold">
            <span className=" pl-2 hover:text-cyan-800 shadow-lg hover:shadow-gray-600 transition-all duration-300">
              Eng / Asmaa Samir
            </span>
          </Link>
          <span className=" px-1 text-cyan-600  hover:shadow-gray-600 transition-all duration-300">
            &
          </span>
          <Link
            to="https://www.linkedin.com/in/alaa-mahmoud-429812291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 Amiri-font cursor-pointer hover:text-blue-800 font-bold">
            <span className="hover:text-cyan-800 shadow-lg hover:shadow-gray-600 transition-all duration-300">
              Eng / Alaa Mohamed
            </span>
          </Link>
        </p>
      </footer>
    </>
  );
};

export default Footer;
