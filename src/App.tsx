import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.css";
import { FC } from "react";

const App: FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
