import styled from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '@components/Icon/Icon';
import { getMedias } from '@styles/utils';

const HeroSMLink = ({ hrefLink, linkIcon, linkText }) => (
  <Wrapper href={hrefLink} target="_blank" rel="noopener noreferrer">
    <Icon icon={linkIcon} size="3em" media="2.3em" />
    <h5>{linkText}</h5>
  </Wrapper>
);

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  & h5 {
    margin-left: 16px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    & h5 {
      display: none;
    }
  }
`;

HeroSMLink.propTypes = {
  hrefLink: PropTypes.string.isRequired,
  linkIcon: PropTypes.shape({}).isRequired,
  linkText: PropTypes.string.isRequired,
};

export default HeroSMLink;
