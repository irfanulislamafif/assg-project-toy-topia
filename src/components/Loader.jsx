const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-200px)] w-full gap-4">
            {/* Bouncing Balls Container */}
            <div className="flex items-center gap-3">
                {/* Primary Blue Ball */}
                <div className="w-5 h-5 bg-[#3c3cf6] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                
                {/* Secondary Yellow Ball */}
                <div className="w-5 h-5 bg-[#EAB308] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                
                {/* Accent Red Ball */}
                <div className="w-5 h-5 bg-[#EF4444] rounded-full animate-bounce"></div>
            </div>

            {/* Optional Text */}
            <h2 className="text-xl font-bold text-[#3c3cf6] animate-pulse tracking-widest">
                Loading...
            </h2>
        </div>
    );
};

export default Loader;