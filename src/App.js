import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import Page from "./pages/Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "pages", element: <Page /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
