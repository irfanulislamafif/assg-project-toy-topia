// src/components/BlogGrid.jsx

const BlogGrid = ({ blogs }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                    
                    {/* Image */}
                    <div className="h-48 overflow-hidden relative">
                        <img 
                            src={blog.img} 
                            alt={blog.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#181111]">
                            {blog.date}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#3c3cf6] uppercase tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-[#3c3cf6]"></span>
                            Parenting Tips
                        </div>
                        
                        <h3 className="text-xl font-bold text-[#181111] mb-3 leading-tight hover:text-[#3c3cf6] cursor-pointer transition-colors">
                            {blog.title}
                        </h3>
                        
                        <p className="text-[#896161] text-sm mb-4 line-clamp-3 flex-grow">
                            {blog.desc}
                        </p>
                        
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                            <span className="text-xs font-bold text-gray-400">By {blog.author}</span>
                            <button className="text-[#3c3cf6] text-sm font-bold hover:underline flex items-center gap-1">
                                Read More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogGrid;