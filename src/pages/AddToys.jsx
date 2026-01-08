import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const AddToys = () => {
    const { user } = useContext(AuthContext);

    const handleAddToy = (e) => {
        e.preventDefault();
        const form = e.target;
        
        const newToy = {
            toyName: form.toyName.value,
            pictureURL: form.pictureURL.value,
            sellerName: user?.displayName,
            sellerEmail: user?.email,
            subCategory: form.subCategory.value,
            price: form.price.value,
            rating: form.rating.value,
            availableQuantity: form.quantity.value,
            description: form.description.value,
        };

        console.log(newToy);
        toast.success("Toy added successfully! (Demo)");
        form.reset();
    };

    return (
        <div className="min-h-screen bg-[#f5f5f8] py-12 px-4 font-['Spline_Sans']">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
                
                <div className="text-center mb-10">
                    <span className="material-symbols-outlined text-5xl text-[#3c3cf6] mb-2">add_circle</span>
                    <h2 className="text-3xl font-black text-[#181111]">Add A New Toy</h2>
                    <p className="text-[#896161]">Fill in the details to add a toy to the marketplace.</p>
                </div>

                <form onSubmit={handleAddToy} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Toy Name</label>
                        <input name="toyName" required type="text" placeholder="e.g. Lego City" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#3c3cf6] focus:outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Picture URL</label>
                        <input name="pictureURL" required type="url" placeholder="https://image.com/toy.jpg" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#3c3cf6] focus:outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Seller Name</label>
                        <input name="sellerName" type="text" defaultValue={user?.displayName} readOnly className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Seller Email</label>
                        <input name="sellerEmail" type="email" defaultValue={user?.email} readOnly className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Sub-Category</label>
                        <select name="subCategory" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#3c3cf6] focus:outline-none transition-all cursor-pointer">
                            <option value="Lego">Lego</option>
                            <option value="Action Figures">Action Figures</option>
                            <option value="Plushies">Plushies</option>
                            <option value="Educational">Educational</option>
                            <option value="Vehicles">Vehicles</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Price ($)</label>
                        <input name="price" required type="number" step="0.01" placeholder="29.99" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#3c3cf6] focus:outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Rating (0-5)</label>
                        <input name="rating" required type="number" step="0.1" max="5" placeholder="4.5" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#3c3cf6] focus:outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Available Quantity</label>
                        <input name="quantity" required type="number" placeholder="10" className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#3c3cf6] focus:outline-none transition-all" />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-bold text-[#181111] ml-1">Detail Description</label>
                        <textarea name="description" required rows="4" placeholder="Write a detailed description of the toy..." className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#3c3cf6] focus:outline-none transition-all resize-none"></textarea>
                    </div>

                    <div className="md:col-span-2 mt-4">
                        <button type="submit" className="w-full h-14 bg-[#3c3cf6] hover:bg-[#2563eb] text-white font-bold text-lg rounded-xl shadow-lg shadow-[#3c3cf6]/30 transition-all active:scale-95 flex items-center justify-center gap-2">
                            Add Toy <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddToys;