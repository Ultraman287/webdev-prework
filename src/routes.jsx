import { useRoutes } from "react-router-dom";

import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";

function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />,
    },
    {
      path: "/add",
      element: <AddCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/view/:id",
      element: <ViewCreator />,
    },
  ]);
  return element;
}

export default Router;
