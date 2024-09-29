import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Blog from "./blog/Blog.jsx";
import Shop from "./shop/Shop.jsx";
import ContactUs from "./contactus/ContactUs.jsx";
import About from "./about/About.jsx";
import SingleProduct from "./shop/SingleProduct.jsx";
import CartPage from "./shop/CartPage.jsx";
import SingleBlog from "./blog/SingleBlog.jsx"; // Import SingleBlog component
import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./components/Login.jsx";
import PrivateRoute from "./privateRoute/PrivateRoute.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile.jsx";

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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />, // Use SingleBlog component for blog/:id route
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
