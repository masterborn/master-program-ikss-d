import styled from 'styled-components';
import Link from 'next/link';

import Logo404 from '@assets/404-background.svg';
import Button from '@components/Button/Button';
import Navbar from '@components/Navbar/Navbar';
import { getMedias } from '@styles/utils';

const Wrapper = styled.section`
  margin: 116px auto 132px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;

  & svg {
    margin-bottom: 57px;
  }

  & h1,
  p {
    margin-bottom: 32px;
  }

  & p {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.015em;
  }

  @media (max-width: ${getMedias('laptop')}) {
    & p {
      width: 90%;
      text-align: center;
    }
  }

  @media (max-width: ${getMedias('tablet')}) {
    & svg {
      transform: scale(0.6);
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    margin-top: 50px;

    & svg {
      transform: scale(0.5);
      margin-bottom: 0;
    }

    & h1 {
      font-size: 40px;
      line-height: 56px;
    }

    & p {
      font-size: 14px;
      line-height: 28px;
    }
  }
`;

const errorPage = () => (
  <>
    <Navbar
      urls={{
        fblink: 'https://pl-pl.facebook.com',
        inlink: 'https://www.instagram.com',
        ytlink: 'https://www.youtube.com',
        lnlink: 'https://pl.linkedin.com',
      }}
    />
    <Wrapper>
      <Logo404 />
      <h1>ups, 404</h1>
      <p>Za każdym razem kiedy trafiasz na tę stronę, ktoś wymawia „i-ka-ka-es” zamiast „ikss”.</p>
      <Link href="/" passHref>
        <Button buttonLabel="Uciekam stąd" />
      </Link>
    </Wrapper>
  </>
);

export default errorPage;
