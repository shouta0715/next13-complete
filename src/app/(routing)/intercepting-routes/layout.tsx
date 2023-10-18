import React from "react";

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="animate-[highlight_1s_ease-in-out_1]">
        This is Intercepting Routes Layout
      </h1>
      <main>{children}</main>

      {modal}
    </div>
  );
}
