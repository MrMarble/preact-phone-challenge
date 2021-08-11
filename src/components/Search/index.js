import { h } from "preact";
import { useEffect, useCallback, useRef, useState } from "preact/hooks";

export const Search = ({ onInput = Function.prototype, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue);
  const inputRef = useRef(null);

  const handleShortcut = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === "k") {
        inputRef.current.focus();
        event.preventDefault();
      }
    },
    [inputRef]
  );

  const handleInput = (e) => {
    const { value: newValue } = e.target;
    setValue(newValue);
    onInput(newValue);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);

    return () => window.removeEventListener("keydown", handleShortcut);
  }, [handleShortcut]);

  return (
    <span class="border-b-2 py-2 flex max-w-max items-center group">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-400 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        placeholder="Quick Search"
        ref={inputRef}
        class="focus-visible:outline-none"
        value={value}
        onInput={handleInput}
      />
      <span class="hidden sm:block border rounded-md text-sm font-sans text-gray-400 leading-5 py-0.5 px-1.5 group-focus-within:invisible">
        Ctrl K
      </span>
    </span>
  );
};

export default Search;
