import { h } from "preact";
import { Link } from "preact-router";
import LazyLoad from "react-lazyload";
import Item from "../../components/Item";
import Loader from "../../components/Loader";
import Search from "../../components/Search";

const Home = ({ handleSearch, items, loading }) => (
  <main class="pt-5 container mx-auto">
    <div class="flex flex-row-reverse mb-5 mr-6 sm:mr-0">
      <Search onInput={handleSearch} />
    </div>
    {loading ? (
      <Loader />
    ) : (
      <section class="mt-1 grid md:grid-cols-4 sm:grid-cols-3 items-center gap-x-5 gap-y-10">
        {items.map((phone) => (
          <LazyLoad key={phone.id} height={185} offset={500} once>
            <Link href={`/${phone.id}`}>
              <Item
                brand={phone.brand}
                model={phone.model}
                imgSrc={phone.imgUrl}
                price={phone.price}
              />
            </Link>
          </LazyLoad>
        ))}
      </section>
    )}
  </main>
);

export default Home;
