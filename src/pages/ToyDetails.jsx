import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import useToys from "../hooks/useToys";
import Loader from "../components/Loader";

const ToyDetails = () => {
    const { id } = useParams();
    const { toys, loading } = useToys();
    const [toy, setToy] = useState(null);

    useEffect(() => {
        if (toys.length > 0) {
            const foundToy = toys.find(t => t.toyId == id);
            setToy(foundToy);
        }
    }, [toys, id]);

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={`material-symbols-outlined text-lg ${i <= Math.round(rating) ? "font-fill text-[#EAB308]" : "text-gray-300"}`}>
                    star
                </span>
            );
        }
        return stars;
    };

    if (loading) return <Loader />;

    if (!toy) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <span className="material-symbols-outlined text-6xl text-gray-300">search_off</span>
                <h2 className="text-2xl font-bold text-[#181111]">Toy not found!</h2>
                <Link to="/" className="text-[#3c3cf6] font-bold hover:underline">Go Back Home</Link>
            </div>
        );
    }

    const { toyName, pictureURL, price, rating, description, sellerName, sellerEmail, availableQuantity, subCategory } = toy;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 font-['Spline_Sans']">
            
            <div className="mb-8">
                <Link to="/all-toys" className="inline-flex items-center text-sm font-bold text-[#896161] hover:text-[#3c3cf6] transition-colors">
                    <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
                    Back to All Toys
                </Link>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    <div className="bg-[#f8f6f6] p-8 flex items-center justify-center min-h-[400px]">
                        <img 
                            src={pictureURL} 
                            alt={toyName} 
                            className="w-full max-w-md object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="p-8 md:p-12 flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-[#3c3cf6]/10 text-[#3c3cf6] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {subCategory}
                            </span>
                            {availableQuantity < 5 && (
                                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Low Stock
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-black text-[#181111] mb-4 leading-tight">
                            {toyName}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex items-center gap-1">
                                {renderStars(rating)}
                                <span className="text-sm font-bold text-gray-500 ml-2">({rating} Reviews)</span>
                            </div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <span className={`text-sm font-bold ${availableQuantity > 0 ? "text-green-600" : "text-red-500"}`}>
                                {availableQuantity > 0 ? `In Stock: ${availableQuantity}` : "Out of Stock"}
                            </span>
                        </div>

                        <div className="text-4xl font-black text-[#3c3cf6] mb-8">
                            ${price}
                        </div>

                        <div className="prose prose-slate mb-8">
                            <h3 className="text-lg font-bold text-[#181111] mb-2">Description</h3>
                            <p className="text-[#896161] leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                            <h3 className="text-sm font-bold text-[#181111] uppercase tracking-wider mb-4 opacity-70">Seller Information</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#3c3cf6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {sellerName.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-[#181111] text-lg">{sellerName}</p>
                                    <p className="text-[#896161] text-sm">{sellerEmail}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex gap-4">
                            <button className="flex-1 bg-[#3c3cf6] hover:bg-[#2563eb] text-white h-14 rounded-full font-bold text-lg shadow-lg shadow-[#3c3cf6]/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">shopping_bag</span>
                                Add to Cart
                            </button>
                            <button className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors">
                                <span className="material-symbols-outlined">favorite</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;