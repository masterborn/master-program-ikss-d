import styled from 'styled-components';

import { getMedias } from '@styles/utils';

const CommonWrapper = styled.section`
  --margin-top: 9.25rem;
  --margin-bottom: 9.25rem;
  --margin-center: auto;

  display: grid;
  grid-auto-rows: min-content;
  margin: var(--margin-top) var(--margin-center) var(--margin-bottom) var(--margin-center);
  max-width: 1197px;

  & h2 {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }

  @media (max-width: ${getMedias('desktop')}) {
    --margin-center: 2rem;
  }

  @media (max-width: ${getMedias('laptop')}) {
    --margin-top: 6.625rem;
    --margin-center: 4rem;
  }

  @media (max-width: ${getMedias('tablet')}) {
    --margin-top: 5rem;
    --margin-center: 1.5rem;

    & h2 {
      font-weight: 800;
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 1rem;
      margin-top: 0rem;
    }
  }

  @media (max-width: ${getMedias('mobile')}) {
    --margin-bottom: 4.375rem;
  }
`;

const MissionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5rem;
  margin: 0 0 9.25rem;

  @media (max-width: ${getMedias('laptop')}) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    gap: 2rem;
  }
`;

const HistoryWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr min-content;
  gap: 0 56px;

  & h2 {
    margin-top: 0;
  }

  @media (max-width: ${getMedias('desktop')}) {
    gap: 0 28px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    margin-top: 80px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, max-content);

    & p + p {
      margin-top: 32px;
    }
  }
`;

export { CommonWrapper, MissionWrapper, HistoryWrapper };
