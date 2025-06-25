import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const images = [
    { src: "/images/slides/slide-1.webp" },
    { src: "/images/slides/slide-2.webp" },
    { src: "/images/slides/slide-3.webp" }, 
    { src: "/images/slides/slide-4.webp" },
    { src: "/images/slides/slide-5.webp" },
]

export default () => {
    return (
        <Swiper
            effect={'fade'}
             autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay ,Pagination, Navigation, EffectFade]}
            loop={true}
            className="mySwiper"
        >
        {images.map((item, index) => (
            <SwiperSlide key={index}>
                <div className='relative'>
                    <div className='absolute size-full top-0 right-0 bg-gradient-to-t from-white via-transparent to-transparent z-10'></div>
                    <img 
                        src={item.src} 
                        alt={`Slide ${index}`} 
                        loading='eager' 
                    />
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
};