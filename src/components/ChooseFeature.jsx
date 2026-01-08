const ChooseFeature = () => {
    return (
        <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-[#111118]">Why Choose ToyTopia?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 text-[#3c3cf6] rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-3xl">local_shipping</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#111118] mb-2">Fast Delivery</h3>
                        <p className="text-slate-500">Free shipping on all orders over $50. We deliver joy right to your doorstep swiftly.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#111118] mb-2">Quality Assured</h3>
                        <p className="text-slate-500">Every toy is tested for safety and durability. Only the best for your little ones.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-3xl">storefront</span>
                        </div>
                        <h3 className="text-xl font-bold text-[#111118] mb-2">Support Local</h3>
                        <p className="text-slate-500">We are a locally owned business bringing the community together through play.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseFeature;