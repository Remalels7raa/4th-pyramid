import { Disclosure } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { AlignRight, FileText } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import logoDark from "../../assets/logo.webp"
import "./Navbar.css"

const Navbar = () => {
  const navigation = [
    { name: "الرئيسية", to: "/", current: true },
    { name: "من نحن", to: "about", current: false },
    { name: "خدمتنا", to: "services", current: false },
    { name: "أعمالنا", to: "projects", current: false },
    { name: "تواصل معنا", to: "contact", current: false },
  ];

  return (
    <Disclosure
      as="nav"
      className="fixed w-full top-0 bg-gray-300 shadow-md shadow-gray-600 transition-colors duration-300 h-24 z-50">
      {({ open, close }) => (
        <>
          <div className="mx-auto lg:px-6">
            <div className="relative flex items-center justify-between h-full">
              <div className="absolute inset-y-0 right-0 flex justify-center items-center lg:hidden h-full">
                <Disclosure.Button className="relative inline-flex items-center justify-center mx-5 rounded-5 p-3 font-bold bg-gray-600 text-white hover:bg-gray-700 transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <AlignRight className="block h-6 w-6 font-extrabold" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-end lg:justify-between w-full">
                <Link
                  className="flex items-center justify-center navbar-brand logoimg"
                  to="/">
                  <img
                    src={logoDark}
                    alt="logo"
                    className="transition-all duration-300 h-24 md:h-24"
                  />
                </Link>

                <div className="hidden sm:ml-6 lg:block">
                  <div className="flex items-center space-x-4 py-2">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) =>
                          `text-black ${
                            isActive ? "active font-bold" : "font-bold"
                          } px-4 mx-2 md:mx-8 py-2 text-md transition-colors hover:text-orange-700 hover:font-bold duration-200`
                        }
                        aria-current={item.current ? "page" : undefined}>
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <Link
                    className="w-40 h-12 flex justify-center rounded-5 items-center shadow-lg shadow-zinc-700 transition-colors duration-200 bg-cyan-600 border-2 Amiri-font border-zinc-600 hover:bg-cyan-700 hover:border-zinc-700 text-gray-50 hover:text-white text-md font-extrabold"
                    to="/contact">
                    <span className="px-1"> طلب عرض سعر</span>
                    <FileText className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="flex flex-col items-start space-y-1 py-4 px-4 w-full bg-gray-300">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => close()} // إغلاق القائمة عند النقر
                  className={({ isActive }) =>
                    `text-right w-full px-4 py-2 text-md transition hover:text-orange-600 duration-200 text-black ${
                      isActive ? "active" : ""
                    }`
                  }
                  aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </NavLink>
              ))}
              <Link
                className="w-2/4 mx-auto rounded-5 shadow-lg shadow-zinc-500 transition-colors duration-200 my-2 py-2 bg-cyan-600 border-zinc-600 text-white text-center font-bold"
                to="/contact"
                onClick={() => close()} // إغلاق القائمة عند النقر
              >
                طلب عرض سعر
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
