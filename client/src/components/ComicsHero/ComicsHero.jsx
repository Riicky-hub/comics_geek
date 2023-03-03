import React from 'react';
import { Image } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';

// https://gateway.marvel.com:443/v1/public/comics?orderBy=${order}&limit=${limit}&apikey=${publicKey}

const Comic = ({ list }) => {
  let comics = list;
  return (
    <div>
      {comics ? (
        <div>
          <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='mySwiper'>
            {comics.map((comic) => {
              return (
                <SwiperSlide key={comic.id}>
                  <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Comic;
