import './heading.scss';
import React from 'react';
import cx from 'classnames';
import { string, bool, oneOf, oneOfType, number, object } from 'prop-types';


const Heading = ({
  styleName,
  color = 'blue',
  margin = '20px 0',
  style = {},
  headingLevel = 1,
  ...restProps
}) => {
  const styles = cx( 'heading', styleName, color );

  const headingProps = {
    ...restProps,
    style: { ...style, margin },
  };

  /* React CSS Modules requires `styleName` prop on JSX tag.
   * Once it's updated we can change to `createElement` syntax with `h${headingLevel}`. */
  if ( headingLevel === 1 ) return <h1 {...headingProps} styleName={styles} />;
  if ( headingLevel === 2 ) return <h2 {...headingProps} styleName={styles} />;
  if ( headingLevel === 3 ) return <h3 {...headingProps} styleName={styles} />;
  if ( headingLevel === 4 ) return <h4 {...headingProps} styleName={styles} />;
  if ( headingLevel === 5 ) return <h5 {...headingProps} styleName={styles} />;
  if ( headingLevel === 6 ) return <h6 {...headingProps} styleName={styles} />;

  return null;
};

Heading.propTypes = {
  styleName: string,
  style: object,
  children: string,
  color: oneOf(
    ['darkGrey', 'grey', 'white', 'red', 'blue']
  ),
  margin: oneOfType(
    [number, string]
  ),
  headingLevel: oneOf(
    [1, 2, 3, 4, 5, 6]
  ),
};

export default Heading;
