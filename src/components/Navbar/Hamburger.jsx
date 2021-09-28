import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getColor } from '@styles/utils';

const Wrapper = styled.button`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-left: auto;
  padding: 10px;

  span {
    height: 3px;
    width: 24px;
    background: ${getColor('ikksBlue')};
    margin-bottom: 4px;
    border-radius: 103px;
  }

  @media (max-width: 1100px) {
    display: flex;
  }
`;

const Hamburger = ({ openMenu }) => (
  <Wrapper onClick={openMenu}>
    <span />
    <span />
    <span />
  </Wrapper>
);

Hamburger.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Hamburger;
