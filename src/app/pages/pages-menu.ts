import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'nb-home',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'Lab Catalog',
    icon: 'nb-menu',
    link: '/catalog',
  },
  {
    title: 'FAQs',
    icon: 'nb-info',
    link: '/faqs',
  },
  {
    icon: 'nb-locked',
    title: 'Login',
    link: '/auth/login',

  },
];
