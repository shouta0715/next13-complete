import Link from "next/link";
import React from "react";

const groups = [
  {
    name: "marketing",
    paths: [
      {
        href: "/about",
        name: "about",
      },
      {
        href: "/blog",
        name: "blog",
      },
    ],
  },
  {
    name: "shop",
    paths: [
      {
        href: "/account",
        name: "account",
      },
    ],
  },
  {
    name: "main",
    paths: [
      {
        href: "/",
        name: "home",
      },
    ],
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <h1 className="animate-[highlight_1s_ease-in-out_1]">
        This is route groups
      </h1>
      <div className="my-8 flex flex-wrap gap-4">
        {groups.map((group) => {
          return (
            <div key={group.name} className="rounded-md border p-2">
              <h2 className="animate-[highlight_1s_ease-in-out_1] uppercase">
                {group.name} Group
              </h2>
              <nav className="mt-6 flex gap-4">
                {group.paths.map((path) => {
                  return (
                    <Link
                      key={path.name}
                      className="animate-[highlight_1s_ease-in-out_1] underline"
                      href={`/route-groups/${path.href}`}
                    >
                      {path.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
}
