import * as Pages from '../views/pages';


export default [
  {
    path: '/',
    exact: true,
    component: Pages.Home,
  },
  {
    path: '*',
    component: Pages.NotFound,
  },
];
