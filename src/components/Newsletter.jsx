// src/components/Newsletter.jsx

const Newsletter = () => {
    return (
        <div className="mt-16 bg-[#3c3cf6] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-white rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <span className="material-symbols-outlined text-5xl mb-4">mark_email_unread</span>
                <h2 className="text-3xl font-black mb-4">Never Miss an Update!</h2>
                <p className="text-blue-100 mb-8">
                    Subscribe to our premium newsletter and get the latest toy trends and exclusive discounts delivered to your inbox.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="flex-grow h-12 rounded-full px-6 text-[#181111] focus:outline-none focus:ring-4 focus:ring-blue-400 border-none"
                    />
                    <button className="h-12 bg-[#181111] hover:bg-gray-900 text-white px-8 rounded-full font-bold transition-all shadow-lg">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;