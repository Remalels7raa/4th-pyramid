import { motion } from "framer-motion";
import aboutImg from "@/assets/about/about.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const AboutOverview = () => {
 
  const textAnimation = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }, 
    },
  };

  const imageAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="pb-10 pt-20 home-about bg-gray-100">
      <div className="container max-w-7xl max-h-full mx-auto md:px-18">
        {/* صف يحتوي على عمودين */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
          {/* العمود الأول : النص */}
          <motion.div
            className="flex flex-col"
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}>
            <h3 className="text-2xl my-5 px-4 font-bold">
              تعرف على شركة الهرم الرابع للاستشارات الهندسية
            </h3>
            <p className="my-5 px-4 py-6 leading-8 bg-zinc-200 border-l-2 border-orange-500">
              شركة الهرم الرابع للاستشارات الهندسية هي مؤسسة سعودية متخصصة في
              تقديم حلول هندسية متكاملة تشمل التصميم، إدارة المشاريع، والإشراف
              الاحترافي على التنفيذ. نلتزم بأعلى معايير الجودة، معتمدين على فريق
              من المهندسين المتمرسين لضمان نجاح المشاريع وتحقيق رضا عملائنا.
            </p>
            <p className="my-5 ps-4 leading-8 ">
              رؤيتنا هي بناء بيئة عمل مبتكرة تجمع الخبراء والمبدعين. نقدم خدمات
              شاملة في التصميم الداخلي والخارجي، التصميم المعماري، اللاندسكيب،
              التصميم الإنشائي، وأنظمة MEP، إلى جانب خدمات مسح الأراضي، إدارة
              المشاريع، والإشراف الكامل لضمان تسليم المشاريع وفق احتياجات
              العملاء.
            </p>
          </motion.div>

          <motion.div
            className="flex h-full"
            variants={imageAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}>
            <Link to="/about" className="w-full h-full">
              {/* <img
                src={aboutImg}
                loading="lazy"
                alt="about img"
                className="w-full h-full md:h-full object-fit"
              /> */}
              <LazyLoadImage
                src={aboutImg}
                loading="lazy"
                alt="about img"
                className="w-full h-full md:h-full object-fit"
                effect="blur"
                width="100%"
                height="100%"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;
