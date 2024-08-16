import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { Layout } from "../pages/Layout/Layout";
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage.tsx";
import { ProjectDetailPage } from "../pages/ProjectDetailPage/ProjectDetailPage.tsx";
import { CoalPage } from "../pages/CoalPage/CoalPage.tsx";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage.tsx";
import { ShowPage } from "../pages/ShowPage/ShowPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/shou",
        element: <ShowPage />,
      },
      {
        path: "/workDetail/:id",
        element: <ProjectDetailPage />,
      },
      {
        path: "/coal",
        element: <CoalPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
    ],
  },
]);
