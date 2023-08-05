import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 2500
    });
  }, [])
  return (
    <div className="max-w-[1350px] mx-auto pt-16">
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
