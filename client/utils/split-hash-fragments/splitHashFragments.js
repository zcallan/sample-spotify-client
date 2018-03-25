export default hash => {
  const strippedHash = hash.replace( /#/g, '' );
  const fragments = strippedHash.split( '&' );

  /* Take the array of fragments and turn it into a key/value pair hash map. */
  return fragments.reduce(( obj, frag ) => {
    /* Split the key and value from the equals sign. */
    const keyValue = frag.split( '=' );

    /* Make sure there are two sides of the equals sign. */
    if ( keyValue.length > 0 )
      obj[keyValue[0]] = keyValue[1];

    return obj;
  }, {});
};
