import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Ui/button";
import { useNavigate } from 'react-router-dom';

const ProductsButton = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* productsButton */}
      <div className="text-center px-4">
        <Button
          onClick={() => navigate("/projects")}
          className="py-6 mb-8 px-6 bg-cyan-500 rounded-5  hover:bg-cyan-600 Amiri-font text-white text-xl font-bold">
          <ArrowRight /> شاهد كل المشاريع
        </Button>
      </div>
    </>
  );
};

export default ProductsButton;
