import Description from "../../components/Description";
import { Image } from "../../components/Image";
import Loader from "../../components/Loader";

export const Details = ({ phone, loading }) => (
  <main class="pt-5 container m-auto">
    {loading ? (
      <Loader />
    ) : (
      <article class="mx-auto  sm:flex justify-center">
        <section class="w-3/4 mx-auto sm:mx-0 mb-5 sm:w-2/6 sm:px-3">
          <Image src={phone.imgUrl} class="w-full max-w-sm mx-auto" />
        </section>
        <section class="w-4/5 mx-auto sm:mx-0 sm:w-auto">
          <Description phone={phone} />
        </section>
      </article>
    )}
  </main>
);
