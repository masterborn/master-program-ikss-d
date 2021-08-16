import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getMedias } from '@styles/utils';

const Wrapper = styled.a`
  width: 180px;
  height: 80px;

  & > img {
    object-fit: scale-down;
    width: inherit;
    height: inherit;
  }

  @media (max-width: ${getMedias('mobile')}) {
    width: 92.55px;
    height: 41.13px;
  }
`;

const CooperationCard = ({ linkUrl, logo, altText }) => {
  return (
    <Wrapper href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={altText} />
    </Wrapper>
  );
};

CooperationCard.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default CooperationCard;
