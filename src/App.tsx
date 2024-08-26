import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Login from "./pages/login/Login";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/index";
import { Provider } from "react-redux";
import store from "./store";
import RootLayout from "./pages/root/Root";
import ProductList, { useLoader } from "./pages/productList/ProductList";
import AddProduct from "./pages/addProduct/AddProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ProductList />,
        loader: useLoader,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <RouterProvider router={routes} />
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default App;
