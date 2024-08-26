import { useEffect, useState } from "react";
import { RootState } from "../../store";
import style from "./login.module.scss";
import {
  AddUsers,
  DeleteUser,
  fetchUsers,
  setCurrentUser,
  userSelector,
} from "../../features/usersSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useReducer";
import useCreateUserForm from "../../hooks/useCreateUserForm";
import { useForm } from "react-hook-form";
import { addUserVariables } from "../../services/userService/__generated__/addUser";
import { deleteUserVariables } from "../../services/userService/__generated__/deleteUser";
import { getUsers_users } from "../../services/userService/__generated__/getUsers";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/inputField/InputField";

export interface ICreateUser {
  clearNewUser: () => void;
}

const CreateUser = ({ clearNewUser }: ICreateUser) => {
  const { formObject } = useCreateUserForm();
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  const onSubmit = (data: addUserVariables) => {
    dispatch(AddUsers(data))
      .unwrap()
      .then(() => {
        reset();
        clearNewUser();
      });
  };
  handleSubmit;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.login_card}>
        <h3>Create User</h3>
        {formObject.map((obj) => (
          <InputField obj={obj} register={register} />
        ))}
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

const UserList = ({ usersData }: { usersData: RootState["users"] }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onDeleteuser = (variable: deleteUserVariables) => {
    dispatch(DeleteUser(variable));
  };
  const updateCurrentUser = (user: getUsers_users) => {
    dispatch(setCurrentUser(user));
    navigate("/");
  };
  return (
    <div className={style.list_card}>
      <h1>Select User From The List</h1>
      {usersData.isLoading && <p>Loading...</p>}
      {usersData.users.map((user) => (
        <div className={style.list_item} key={user.id}>
          <div>
            <img src={user.image} className={style.logo} />
          </div>
          <div className={style.list_content}>
            <p className={style.list_title}>{user.name}</p>
            <p className={style.list_description}>{user.email}</p>
          </div>
          <div className={style.list_action}>
            <button onClick={() => updateCurrentUser(user)}>Login</button>
          </div>
          <div className={style.list_action}>
            <button onClick={() => onDeleteuser({ id: user.id })}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(false);
  const dispatch = useAppDispatch();
  const usersData = useSelector(userSelector);

  const clearNewUser = () => {
    setNewUser(false);
    navigate("/");
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (newUser) {
    return (
      <>
        <CreateUser clearNewUser={clearNewUser} />
        <div>
          <button onClick={() => setNewUser(false)}>Click here</button> to go back to list
        </div>
      </>
    );
  } else {
    return (
      <>
        <UserList usersData={usersData} />
        <div>
          <button onClick={() => setNewUser(true)}>Click here</button> to create new user
        </div>
      </>
    );
  }
};

export default Login;
