function useCreateUserForm() {
  const formObject = [
    { name: "image", label: "User Image", type: "text" },
    { name: "name", label: "User Name", type: "text" },
    { name: "email", label: "User Email", type: "email" },
    { name: "password", label: "Password", type: "text" },
    { name: "is_admin", label: "Is Admin", type: "checkbox" },
  ];
  return { formObject };
}

export default useCreateUserForm;
