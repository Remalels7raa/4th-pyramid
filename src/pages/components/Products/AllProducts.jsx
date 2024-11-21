import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "react-responsive-pagination";
import { imageObjects } from "./imageObjects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./pagination.css";


import { TailSpin } from "react-loader-spinner"; // استيراد Spinner

const ImageItem = ({ src, alt, link, caption }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-full h-full rounded-lg shadow overflow-hidden relative group">
      <Link to={link} className="w-full h-full block">
        {src ? (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                {/* Spinner */}
                <TailSpin
                  height={50}
                  width={50}
                  color="#000"
                  ariaLabel="loading"
                />
              </div>
            )}
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onLoad={() => setLoading(false)}
              className={`w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            />
            <div className="absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-30 px-4 py-2">
              <span className="text-gray-200 text-lg font-semibold">
                {caption}
              </span>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                انقر لعرض تفاصيل المشروع
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
      </Link>
    </div>
  );
};


const AllProducts = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(imageObjects.length / itemsPerPage);
  const displayedItems = imageObjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container min-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-8 gap-4">
        {displayedItems.map((item) => (
          <ImageItem
            key={item.id}
            src={item.images[0]}
            alt={`project ${item.id}`}
            link={`/project/${item.id}`}
            caption={item.title}
          />
        ))}
      </div>
      <div className="my-10">
        <Pagination
          className="flex justify-center"
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
          previousLabel={<ChevronLeft className="m-auto" size={24} />}
          nextLabel={<ChevronRight className="m-auto" size={24} />}
        />
      </div>
    </div>
  );
};

export default AllProducts;
