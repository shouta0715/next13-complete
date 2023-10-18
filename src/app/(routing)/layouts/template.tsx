import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-[highlight_1s_ease-in-out_1] bg-black p-4">
      <h1>This is a Template </h1>
      <p>Wrap page.tsx and Parent file is layout.tsx and RootLayout</p>
      <div className="m-4 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        {children}
      </div>
    </div>
  );
}
