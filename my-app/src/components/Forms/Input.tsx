import { FieldError, FieldPath, UseFormRegister } from "react-hook-form"
import { FormValues } from "../EmployeeForm/EmployeeForm"

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
  accessName: FieldPath<FormValues>
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
