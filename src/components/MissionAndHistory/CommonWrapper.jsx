import styled from 'styled-components';

import { getMedias } from '@styles/utils';

const CommonWrapper = styled.section`
  display: grid;
  grid-auto-rows: min-content;
  margin: 6.625rem auto 9.25rem auto;
  max-width: 1197px;

  & h2 {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }

  @media (max-width: ${getMedias('desktop')}) {
    margin: 6.625rem 2rem 9.25rem 2rem;
  }

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    font-size: 14px;
    line-height: 28px;
    margin: 6.625rem 0 2.625rem;
  }

  @media (max-width: ${getMedias('tablet')}) {
    & h2 {
      font-weight: 800;
      font-size: 24px;
      line-height: 32px;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    margin: 5rem 2rem 4.375rem;
  }
`;

export default CommonWrapper;
