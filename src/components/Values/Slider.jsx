import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { getColor } from '@styles/utils';

SwiperCore.use([Autoplay, Pagination]);

const Slider = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (event) => {
    if (event.matches) setIsVisible(true);
    else setIsVisible(false);
  };

  useEffect(() => {
    const media = window.matchMedia(`(max-width: 380px)`);

    if (media.matches) setIsVisible(true);
    else setIsVisible(false);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Wrapper>
          <StyledSwiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <StyledCard>1</StyledCard>
            </SwiperSlide>
            <SwiperSlide>
              <StyledCard>2</StyledCard>
            </SwiperSlide>
            <SwiperSlide>
              <StyledCard>3</StyledCard>
            </SwiperSlide>
          </StyledSwiper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled.div`
  width: 330px;
  height: 330px;
  background: white;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  margin: auto;
`;

const StyledSwiper = styled(Swiper)`
  height: 384px;
  margin: 0;

  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    border-radius: 0.5rem;
    border: 1px solid ${getColor('ikksBlue')};
    opacity: 1;
    background: inherit;
  }

  .swiper-pagination-bullet-active {
    background-color: ${getColor('ikksBlue')};
  }
`;

export default Slider;
