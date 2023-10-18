import Link from "next/link";
import React from "react";
import { ActiveLink } from "@/components/active-link";

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="bg-black p-4">
      <h1>This is a page.tsx</h1>
      <div className="flex flex-col">
        <Link
          href={{
            pathname: "/layouts",
            query: {
              page: `${Number(searchParams.page ?? 0) + 1}`,
            },
          }}
        >
          click me
        </Link>
        <ActiveLink activeClassName="text-red-500" href="/layouts">
          click me
        </ActiveLink>
      </div>
    </div>
  );
}
