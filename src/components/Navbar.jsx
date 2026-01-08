import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/toytopia-removebg-preview.png"
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error));
    };

    const navLinks = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#3c3cf6] text-sm font-bold transition-colors"
                        : "text-[#111118] text-sm font-bold hover:text-[#3c3cf6] transition-colors"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/all-toys"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#3c3cf6] text-sm font-bold transition-colors"
                        : "text-[#60608a] text-sm font-medium hover:text-[#3c3cf6] transition-colors"
                }
            >
                All Toys
            </NavLink>
            {user && (
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[#3c3cf6] text-sm font-bold transition-colors"
                            : "text-[#60608a] text-sm font-medium hover:text-[#3c3cf6] transition-colors"
                    }
                >
                    My Profile
                </NavLink>
            )}
            {user && (
                <NavLink
                    to="/extra"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[#3c3cf6] text-sm font-bold transition-colors"
                            : "text-[#60608a] text-sm font-medium hover:text-[#3c3cf6] transition-colors"
                    }
                >
                    Toy Blog
                </NavLink>
            )}
        </>
    );

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f0f0f5] shadow-sm font-['Spline_Sans']">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="size-15 border border-gray-50 rounded-full flex items-center justify-center text-[#3c3cf6] group-hover:scale-110 transition-transform">
                           <img src={logo} alt="" />
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight text-[#111118]">ToyTopia</h1>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks}
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-4">
                        {user ? (
                            <>
                                {/* Profile Pic */}
                                <div className="relative group cursor-pointer hidden sm:block">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-[#3c3cf6]/20"
                                        style={{ backgroundImage: `url("${user?.photoURL || 'https://i.ibb.co/4pDNDk1/avatar.png'}")` }}
                                    >
                                    </div>
                                    <div className="absolute right-0 mt-2 w-max px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none top-full z-50">
                                        {user?.displayName || "User"}
                                    </div>
                                </div>
                                {/* Logout Button */}
                                <button
                                    onClick={handleLogOut}
                                    className="hidden sm:flex items-center justify-center h-10 px-6 bg-[#3c3cf6] hover:bg-[#2563eb] text-white text-sm font-bold rounded-full transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            /* Login Button */
                            <Link
                                to="/login"
                                className="hidden sm:flex items-center justify-center h-10 px-6 bg-[#3c3cf6] hover:bg-[#2563eb] text-white text-sm font-bold rounded-full transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                                Login
                            </Link>
                        )}

                        {/* Mobile Menu Icon */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="sm:hidden p-2 text-[#111118]"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-[#f0f0f5] px-4 py-4 flex flex-col gap-4 shadow-lg">
                    {navLinks}
                    {user ? (
                        <button
                            onClick={handleLogOut}
                            className="w-full h-10 bg-[#3c3cf6] hover:bg-[#2563eb] text-white font-bold rounded-full transition-colors"
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="w-full flex items-center justify-center h-10 bg-[#3c3cf6] hover:bg-[#2563eb] text-white font-bold rounded-full transition-colors">
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;