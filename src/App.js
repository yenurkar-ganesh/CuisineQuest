
import "./App.css";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About/About";
import Contacts from "./components/Contact/Contacts";
import Homepage from "./Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage /> ,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    { path: "/contacts", element: <Contacts /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
