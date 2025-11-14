import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./layout/Root.jsx";
import Home from "./component/Home/Home.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import AllJobs from "./component/AllJobs/AllJobs.jsx";
import Register from "./component/Register/Register.jsx";
import AddAJob from "./AddAJob/AddAJob.jsx";
import MyAddedJobs from "./MyAddedJobs/MyAddedJobs.jsx";
import JobsDetails from "./component/JobsDetails/JobsDetails.jsx";
import JobsUpdate from "./component/JobsUpdate/JobsUpdate.jsx";
import ModelsCard from "./component/Home/ModelsCard.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
// import ModelsCard from "./component/Home/ModelsCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/modelscard",
        // loader: () => fetch("https://worknex-server.vercel.app/modelscard"),
        element: <ModelsCard></ModelsCard>,
      },
      //  all jobs sob ak bare dekanor jonno
      {
        path: "all-Jobs",
        loader: () => fetch("https://worknex-server.vercel.app/models"),
        Component: AllJobs,
      },
      // ata ak akta datar details dekanor jonno
      {
        path: "/jobsdetails/:id",
        loader: ({ params }) =>
          fetch(`https://worknex-server.vercel.app/models/${params.id}`),
        // Component: JobsDetails,
        element: (
          <PrivateRoute>
            {" "}
            <JobsDetails></JobsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobsupdate/:id",
        loader: ({ params }) =>
          fetch(`https://worknex-server.vercel.app/models/${params.id}`),
        Component: JobsUpdate,
      },

      {
        path: "register",
        Component: Register,
      },
      {
        path: "addjob",
        Component: AddAJob,
      },
      {
        path: "myaddedjobs",
        Component: MyAddedJobs,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
