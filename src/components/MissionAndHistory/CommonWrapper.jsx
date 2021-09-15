import styled from 'styled-components';

import { getMedias } from '@styles/utils';

const CommonWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 6rem 2rem;

  & h2 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    font-size: 14px;
    line-height: 28px;
    margin: 2rem;

    & h2 {
      font-weight: 800;
      font-size: 24px;
      line-height: 32px;
      margin-top: 0.5rem;
    }
  }
`;

export default CommonWrapper;
