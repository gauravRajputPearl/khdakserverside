import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";

import Contact from "./pages/contact/Contact.jsx";

import CallGirls from "./pages/call girls/CallGirls.jsx";
import { store } from "./features/store.js";
import { Provider } from "react-redux";

import React, { Suspense, useEffect } from "react";
import Privacy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
import BlogSkeleton from "./components/SkeletonUI/BlogSkeleton.jsx";
import BlogReadMoreskeleton from "./components/SkeletonUI/BlogReadMoreskeleton.jsx";

// Lazy load component
const Blogs = React.lazy(() => import("./pages/blogs/Blogs.jsx"));
const BlogReadMore = React.lazy(() => import("./pages/blogs/BlogReadMore.jsx"));
const Home = React.lazy(() => import("./pages/home/Home.jsx"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact-us/",
          element: <Contact />,
        },
        {
          path: "/blog/",
          element: (
            <Suspense
              fallback={
                <div>
                  <BlogSkeleton />
                </div>
              }
            >
              <Blogs />
            </Suspense>
          ),
        },
        {
          path: "/not-found/",
          element: <NotFound />,
        },
        {
          path: "/blog/:title",
          element: (
            <Suspense fallback={<BlogReadMoreskeleton />}>
              <BlogReadMore />
            </Suspense>
          ),
        },
        {
          path: "/:city/",
          element: (
            <Suspense
              fallback={
                <div className="h-[80vh] w-full flex justify-center items-center text-5xl text-red-500">
                  Loading....
                </div>
              }
            >
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/privacy-policy",
          element: <Privacy />,
        },
        {
          path: "/terms-and-conditions",
          element: <TermsAndConditions />,
        },
        {
          path: "/not-found/",
          element: <NotFound />,
        },
        // {
        //   path: "/:city/:locality",
        //   element: <Home />,
        // },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </Provider>
  );
}

export default App;
