import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";
import style from "./inputfield.module.scss";
import Dropdown, { SelectOptionProps } from "../dropdown/Dropdown";

type Props = {
  obj: {
    name: string;
    label: string;
    type: string;
    options?: SelectOptionProps;
  };
  control?: Control<FieldValues, string>;
  register: (
    name: string,
    options?: RegisterOptions<FieldValues, string> | undefined
  ) => UseFormRegisterReturn<string>;
};

const FiledByType = ({ obj, register, control }: Props) => {
  switch (obj.type) {
    case "textarea":
      return (
        <>
          <label htmlFor={obj.name} className={style.label}>
            {obj.label}
          </label>
          <textarea id={obj.name} {...register(obj.name)} className={style.fields} />
        </>
      );
    case "select":
      return (
        <>
          <label htmlFor={obj.name} className={style.label}>
            {obj.label}
          </label>
          <Controller
            name={obj.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Dropdown id={obj.name} options={obj?.options} onChange={onChange} value={value} />
            )}
          />
        </>
      );
    default:
      return (
        <>
          <label className={style.label} htmlFor={obj.name}>
            {obj.label}
          </label>
          <input id={obj.name} type={obj.type} {...register(obj.name)} className={style.fields} />
        </>
      );
  }
};

const InputField = (props: Props) => {
  return (
    <div className={style.container}>
      <FiledByType {...props} />
    </div>
  );
};

export default InputField;
