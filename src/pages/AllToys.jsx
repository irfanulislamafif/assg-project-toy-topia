import { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";
import Loader from "../components/Loader";
import useToys from "../hooks/useToys";
import { Helmet } from "react-helmet-async"; 

const AllToys = () => {
    
    const { toys, loading, error } = useToys();
    
    const [displayToys, setDisplayToys] = useState([]);
    const [activeTab, setActiveTab] = useState("All Toys");
    const [searchText, setSearchText] = useState("");

 
    useEffect(() => {
        if (toys.length > 0) {
            setDisplayToys(toys);
        }
    }, [toys]);


    useEffect(() => {
        if(toys.length > 0){
            const filtered = toys.filter(toy => 
                toy.toyName.toLowerCase().includes(searchText.toLowerCase())
            );
            setDisplayToys(filtered);
        }
    }, [searchText, toys]); 

  
    const handleTabClick = (categoryName) => {
        setActiveTab(categoryName);
        setSearchText(""); 
        if (categoryName === "All Toys") {
            setDisplayToys(toys);
        } else {
            const filtered = toys.filter(toy => toy.subCategory === categoryName);
            setDisplayToys(filtered);
        }
    };


    const handleSort = (order) => {
        const sorted = [...displayToys];
        if (order === "asc") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (order === "desc") {
            sorted.sort((a, b) => b.price - a.price);
        }
        setDisplayToys(sorted);
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center font-['Spline_Sans']">
                <span className="material-symbols-outlined text-6xl text-[#ef4343]">error</span>
                <h3 className="text-2xl font-bold text-[#181111]">Something went wrong!</h3>
                <p className="text-[#896161]">Failed to load toys data. Please try again later.</p>
                <p className="text-sm text-red-400 bg-red-50 px-4 py-2 rounded-lg">Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-8 py-8 font-['Spline_Sans']">
            {/* Dynamic Title */}
            <Helmet>
                <title>ToyTopia | All Toys</title>
            </Helmet>

            <div className="flex flex-col items-center justify-center gap-6 py-8 text-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#181111]">
                        All Toys Collection
                    </h1>
                    <p className="text-lg text-[#896161]">
                        Find the perfect playmate from our huge collection!
                    </p>
                </div>

                <div className="w-full max-w-xl">
                    <label className="relative flex w-full items-center group">
                        <div className="absolute left-4 flex items-center text-[#896161] group-focus-within:text-[#3c3cf6] transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        {/* Input Field Update */}
                        <input 
                            value={searchText} 
                            onChange={(e) => setSearchText(e.target.value)} 
                            className="h-14 w-full rounded-full border-2 border-transparent bg-white pl-12 pr-4 text-base font-medium text-[#181111] placeholder:text-[#896161] focus:border-[#3c3cf6] focus:outline-none focus:ring-0 shadow-sm transition-all" 
                            placeholder="Search by toy name..." 
                        />
                        <button 
                            className="absolute right-2 h-10 rounded-full bg-[#3c3cf6] px-6 text-sm font-bold text-white hover:bg-[#2563eb] transition-colors"
                        >
                            Search
                        </button>
                    </label>
                </div>
            </div>

            <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {["All Toys", "Lego", "Action Figures", "Plushies", "Educational", "Vehicles"].map((cat) => (
                         <button 
                            key={cat}
                            onClick={() => handleTabClick(cat)}
                            className={`flex h-9 items-center gap-2 rounded-full px-4 text-sm font-bold shadow-sm transition-all border 
                                ${activeTab === cat 
                                    ? "bg-[#3c3cf6] text-white border-[#3c3cf6]" 
                                    : "bg-white text-[#181111] border-[#f0f0f0] hover:bg-gray-50"
                                }`}
                        >
                            {cat}
                         </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#896161]">Sort by Price:</span>
                    <select 
                        onChange={(e) => handleSort(e.target.value)}
                        className="h-9 rounded-lg border-gray-200 text-sm font-bold text-[#181111] focus:border-[#3c3cf6] focus:ring-[#3c3cf6] cursor-pointer"
                    >
                        <option value="">Default</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </div>
            </div>

            {displayToys.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {displayToys.map((toy) => (
                        <ToyCard key={toy.toyId} toy={toy} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">sentiment_dissatisfied</span>
                    <h3 className="text-xl font-bold text-[#181111]">No toys found!</h3>
                    <p className="text-[#896161]">Try searching with a different keyword.</p>
                </div>
            )}
            
        </div>
    );
};

export default AllToys;