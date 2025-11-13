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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      //  all jobs sob ak bare dekanor jonno
      {
        path: "all-Jobs",
        loader: () => fetch("http://localhost:3000/models"),
        Component: AllJobs,
      },
            // ata ak akta datar details dekanor jonno
      {    
        path: "/jobsdetails/:id",
        loader:({params}) => fetch(`http://localhost:3000/models/${params.id}`),
        Component: JobsDetails,
      },
      {
        path: "/jobsupdate/:id",
         loader:({params}) => fetch(`http://localhost:3000/models/${params.id}`),
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
