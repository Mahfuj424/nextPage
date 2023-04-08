import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import LoadingSpinner from "./components/LoadingSpinner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path: "loading",
        element: <LoadingSpinner/>
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
