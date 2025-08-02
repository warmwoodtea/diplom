import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BattlePage, MainPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/battle",
    Component: BattlePage,
  },
]);

export const Routing: FC = () => {
  return <RouterProvider router={router} />;
};
