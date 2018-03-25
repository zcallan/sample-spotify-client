import * as Pages from '../views/pages';


export default [
  {
    path: '/',
    exact: true,
    component: Pages.Home,
  },
  {
    path: '/callback',
    component: Pages.Callback,
  },
  {
    path: '*',
    component: Pages.NotFound,
  },
];
