import { useTheme } from "@/hooks/settings";
import { IconId } from "@/types/icon";
import { Size } from "@/types/size";
import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { Icon } from "@/components/Icon";
import { SmartLink, SmartLinkProps } from "@/components/SmartLink";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: IconId;
  href?: SmartLinkProps["href"];
  size?: Size;
  variant?: "primary" | "gray";
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = ({
  icon,
  size = "base",
  variant = "gray",
  href,
  children,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => {
  const { isLightTheme, isDarkTheme } = useTheme();

  const className = clsx(
    props.className,
    "rounded-md font-semibold",
    // {
    //   "text-gray bg-gray-100 hover:bg-gray-200":
    //     isLightTheme && variant === "gray",
    //   "text-gray bg-gray-50 hover:bg-gray-100":
    //     isDarkTheme && variant === "gray",

    //   // "text-gray-200 bg-primary hover:bg-primary-light dark:text-red-500": variant === "primary",
    //   "text-gray-200 bg-primary hover:bg-primary-light":
    //     isLightTheme && variant === "primary",
    //   "text-gray-500 bg-primary-50 hover:bg-primary-100":
    //     isDarkTheme && variant === "primary",
    // },
    // {
    //   "text-sm p-xs h-8": size === "xs",
    //   "text-sm p-sm h-10": size === "sm",
    //   "text-base p-base h-12": size === "base",
    //   "text-lg p-lg h-14": size === "lg",
    // },
    "flex items-center justify-center"
  );

  const Element = (
    <>
      {icon ? (
        <Icon id={icon} className={clsx({ "mr-base": children })} />
      ) : null}
      {children && <div>{children}</div>}
    </>
  );

  if (href) {
    return (
      <SmartLink href={href} className={className}>
        {Element}
      </SmartLink>
    );
  } else
    return (
      <button
        type={type}
        className={className}
        disabled={disabled}
        onClick={props.onClick}
      >
        {Element}
      </button>
    );
};
