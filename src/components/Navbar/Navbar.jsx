import styled from 'styled-components';

import { getColor } from '@root/styles/utils';
import Logo from '@root/components/Logos/Logo';
import Button from '@root/components/Button/index';

const Nav = styled.div`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${getColor('white')};
  box-shadow: 0px 4px 16px rgba(97, 121, 139, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${getColor('steel')};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;

  &:hover {
    color: ${getColor('navy')};
  }
`;

const Hamburger = styled.div`
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 24px;
    background: ${getColor('ikksBlue')};
    margin-bottom: 4px;
    margin-right: 27px;
    border-radius: 103px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ContactButton = styled(Button)`
  height: 36px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopLogo = styled(Logo)`
  height: 48.82px;
  width: 73.57px;

  @media (max-width: 768px) {
    height: 52.83px;
    width: 35.05px;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo as={DesktopLogo} />
      <Menu>
        <MenuLink href="">Strona główna</MenuLink>
        <MenuLink href="">Projekty</MenuLink>
        <MenuLink href="">O nas</MenuLink>
        <MenuLink href="">Współpraca</MenuLink>
      </Menu>
      <Hamburger>
        <span />
        <span />
        <span />
      </Hamburger>
      <Button as={ContactButton} buttonLabel="Skontaktuj się" />
    </Nav>
  );
}

export default Navbar;
