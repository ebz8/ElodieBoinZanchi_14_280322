import "./EmployeeForm.scss"

import Input from "../Forms/Input"
import DateSelect from "../Forms/DateSelect"
import Select from "../Forms/Select"

import { useForm, SubmitHandler } from "react-hook-form"

import states from "../../data/states"
import departments from "../../data/departments"

import { useAtom } from "jotai"
import { EmployeesAtom } from "../../store/store"

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
  employees && console.log("employees", employees)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data &&
      setEmployees((employeesList) => [
        ...employeesList,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          birthDate: data.birthDate?.toLocaleDateString(),
          startDate: data.startDate?.toLocaleDateString(),
          department: data.department,
          street: data.street,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
        },
      ])
  }

  return (
    <form className="employee-form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="First Name"
        accessName="firstName"
        type="text"
        requiredMessage="Please enter a first name."
        errors={errors.firstName}
        register={register}
      />

      <Input
        name="Last Name"
        accessName="lastName"
        type="text"
        requiredMessage="Please enter a last name."
        errors={errors.lastName}
        register={register}
      />

      <DateSelect
        name="Birth Date"
        accessName="birthDate"
        control={control}
        errors={errors.birthDate}
      />

      <DateSelect
        name="Start Date"
        accessName="startDate"
        control={control}
        errors={errors.startDate}
      />

      {/* Address block */}
      <fieldset className="address">
        <legend>Address</legend>
        <Input
          name="Street"
          accessName="street"
          type="text"
          requiredMessage="Please enter a street."
          errors={errors.street}
          register={register}
        />

        <Input
          name="City"
          accessName="city"
          type="text"
          requiredMessage="Please enter a city."
          errors={errors.city}
          register={register}
        />

        <Select
          name="State"
          accessName="state"
          options={states}
          register={register}
          errors={errors.state}
        />

        <Input
          name="Zip Code"
          accessName="zipCode"
          type="number"
          requiredMessage="Please enter a"
          errors={errors.zipCode}
          register={register}
        />
      </fieldset>

      {/* {errors.street || errors.city || errors.state || errors.zipCode ? (
        <div className="form-error">Please enter a valid address.</div>
      ) : (
        " "
      )} */}

      <Select
        name="Department"
        accessName="department"
        options={departments}
        register={register}
        errors={errors.department}
      />

      <button className="main-btn" type="submit">
        Save
      </button>
    </form>
  )
}
