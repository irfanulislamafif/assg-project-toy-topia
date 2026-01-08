import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link } from 'react-router';

const Slider = () => {
    return (
        <div className="w-full font-['Spline_Sans']">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper h-[600px] md:h-[550px]"
            >
                {/* Slide 1: Construction / Blue Theme */}
                <SwiperSlide>
                    <div className="relative w-full h-full bg-[#dbeafe] flex items-center justify-center overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        
                        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                                <span className="px-4 py-1 bg-white/50 backdrop-blur-md text-[#3c3cf6] rounded-full text-sm font-bold uppercase tracking-wider border border-[#3c3cf6]/20">
                                    New Arrivals
                                </span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-[#111118] leading-tight">
                                    Build Your <br />
                                    <span className="text-[#3c3cf6]">Imagination</span>
                                </h2>
                                <p className="text-lg text-slate-700 max-w-md">
                                    Unleash creativity with our newest construction sets. Limitless possibilities for every young architect.
                                </p>
                                <Link to="/all-toys">
                                    <button className="h-12 px-8 bg-[#3c3cf6] hover:bg-[#2563eb] text-white font-bold rounded-full shadow-lg hover:shadow-[#3c3cf6]/50 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                        Shop Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex justify-center h-full items-center">
                                <img 
                                    src="https://i.ibb.co.com/Dg7StmgN/buildingblock.jpg" 
                                    alt="Building Blocks" 
                                    className="w-full max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2: Plushies / Pink Theme */}
                <SwiperSlide>
                    <div className="relative w-full h-full bg-[#fce7f3] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        
                        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                                <span className="px-4 py-1 bg-white/50 backdrop-blur-md text-[#ec4899] rounded-full text-sm font-bold uppercase tracking-wider border border-[#ec4899]/20">
                                    Best Sellers
                                </span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-[#111118] leading-tight">
                                    Softest <br />
                                    <span className="text-[#ec4899]">Cuddle Buddies</span>
                                </h2>
                                <p className="text-lg text-slate-700 max-w-md">
                                    Meet your new best friend. Our plush collection is softer than ever and ready for warm hugs.
                                </p>
                                <Link to="/all-toys">
                                    <button className="h-12 px-8 bg-[#ec4899] hover:bg-[#db2777] text-white font-bold rounded-full shadow-lg hover:shadow-[#ec4899]/50 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                        Shop Plushies <span className="material-symbols-outlined text-sm">favorite</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex justify-center h-full items-center">
                                <img 
                                    src="https://i.ibb.co.com/4Z2BcBgF/teddy-bear.jpg" 
                                    alt="Teddy Bear" 
                                    className="w-full max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3: Action / Yellow Theme */}
                <SwiperSlide>
                    <div className="relative w-full h-full bg-[#fef9c3] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        
                        <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                                <span className="px-4 py-1 bg-white/50 backdrop-blur-md text-[#ca8a04] rounded-full text-sm font-bold uppercase tracking-wider border border-[#ca8a04]/20">
                                    Action
                                </span>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-[#111118] leading-tight">
                                    Race to <br />
                                    <span className="text-[#EAB308]">Victory</span>
                                </h2>
                                <p className="text-lg text-slate-700 max-w-md">
                                    Start your engines! The fastest toy cars in town are lined up and ready to go.
                                </p>
                                <Link to="/all-toys">
                                    <button className="h-12 px-8 bg-[#EAB308] hover:bg-[#ca8a04] text-white font-bold rounded-full shadow-lg hover:shadow-[#EAB308]/50 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                        Start Engines <span className="material-symbols-outlined text-sm">sports_score</span>
                                    </button>
                                </Link>
                            </div>
                            <div className="flex justify-center h-full items-center">
                                <img 
                                    src="https://i.ibb.co.com/tTZfmPDD/photo-1594787318286-3d835c1d207f-q-80-w-1470-auto-format-fit-crop.jpg" 
                                    alt="Race Car" 
                                    className="w-full max-w-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Wavy Divider at Bottom */}
            <div className="w-full leading-[0] bg-white -mt-1 relative z-20">
                <svg className="block w-full h-[50px] md:h-[80px]" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-[#f5f5f8]" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Slider;