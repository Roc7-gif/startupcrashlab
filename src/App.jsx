import React from "react"; // needed for JSX (if your build setup requires it)
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./pages/contact";
import Protocoles from "./pages/ProtocolePage";
import EquipePage from "./pages/EquipePage";
import CrashIndex from "./pages/CrashIndexPage";
import Ressources from "./pages/RessourcesPage";
const router = createBrowserRouter([
  {
    element : <Home/>,
    path : '/'
  },
   {
    element : <Protocoles/>,
    path : '/protocoles'
  }
   ,
   {
    element : <EquipePage/>,
    path : '/equipes'
  },
   {
    element : <Ressources/>,
    path : '/ressources'
  },
   {
    element : <CrashIndex/>,
    path : '/crashIndex'
  }
   ,
   {
    element : <CrashIndex/>,
    path : '/crashIndex'
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
