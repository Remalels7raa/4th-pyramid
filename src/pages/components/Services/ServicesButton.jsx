import React from "react";
import { Button } from "@/components/Ui/button";
import { ArrowRight } from "lucide-react";
const ServicesButton = () => {
  return (
    <>
      {/* ServicesButton */}
      <div className="text-center my-3">
        <Button
          onClick={() => navigate("/services")}
          className="py-6 my-6 px-6 rounded-5 bg-cyan-500 hover:bg-cyan-600 Amiri-font text-white text-xl font-bold">
          <ArrowRight /> المزيد من التفاصيل
        </Button>
      </div>
    </>
  );
};

export default ServicesButton;
