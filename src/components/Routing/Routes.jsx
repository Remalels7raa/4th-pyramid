import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  HomePage,
  ProductsPage,
  AboutPages,
  ContactPage,
  ServicesPage,
} from "../../pages";
import MasterLayout from "../../Layout/MasterLayout";
import ServiceDetails from "../../pages/components/Services/ServiceDetails";
import ProductDetails from './../../pages/components/Products/ProductDetails';
import ClientsPage from './../../pages/ClientsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MasterLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPages />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/service/:title" element={<ServiceDetails />} />
      <Route path="/projects" element={<ProductsPage />} />
      <Route path="/project/:id" element={<ProductDetails />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);

export default router;
