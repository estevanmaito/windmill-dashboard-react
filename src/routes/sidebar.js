/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/forms',
    icon: 'FormsIcon',
    name: 'Forms',
  },
  {
    path: '/cards',
    icon: 'CardsIcon',
    name: 'Cards',
  },
  {
    path: '/charts',
    icon: 'ChartsIcon',
    name: 'Charts',
  },
  {
    path: '/buttons',
    icon: 'ButtonsIcon',
    name: 'Buttons',
  },
  {
    path: '/modals',
    icon: 'ModalsIcon',
    name: 'Modals',
  },
  {
    path: '/tables',
    icon: 'TablesIcon',
    name: 'Tables',
  },
  {
    path: '/pages',
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/404',
        name: '404',
      },
      {
        path: '/pages/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes
