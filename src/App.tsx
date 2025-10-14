import { useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Topbar from "./components/layout/Topbar";
import AppRouter from "./routes/AppRouter";

function App() {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/register"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && (
        <>
          <Topbar />
          <Header />
        </>
      )}
      <div className="px-2">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
