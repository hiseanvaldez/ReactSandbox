import React from "react";

const Container = ({ children }) => {
  return (
    <main
      className="
        flex
        h-full
        w-full
        flex-col
        px-20
        pb-16
      "
    >
      {children}
    </main>
  );
};

export default Container;
