import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import ShopCategory from "../components/ShopCategory";
import ChooseFeature from "../components/ChooseFeature";
import Loader from "../components/Loader";
import useToys from "../hooks/useToys";
import { Helmet } from "react-helmet-async"; 

const Home = () => {
  const { toys, loading, error } = useToys();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500 font-bold">
        Error: {error}
      </div>
    );
  }

  return (
    <div>
      {/* Dynamic Title */}
      <Helmet>
        <title>ToyTopia | Home</title>
      </Helmet>

      <Slider />
      <ShopCategory />
      <PopularToys toys={toys} />
      <ChooseFeature />
    </div>
  );
};

export default Home;