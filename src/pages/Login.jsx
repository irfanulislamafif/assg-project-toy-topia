import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router"; 
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error("Invalid email or password!");
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success("Google Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error("Google Login Failed!");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f8] relative overflow-hidden font-['Spline_Sans'] py-10">
            {/* Dynamic Title */}
            <Helmet>
                <title>ToyTopia | Login</title>
            </Helmet>

            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#EAB308]/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#EF4444]/15 rounded-full blur-[80px] animate-pulse"></div>

            <div className="w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col relative z-10">
                <div className="h-3 w-full flex">
                    <div className="flex-1 bg-[#3c3cf6]"></div>
                    <div className="flex-1 bg-[#EAB308]"></div>
                    <div className="flex-1 bg-[#EF4444]"></div>
                </div>

                <div className="px-8 pt-10 pb-12 flex flex-col gap-6">
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center justify-center p-3 mb-2 rounded-full bg-[#3c3cf6]/10 text-[#3c3cf6]">
                            <span className="material-symbols-outlined text-3xl">sentiment_satisfied</span>
                        </div>
                        <h1 className="text-[#111118] tracking-tight text-[32px] font-bold leading-tight">Welcome Back!</h1>
                        <p className="text-[#60608a] text-base font-normal leading-normal">Log in to view your toy collection.</p>
                    </div>

                    <form onSubmit={handleLogin} className="flex flex-col gap-5 mt-2">
                        <label className="flex flex-col gap-1.5">
                            <span className="text-[#111118] text-sm font-bold ml-1">Email</span>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3c3cf6] transition-colors">mail</span>
                                <input 
                                    name="email" 
                                    type="email" 
                                    required 
                                    className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-200 bg-gray-50 text-[#111118] focus:outline-none focus:border-[#3c3cf6] focus:ring-2 focus:ring-[#3c3cf6]/20 transition-all placeholder:text-gray-400 font-normal" 
                                    placeholder="parent@example.com" 
                                />
                            </div>
                        </label>

                        <label className="flex flex-col gap-1.5">
                            <div className="flex justify-between items-center ml-1">
                                <span className="text-[#111118] text-sm font-bold">Password</span>
                                <Link to="/forget-password" className="text-sm font-medium text-[#3c3cf6] hover:underline">Forgot Password?</Link>
                            </div>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#3c3cf6] transition-colors">lock</span>
                                <input 
                                    name="password" 
                                    type={showPassword ? "text" : "password"} 
                                    required 
                                    className="w-full h-12 pl-12 pr-12 rounded-full border border-gray-200 bg-gray-50 text-[#111118] focus:outline-none focus:border-[#3c3cf6] focus:ring-2 focus:ring-[#3c3cf6]/20 transition-all placeholder:text-gray-400 font-normal" 
                                    placeholder="Enter your password" 
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#111118] focus:outline-none"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            </div>
                        </label>

                        <button type="submit" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-4 bg-[#3c3cf6] hover:bg-[#2563eb] text-white text-base font-bold shadow-lg shadow-[#3c3cf6]/30 transition-all active:scale-95 mt-2">
                            <span>Log In</span>
                        </button>
                    </form>

                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">or continue with</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <button onClick={handleGoogleLogin} className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full h-12 px-4 bg-white border border-gray-200 hover:bg-gray-50 text-[#111118] text-base font-bold transition-all active:scale-95">
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                        </svg>
                        <span>Google</span>
                    </button>

                    <div className="text-center pt-2">
                        <p className="text-sm font-medium text-gray-500">
                            New here? <Link to="/register" className="text-[#3c3cf6] hover:underline font-bold">Join the fun!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;