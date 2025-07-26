import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./services/pokemonApi";
import { queensApi } from "./services/queensApi";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [queensApi.reducerPath]: queensApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware, queensApi.middleware),
});
