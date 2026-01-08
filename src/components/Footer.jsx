import { Link } from "react-router";
import logo from "../assets/toytopia-removebg-preview.png"
const Footer = () => {
    return (
        <footer className="bg-[#101022] text-white pt-16 pb-8 mt-auto font-['Spline_Sans']">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="size-10 bg-white rounded-full flex items-center justify-center text-white">
                                <img src={logo} alt="" />
                            </div>
                            <h2 className="text-2xl font-bold">ToyTopia</h2>
                        </div>
                        <p className="text-slate-400 mb-6">Bringing smiles and imagination to children everywhere. Your local partner in play.</p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#3c3cf6] transition-colors" href="#">
                                <span className="font-bold text-sm">FB</span>
                            </a>
                            <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#3c3cf6] transition-colors" href="#">
                                <span className="font-bold text-sm">IG</span>
                            </a>
                            <a className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#3c3cf6] transition-colors" href="#">
                                <span className="font-bold text-sm">X</span>
                            </a>
                        </div>
                    </div>
                    {/* Links 1 */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Shop</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link className="hover:text-[#3c3cf6] transition-colors" to="/all-toys">All Toys</Link></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">New Arrivals</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Best Sellers</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Deals</a></li>
                        </ul>
                    </div>
                    {/* Links 2 */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">About Us</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Contact</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Careers</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Store Locator</a></li>
                        </ul>
                    </div>
                    {/* Links 3 */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Support</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Shipping Policy</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Returns & Refunds</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">FAQ</a></li>
                            <li><a className="hover:text-[#3c3cf6] transition-colors" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} ToyTopia. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-white" href="#">Privacy Policy</a>
                        <a className="hover:text-white" href="#">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;