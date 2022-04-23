import { Control, Controller, FieldError } from "react-hook-form"
import { FormValues } from "../EmployeeForm/EmployeeForm"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


function DateSelect({
  name,
  accessName,
  control,
  errors,
}: {
  name: string
  // solution temporaire pour accessName
  accessName: any
  control: Control<FormValues, any>
  errors: FieldError | undefined
}) {
  return (
    <Controller
      name={accessName}
      control={control}
      defaultValue={undefined}
      rules={{ required: true }}
      render={({ field: {onChange, value} }) => (
        <div className={accessName + " form-group"}>
          <div className={errors ? "error fields" : "fields"}>
            <label htmlFor={accessName}>{name}</label>
            <DatePicker
              onChange={onChange}
              selected={value}
              dateFormat="MM/dd/yyyy"
              id={accessName}
            />
          </div>
          {errors && <div className="form-error">{errors.message}</div>}
        </div>
      )}
    />
  )
}

export default DateSelect
