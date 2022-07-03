import { contentMap } from "@/content/map";

import { Icon } from "@/components/Icon";
import { LinkSet } from "@/components/LinkSet";
import { favoritesToLinks } from "@/lib/favorites";
import { useSettings } from "@/lib/settings";
import { NoFavorites } from "@/components/NoFavorites";
import { Spacer } from "@/components/Spacer";

const IndexPage = () => {
  const {
    settings: { favoritesEnabled, favorites },
  } = useSettings();

  const favoriteLinks = favoritesToLinks(favorites);

  return (
    <>
      <article className="mt-base wrapper">
        {/* <Expandable
          title="Would you like to contribute to Husker?"
          containsProse
        >
          <p>
            We are looking to add more content to Husker! Would you like to
            write guides? Do you think your knowledge on the school can help
            others? Click the button below to contribute!
          </p>

          <div className="flex gap-base">
            <Button href="/contribute">Contribute</Button>
            <Button href="https://discord.gg/j7WkFct2rY" icon="discord">
              Discord
            </Button>
          </div>
        </Expandable> */}

        <div className="space-y-xl">
          {favoritesEnabled && (
            <section>
              <LinkSet
                showTitle
                title={"Favorites"}
                moreInfoHref={`/favorites`}
                links={favoriteLinks}
              />
              {favoriteLinks.length == 0 && <NoFavorites />}
            </section>
          )}
          {contentMap.map((category) => {
            return (
              <LinkSet
                key={category.slug}
                showTitle
                title={category.title}
                moreInfoHref={`/${category.slug}`}
                links={category.links}
              />
            );
          })}
        </div>
        <Spacer />
      </article>
    </>
  );
};

export default IndexPage;
