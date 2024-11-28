import React, { memo } from "react";
import { clientsImage } from "./clientsImages";
import { Link } from "react-router-dom";
import ClientsSeo from "./ClientsSeo";
import CallMe from "@/shared/CallMe";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// مكون عرض العميل (مقترح)
const ClientCard = memo(({ link, src, index, alt }) => (
  <Link
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block transform transition duration-300 w-full h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg shadow-lg hover:scale-105">
    <LazyLoadImage
      src={src}
      alt={alt || `Logo of client ${index + 1}`}
      className="w-full h-full object-contain"
      effect="blur"
      placeholderSrc="/path/to/low-res-placeholder.jpg" // صورة منخفضة الدقة للتحميل
      width="100%"
      height="100%"
      onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")} // صورة احتياطية في حال فشل التحميل
    />
  </Link>
));

const Clients = () => {
  return (
    <>
      <ClientsSeo />
      <div className="p-8 bg-gray-100 text-center">
        <h4 className="text-2xl font-bold text-center my-6">عملائنا</h4>
        {/* <div className="flex Amiri-font items-center justify-center">
          <h4 className="text-md border-b-2 border-sky-600 rounded-s-xl rounded-e-xl sm:text-lg lg:text-2xl font-semibold text-sky-600">
            اتصل بنا:
          </h4>
          <CallMe />
        </div> */}
        <p className="text-md sm:text-lg lg:w-2/3 mx-auto leading-8 text-md font-normal my-2 py-2 lg:px-10 text-gray-600">
          على مر السنوات الماضية، كان لنا شرف العمل مع مجموعة مميزة من الشركات
          الرائدة، حيث ساهمنا معًا في إنجاز مشاريع كبيرة ومؤثرة تعكس مستوى عالٍ
          من الثقة المتبادلة وتوافق الرؤى بيننا وبين شركائنا في النجاح.{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-10">
          {clientsImage.map((client, index) => (
            <ClientCard
              key={index}
              link={client.link}
              src={client.src}
              index={index}
              alt={client.alt} // يمكنك إضافة alt في ملف clientsImages
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
