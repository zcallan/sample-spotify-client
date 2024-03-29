import './text.scss';
import React from 'react';
import cx from 'classnames';
import { string, oneOf, oneOfType, number, object } from 'prop-types';


const Text = ({
  children,
  styleName,
  color = 'black',
  margin = '10px 0',
  style = {},
  ...restProps
}) => {
  const classes = cx( 'text', styleName, color );

  return (
    <p
      {...restProps}
      style={{ ...style, margin }}
      styleName={classes}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  styleName: string,
  children: string,
  color: oneOf(
    ['darkGrey', 'grey', 'white', 'black']
  ),
  margin: oneOfType(
    [number, object, string]
  ),
  style: object,
};

export default Text;
