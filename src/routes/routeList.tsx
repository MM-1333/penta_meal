import { RouteObject } from "react-router-dom";
import { HomePage, SignInPage, NotFoundPage } from "../pages";

export const routeList: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
