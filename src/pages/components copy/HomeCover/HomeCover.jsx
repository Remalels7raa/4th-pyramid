import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";


const slideVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const HomeCover = () => {
  return (
    <section className="home-cover flex items-center justify-center p-6">
      <div className="container min-w-7xl md:px-10 mx-auto py-10">
        <div className="lg:py-6 lg:px-14 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white py-4">
            شَرِكَةُ
            <span className="text-primary ">الْهَرَمِ الرَّابِعِ</span>
          </h1>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:py-8 md:py-8 lg:py-8 ms-0 sm:ms-10 md:ms-28 lg:ms-24 shadow-3d">
            لِلِاسْتِشَارَاتِ الْهَنْدَسِيَّةِ
          </h2>
        </div>
        <div className="mt-2  lg:px-10 w-full text-center">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}
            modules={[Autoplay]}>
            <SwiperSlide>
              <motion.p
                className="text-md sm:text-md md:text-lg lg:text-2xl"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 1 }}>
                فريقنا يصنع المستحيل ويبتكر المستقبل
              </motion.p>
            </SwiperSlide>
            <SwiperSlide>
              <motion.p
                className="text-md sm:text-md md:text-lg lg:text-2xl"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 1 }}>
                نحن هنا لمساعدتك على بناء حلمك باحترافية
              </motion.p>
            </SwiperSlide>
            <SwiperSlide>
              <motion.p
                className="text-md sm:text-md md:text-lg lg:text-2xl"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 1 }}>
                نحن ملتزمون بتحويل أحلامك إلى حقيقة. نحن ندرك أن رؤيتك لمشروعك
                فريدة وشخصية
              </motion.p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeCover;
