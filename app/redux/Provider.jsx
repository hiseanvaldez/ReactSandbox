"use client";

import { Provider as RProvider } from "react-redux";
import { store } from "./store";

const Provider = ({ children }) => {
  return <RProvider store={store}>{children}</RProvider>;
};

export default Provider;
