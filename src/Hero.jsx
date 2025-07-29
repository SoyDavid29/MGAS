import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Hero() {


    const images = [
        "images/imagen5.png",
        "images/imagen4.png",
        "images/imagen3.png",
        "images/imagen2.png",
        "images/imagen1.png",
    ];



    return (
        <section className="hero">

            <Swiper
                className='galery'
                modules={[Navigation, Autoplay]}
                navigation
                loop
                spaceBetween={20}
                slidesPerView={1}

                autoplay={{
                    delay: 4000, // 4 seconds
                    disableOnInteraction: false, // Keeps autoplay running even after user interaction
                }}
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <img src={src} alt={`Image ${i}`} style={{ width: "100%" }} />
                    </SwiperSlide>
                ))}

                <h1 className="tittle" >SOMOS UNA FUNDACIÓN SIN FINES DE LUCRO</h1>

            </Swiper>

            <div className="texts-container">

                <div className="text-container1">
                    <h1 className="min-text">PRESIDENTA</h1>
                    <a className="button1" href="#presidenta">Más Info.</a>
                </div>

                <div className="text-container2">
                    <h1 className="min-text">DONACIONES</h1>
                    <a className="button1" href="#presidenta">Más Info.</a>
                </div>

                <div className="text-container3">
                    <h1 className="min-text">CONTACTO</h1>
                    <a className="button1" href="#presidenta">Más Info.</a>
                </div>

            </div>

        </section>
    )
}