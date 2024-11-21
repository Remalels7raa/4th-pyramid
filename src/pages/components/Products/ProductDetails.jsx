import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ProductsButton from "./ProductsButton";
import { useProductDetails } from "@/hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    product,
    isModalOpen,
    selectedImageIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage,
  } = useProductDetails(id);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-10 mx-auto">
        <div className="p-6  min-h-screen">
          {product ? (
            <>
              <h1 className="text-3xl font-bold mb-6 text-center">
                {product.title}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative h-[50vh] bg-black overflow-hidden group rounded-lg shadow-lg cursor-pointer"
                    onClick={() => openModal(index)}>
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                        <span className="text-white">Loading...</span>
                      </div>
                    )}
                    <img
                      src={img}
                      alt={`Product ${id} Image ${index + 1}`}
                      loading="lazy"
                      onLoad={handleImageLoad}
                      className={`w-full h-[100%] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 ${
                        loading ? "hidden" : ""
                      }`}
                    />
                  </div>
                ))}
              </div>

              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                  <div
                    className="relative w-[90%] md:w-[90%] lg:w-[80%] bg-white rounded-lg shadow-lg overflow-hidden"
                    onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeModal();
                      }}
                      className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 z-10">
                      <X size={24} />
                    </button>
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                        <span className="text-white">Loading...</span>
                      </div>
                    )}
                    <img
                      src={product.images[selectedImageIndex]}
                      loading="lazy"
                      onLoad={handleImageLoad}
                      alt={`Product ${id} Image ${selectedImageIndex + 1}`}
                      className={`w-full h-[90vh] object-cover rounded-lg ${
                        loading ? "hidden" : ""
                      }`}
                    />
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                        <ChevronRight size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                        <ChevronLeft size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <h1 className="text-xl font-semibold text-red-600 text-center">
              Product Not Found
            </h1>
          )}
        </div>
        <ProductsButton />
      </div>
    </div>
  );
};

export default ProductDetails;
