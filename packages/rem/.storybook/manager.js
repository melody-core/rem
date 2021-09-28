import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
// import logo from './logo.svg';
addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Rem UI',
    brandUrl: 'https://melody-core.github.io/rem',
    colorPrimary: 'hotpink',
    colorSecondary: 'orangered',
  }),
});
