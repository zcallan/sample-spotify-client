import configDev from './config.dev.json';
import configProd from './config.prod.json';
import configCommon from './config.common.json';


export { default as routes } from './routes';

const isProd = process.env.NODE_ENV === 'PRODUCTION';

export default {
  ...configCommon,
  ...isProd ? configProd : configDev,
};
