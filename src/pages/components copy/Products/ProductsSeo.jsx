import SeoReactHelmet from "../../../shared/SeoReactHelmet";

const ProjectsSeo = () => {
  return (
    <SeoReactHelmet
      title={"المشاريع | شركة الهرم الرابع للاستشارات الهندسية"}
      description={
        "اكتشف المشاريع التي نفذتها شركة الهرم الرابع للاستشارات الهندسية، حلول هندسية مبتكرة وخدمات متكاملة لتنفيذ المشاريع بأعلى معايير الجودة."
      }
      keywords={[
        "المشاريع",
        "شركة الهرم الرابع",
        "المشاريع الهندسية",
        "استشارات هندسية",
        "مشاريع متكاملة",
        "حلول هندسية",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.4thpyramid.com/projects",
        title: "المشاريع | شركة الهرم الرابع للاستشارات الهندسية",
        description:
          "استعرض مشاريعنا الهندسية المتميزة التي تم تنفيذها بواسطة شركة الهرم الرابع للاستشارات الهندسية.",
        site_name: "الهرم الرابع للاستشارات الهندسية",
        image: "https://www.4thpyramid.com/projects-og-image.jpg",
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@4thPyramid",
        creator: "@4thPyramid",
      }}
    />
  );
};

export default ProjectsSeo;
