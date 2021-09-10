import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getColor, getFontWeight } from '@styles/utils';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledToolTip = styled.span`
  position: absolute;
  padding: 13px 17px;
  background: ${getColor('blue_10')};
  border-radius: 4px;
  font-size: 10px;
  color: ${getColor('steel')};
  line-height: 18px;
  font-weight: ${getFontWeight('regular')};
  letter-spacing: -0.015em;
  animation: ${fadeIn} 0.4s linear;
`;

const ToolTip = ({ className, toolTipText }) => (
  <StyledToolTip className={className}>{documentToReactComponents(toolTipText)}</StyledToolTip>
);

ToolTip.defaultProps = {
  className: null,
};

ToolTip.propTypes = {
  className: PropTypes.string,
  toolTipText: PropTypes.string.isRequired,
};

export default ToolTip;
