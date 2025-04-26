"use client";

import { Children, ReactElement, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface IconLinkProps {
  children:
    | ReactElement<{ className?: string }>
    | ReactElement<{ className?: string }>[];
  href: string;
  className?: string;
  ariaLabel: string;
}

export default function FooterItem({
  href,
  children,
  className,
  ariaLabel,
}: IconLinkProps) {
  const childrenWithClassName = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        className: cn(
          "fill-foreground",
          child.props.className,
          child.type === "svg" && "size-[1.4rem]"
        ),
      });
    }
    return child;
  });
  return (
    <a
      aria-label={ariaLabel}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex gap-1 items-center hover:underline ${className}`}
    >
      {childrenWithClassName}
    </a>
  );
}
