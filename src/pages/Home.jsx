import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import PopularToys from "../components/PopularToys";
import ShopCategory from "../components/ShopCategory";
import ChooseFeature from "../components/ChooseFeature";
import Loader from "../components/Loader";

const Home = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from public/toydata.json
    fetch("/toydata.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {/* 1. Slider Section */}
      <Slider />

      {/* 2. Shop By Category Section */}
      <ShopCategory />

      {/* 3. Popular Toys Section */}
      <PopularToys toys={toys} />

      {/* 4. Why Choose Us / Features Section */}
      <ChooseFeature />
    </div>
  );
};

export default Home;
