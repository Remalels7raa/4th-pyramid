import SeoReactHelmet from "@/shared/SeoReactHelmet";

const HomeSeo = () => {
  return (
    <SeoReactHelmet
      title={"شركة الهرم الرابع للاستشارات الهندسية | حلول هندسية متكاملة"}
      description={
        "شركة الهرم الرابع تقدم خدمات استشارات هندسية متكاملة تشمل التصميم المعماري، الإشراف الهندسي، وإعداد المخططات التنفيذية بأعلى معايير الجودة."
      }
      keywords={[
        "الهرم الرابع",
        "استشارات هندسية",
        "تصميم معماري",
        "إشراف هندسي",
        "إعداد المخططات التنفيذية",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.4th-pyramid.com", 
        title: "شركة الهرم الرابع للاستشارات الهندسية",
        description:
          "تقدم شركة الهرم الرابع حلولًا متكاملة في مجال الاستشارات الهندسية بما يشمل التصميم المعماري والإشراف الهندسي.",
        site_name: "الهرم الرابع للاستشارات الهندسية",
        image: "https://www.4th-pyramid.com/og-image.jpg",
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@4th-pyramid",
        creator: "@4th-pyramid",
      }}
    />
  );
};

export default HomeSeo;
