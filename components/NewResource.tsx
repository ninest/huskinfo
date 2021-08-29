import { Resource, Section } from "@/types/resource";
import { FaArrowRight, FaRegFile } from "react-icons/fa";
import { TiDocument } from "react-icons/ti";

import { icon } from "./Icon";

import { SmartLink } from "./SmartLink";

export function NewResource({
  slug,
  title,
  info,
  bricks,
  list,
  moreInfoLink,
}: Section) {
  const Icon = icon[slug];
  console.log();
  return (
    <>
      <section className="p-md bg-gray-100 rounded-md">
        <h3 className="flex items-center space-x-sm text-lg">
          <div className="text-xl text-gray">
            <Icon></Icon>
          </div>
          <div>{title}</div>
        </h3>

        {bricks && (
          <div className="mt-sm flex flex-wrap -m-xs">
            {bricks.map((link) => (
              // md:py-sx md:px-sm py-sm px-base
              <SmartLink
                key={link.href}
                href={link.href}
                className="m-xs md:py-1 md:px-sm p-sm bg-gray-200 hover:bg-primary-lightest rounded-md whitespace-nowrap hover:underline"
              >
                {link.name}
              </SmartLink>
            ))}
          </div>
        )}

        {list && (
          <div className="mt-sm ml-1 space-y-base md:space-y-sm">
            {list.map((link) => {
              const Icon = link.icon ? icon[link.icon] : FaRegFile;
              return (
                <div>
                  <SmartLink
                    key={link.href}
                    href={link.href}
                    className="inline-ghost hover:bg-primary-lightest hover:opacity-100  flex items-center space-x-xs hover:underline"
                  >
                    <div className="text-base text-gray">
                      <Icon></Icon>
                    </div>
                    <div>{link.name}</div>
                  </SmartLink>
                </div>
              );
            })}
          </div>
        )}

        {moreInfoLink && (
          <SmartLink
            href={moreInfoLink.href}
            className="mt-lg flex items-center space-x-sm text-gray text-sm hover:underline"
          >
            <div>{moreInfoLink.name}</div>
            <div>
              <FaArrowRight></FaArrowRight>
            </div>
          </SmartLink>
        )}
      </section>
    </>
  );
}
