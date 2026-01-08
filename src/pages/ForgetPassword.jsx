import { useState } from "react";
import { Link } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";

const auth = getAuth(app);

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleResetPassword = (e) => {
        e.preventDefault();
        
        if (!email) {
            toast.error("Please enter your email address first.");
            return;
        }

        setLoading(true);

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setLoading(false);
                toast.success("Reset link sent to your email!");
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                toast.error("Failed to send reset email. Please try again.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f5f8] font-['Spline_Sans'] px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                
                <div className="text-center mb-8">
                    <span className="material-symbols-outlined text-5xl text-[#3c3cf6] mb-4">
                        lock_reset
                    </span>
                    <h1 className="text-3xl font-black text-[#181111]">Forgot Password?</h1>
                    <p className="text-[#896161] mt-2">
                        Don't worry! Enter your email and we'll send you a reset link.
                    </p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Email Address</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">mail</span>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 text-[#181111] focus:outline-none focus:border-[#3c3cf6] focus:ring-1 focus:ring-[#3c3cf6] transition-all"
                                required
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-12 bg-[#3c3cf6] hover:bg-[#2563eb] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#3c3cf6]/30 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                            "Send Reset Link"
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link to="/login" className="text-sm font-bold text-[#896161] hover:text-[#3c3cf6] transition-colors flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Back to Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ForgetPassword;