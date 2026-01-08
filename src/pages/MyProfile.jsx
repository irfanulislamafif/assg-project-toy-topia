import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const MyProfile = () => {
    const { user, updateUserProfile, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    // Form Handler
    const handleUpdate = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        updateUserProfile(name, photo)
            .then(() => {
                setLoading(false);
                toast.success("Profile Updated Successfully!");
                // Note: Firebase sometimes takes time to reflect changes, a reload might be needed to see photo update immediately
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
                toast.error("Failed to update profile.");
            });
    };

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="min-h-screen bg-[#f5f5f8] py-12 px-4 font-['Spline_Sans']">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Text */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black text-[#181111]">My Account</h1>
                    <p className="text-[#896161]">Manage your profile information</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* --- Left Side: Profile Card --- */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
                            {/* Profile Image */}
                            <div className="relative mb-4">
                                <div className="w-32 h-32 rounded-full p-1 border-4 border-[#3c3cf6]/20">
                                    <img 
                                        src={user?.photoURL || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                                        alt="Profile" 
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-2 right-2 bg-[#3c3cf6] text-white p-2 rounded-full border-2 border-white">
                                    <span className="material-symbols-outlined text-sm">edit</span>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-[#181111]">{user?.displayName}</h2>
                            <p className="text-sm text-[#896161] mb-6">{user?.email}</p>

                            <div className="w-full border-t border-gray-100 my-4"></div>

                            <div className="w-full text-left space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Last Login:</span>
                                    <span className="font-bold text-[#181111]">
                                        {user?.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Status:</span>
                                    <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs">Active</span>
                                </div>
                            </div>

                            <button 
                                onClick={handleLogout}
                                className="mt-auto w-full py-3 bg-red-50 text-red-500 font-bold rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2 mt-8"
                            >
                                <span className="material-symbols-outlined">logout</span>
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* --- Right Side: Edit Form --- */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full">
                            <h3 className="text-xl font-bold text-[#181111] mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#3c3cf6]">manage_accounts</span>
                                Update Details
                            </h3>

                            <form onSubmit={handleUpdate} className="space-y-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#181111] ml-1">Full Name</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">person</span>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            defaultValue={user?.displayName}
                                            className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 text-[#181111] focus:outline-none focus:border-[#3c3cf6] focus:ring-1 focus:ring-[#3c3cf6] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Email Input (Read Only) */}
                                <div className="space-y-2 opacity-60">
                                    <label className="text-sm font-bold text-[#181111] ml-1">Email (Cannot be changed)</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">mail</span>
                                        <input 
                                            type="email" 
                                            defaultValue={user?.email}
                                            readOnly
                                            className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-100 text-[#181111] cursor-not-allowed"
                                        />
                                    </div>
                                </div>

                                {/* Photo URL Input */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#181111] ml-1">Photo URL</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">image</span>
                                        <input 
                                            type="url" 
                                            name="photo" 
                                            defaultValue={user?.photoURL}
                                            className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-gray-50 text-[#181111] focus:outline-none focus:border-[#3c3cf6] focus:ring-1 focus:ring-[#3c3cf6] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        disabled={loading}
                                        className="bg-[#3c3cf6] hover:bg-[#2563eb] text-white w-full md:w-auto px-8 py-3 rounded-xl font-bold text-lg shadow-lg shadow-[#3c3cf6]/30 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        ) : (
                                            <>
                                                <span>Save Changes</span>
                                                <span className="material-symbols-outlined text-sm">save</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;