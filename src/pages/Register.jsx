import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // Reset Error
        setPasswordError("");

        // Password Validation
        if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("Password must contain at least one Uppercase letter.");
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setPasswordError("Password must contain at least one Lowercase letter.");
            return;
        }

        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // Update Profile
                updateUserProfile(name, photo)
                    .then(() => {
                        toast.success("Registration Successful!");
                        navigate("/");
                        // Note: You might want to reload or update context manually if the name doesn't show immediately
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            });
    };

    // Google Sign In Handler
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Google Sign-Up Successful!");
                navigate("/");
            })
            .catch(error => {
                toast.error("Google Sign-Up Failed!");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f8] relative overflow-hidden font-['Spline_Sans'] py-10">
            {/* Decorative Floating Shapes */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-[#EAB308] rounded-full blur-xl opacity-60 animate-bounce delay-700 hidden lg:block"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#EF4444] rounded-full blur-xl opacity-60 animate-bounce delay-100 hidden lg:block"></div>

            <div className="w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white relative z-10">
                {/* Header Bar */}
                <div className="h-3 w-full bg-gradient-to-r from-[#3c3cf6] via-[#EAB308] to-[#EF4444]"></div>

                <div className="p-8 sm:p-10 flex flex-col gap-6">
                    {/* Heading */}
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-2">
                            <span className="material-symbols-outlined text-[#3c3cf6] text-3xl">celebration</span>
                        </div>
                        <h1 className="text-[#111118] text-3xl sm:text-4xl font-black tracking-tight">Join the Fun!</h1>
                        <p className="text-[#60608a] font-medium">Create your account to start playing.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleRegister} className="flex flex-col gap-5 mt-2">
                        {/* Name Field */}
                        <div className="space-y-1">
                            <label className="text-[#111118] text-sm font-bold ml-3">Full Name</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">person</span>
                                <input name="name" required className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-200 bg-gray-50 text-[#111118] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3c3cf6] focus:border-transparent transition-all shadow-sm" placeholder="Captain Toy" type="text"/>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <label className="text-[#111118] text-sm font-bold ml-3">Email Address</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">mail</span>
                                <input name="email" required className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-200 bg-gray-50 text-[#111118] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3c3cf6] focus:border-transparent transition-all shadow-sm" placeholder="parent@example.com" type="email"/>
                            </div>
                        </div>

                        {/* Photo URL Field */}
                        <div className="space-y-1">
                            <label className="text-[#111118] text-sm font-bold ml-3">Photo URL</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">image</span>
                                <input name="photo" className="w-full h-12 pl-12 pr-4 rounded-full border border-gray-200 bg-gray-50 text-[#111118] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3c3cf6] focus:border-transparent transition-all shadow-sm" placeholder="https://example.com/my-photo.jpg" type="url"/>
                            </div>
                        </div>

                        {/* Password Field with Toggle */}
                        <div className="space-y-1">
                            <label className="text-[#111118] text-sm font-bold ml-3">Password</label>
                            <div className="relative group/pass">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/pass:text-[#3c3cf6] transition-colors">lock</span>
                                <input 
                                    name="password" 
                                    required 
                                    className="w-full h-12 pl-12 pr-12 rounded-full border border-gray-200 bg-gray-50 text-[#111118] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3c3cf6] focus:border-transparent transition-all shadow-sm" 
                                    placeholder="••••••••" 
                                    type={showPassword ? "text" : "password"}
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
                            {passwordError && (
                                <p className="text-xs text-[#EF4444] ml-3 mt-1 font-bold">{passwordError}</p>
                            )}
                            <p className="text-xs text-gray-500 ml-3 flex items-start gap-1">
                                <span className="material-symbols-outlined text-[14px] text-[#EAB308] mt-0.5">info</span>
                                Must be 6+ chars, contain uppercase & lowercase
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button className="mt-4 w-full h-14 bg-[#3c3cf6] hover:bg-[#2563eb] text-white font-bold text-lg rounded-full shadow-lg shadow-[#3c3cf6]/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                            <span>Start Playing</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">or</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    {/* Google Button */}
                    <button onClick={handleGoogleLogin} className="w-full h-12 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-full border border-gray-200 shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                        </svg>
                        Sign up with Google
                    </button>

                    {/* Footer */}
                    <p className="text-center text-gray-500 text-sm">
                        Already have an account? <Link to="/login" className="text-[#3c3cf6] font-bold hover:underline">Log In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;