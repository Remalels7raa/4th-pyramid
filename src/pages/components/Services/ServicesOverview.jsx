
import { cardIcons } from "../../components/Services/CardIcons";
import { cardDetails } from "../../components/Services/ServicescardTitles";
import { MultilayerCardV_1 } from "../../../components/Ui/MultilayerCard";
import { CardBody } from "./../../../components/Ui/MultilayerCard";

const ServicesOverview = () => {

  return (
    <>
      {/* Services */}
      <section className="py-10 home-services bg-zinc-300">
        <div className="container max-w-7xl max-h-full mx-auto md:px-18">
          <div className="px-5">
            <h5 className="text-2xl font-bold text-center my-8">خدماتنا</h5>
            <h2 className="text-4xl font-bold text-center my-8 ">
              خدمات البناء للقطاعات السكنية والصناعية
            </h2>
          </div>
          <div className="px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-8">
              {cardDetails.map((title, index) => (
               
                  <MultilayerCardV_1>
                    <CardBody
                      title={title.title}
                      icon={cardIcons[index]}
                      id={index}
                      className="px-6 my-2 py-6 font-bold relative mx-auto rounded-lg shadow-xl dark:bg-zinc-900/90 backdrop-blur-xl hover:dark:bg-zinc-100/90 hover:rotate-[1deg] hover:bg-gray-300 hover:shadow-gray-500 transition-all duration-200"
                    />
                  </MultilayerCardV_1>
                
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesOverview;
