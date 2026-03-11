import React from "react"; // needed for JSX (if your build setup requires it)
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./pages/contact";
const router = createBrowserRouter([
  {
    element : <Home/>,
    path : '/'
  },
   {
    element : <Contact/>,
    path : '/contact'
  }
])
const queryclient = new QueryClient()
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
        
    </>
  );
}
