const CompanyHistory = () => {
  return (
    <section className="bg-gray-200 about-history p-8 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
        نبذة مختصرة عن تاريخ شركة الهرم الرابع للاستشارات الهندسية
      </h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          بدأت شركة
          <strong> الهرم الرابع</strong> باسم
          <strong className="font-bold ">
            {" "}
            مكتب الشبل للمهندسين الاستشاريين{" "}
          </strong>
          في عام 1995، حيث قدمت خدماتها حتى عام 2015.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          في عام 2015، توسعت الشركة لتصبح <strong>مكتب الصيوان العربي</strong>{" "}
          واستمرت بهذا الاسم حتى عام 2019.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          بعد ذلك، تحول الاسم إلى{" "}
          <strong>مكتب عمر محمد مرعي للاستشارات الهندسية</strong> واستمر من عام
          2019 حتى عام 2021.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          منذ عام 2021، تم إعادة هيكلة المكتب ليصبح{" "}
          <strong>شركة الهرم الرابع للاستشارات الهندسية</strong>، والتي لا تزال
          تقدم خدماتها حتى الآن.
        </p>
        <p className="text-lg text-gray-700">
          تتميز الشركة بخبرة طويلة وتاريخ حافل في مجال الاستشارات الهندسية، مما
          يجعلها واحدة من الرواد في هذا القطاع.
        </p>
      </div>
    </section>
  );
};

export default CompanyHistory;
