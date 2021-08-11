import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getColor } from '@root/styles/utils';

const NavLink = ({ url, linkLabel }) => {
  console.log('tak');
  const router = useRouter();

  return (
    <Link href={url} router={router}>
      <PageLink href={url} router={router}>
        {linkLabel}
      </PageLink>
    </Link>
  );
};

const PageLink = styled.a.attrs(({ router, url }) => ({
  color: router.pathname === url ? getColor('navy') : '',
}))`
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;

NavLink.propTypes = {
  url: PropTypes.string.isRequired,
  linkLabel: PropTypes.string.isRequired,
};

export default NavLink;
