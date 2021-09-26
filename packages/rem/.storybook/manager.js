import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";
import logo from './logo.svg';
addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Rem UI",
    brandUrl: logo,
    colorPrimary: "hotpink",
    colorSecondary: "orangered"
  })
});