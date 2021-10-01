import styled from 'styled-components';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getAnimation, getColor, getFontWeight } from '@styles/utils';

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
  animation: ${getAnimation('fadeIn')} 0.4s linear;
`;

const ToolTip = ({ className, toolTipText }) => {
  const text =
    typeof toolTipText === 'object' ? documentToReactComponents(toolTipText) : toolTipText;

  return <StyledToolTip className={className}>{text}</StyledToolTip>;
};

ToolTip.defaultProps = {
  className: null,
};

ToolTip.propTypes = {
  className: PropTypes.string,
  toolTipText: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]).isRequired,
};

export default ToolTip;
