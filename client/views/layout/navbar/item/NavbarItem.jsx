import './navbarItem.scss';
import React, { createElement } from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';


const NavbarItem = ({
  className,
  href,
  externalLink,
  opensNewTab,
  text,
}) => {
  const tag = href ? ( externalLink ? 'a' : Link ) : 'span';
  const classes = cx( 'navbar-item', className );
  const element = createElement( tag, {
    ...href && {
      to: href,
    },
    ...externalLink && {
      href,
      ...opensNewTab && {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    },
  }, (
    <p>{text}</p>
  ));

  return (
    <li styleName={classes}>{element}</li>
  );
};

NavbarItem.propTypes = {
  className: string,
  href: string,
  externalLink: bool,
  opensNewTab: bool,
  text: string.isRequired,
};

export default NavbarItem;
