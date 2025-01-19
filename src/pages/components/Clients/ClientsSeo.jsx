import SeoReactHelmet from "@/shared/SeoReactHelmet";

const ClientsSeo = () => {
  return (
    <SeoReactHelmet
      title={"عملاءنا | شركة الهرم الرابع للاستشارات الهندسية"}
      description={
        "تعرّف على عملاء شركة الهرم الرابع الذين يثقون في خدماتنا الهندسية المتميزة. نقدم حلولًا مبتكرة ومتخصصة في التصميم المعماري، الإشراف الهندسي، وإدارة المشاريع."
      }
      keywords={[
        "عملاءنا",
        "شركة الهرم الرابع",
        "استشارات هندسية",
        "تصميم معماري",
        "إشراف هندسي",
        "إدارة المشاريع",
        "مشاريع البناء",
        "شركاء النجاح",
        "خدمات هندسية متكاملة",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.4th-pyramid.com/clients", // رابط صفحة العملاء
        title: "عملاءنا | شركة الهرم الرابع للاستشارات الهندسية",
        description:
          "استعرض قائمة عملاء شركة الهرم الرابع للاستشارات الهندسية، الذين يعتمدون على خدماتنا المتميزة في التصميم والإشراف وإدارة المشاريع.",
        site_name: "شركة الهرم الرابع للاستشارات الهندسية",
        image: "https://www.4th-pyramid.com/clients-og-image.jpg", // صورة Open Graph
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@4thPyramid",
        creator: "@4thPyramid",
      }}
    />
  );
};

export default ClientsSeo;
