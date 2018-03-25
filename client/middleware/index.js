import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const devMiddleware = applyMiddleware(
  thunk,
  logger
);

const prodMiddleware = applyMiddleware(
  thunk,
);

export default ( process.env.NODE_ENV === 'production' )
  ? prodMiddleware
  : devMiddleware;
