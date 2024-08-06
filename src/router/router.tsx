import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { Layout } from "../pages/Layout/Layout";
import { FireworksPage } from "../pages/FireworksPage/FireworksPage.tsx";
import { WorkDetailPage } from "../pages/WorkDetailPage/WorkDetailPage.tsx";
import { CoalPage } from "../pages/CoalPage/CoalPage.tsx";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage.tsx";

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
        path: "/fireworks",
        element: <FireworksPage />,
      },
      {
        path: "/workDetail/:id",
        element: <WorkDetailPage />,
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
