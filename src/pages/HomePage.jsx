import Aboutbuttons from "./components/About/Aboutbuttons";
import AboutOverview from "./components/About/AboutOverview";
import InnovationJourney from "./components/About/InnovationJourney";
import Location from "./components/Contact/Location";
import HomeCover from "./components/HomeCover/HomeCover";
import HomeSeo from "./components/HomeCover/HomeSeo";
import ProductOverview from "./components/Products/ProductOverview";
import ProductsButton from "./components/Products/ProductsButton";

import ServicesOverview from './components/Services/ServicesOverview';
import ClientsOverview from './components/Clients/ClientsOverview';

const HomePage = () => {
  return (
    <>
      <HomeSeo />
      <HomeCover />
      <div className="bg-gray-100">
        <AboutOverview />
        <Aboutbuttons />
      </div>

      <ServicesOverview />
      <div className="bg-gray-100">
        {/* {showProductOverview && <ProductOverview />} */}
        <ProductOverview />
        <ProductsButton />
      </div>

      <InnovationJourney />
      <ClientsOverview/>
      <Location />
    </>
  );
};

export default HomePage;
