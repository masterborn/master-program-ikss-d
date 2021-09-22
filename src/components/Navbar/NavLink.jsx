import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getColor } from '@styles/utils';

const NavLink = ({ url, linkLabel, className }) => {
  const router = useRouter();

  return (
    <Link href={url} router={router} passHref>
      <PageLink url={url} router={router} className={className}>
        {linkLabel}
      </PageLink>
    </Link>
  );
};

const PageLink = styled.a.attrs(({ router, url }) => ({
  linkColor: router.pathname === url ? getColor('navy') : getColor('steel'),
}))`
  ${(props) =>
    props.linkColor &&
    css`
      color: ${props.linkColor};
    `}
`;

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  className: null,
};

export default NavLink;
