"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import Byline from "@/components/byline";
import { NextLogo } from "@/components/next-logo";
import { demos, type Item } from "@/libs/demos";

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
      href={`/${item.slug}`}
      onClick={close}
    >
      {item.name}
    </Link>
  );
}

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    return setIsOpen(false);
  };

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center p-4 lg:h-auto">
        <Link
          className="group flex w-full items-center gap-x-2.5"
          href="/"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div>

          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            App Router
          </h3>
        </Link>
      </div>
      <button
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => {
          return setIsOpen(!isOpen);
        }}
        type="button"
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item) => {
                    return (
                      <GlobalNavItem
                        key={item.slug}
                        close={close}
                        item={item}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>
        <Byline className="absolute hidden sm:block" />
      </div>
    </div>
  );
}
