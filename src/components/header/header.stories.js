import { h } from "preact";

import HeaderComponent from "./index";

export default {
  title: "Component/Header",
  component: HeaderComponent,
  argTypes: {
    cartItems: { control: "number" },
  },
};

export const Header = ({ ...args }) => <HeaderComponent {...args} />;
