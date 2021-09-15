import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getMedias, getShadow } from '@styles/utils';

const StyledImage = styled.div`
  --imageWidth: 483px;
  --imageHeight: ${({ isMission }) => (isMission ? '265px' : '352px')};
  position: relative;
  width: var(--imageWidth);
  height: var(--imageHeight);
  margin-left: 3rem;
  margin-top: ${({ isMission }) => (isMission ? '3rem' : '0rem')};
  margin-top: ${({ isMission, isIndented }) => !isIndented && isMission && '0rem'};
  box-shadow: ${getShadow('cardShadow')};
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 1280px) {
    margin: 0;
  }
  @media (max-width: 550px) {
    --imageWidth: 327px;
    --imageHeight: ${({ isMission }) => (isMission ? '201px' : '238px')};
    border-radius: 8px;
  }
  @media (max-width: 360px) {
    transform: scale(0.8);
  }
`;
const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 658px;
  margin-bottom: 2rem;
  & > p {
    margin-bottom: 2rem;
  }
  ${({ isIndented }) =>
    isIndented &&
    css`
      text-indent: 3rem;
    `}
  @media (max-width: 1280px) {
    width: 483px;
  }
  @media (max-width: ${getMedias('laptop')}) {
    width: 483px;
    margin: 2rem 0;
  }
  @media (max-width: 550px) {
    width: 327px;
  }
  @media (max-width: 360px) {
    width: 261px;
    margin: 2rem;
  }
`;
const CommonSection = ({ url, alt, title, text, isMission, isIndented }) => (
  <>
    <StyledImage isMission={isMission} isIndented={isIndented}>
      <Image src={url} alt={alt} layout="fill" />
    </StyledImage>
    <TextWrapper isIndented={isIndented}>
      {title && <h2>{title}</h2>}
      {documentToReactComponents(text)}
    </TextWrapper>
  </>
);
CommonSection.defaultProps = {
  title: null,
  isMission: false,
  isIndented: false,
};
CommonSection.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.instanceOf(Object).isRequired,
  isMission: PropTypes.bool,
  isIndented: PropTypes.bool,
  alt: PropTypes.string.isRequired,
};
export default CommonSection;
