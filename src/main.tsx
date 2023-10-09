import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from "@apollo/client";

import RootLayout from "./routes/root";
import HomePage from "./routes/home";
import SinglePage from "./routes/single";

import "./index.css";

export const wishlistVar = makeVar([
  "freezing-edge-2020",
  "future-frontend-2023",
  "techmovienight",
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.react-finland.fi/graphql",
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/event/:eventId",
        element: <SinglePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
