import { FaSearch } from "react-icons/fa";
import { SmartLink } from "@/components/SmartLinks";
import { contentMap } from "@/content/map";
import { Icon } from "./Icon";

interface SidebarProps {
  onCloseClick: () => void;
}

export const Sidebar = ({ onCloseClick }: SidebarProps) => {
  const links = [
    { text: "Index", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "More", href: "/more" },
  ];

  return (
    <aside className="bg-light md:w-72 h-screen border-r space-y-md">
      {/* Close button for mobile only */}
      <div className="flex items-center pt-base px-md">
        <button onClick={onCloseClick} className="block md:hidden mr-base border p-2 rounded">
          <Icon id="x"></Icon>
        </button>
        <div className="font-display font-black text-lg text-dark">Husker</div>
      </div>

      <label className="relative flex px-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-8 md:pl-7">
          <FaSearch className="text-gray-light" />
        </span>
        <input
          style={{ minWidth: 0 }}
          /* More padding on mobile for fat fingers */
          className="w-full pl-10 pr-xs py-sm md:py-1 border-2 font-medium rounded outline-none bg-gray-50 text-gray placeholder:text-gray-lighter"
          placeholder="Search"
          type="text"
        />
      </label>

      <hr />
      <nav className="px-md flex flex-col space-y-base">
        {links.map((link) => {
          return (
            <div key={link.href}>
              <SidebarLink href={link.href} title={link.text}></SidebarLink>
            </div>
          );
        })}
      </nav>
      <hr />
      <div className="px-md flex flex-col space-y-base">
        {contentMap.map((category) => {
          return (
            <>
              <div key={category.slug}>
                <SidebarLink
                  href={`/${category.slug}`}
                  title={category.title}
                ></SidebarLink>
              </div>
            </>
          );
        })}
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  href: string;
  title: string;
}
const SidebarLink = ({ href, title }: SidebarLinkProps) => {
  return (
    <SmartLink
      href={href}
      className="block font-semibold text-gray-dark -m-xs p-xs hover:bg-gray-50 rounded"
      activeClassName="bg-gray-100"
    >
      {title}
    </SmartLink>
  );
};
