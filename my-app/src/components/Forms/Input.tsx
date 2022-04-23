import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form"
import { FormValues } from "../EmployeeForm/EmployeeForm"

// améliorer le accesName: any
export type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;

const Input = ({
  errors,
  register,
  name,
  accessName,
  type,
  rules,
}: {
  errors: FieldError | undefined
  register: UseFormRegister<FormValues>
  name: string
  accessName: any
  type?: string
  rules?: object
}) => {
  return (
    <div className={accessName + " form-group"}>
      <div className={errors ? "error fields" : "fields"}>
        <label htmlFor={accessName}>{name}</label>
        <input
          id={accessName}
          type={type}
          aria-invalid={errors ? "true" : "false"}
          {...register(accessName, rules)}
        />
      </div>
    </div>
  )
}

export default Input
