import { useState } from "preact/hooks";

export const Actions = ({ colors = [], memory = [], callback }) => {
  const [storageCode, setstorageCode] = useState(memory[0]?.code);
  const [colorCode, setColorCode] = useState(colors[0]?.code);

  const handleChange = (setter) => (event) => setter(event.target.value);

  const addToCart = () => {
    callback({ colorCode, storageCode });
  };

  return (
    <section class="text-center pt-5">
      <div class="text-left inline-block mr-1">
        <label class="text-sm font-medium text-gray-700 block">Color:</label>
        <select
          class="p-1 border-2 rounded-md"
          value={colorCode}
          onChange={handleChange(setColorCode)}
        >
          {colors.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div class="text-left inline-block ml-5">
        <label class="text-sm font-medium text-gray-700 block">
          Internal Memory:
        </label>
        <select
          class="p-1 border-2 rounded-md w-full"
          value={storageCode}
          onChange={handleChange(setstorageCode)}
        >
          {memory.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button
        class="block mx-auto border-2 rounded-md p-1 mt-5"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </section>
  );
};
