import './link.scss';
import React from 'react';
import { string, bool, any, func } from 'prop-types';
import cx from 'classnames';
import { Link as ReactRouterLink } from 'react-router-dom';


const Link = ({
  children,
  to,
  externalLink,
  opensInSameTab,
  disabled,
  onClick,
  styleName = '',
  ...restProps
}) => {
  const styles = cx( 'link', styleName );

  const handleClick = event => {
    if ( disabled ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }

    if ( onClick )
      onClick( event );
  };

  if ( !externalLink ) {
    return (
      <ReactRouterLink
        {...restProps}
        onClick={handleClick}
        to={to}
        styleName={styles}
      >
        {children}
      </ReactRouterLink>
    );
  }

  return (
    <a
      {...restProps}
      href={to}
      onClick={handleClick}
      styleName={styles}
      {...!opensInSameTab && {
        target: '_blank',
        rel: 'noopener noreferrer',
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  styleName: string,
  children: any,
  to: string.isRequired,
  externalLink: bool,
  opensInSameTab: bool,
  disabled: bool,
  onClick: func,
};

export default Link;
