import { useEffect, useRef, useState } from "react";
import cls from "./dropdown.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/useReducer";
import { addCategoryCall, getCategoriesCall } from "../../features/categoriesSlice";
import ChevronDown from "../../Icons/ChevronDown";
import Check from "../../Icons/Check";

export type SelectOptionProps = { value: string; label: string }[];

interface Props {
  id: string;
  options?: SelectOptionProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  value: string;
}

function Dropdown({ id, value, onChange }: Props) {
  const { isPending, categories } = useAppSelector((state) => state.categories);

  const [showDropdown, setShowDropdown] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");
  const filteredOptions = categories?.filter((op) =>
    op.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  const dispatch = useAppDispatch();

  const addCategory = async () => {
    const res = await dispatch(addCategoryCall({ name: search })).unwrap();
    onChange(res?.id);
    setSearch("");
  };
  useEffect(() => {
    dispatch(getCategoriesCall());
  }, []);

  const selectedValue = categories.find((category) => category.id === value)?.name;

  return (
    <div id={id} ref={optionsRef} className={cls.dropdown}>
      <div onClick={() => setShowDropdown((prev) => !prev)} className={cls.dropdown_value}>
        {selectedValue || <p className={cls.dropdown_no_value}>select an option</p>}
        <ChevronDown className={cls.dropdown_icon} height={16} width={16} fill="currentColor" />
      </div>
      {showDropdown && (
        <ul className={cls.dropdown_list}>
          <input
            className={cls.fields}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Eg: cloths, home appliances"
          />
          {!filteredOptions?.length && (
            <button className={cls.insert_button} disabled={isPending} onClick={addCategory}>
              Insert
            </button>
          )}
          {filteredOptions?.map((option) => (
            <li className={cls.dropdown_item} key={option.id} onClick={() => onChange(option.id)}>
              {option.id === value && (
                <Check width={16} height={16} fill="currentColor" className={cls.check_icon} />
              )}
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
