import { h } from "preact";

export const Item = ({ imgSrc, model, brand, price }) => (
  <article class="text-sm font-bold uppercase text-justify sm:w-max mx-auto flex sm:block w-9/12">
    <img
      src={imgSrc}
      async
      class="max-h-[170px] sm:max-w-[140px] sm:max-h-full min-h-[100px]"
    />
    <div class="pl-2 sm:p-0">
      <h2 class="text-base text-left">{model}</h2>
      <span class="text-gray-700 block sm:inline-block">
        {brand} <i class="text-gray-400">&bull;</i> {price} <small>EUR</small>
      </span>
    </div>
  </article>
);

export default Item;
