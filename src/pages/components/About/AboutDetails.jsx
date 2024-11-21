import { motion } from "framer-motion";
import { Users, Briefcase, Award, UserCheck } from "lucide-react";
import CounterCard from "./CounterCard";

const AboutDetails = () => {
  // بيانات الإحصائيات مع الأيقونات المناسبة
  const countersData = [
    { count: 46, Icon: Users, description: "عدد الموظفين" },
    { count: 15, Icon: Briefcase, description: "عدد المشاريع" },
    { count: 32, Icon: Award, description: "عدد الجوائز" },
    { count: 20, Icon: UserCheck, description: "عدد العملاء" },
  ];

  // إعدادات الأنيميشن
  const cardAnimation = {
    hidden: { opacity: 0, y: 50 }, // البداية: تلاشي وحركة للأسفل
    visible: (index) => ({
      opacity: 1,
      y: 0, // الحركة للوضع الطبيعي
      transition: {
        duration: 0.5,
        delay: index * 0.2, // تأخير متدرج لكل بطاقة
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {countersData.map((data, index) => (
          <motion.div
            key={index}
            custom={index} // تمرير الفهرس لتحديد التأخير
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // عرض الأنيميشن عند التمرير
            variants={cardAnimation}>
            <CounterCard
              count={data.count}
              Icon={data.Icon}
              description={data.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutDetails;
