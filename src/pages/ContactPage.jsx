import ContactForm from "./components/Contact/ContactForm"
import ContactSeo from './components/Contact/ContactSeo'
import Location from "./components/Contact/Location"
import CallMe from './../shared/CallMe';

const ContactPage = () => {
  return (
    <>
      <ContactSeo />
      <section className="relative contact  bg-cover bg-center bg-About  bg-fixed">
        <div className=" h-full bg-black bg-opacity-50">
          <div className="container max-w-6xl md:px-10 mx-auto py-20">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 md:col-start-3 p-4">
                <div className="container max-w-2xl  mx-auto md:px-8">
                  <div className=" flex Amiri-font items-center mb-4 justify-center ">
                    <h4 className="text-md border-b-2  text-gray-300 border-cyan-600 rounded-s-xl rounded-e-xl sm:text-lg lg:text-2xl font-semibold ">
                      اتصل بنا:
                    </h4>
                    <CallMe
                      color="text-gray-200 "
                      hoverColor="hover:text-sky-400"
                    />
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Location />
      </section>
    </>
  );
};

export default ContactPage;
