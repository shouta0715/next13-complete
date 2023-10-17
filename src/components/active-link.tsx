"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";

export function ActiveLink({
  className,
  href,
  activeClassName = "",

  ...props
}: ComponentPropsWithoutRef<typeof Link> & {
  activeClassName?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        className,
        "text-white",
        pathname === href ? activeClassName : ""
      )}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}
