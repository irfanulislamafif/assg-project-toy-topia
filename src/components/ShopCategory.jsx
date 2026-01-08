const ShopCategory = () => {
  const categories = [
    { name: "Puzzles", img: "https://i.ibb.co.com/q3vQqJ5x/61-Tkpb-Q-ORL.jpg" },
    {
      name: "Action Figures",
      img: "https://i.ibb.co.com/k2r64rpt/photo-1485827404703-89b55fcc595e.avif",
    },
    {
      name: "Plushies",
      img: "https://i.ibb.co.com/5gw8SwyV/b25195593b98e5dc12af4de1fdbc6db6-jpg-960x960q80-jpg.webp",
    },
    {
      name: "Lego",
      img: "https://i.ibb.co.com/WhhRNVc/images-1.jpg",
    },
    {
      name: "Educational",
      img: "https://i.ibb.co.com/Y7pNwP2z/1-df0e79da-8cae-41ef-85a3-1717019b2fe0.webp",
    },
  ];

  return (
    <div>
      {/* Main Category Section */}
      <section className="py-16 bg-[#f5f5f8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#3c3cf6] font-bold tracking-widest uppercase text-xs mb-2 block">
            Find your fun
          </span>
          <h2 className="text-3xl font-bold text-[#111118] mb-12">
            Shop by Category
          </h2>

          {/* Category Circles */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-4 group cursor-pointer">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#3c3cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-bold text-lg text-[#111118] group-hover:text-[#3c3cf6] transition-colors">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wavy Divider */}
      <div className="w-full leading-[0] bg-[#f5f5f8] relative z-20">
        <svg
          className="block w-full h-[50px] md:h-[80px]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-blue-50"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ShopCategory;
