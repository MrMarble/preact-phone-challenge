import { h } from "preact";
import LazyLoad from "react-lazyload";
import Item from "../../components/Item";
import Search from "../../components/Search";

const Home = ({ handleSearch, items, loading }) => (
  <main class="pt-5 container mx-auto">
    <div class="flex flex-row-reverse mb-5">
      <Search onInput={handleSearch} />
    </div>
    {loading ? (
      <section class="">
        <img
          src="/assets/svg/grid.svg"
          class="mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </section>
    ) : (
      <section class="mt-1 grid md:grid-cols-4 sm:grid-cols-3 items-center gap-x-5 gap-y-10">
        {items.map((phone) => (
          <LazyLoad key={phone.id} height={185} offset={500} once>
            <Item
              brand={phone.brand}
              model={phone.model}
              imgSrc={phone.imgUrl}
              price={phone.price}
            />
          </LazyLoad>
        ))}
      </section>
    )}
  </main>
);

export default Home;
