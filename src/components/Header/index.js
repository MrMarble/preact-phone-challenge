import { h } from "preact";
import { Link } from "preact-router/match";
import Cart from "./components/cart";

const Header = ({ cartItems = 0 }) => (
  <header class="flex justify-between border-b bg-white pb-1">
    <Link href="/" class="flex">
      <img src={"/assets/icons/favicon-32x32.png"} />
      <h1 class="text-black">Preact App</h1>
    </Link>
    <Cart number={cartItems} />
  </header>
);

export default Header;
