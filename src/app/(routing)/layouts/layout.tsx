import Link from "next/link";
import React from "react";

const posts = Array.from({ length: 100 }, (_, i) => {
  return i;
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>This is a not Root Layout</h1>
      <p>Wrap page.tsx and template.tsx</p>
      <div className="m-4 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        {children}
      </div>
      <div className="mt-4">
        <h2 className="animate-[highlight_1s_ease-in-out_1] text-center text-lg font-semibold">
          Dynamic routes Links
        </h2>
        <nav className="mt-4 grid grid-cols-4 gap-4">
          {posts.map((post) => {
            return (
              <Link
                key={post}
                className="animate-[highlight_1s_ease-in-out_1] text-white hover:underline"
                href={`/layouts/${post.toString()}`}
              >
                To layouts / {post}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
