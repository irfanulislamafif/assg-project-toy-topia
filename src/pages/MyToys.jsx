import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useToys from "../hooks/useToys";
import Loader from "../components/Loader";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const { toys, loading } = useToys();
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        if (toys.length > 0) {
           
            setMyToys(toys); 
        }
    }, [toys, user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4343",
            cancelButtonColor: "#3c3cf6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const remaining = myToys.filter(t => t.toyId !== id);
                setMyToys(remaining);
                Swal.fire("Deleted!", "Your toy has been deleted.", "success");
            }
        });
    };

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen bg-[#f5f5f8] py-12 px-4 font-['Spline_Sans']">
            <div className="max-w-7xl mx-auto">
                
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-[#181111]">My Toys</h1>
                    <p className="text-[#896161]">Manage all the toys you have added.</p>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#f8f9fa] border-b border-gray-100">
                                    <th className="p-6 text-sm font-bold text-[#181111]">Toy Image</th>
                                    <th className="p-6 text-sm font-bold text-[#181111]">Name & Category</th>
                                    <th className="p-6 text-sm font-bold text-[#181111]">Price</th>
                                    <th className="p-6 text-sm font-bold text-[#181111]">Quantity</th>
                                    <th className="p-6 text-sm font-bold text-[#181111] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myToys.map((toy) => (
                                    <tr key={toy.toyId} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                                        <td className="p-6">
                                            <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                                                <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-full object-contain" />
                                            </div>
                                        </td>
                                        <td className="p-6">
                                            <h3 className="font-bold text-[#181111]">{toy.toyName}</h3>
                                            <span className="text-xs font-bold text-[#3c3cf6] bg-[#3c3cf6]/10 px-2 py-1 rounded-md mt-1 inline-block">
                                                {toy.subCategory}
                                            </span>
                                        </td>
                                        <td className="p-6 font-bold text-[#181111]">${toy.price}</td>
                                        <td className="p-6 font-medium text-[#896161]">{toy.availableQuantity} left</td>
                                        <td className="p-6 text-right">
                                            <div className="flex items-center justify-end gap-3">
                                                <button className="w-10 h-10 rounded-full bg-blue-50 text-[#3c3cf6] hover:bg-[#3c3cf6] hover:text-white transition-all flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-lg">edit</span>
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(toy.toyId)}
                                                    className="w-10 h-10 rounded-full bg-red-50 text-[#ef4343] hover:bg-[#ef4343] hover:text-white transition-all flex items-center justify-center"
                                                >
                                                    <span className="material-symbols-outlined text-lg">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {myToys.length === 0 && (
                        <div className="p-12 text-center text-[#896161]">
                            No toys found. Add some toys first!
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default MyToys;