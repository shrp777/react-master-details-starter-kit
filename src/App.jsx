import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MasterPage from "./pages/MasterPage";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />
  },
  {
    path: "/master",
    element: <MasterPage />
  },
  {
    path: "/details/:id",
    element: <DetailsPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
