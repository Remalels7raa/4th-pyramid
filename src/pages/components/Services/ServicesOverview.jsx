import { motion } from "framer-motion";
import { cardIcons } from "../../components/Services/CardIcons";
import { cardDetails } from "../../components/Services/ServicescardTitles";
import { MultilayerCardV_1 } from "../../../components/Ui/MultilayerCard";
import { CardBody } from "./../../../components/Ui/MultilayerCard";

const ServicesOverview = () => {
  // إعدادات الأنيميشن البسيط
  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.95 }, // بداية تلاشي وتصغير بسيط
    visible: (index) => ({
      opacity: 1,
      scale: 1, // العودة إلى الحجم الطبيعي
      transition: {
        duration: 0.2,
        delay: index * 0.1, // تأخير بسيط بين البطاقات
        ease: "easeOut", // حركة ناعمة
      },
    }),
  };

  return (
    <>
      {/* Services */}
      <section className="py-10 home-services bg-zinc-300">
        <div className="container max-w-7xl max-h-full mx-auto md:px-18">
          <div className="px-5">
            <h5 className="text-2xl font-bold text-center my-8">خدماتنا</h5>
            <h2 className="text-4xl font-bold text-center my-8 ">
              خدمات البناء للقطاعات السكنية والصناعية
            </h2>
          </div>
          <div className="px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8">
              {cardDetails.map((title, index) => (
                <motion.div
                  key={index}
                  className="col-span-1 md:col-span-1"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }} // الأنيميشن يحدث عند التمرير
                  variants={cardAnimation}>
                  <MultilayerCardV_1>
                    <CardBody
                      title={title.title}
                      icon={cardIcons[index]}
                      id={index}
                      className="px-6 my-2 py-6 font-bold relative mx-auto rounded-lg shadow-xl dark:bg-zinc-900/90 backdrop-blur-xl hover:dark:bg-zinc-100/90 hover:rotate-[1deg] hover:bg-gray-300 hover:shadow-gray-500 transition-all duration-200"
                    />
                  </MultilayerCardV_1>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOverview;
