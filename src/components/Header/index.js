import { h } from "preact";
import { Link } from "preact-router";
import { useProvider } from "../provider";
import { Breadcrumbs } from "./components/Breadcrumbs";
import Cart from "./components/cart";

export const Header = () => {
  const { cart } = useProvider();
  return (
    <header class="flex justify-between border-b bg-white p-3 px-5 items-center">
      <Link href="/" class="flex">
        <img src={"/assets/icons/favicon-32x32.png"} />
        <h1 class="text-black text-2xl ml-2 hidden sm:block">Preact App</h1>
      </Link>
      <Breadcrumbs />
      <Cart number={cart} />
    </header>
  );
};

export default Header;
