import { useForm } from "react-hook-form";
import InputField from "../../components/inputField/InputField";
import cls from "./add-product.module.scss";
import useAddProductForm from "../../hooks/useAddProductForm";
import { useAppDispatch, useAppSelector } from "../../hooks/useReducer";
import { addProductsCall, updateProductsCall } from "../../features/productsSlice";
import { addProductVariables } from "../../services/productsService/__generated__/addProduct";
import { useLocation, useNavigate } from "react-router-dom";

function AddProduct() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { register, control, handleSubmit } = useForm({ defaultValues: state });
  const isPending = useAppSelector((state) => state.products.isPending);
  const userId = useAppSelector((state) => state.users.currentUser?.[0].id);
  const { formFields } = useAddProductForm();
  const dispatch = useAppDispatch();
  const onSubmit = async (data: addProductVariables) => {
    console.log(data);
    if (state) {
      await dispatch(updateProductsCall({ ...data, id: state.id })).unwrap();
    } else {
      await dispatch(addProductsCall({ ...data, seller_id: userId })).unwrap();
    }

    navigate("/");
  };
  return (
    <div className={cls.container}>
      <h3>{state ? "Update" : "Enter"} Product Details</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cls.basic_details}>
          {formFields.map((field) => (
            <InputField obj={field} register={register} control={control} key={field.name} />
          ))}
          <button className={cls.add_button} type="submit" disabled={isPending}>
            {state ? "Update Product" : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
