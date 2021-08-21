import { h } from "preact";
import Item from "../../components/Item";
import Search from "../../components/Search";

const Home = ({ handleSearch, items, loading }) => (
  <main class="pt-5 container mx-auto">
    <div class="flex flex-row-reverse mb-5">
      <Search onInput={handleSearch} />
    </div>
    {loading ? (
      <section>Loading</section>
    ) : (
      <section class="mt-1 grid md:grid-cols-4 sm:grid-cols-3 items-center gap-x-5 gap-y-10">
        {items.map((phone) => (
          <Item
            key={phone.id}
            brand={phone.brand}
            model={phone.model}
            imgSrc={phone.imgUrl}
            price={phone.price}
          />
        ))}
      </section>
    )}
  </main>
);

export default Home;
