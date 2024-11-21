import SeoReactHelmet from "../../../shared/SeoReactHelmet";

const ContactSeo = () => {
  return (
    <SeoReactHelmet
      title={"تواصل معنا | شركة الهرم الرابع للاستشارات الهندسية"}
      description={
        "تواصل مع شركة الهرم الرابع للاستشارات الهندسية لأي استفسارات أو معلومات إضافية عن خدماتنا الهندسية المتنوعة. نحن هنا لمساعدتك."
      }
      keywords={[
        "تواصل معنا",
        "شركة الهرم الرابع",
        "استفسارات",
        "خدمات الهندسة",
        "دعم العملاء",
        "الاتصال بالهرم الرابع",
      ]}
      openGraph={{
        type: "website",
        locale: "ar_AR",
        url: "https://www.4thpyramid.com/contact",
        title: "تواصل معنا | شركة الهرم الرابع للاستشارات الهندسية",
        description:
          "تواصل معنا للحصول على معلومات إضافية أو استفسارات حول خدماتنا في شركة الهرم الرابع للاستشارات الهندسية.",
        site_name: "الهرم الرابع للاستشارات الهندسية",
        image: "https://www.4thpyramid.com/contact-og-image.jpg",
      }}
      twitter={{
        cardType: "summary_large_image",
        site: "@4thPyramid",
        creator: "@4thPyramid",
      }}
    />
  );
};

export default ContactSeo;
