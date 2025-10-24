import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Topbar from "./components/layout/Topbar";
import AppRouter from "./routes/AppRouter";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/common/BackToTop";

function App() {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/register"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && (
        <>
          {/* <Topbar /> */}
          <Header />
        </>
      )}
      <div className="px-2 sm:px-4 lg:px-6 max-w-10xl mx-auto">
        <AppRouter />
        {!shouldHideLayout && <Footer />}
      </div>
      <BackToTop />
    </>
  );
}

export default App;
