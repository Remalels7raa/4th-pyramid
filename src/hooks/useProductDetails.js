// useProductDetails.js
import { useState } from "react";
import { imageObjects } from "../pages/components/Products/imageObjects"; // تأكد من استيراد البيانات بشكل صحيح

export const useProductDetails = (id) => {
  const product = imageObjects.find((item) => item.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return {
    product,
    isModalOpen,
    selectedImageIndex,
    openModal,
    closeModal,
    nextImage,
    prevImage,
  };
};
