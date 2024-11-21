import { RouterProvider } from "react-router-dom";
import router from "./components/Routing/Routes";
import { Suspense } from "react";
import { RingLoader } from "react-spinners";
import "./App.css";
import WhatsApp from "./shared/WhatsApp"

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="loading-screen ">
            <div className="spinner-container">
              <RingLoader color="#3498db" size={80} />
              <p className="loading-text">جاري التحميل... يرجى الانتظار</p>
            </div>
          </div>
        }>
        <RouterProvider router={router} />
        <WhatsApp />
      </Suspense>
    </>
  );
}

export default App;
