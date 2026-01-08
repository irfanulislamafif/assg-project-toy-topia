import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully"))
            .catch(err => console.error(err));
    };

    const navLinks = (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#3c3cf6] font-bold" : "text-[#181111] hover:text-[#3c3cf6] font-medium"}>
                Home
            </NavLink>
            <NavLink to="/all-toys" className={({ isActive }) => isActive ? "text-[#3c3cf6] font-bold" : "text-[#181111] hover:text-[#3c3cf6] font-medium"}>
                All Toys
            </NavLink>
            
            {user && (
                <>
                    <NavLink to="/my-toys" className={({ isActive }) => isActive ? "text-[#3c3cf6] font-bold" : "text-[#181111] hover:text-[#3c3cf6] font-medium"}>
                        My Toys
                    </NavLink>
                    <NavLink to="/add-toy" className={({ isActive }) => isActive ? "text-[#3c3cf6] font-bold" : "text-[#181111] hover:text-[#3c3cf6] font-medium"}>
                        Add Toy
                    </NavLink>
                </>
            )}

            <NavLink to="/extra" className={({ isActive }) => isActive ? "text-[#3c3cf6] font-bold" : "text-[#181111] hover:text-[#3c3cf6] font-medium"}>
                Blogs
            </NavLink>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 font-['Spline_Sans']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <div className="size-10 bg-[#3c3cf6]/10 rounded-xl flex items-center justify-center text-[#3c3cf6] group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>smart_toy</span>
                        </div>
                        <h1 className="text-2xl font-black tracking-tight text-[#181111]">ToyTopia</h1>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-sm">
                        {navLinks}
                    </div>

                    <div className="flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link to="/profile" className="hidden sm:block">
                                    <div className="relative group cursor-pointer">
                                        <img 
                                            src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                                            alt="Profile" 
                                            className="w-10 h-10 rounded-full object-cover border-2 border-[#3c3cf6]/20 group-hover:border-[#3c3cf6] transition-colors" 
                                            title={user?.displayName}
                                        />
                                    </div>
                                </Link>
                                <button 
                                    onClick={handleLogout}
                                    className="hidden sm:flex h-10 px-6 items-center justify-center bg-[#ef4343]/10 text-[#ef4343] hover:bg-[#ef4343] hover:text-white text-sm font-bold rounded-full transition-all"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="h-10 px-6 bg-[#3c3cf6] hover:bg-[#2563eb] text-white text-sm font-bold rounded-full shadow-lg shadow-[#3c3cf6]/30 transition-all transform hover:-translate-y-0.5">
                                    Login
                                </button>
                            </Link>
                        )}

                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-[#181111] hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined">
                                {isMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-xl py-4 px-4 flex flex-col gap-4">
                    {navLinks}
                    {user && (
                        <>
                            <Link to="/profile" className="text-[#181111] font-medium hover:text-[#3c3cf6]">
                                My Profile ({user.displayName})
                            </Link>
                            <button 
                                onClick={handleLogout}
                                className="w-full h-10 bg-[#ef4343]/10 text-[#ef4343] font-bold rounded-lg"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;