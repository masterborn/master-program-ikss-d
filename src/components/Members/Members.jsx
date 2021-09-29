import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import MemberCard from '@components/Members/MemberCard';
import { getMedias } from '@styles/utils';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;

  & > p {
    max-width: 635px;
    margin-bottom: 64px;
  }

  & > h3 {
    margin-bottom: 32px;
  }

  @media (max-width: ${getMedias('tablet')}) {
    & > p {
      max-width: 327px;
      margin-bottom: 57px;
    }

    & > h3 {
      margin-bottom: 16px;
    }
  }
`;

const MembersWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  ${({ length }) =>
    length === 7 &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(6, 1fr);
      align-items: center;
      flex-wrap: wrap;
      grid-template-areas:
        '. first .'
        'second first third'
        'second fourth third'
        'fifth fourth sixth'
        'fifth seventh sixth'
        '. seventh .'
        '. . .';

      & > div:nth-child(1) {
        grid-area: first;
      }

      & > div:nth-child(2) {
        grid-area: second;
      }

      & > div:nth-child(3) {
        grid-area: third;
      }

      & > div:nth-child(4) {
        grid-area: fourth;
      }

      & > div:nth-child(5) {
        grid-area: fifth;
      }

      & > div:nth-child(6) {
        grid-area: sixth;
      }

      & > div:nth-child(7) {
        grid-area: seventh;
      }

      @media (max-width: ${getMedias('desktop')}) {
        display: flex;
        justify-content: center;
        align-items: initial;
        flex-wrap: wrap;
      }
    `}
`;

const Members = ({ data }) => {
  const { title, text1, members } = data;

  const renderMembersCards = () =>
    members
      .sort((a, b) => b.order - a.order)
      .map((member) => <MemberCard key={member.order} member={member} />);

  return (
    <Wrapper>
      <h3>{title}</h3>
      {documentToReactComponents(text1)}
      <MembersWrapper length={members.length}>{renderMembersCards()}</MembersWrapper>
    </Wrapper>
  );
};

Members.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Members;
