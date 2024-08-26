import { Link, redirect, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useReducer";
import cls from "./product-list.module.scss";
import { deleteProductsCall, getProductsCall } from "../../features/productsSlice";
import store from "../../store";
import { getProducts_products } from "../../services/productsService/__generated__/getProducts";
import { deleteProductVariables } from "../../services/productsService/__generated__/deleteProduct";

export const useLoader = async () => {
  console.log("dsds", store.getState().users.currentUser);
  if (!store.getState().users.currentUser) {
    return redirect("/login");
  }
  await store.dispatch(getProductsCall());
  return null;
};

function ProductList() {
  const productsData = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  console.log(productsData);
  const navigate = useNavigate();
  const handleEdit = (product: getProducts_products) => {
    const state = {
      id: product.user.id,
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      category_id: product.category.id,
    };
    navigate("/add-product", { state });
  };

  const handleDelete = (variable: deleteProductVariables) => {
    dispatch(deleteProductsCall(variable));
  };

  const trimDesc = (title: string, desc: string) => {
    const limit = 500;
    if (title.length + desc.length <= limit) {
      return desc;
    } else {
      const remain = limit - Math.round(title.length * 1.9);
      return desc.substring(0, remain) + "...";
    }
  };

  return productsData?.isPending ? (
    <p>Loading...</p>
  ) : (
    <div className={cls.container}>
      {!productsData.products.length ? (
        <div>
          No Products to Display <Link to="add-product">Add new products</Link>
        </div>
      ) : (
        <div className={cls.list_header}>
          <h2>Products List</h2>{" "}
          <button className={cls.add_button} onClick={() => navigate("/add-product")}>
            + Add Products
          </button>
        </div>
      )}
      {productsData.products.map((product) => (
        <div className={cls.CardContainer} key={product.id}>
          <div className={cls.card_image}>
            <img src={product.image} width={"100%"} height={"100%"} />
          </div>
          <div className={cls.cardDetails}>
            <p className={cls.card_title}>{product.title}</p>
            <p className={cls.card_description}>{trimDesc(product.title, product.description)}</p>
          </div>
          <div className={cls.cardActions}>
            <button onClick={() => handleEdit(product)} disabled={productsData?.isPending}>
              Edit
            </button>
            <button onClick={() => handleDelete({ id: product.id })}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
