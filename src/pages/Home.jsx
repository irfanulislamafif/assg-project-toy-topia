import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            {/* Hero Slider */}
            <Slider />
            
            {/* Rest of your Home page content (Gallery, Tabs, etc.) goes here */}
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h2 className="text-3xl font-bold text-center text-[#111118]">Welcome to ToyTopia</h2>
                <p className="text-center text-[#60608a] mt-2">Find the best toys for your kids here!</p>
            </div>
        </div>
    );
};

export default Home;