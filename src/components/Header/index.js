import { h } from "preact";
import { Link } from "preact-router/match";
import Cart from "./components/cart";

export const Header = ({ cartItems = 0 }) => (
  <header class="flex justify-between border-b bg-white p-3 px-5 items-center">
    <Link href="/" class="flex">
      <img src={"/assets/icons/favicon-32x32.png"} />
      <h1 class="text-black text-2xl ml-2">Preact App</h1>
    </Link>
    <Cart number={cartItems} />
  </header>
);

export default Header;
