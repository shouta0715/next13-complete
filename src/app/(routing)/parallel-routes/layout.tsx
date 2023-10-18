import Link from "next/link";
import React from "react";

const posts = Array.from({ length: 100 }, (_, i) => {
  return i;
});

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <div>
      <h1>This is a Parallel Routers Layout</h1>
      <p>Wrap page.tsx and template.tsx</p>
      <main className="grid gap-6">
        <div className="m-4 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          {children}
        </div>
        <div className="m-4 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          {team}
        </div>
        <div className="m-4 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
          {analytics}
        </div>
      </main>

      <nav className="mt-4 grid grid-cols-4 gap-4">
        {posts.map((post) => {
          return (
            <Link
              key={post}
              className="animate-[highlight_1s_ease-in-out_1] text-white hover:underline"
              href={`/parallel-routes/${post.toString()}`}
            >
              To parallel-routes / {post}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
