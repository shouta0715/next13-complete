import React from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateStaticParams() {
  const posts = (await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => {
      return res.json();
    }
  )) as Post[];

  return posts.map((post) => {
    return {
      slug: post.id.toString(),
    };
  });
}

export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return (
    <div className="bg-black">
      <h1 className="animate-[highlight_1s_ease-in-out_1]">
        This is {params.slug}
      </h1>
    </div>
  );
}
