import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="animate-[highlight_1s_ease-in-out_1]">
        This is Marketing Layout
      </h1>
      {children}
    </div>
  );
}
