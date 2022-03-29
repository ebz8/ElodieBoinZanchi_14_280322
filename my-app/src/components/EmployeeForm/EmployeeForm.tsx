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
  console.log(errors)

  return (
    <form className="employee-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group firstName">
        <div className="fields">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            {...register("firstName", {
              required: "Please enter a first name.",
              minLength: {
                value: 2,
                message: "Please enter 2 characters min.",
              },
            })}
          />
        </div>
        {errors.firstName && (
          <div className="form-error">{errors.firstName.message}</div>
        )}
      </div>

      <div className="form-group lastName">
        <div className="fields">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            {...register("lastName", {
              required: "Please enter a last name.",
              minLength: {
                value: 2,
                message: "Please enter 2 characters min.",
              },
            })}
          />
        </div>
        {errors.lastName && (
          <div className="form-error">{errors.lastName.message}</div>
        )}
      </div>

      <Controller
        name="birthDate"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <div className="form-group birthDate">
            <div className="fields">
              <label htmlFor="birthDate">Birth Date</label>
              <DatePicker
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            </div>
            {errors.birthDate && (
              <div className="form-error">{errors.birthDate.message}</div>
            )}
          </div>
        )}
      />

      <Controller
        name="startDate"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <div className="form-group startDate">
            <div className="fields">
              <label htmlFor="startDate">Start Date</label>
              <DatePicker
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            </div>
            {errors.startDate && (
              <div className="form-error">{errors.startDate.message}</div>
            )}
          </div>
        )}
      />

      {/* Address block */}
      <div className="address">
        <div className="form-group street">
          <div className="fields">
            <label htmlFor="street">Street</label>
            <input type="text" {...register("street", {})} />
          </div>
          {errors.street && (
            <div className="form-error">{errors.street.message}</div>
          )}
        </div>

        <div className="form-group city">
          <div className="fields">
            <label htmlFor="city">City</label>
            <input type="text" {...register("city", {})} />
          </div>
          {errors.city && (
            <div className="form-error">{errors.city.message}</div>
          )}
        </div>

        <div className="form-group state">
          <div className="fields">
            <label htmlFor="state">State</label>
            <select {...register("state", {})}>
              <option value="Alabama ">Alabama </option>
              <option value=" Alaska "> Alaska </option>
              <option value=" American Samoa "> American Samoa </option>
              <option value=" Arizona"> Arizona</option>
            </select>
          </div>
          {errors.state && (
            <div className="form-error">{errors.state.message}</div>
          )}
        </div>

        <div className="form-group zipCode">
          <div className="fields">
            <label htmlFor="zipCode">Zip Code</label>
            <input type="number" {...register("zipCode", {})} />
          </div>
          {errors.zipCode && (
            <div className="form-error">{errors.zipCode.message}</div>
          )}
        </div>
      </div>

      <div className="form-group department">
        <div className="fields">
          <label htmlFor="department">Department</label>
          <select {...register("department", {})}>
            <option value="Sales ">Sales </option>
            <option value=" Marketing "> Marketing </option>
            <option value=" Engineering "> Engineering </option>
            <option value=" Human Resources "> Human Resources </option>
            <option value=" Legal"> Legal</option>
          </select>
        </div>
        {errors.department && (
          <div className="form-error">{errors.department.message}</div>
        )}
      </div>

      <button className="main-btn" type="submit">
        Save
      </button>
    </form>
  )
}
