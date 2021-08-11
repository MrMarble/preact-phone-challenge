import { h } from "preact";

export const Item = ({ imgSrc, model, brand, price }) => (
  <article class="text-sm font-bold uppercase text-justify">
    <img src={imgSrc} />
    <h2 class="text-base">{model}</h2>
    <span class="text-gray-700">
      {brand} <i class="text-gray-400">&bull;</i> {price} <small>EUR</small>
    </span>
  </article>
);

export default Item;
