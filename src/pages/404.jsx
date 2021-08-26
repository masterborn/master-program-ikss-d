import styled from 'styled-components';

import Logo404part1 from '@assets/404part1.svg';
import Logo404part2 from '@assets/404part2.svg';
import Button from '@components/Button/Button';
import Navbar from '@components/Navbar/Navbar';
import { getMedias } from '@styles/utils';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);

  & div {
    position: relative;
    margin-bottom: 57px;
    width: 100%;
    height: 464px;
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
    & div {
      transform: scale(0.6);
      height: 300px;
      margin-top: 50px;
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    & div {
      transform: scale(0.47);
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

    & a {
      margin-bottom: 50px;
    }
  }
`;

const StyledLogoPart1 = styled(Logo404part1)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLogoPart2 = styled(Logo404part2)`
  position: absolute;
  top: 74%;
  left: 49%;
  transform: translate(-50%, -50%);
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
      <div>
        <StyledLogoPart1 />
        <StyledLogoPart2 />
      </div>
      <h1>ups, 404</h1>
      <p>
        Za każdym razem kiedy trafiasz na tę stronę, ktoś wymawia „i-ka-ka-es” zamiast{' '}
        <strong>„ikss”</strong>.
      </p>
      <Button href="/" link>
        Uciekam stąd
      </Button>
    </Wrapper>
  </>
);

export default errorPage;
