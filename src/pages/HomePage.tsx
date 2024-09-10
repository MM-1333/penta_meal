import { FC } from "react";
import { Navigate } from "react-router-dom";

import Home from "../components/Home";
import { getLocalStorage } from "../utils/localStorage";

export const HomePage: FC = (): JSX.Element => {
  const token = getLocalStorage("access_token");

  if (token) {
    return <Home />;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
