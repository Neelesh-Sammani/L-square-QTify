import './carousel.css';
import Card from '../Card';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Virtual,Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const Carousel = ({data,navId}) => {
    return (
        <div className='carousel-container'>
            <Swiper 
            modules={[Virtual,Navigation]} 
            slidesPerView={8}
            spaceBetween={30}
            navigation={{prevEl:`#arrow-left-${navId}`,nextEl:`#arrow-right-${navId}`}}
            virtual >
                {data.map(cardData => <SwiperSlide key={cardData.id}><Card imgSrc={cardData.image} followersCount={cardData.follows} label={cardData.title} /></SwiperSlide>)}
            </Swiper>
            <div className='arrow-left arrow' id={`arrow-left-${navId}`} ><img src='./leftIcon.png' alt='left-icon' /></div>
            <div className='arrow-right arrow' id={`arrow-right-${navId}`}><img src='./rightIcon.png' alt='right-icon' /></div>
        </div>
    )
}

export default Carousel;