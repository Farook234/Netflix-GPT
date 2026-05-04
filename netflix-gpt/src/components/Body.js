import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Login />,
    },
  ]);


  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;