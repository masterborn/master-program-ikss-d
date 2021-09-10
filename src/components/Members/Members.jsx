import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import MemberCard from '@components/Members/MemberCard';

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  text-align: center;

  & > p {
    max-width: 635px;
  }
`;

const MembersWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
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

      <MembersWrapper>{renderMembersCards()}</MembersWrapper>
    </Wrapper>
  );
};

Members.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Members;
