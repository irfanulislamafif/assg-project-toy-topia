import Loader from "../components/Loader";
import useBlogs from "../hooks/useBlogs";
import BlogGrid from "../components/BlogGrid";
import Newsletter from "../components/Newsletter";

const ExtraRoute = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-bold">
        Error loading blogs: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f8] font-['Spline_Sans'] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-[#3c3cf6]/10 text-[#3c3cf6] font-bold px-4 py-2 rounded-full text-xs uppercase tracking-widest">
            Premium Content
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#181111] mt-4 mb-4">
            ToyTopia Community Blog
          </h1>
          <p className="text-[#896161] text-lg max-w-2xl mx-auto">
            Exclusive tips, reviews, and parenting guides for our registered
            members.
          </p>
        </div>

        <BlogGrid blogs={blogs} />

        <Newsletter />
      </div>
    </div>
  );
};

export default ExtraRoute;
