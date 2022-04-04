import "./EmployeeForm.scss"
import "react-datepicker/dist/react-datepicker.css"

import states from "../../../data/states"
import departments from "../../../data/departments"

import { useForm, SubmitHandler, Controller } from "react-hook-form"
import DatePicker from "react-datepicker"
// import  {registerLocale, setDefaultLocale}  from  "react-datepicker"
// import fr from 'date-fns/locale/fr'

import { useAtom } from "jotai"
// import { atomWithImmer } from 'jotai/immer'
import { EmployeesAtom } from "../../../store/store"
import { useEffect } from "react"

type FormValues = {
  firstName: string
  lastName: string
  birthDate: Date | null
  startDate: Date | null
  street: string
  city: string
  state: string
  zipCode: number | null
  department: string
}

export default function EmployeeForm() {
  // registerLocale('fr', fr)
  // setDefaultLocale('fr')

  const [employees, setEmployees] = useAtom(EmployeesAtom)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "Michael",
      lastName: "Scott",
      birthDate: null,
      startDate: null,
      street: "",
      city: " ",
      state: " ",
      zipCode: null,
      department: " ",
    },
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data && setEmployees((employeesList) => [...employeesList, {
      firstName: data.firstName,
      lastName: data.lastName,
      birthDate: data.birthDate?.toLocaleDateString(),
      startDate: data.startDate?.toLocaleDateString(),
      department: data.department,
      street: data.street,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
     }])
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group firstName">
        <div className="fields">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            aria-invalid={errors.firstName ? "true" : "false"}
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
            aria-invalid={errors.lastName ? "true" : "false"}
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
                dateFormat="dd/MM/yyyy"
                // required
                // aria-invalid={errors.birthDate ? "true" : "false"}
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
      <fieldset className="address">
        <legend>Address</legend>
        <div className="form-group street">
          <div className="fields">
            <label htmlFor="street">Street</label>
            <input
              aria-invalid={errors.street ? "true" : "false"}
              type="text"
              {...register("street", { required: true })}
            />
          </div>
        </div>

        <div className="form-group city">
          <div className="fields">
            <label htmlFor="city">City</label>
            <input
              aria-invalid={errors.city ? "true" : "false"}
              type="text"
              {...register("city", { required: true })}
            />
          </div>
        </div>

        <div className="form-group state">
          <div className="fields">
            <label htmlFor="state">State</label>
            <select {...register("state", { required: true })}>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group zipCode">
          <div className="fields">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              aria-invalid={errors.zipCode ? "true" : "false"}
              type="number"
              {...register("zipCode", { required: true })}
            />
          </div>
        </div>
      </fieldset>
      {errors.street || errors.city || errors.state || errors.zipCode ? (
        <div className="form-error">Please enter a valid address.</div>
      ) : (
        " "
      )}

      <div className="form-group department">
        <div className="fields">
          <label htmlFor="department">Department</label>
          <select
            {...register("department", {
              required: "Please select a department.",
            })}
          >
            {departments.map((dep, index) => (
              <option key={index} value={dep}>
                {dep}
              </option>
            ))}
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
