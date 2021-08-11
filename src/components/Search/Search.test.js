import { h } from "preact";
import { Search } from "./Search.stories";
import { mount } from "enzyme";

describe("Search", () => {
  it("renders initial value", () => {
    const context = mount(<Search defaultValue="foo" />);
    expect(context.find("input").prop("value")).toBe("foo");
  });

  describe("when user types", () => {
    it("triggers onInput", () => {
      const onInput = jest.fn();
      const context = mount(<Search onInput={onInput} />);
      const input = context.find("input");

      input.getDOMNode().value = "bar";
      input.simulate("input");

      expect(onInput).toHaveBeenCalledWith("bar");
    });
  });

  describe("when pressing Ctrl + K", () => {
    const map = {};
    beforeEach(() => {
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
    });
    it("get focus", () => {
      const context = mount(<Search />, document.body);

      map.keydown({ key: "k", ctrlKey: true, preventDefault: jest.fn() });

      expect(context.find("input").is(":focus")).toBe(true);
    });
  });
});
