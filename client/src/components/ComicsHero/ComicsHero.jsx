import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { publicKey } from '../../constants';
import { Image } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper';

// https://gateway.marvel.com:443/v1/public/comics?orderBy=${order}&limit=${limit}&apikey=${publicKey}

const Comic = ({ limit, order = 'focDate' }) => {
  const url = `https://gateway.marvel.com:443/v1/public/comics?startYear=2023&orderBy=${order}&limit=${limit}&apikey=${publicKey}`;
  const [comics, setComics] = useState();
  useEffect(() => {
    const fetchAll = async () => {
      const res = await axios.get(url).catch((err) => console.log(err));
      setComics(res.data.data.results);
    };
    fetchAll();
  }, [url]);
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
