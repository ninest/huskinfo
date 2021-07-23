import { LandingLayout } from "@/layouts/Landing";
import { Resource } from "@/components/Resource";
import { categories } from "@/content/links";
import { GetStaticProps } from "next";
import { getResources, getSheets } from "@/lib/sheet";
import { Category } from "@/types/resource";

export default function Index({ categories }: { categories: Category[] }) {
  return (
    <>
      <LandingLayout>
        <h1 className="font-bold text-4xl leading-normal">
          All NEU links in one place
        </h1>

        <section className="mt-xl space-y-lg">
          {categories.map((category) => (
            <Resource key={category.slug} {...category} />
          ))}
        </section>
      </LandingLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const resources = await getSheets();
  for (let i = 0; i < resources.length; i++) {
    resources[i].resources = await getResources(resources[i].sheetId);
  }

  console.log(resources);

  return { props: {} };
};
