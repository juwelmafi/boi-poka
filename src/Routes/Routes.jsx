import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Books from "../pages/Books/Books";
import BookDetails from "../pages/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import PagesToRead from "../pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/booksData.json"),
        Component: Home,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/readList",
        loader: () => fetch("/booksData.json"),
        Component: ReadList
      },
      {
        path: "/PagesToRead",
        loader: () => fetch("/booksData.json"),
        Component: PagesToRead
      }
    ],
  },
]);
