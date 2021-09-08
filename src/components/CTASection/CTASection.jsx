import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Button from '@components/Button/Button';
import { getMedias } from '@styles/utils';

const CTASection = styled.section`
  --pdg-bottom: 148px;
  --pdg-center: 450px;

  display: grid;
  place-items: center;
  gap: 32px;
  padding: 0 var(--pdg-center) var(--pdg-bottom);
  text-align: center;
  background: linear-gradient(0deg, rgb(244 250 255) 0%, rgb(255 255 255 / 0%) 100%);

  @media (max-width: 1600px) {
    --pdg-center: 380px;
  }

  @media (max-width: 1400px) {
    --pdg-center: 222px;
  }

  @media (max-width: ${getMedias('laptop')}) {
    --pdg-center: 100px;
  }

  @media (max-width: ${getMedias('tablet')}) {
    --pdg-bottom: 103px;
    --pdg-center: 50px;
  }

  @media (max-width: ${getMedias('mobile')}) {
    --pdg-center: 24px;
    gap: 16px;

    & h3 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

const ContactSection = ({ data }) => (
  <CTASection>
    <h3>{data.title}</h3>
    {documentToReactComponents(data.text1)}
    <Button>{data.linkCaption}</Button>
  </CTASection>
);

ContactSection.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ContactSection;
