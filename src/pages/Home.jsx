import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import ShopCategory from "../components/ShopCategory";
import ChooseFeature from "../components/ChooseFeature";
import Loader from "../components/Loader";
import useToys from "../hooks/useToys";

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
      <Slider />
      <ShopCategory />
      <PopularToys toys={toys} />
      <ChooseFeature />
    </div>
  );
};

export default Home;