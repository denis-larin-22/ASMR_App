import { RouterProvider } from "react-router-dom";
import { routes } from "./core/routes";

function Root() {

  return (
    <RouterProvider router={routes} />
  );
}

export default Root;
