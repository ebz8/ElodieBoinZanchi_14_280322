import { FieldError, UseFormRegister } from "react-hook-form"
import { FormValues } from "../EmployeeForm/EmployeeForm"

function Select({
  name,
  accessName,
  options,
  register,
  errors,
  rules,
}: {
  name: string
  accessName: any
  options: any
  register: UseFormRegister<FormValues>
  errors: FieldError | undefined
  rules: {}
}) {
  return (
    <div className="form-group state">
      <div className={errors ? "error fields" : "fields"}>
        <label htmlFor={accessName}>{name}</label>
        <select {...register(accessName, rules)}>
          {options.map((item:any) => (
            <option
              key={item.abbreviation ? item.abbreviation : item}
              value={item.abbreviation ? item.abbreviation : item}
            >
              {item.name ? item.name : item}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Select
