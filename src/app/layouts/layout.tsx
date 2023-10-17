import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>This is a not Root Layout</h1>
      <p>Wrap page.tsx and template.tsx</p>
      <div className="m-4 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        {children}
      </div>
    </div>
  );
}
