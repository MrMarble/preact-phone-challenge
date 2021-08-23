import { Link } from "preact-router";
import Match from "preact-router/match";
import { useProvider } from "../../../provider";

export const Breadcrumbs = () => {
  const { phones } = useProvider();
  return (
    <nav class="text-gray-500">
      <Link href="/" activeClassName="active">
        Home
      </Link>
      <Match path="/:id">
        {({ matches, path }) =>
          matches && (
            <>
              <span class="text-gray-300 mx-1">/</span>
              <Link href={path} activeClassName="active">
                {phones.find((phone) => phone.id === path.slice(1))?.model}
              </Link>
            </>
          )
        }
      </Match>
    </nav>
  );
};
