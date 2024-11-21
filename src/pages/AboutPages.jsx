import AboutOverview from "./components/About/AboutOverview";
import AboutDetails from "./components/About/AboutDetails";
import CompanyHistory from './components/About/CompanyHistory';
import AboutSeo from "./components/About/AboutSeo"

const AboutPages = () => {
  return (
    <>
    <AboutSeo />
      <CompanyHistory />
      <div className="bg-gray-100 pb-10">
        <AboutOverview />
      </div>
      <AboutDetails />
    </>
  );
};

export default AboutPages;
