import { Link } from "react-router";

const ToyCard = ({ toy }) => {
    const { toyId, toyName, pictureURL, price, rating } = toy;


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.round(rating)) {
                stars.push(
                    <span key={i} className="material-symbols-outlined text-sm font-fill text-[#EAB308]">
                        star
                    </span>
                );
            } else {
                stars.push(
                    <span key={i} className="material-symbols-outlined text-sm text-gray-300">
                        star
                    </span>
                );
            }
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col h-full overflow-hidden group">
            {/* Image Section */}
            <div className="relative h-60 overflow-hidden bg-[#f8f6f6]">
                <div 
                    className="w-full h-full bg-center bg-contain bg-no-repeat group-hover:scale-110 transition-transform duration-500 p-4" 
                    style={{ backgroundImage: `url("${pictureURL}")` }}
                >
                </div>
                
                {/* Wishlist Button (Decorative) */}
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md text-slate-400 hover:text-[#ef4343] transition-colors">
                    <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex text-[#EAB308]">
                        {renderStars(rating)}
                    </div>
                    <span className="text-xs text-slate-400 font-bold ml-1">({rating})</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#181111] mb-1 line-clamp-1">
                    {toyName}
                </h3>
                
                {/* Price & Action */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="text-xl font-extrabold text-[#181111]">${price}</span>
                    
                    <Link to={`/toy/${toyId}`}>
                        <button className="bg-[#ef4343]/10 hover:bg-[#ef4343] text-[#ef4343] hover:text-white px-4 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2">
                            View Details 
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;