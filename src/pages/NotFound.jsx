import { Link } from "react-router";
import error from "../assets/error.png"

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f8] text-center px-4 font-['Spline_Sans']">
            {/* 404 Illustration / Icon */}
            <div className="relative mb-8">
               <img src={error} alt="" />
                <div className="absolute -bottom-2 -right-2 bg-[#ef4343] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-12">
                    404 Error
                </div>
            </div>

            {/* Message */}
            <h1 className="text-4xl md:text-6xl font-black text-[#181111] mb-4">
                Oops! Lost in Toyland?
            </h1>
            <p className="text-lg text-[#896161] max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Back to Home Button */}
            <Link to="/">
                <button className="bg-[#3c3cf6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-[#3c3cf6]/30 transition-all active:scale-95 flex items-center gap-2 mx-auto">
                    <span className="material-symbols-outlined">home</span>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;