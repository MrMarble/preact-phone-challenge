import { h } from "preact";

import ItemComponent from "./index";

export default {
  title: "Component/Item",
  component: ItemComponent,
  argTypes: {
    imgSrc: {
      control: "text",
      defaultValue:
        "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
    },
    brand: { control: "text", defaultValue: "Acer" },
    model: { control: "text", defaultValue: "Iconia Talk S" },
    price: { control: "number", defaultValue: 170 },
  },
};

export const Item = ({ ...args }) => <ItemComponent {...args} />;
