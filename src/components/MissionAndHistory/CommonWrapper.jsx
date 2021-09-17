import styled from 'styled-components';

import { getMedias } from '@styles/utils';

const CommonWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 6.625rem 0 9.25rem;

  & h2 {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
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
