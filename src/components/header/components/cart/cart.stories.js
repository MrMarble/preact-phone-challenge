import { h } from "preact";

import CartComponent from "./index";

export default {
  title: "Component/Header/Cart",
  component: CartComponent,
  argTypes: {
    number: { control: "number" },
  },
  args: {
    number: 5,
  },
};

export const Cart = ({ ...args }) => <CartComponent {...args} />;
