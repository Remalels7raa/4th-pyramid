import ContactForm from "./components/Contact/ContactForm"
import ContactSeo from './components/Contact/ContactSeo'
import Location from "./components/Contact/Location"

const ContactPage = () => {
  return (
    <>
      <ContactSeo />
      <section className="relative contact  bg-cover bg-center bg-About  bg-fixed">
        <div className=" h-full bg-black bg-opacity-50">
          <div className="container max-w-6xl md:px-10 mx-auto py-20">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-8 md:col-start-3 p-4">
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
