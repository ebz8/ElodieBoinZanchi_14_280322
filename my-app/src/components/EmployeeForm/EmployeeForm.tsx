import "./EmployeeForm.scss"
import "react-datepicker/dist/react-datepicker.css"

import { useForm, SubmitHandler, Controller } from "react-hook-form"
import DatePicker from "react-datepicker"

type FormValues = {
  firstName: string
  lastName: string
  birthDate: Date
  startDate: Date
  street: string
  city: string
  state: string
  zipCode: number
  department: string
}

export default function EmployeeForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <form className="employee-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group firstName">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...register("firstName", { required: true, maxLength: 80 })}
        />
      </div>

      <div className="form-group lastName">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...register("lastName", { required: true, maxLength: 100 })}
        />
      </div>

      <Controller
        name="birthDate"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <DatePicker
            className="birthDate"
            onChange={(e) => field.onChange(e)}
            selected={field.value}
          />
        )}
      />

      <Controller
        name="startDate"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <DatePicker
            className="startDate"
            onChange={(e) => field.onChange(e)}
            selected={field.value}
          />
        )}
      />

      {/* Address block */}
      <div className="address">
        <div className="form-group street">
          <label htmlFor="street">Street</label>
          <input type="text" {...register("street", {})} />
        </div>

        <div className="form-group city">
          <label htmlFor="city">City</label>
          <input type="text" {...register("city", {})} />
        </div>

        <div className="form-group state">
          <label htmlFor="state">State</label>
          <select {...register("state", {})}>
            <option value="Alabama ">Alabama </option>
            <option value=" Alaska "> Alaska </option>
            <option value=" American Samoa "> American Samoa </option>
            <option value=" Arizona"> Arizona</option>
          </select>
        </div>

        <div className="form-group zipCode">
          <label htmlFor="zipCode">Zip Code</label>
          <input type="number" {...register("zipCode", {})} />
        </div>
      </div>

      <div className="form-group department">
        <label htmlFor="department">Department</label>
        <select {...register("department", {})}>
          <option value="Sales ">Sales </option>
          <option value=" Marketing "> Marketing </option>
          <option value=" Engineering "> Engineering </option>
          <option value=" Human Resources "> Human Resources </option>
          <option value=" Legal"> Legal</option>
        </select>
      </div>

      <button className="main-btn" type="submit">
        Save
      </button>
    </form>
  )
}
