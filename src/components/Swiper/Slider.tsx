import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import {Card} from "../Card/Card";
import serviceCondition from "../../svg-icons/serviceCondition.svg";
import plastic from "../../svg-icons/plastic.svg";
import masks from "../../svg-icons/masks.svg";


export const Slider = () => {

    SwiperCore.use([Navigation]);

    return (
        <Swiper
            navigation
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Card
                    cardHeadline="Сделаем мир чище"
                    cardText="Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"
                    type="button"
                    img={serviceCondition}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    cardHeadline="Сделаем мир чище"
                    cardText="Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"
                    type="button"
                    img={plastic}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Card
                    cardHeadline="Сделаем мир чище"
                    cardText="Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"
                    type="button"
                    img={masks}
                />
            </SwiperSlide>
        </Swiper>
    );
}