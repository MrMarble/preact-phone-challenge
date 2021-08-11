import { h } from "preact";

import SearchComponent from "./index";

export default {
  title: "Component/Search",
  component: SearchComponent,
  argTypes: {
    defaultValue: { control: false },
    onInput: { action: "input" },
  },
};

export const Search = ({ ...args }) => <SearchComponent {...args} />;
