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
    path: '/dashboard',
    component: Pages.Dashboard,
  },
  {
    path: '*',
    component: Pages.NotFound,
  },
];
