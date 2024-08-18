import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Applayout from "./pages/MembersPage/Applayout";
import { Heading } from "./components";
import ContainerBox from "./components/ContainerBox/ContainerBox";
import Table from "./components/Table/Table";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: (
            <Heading
              size="headingxl"
              as="h1"
              className="mb-[798px] !text-gray-900"
            >
              Welcome, Jane Doe!
            </Heading>
          ),
        },
        { path: "/directory", element: <Table /> },
      ],
    },
    { path: "/detail/:id", element: <UserDetailPage /> },

    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;
