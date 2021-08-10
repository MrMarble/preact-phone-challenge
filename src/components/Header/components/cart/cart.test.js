import { h } from "preact";
import { Cart } from "./cart.stories";
import { shallow } from "enzyme";

describe("Cart", () => {
  describe("when number is = 0", () => {
    test("dont render number", () => {
      const context = shallow(<Cart />);
      expect(context.render().find("span")).toHaveLength(0);
    });
  });
  describe("when number is > 0", () => {
    test("renders number", () => {
      const number = "7";
      const context = shallow(<Cart number={number} />);
      expect(context.render().text()).toBe(number);
    });
  });
  describe("when number changes from 0 to 1", () => {
    test("renders number", () => {
      let number = "0";
      const context = shallow(<Cart number={number} />);

      number = "1";
      context.setProps({ number });

      expect(context.render().text()).toBe(number);
    });
  });
});
