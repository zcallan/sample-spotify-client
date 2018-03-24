import './button.scss';
import React from 'react';
import cx from 'classnames';
import { string, bool, oneOf } from 'prop-types';
import { Text } from 'views/components';


const Button = ({
  children = 'Button',
  styleName,
  color = 'blue',
  disabled,
  ...restProps
}) => {
  const styles = cx( 'button', styleName, {
    [color]: !disabled,
    grey: disabled,
    disabled,
  });

  const textColors = {
    red: 'white',
    blue: 'white',
    grey: 'darkGrey',
    white: 'darkGrey',
  };

  return (
    <button
      {...restProps}
      disabled={disabled}
      styleName={styles}
    >
      <Text
        color={disabled ? 'grey' : textColors[color]}
      >
        {children}
      </Text>
    </button>
  );
};

Button.propTypes = {
  href: string,
  externalLink: bool,
  opensNewTab: bool,
  children: string,
  styleName: string,
  className: string,
  color: oneOf(
    ['red', 'blue', 'grey', 'white']
  ).isRequired,
};

export default Button;
