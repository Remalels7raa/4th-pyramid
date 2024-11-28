import { MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <section className="pb-10  bg-zinc-100">
      <div className="container bg-zinc-200  max-w-7xl px-5 py-16 shadow-gray-400 shadow-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* خريطة الموقع */}
        <div className="h-full mx-5 shadow-gray-400 shadow-xl rounded-lg  overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://maps.google.com/maps?q=%D8%AD%D9%85%D8%B2%D8%A9%20%D8%A8%D9%86%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%B7%D9%84%D8%A8,%20%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6&t=m&z=17&output=embed"
            loading="lazy"
            title="شارع حمزة بن عبد المطلب, الرياض"></iframe>
        </div>

        {/* تفاصيل الاتصال */}
        <div className="py-5 px-4">
          <h2 className="text-center text-3xl font-extrabold text-cyan-600 mb-8">
            تفاصيل الاتصال
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* الموقع */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-xl shadow-gray-400 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <MapPin className="text-cyan-500 text-6xl mb-4" />
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                المركز الرئيسي
              </h4>
              <p className="text-gray-600">
                مدينة الرياض _حي السويدي الغربي _شارع حمزة بن عبد المطلب
                <br />
                وفرعه بمحافظة القويعية: شارع الملك عبد العزيز
                <br />
                مكتب القاهرة: القاهرة-7 عمارات الشرطة-جسر السويس
              </p>
            </div>

            {/* الهاتف */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-xl shadow-gray-400 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <Phone className="text-cyan-500 text-6xl mb-4" />
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                أرقام الهاتف
              </h4>
              <p className="text-gray-600">
                السعودية: <Link to="tel:+966554183175">554183175</Link>
                <br />
                مصر: <Link to="tel:+201128739311">1128739311</Link>
                <br />
                مصر: <Link to="tel:+201550822640">1550822640</Link>
              </p>
            </div>

            {/* البريد الإلكتروني */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-xl shadow-gray-400 md:col-span-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <Mail className="text-cyan-500 text-6xl mb-4" />
              <h4 className="text-lg font-bold text-gray-700 mb-2">
                البريد الإلكتروني
              </h4>
              <p className="text-gray-600">
                <Link
                  className="flex items-center text-right"
                  to="mailto:contact@4thpyarmids.com">
                  <strong>contact@4thpyarmids.com</strong>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location
