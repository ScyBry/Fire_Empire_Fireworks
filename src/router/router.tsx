import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { Layout } from "../pages/Layout/Layout";
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage.tsx";
import { ProjectDetailPage } from "../pages/ProjectDetailPage/ProjectDetailPage.tsx";
import { CoalPage } from "../pages/CoalPage/CoalPage.tsx";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage.tsx";
import { ShowPage } from "../pages/ShowPage/ShowPage.tsx";
import { OurWorks } from "../pages/OurWorks/OurWorks.tsx";
import { PageTitle } from "../utils/utils.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <PageTitle title="Главная | Империя огня" />
            <MainPage />
          </>
        ),
      },
      {
        path: "/projects",
        element: (
          <>
            <PageTitle title="Проекты | Империя огня" />
            <ProjectsPage />
          </>
        ),
      },
      {
        path: "/shou",
        element: (
          <>
            <PageTitle title="Шоу | Империя огня" />
            <ShowPage />
          </>
        ),
      },
      {
        path: "/workDetail/:id",
        element: <ProjectDetailPage />,
      },
      {
        path: "/coal",
        element: (
          <>
            <PageTitle title="Уголь | Империя огня" />
            <CoalPage />
          </>
        ),
      },
      {
        path: "/contacts",
        element: (
          <>
            <PageTitle title="Контакты | Империя огня" />
            <ContactsPage />
          </>
        ),
      },
      {
        path: "/ourWorks",
        element: (
          <>
            <PageTitle title="Наши работы | Империя огня" />
            <OurWorks />
          </>
        ),
      },
    ],
  },
]);
