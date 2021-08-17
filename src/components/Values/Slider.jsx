import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import { getColor, getMedias } from '@styles/utils';

import ValuesCard from './ValuesCard';

SwiperCore.use([Autoplay, Pagination]);

const Slider = ({ data }) => {
  const renderCards = () =>
    data.map((card) => (
      <SwiperSlide key={card.title}>
        <ValuesCard card={card} />
      </SwiperSlide>
    ));

  return (
    <Wrapper>
      <StyledSwiper
        spaceBetween={200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {renderCards()}
      </StyledSwiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledSwiper = styled(Swiper)`
  overflow: visible;
  width: 380px;

  @media (max-width: ${getMedias('mobile')}) {
    width: 20.4rem;
  }

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

Slider.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Slider;
