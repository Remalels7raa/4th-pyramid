import SeoReactHelmet from "../../../shared/SeoReactHelmet";

const AboutSeo = () => {
  return (
    <SeoReactHelmet
      title={"من نحن | شركة الهرم الرابع للاستشارات الهندسية"}
      description={
        "تعرف على شركة الهرم الرابع للاستشارات الهندسية، رؤيتنا، رسالتنا، وأهدافنا في تقديم أفضل الخدمات الهندسية بمستوى احترافي عالٍ."
      }
      keywords={[
        "شركة الهرم الرابع",
        "من نحن",
        "الاستشارات الهندسية",
        "خدمات الهندسة",
        "رؤية الشركة",
        "مهمة الشركة",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.4th-pyramid.com/about",
        title: "من نحن | شركة الهرم الرابع للاستشارات الهندسية",
        description:
          "تعرف على فريقنا وقيمنا في شركة الهرم الرابع للاستشارات الهندسية، حيث نقدم حلول هندسية مبتكرة ومتكاملة.",
        site_name: "الهرم الرابع للاستشارات الهندسية",
        image: "https://www.4th-pyramid.com/about-og-image.jpg",
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@4th-pyramid",
        creator: "@4th-pyramid",
      }}
    />
  );
};

export default AboutSeo;
