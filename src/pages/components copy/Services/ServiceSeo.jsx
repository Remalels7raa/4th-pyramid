import SeoReactHelmet from "../../../shared/SeoReactHelmet";

const ServiceSeo = () => {
  return (
    <SeoReactHelmet
      title={"الخدمات | شركة الهرم الرابع للاستشارات الهندسية"}
      description={
        "تعرّف على خدمات شركة الهرم الرابع للاستشارات الهندسية المتكاملة، التي تشمل تقديم استشارات هندسية مبتكرة وحلول تصميم وتنفيذ لمشاريعكم."
      }
      keywords={[
        "خدمات هندسية",
        "استشارات هندسية",
        "شركة الهرم الرابع",
        "حلول هندسية",
        "تصميم هندسي",
        "تنفيذ مشاريع",
        "خدمات استشارية",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.4thpyramid.com/services",
        title: "الخدمات | شركة الهرم الرابع للاستشارات الهندسية",
        description:
          "شركة الهرم الرابع للاستشارات الهندسية تقدم مجموعة من الخدمات الهندسية المتميزة، تشمل الاستشارات والتصميمات الهندسية المبتكرة.",
        site_name: "الهرم الرابع للاستشارات الهندسية",
        image: "https://www.4thpyramid.com/services-og-image.jpg",
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@4thPyramid",
        creator: "@4thPyramid",
      }}
    />
  );
};

export default ServiceSeo;
