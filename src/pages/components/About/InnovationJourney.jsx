const InnovationJourney = () => {
  return (
    <section className="py-16 bg-zinc-300">
      <div className="container mx-auto max-w-screen-xl md:px-18">
        <h6 className="text-xl md:text-3xl lg:text-3xl text-cyan-600 text-center font-bold mb-4 border-b-2 text-shadow pb-2 mx-6">
          رحلة نحو الابتكار
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg mx-3">
          <div className="flex flex-col">
            <p className="my-6 text-gray-600 leading-8 text-sm sm:text-md md:text-xl lg:text-xl">
              نحن في <span className="text-black shadow-3d">[</span>
              <span className="text-sm text-black px-1 font-bold">
                شَرِكَةُ
                <span className="text-primary shadow-3d px-1">
                  الْهَرَمِ الرَّابِعِ
                </span>
                <span className="text-black shadow-3d">]</span>
              </span>
              نؤمن بأن الإنجازات العظيمة تبدأ من الإبداع والعمل الجاد. فريقنا
              المتميز يتجاوز التوقعات ويسعى لتحقيق ما يراه الآخرون مستحيلاً، عبر
              تقديم حلول مبتكرة تتفوق على التحديات بطرق غير مسبوقة.
            </p>
            <p className="my-3 text-gray-600 leading-8 text-sm sm:text-md md:text-xl lg:text-xl">
              منذ انطلاقتنا، وضعنا نصب أعيننا تقديم خدمات استشارية تتجاوز توقعات
              عملائنا. ونحن ندرك أن كل تحدٍّ يمثل فرصة لابتكار حلول جديدة،
              وتحقيق تقدم ملموس في مجالات الاستشارات الهندسية.
            </p>
          </div>

          <div className="flex flex-col">
            <p className="mb-6 text-gray-700 leading-relaxed text-sm sm:text-md md:text-xl lg:text-xl">
              نسعى دائمًا إلى فهم وتحليل كافة العقبات للوصول إلى حلول فعالة،
              ونلتزم باعتماد أفضل الأساليب لتطوير المستقبل. عندما يكون الإبداع
              والتطوير في محور الاهتمام، تجد فريقنا يعمل بشغفٍ ومثابرة لتحقيق
              النجاح وإنجاز الأهداف.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed text-sm sm:text-md md:text-xl lg:text-xl">
              بفضل خبرات فريقنا الواسعة وثقتنا الكبيرة في إمكاناتهم، نضمن تقديم
              أعلى مستويات الأداء لتحقيق التطلعات الطموحة. مسيرة فريقنا هي قصة
              مستمرة من النجاحات والابتكار، حيث نمضي بخطى ثابتة نحو بناء مستقبل
              أكثر إشراقًا للجميع.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationJourney;
