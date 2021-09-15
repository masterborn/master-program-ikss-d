import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSM from '@components/Icon/IconSM';
import { getColor, getMedias } from '@styles/utils';

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  & h5 {
    margin-left: 16px;
  }

  &:hover circle {
    fill: ${getColor('blue_20')};
  }

  @media (max-width: ${getMedias('homeHero')}) {
    & h5 {
      display: none;
    }
  }
`;

const HomePageHeroSMLink = ({ hrefLink, linkIcon, linkText }) => (
  <Wrapper href={hrefLink}>
    <IconSM icon={linkIcon} size="3em" media="2.3em" />
    <h5>{linkText}</h5>
  </Wrapper>
);

HomePageHeroSMLink.propTypes = {
  hrefLink: PropTypes.string.isRequired,
  linkIcon: PropTypes.shape({}).isRequired,
  linkText: PropTypes.string.isRequired,
};

export default HomePageHeroSMLink;
