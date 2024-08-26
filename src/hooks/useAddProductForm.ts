function useAddProductForm() {
  const formFields = [
    {
      type: "text",
      label: "Title",
      name: "title",
    },
    {
      type: "textarea",
      label: "Description",
      name: "description",
    },
    {
      type: "url",
      label: "Image",
      name: "image",
    },
    {
      type: "number",
      label: "Price",
      name: "price",
    },
    {
      type: "select",
      label: "  Category",
      name: "category_id",
      options: [],
    },
  ];
  return { formFields };
}

export default useAddProductForm;
