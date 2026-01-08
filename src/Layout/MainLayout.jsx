import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="font-display bg-background-light text-text-main min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-white">
      <Navbar />
      <div className="flex-grow min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;