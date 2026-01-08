import ToyCard from "./ToyCard";

const PopularToys = ({ toys }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-[#EAB308] font-bold tracking-widest uppercase text-xs mb-2 block">
              Trending Now
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111118]">
              Popular Toys
            </h2>
          </div>
        </div>

        {/* Toys Grid - Shows first 6 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toys.slice(0, 6).map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToys;
