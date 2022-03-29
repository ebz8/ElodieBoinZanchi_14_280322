import { useForm, SubmitHandler, Controller } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
// SubmitHandlet : use as type

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First name"
        {...register("firstName", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("lastName", { required: true, maxLength: 100 })}
      />
      <Controller
        name="birthDate"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <DatePicker
            onChange={(e) => field.onChange(e)}
            selected={field.value}
            placeholderText="Birth Date"
          />
        )}
      />
      <Controller
        name="startDate"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <DatePicker
            onChange={(e) => field.onChange(e)}
            selected={field.value}
            placeholderText="Start Date"
          />
        )}
      />
      <input type="text" placeholder="Street" {...register("street", {})} />
      <input type="text" placeholder="City" {...register("city", {})} />
      <select {...register("state", {})}>
        <option value="Alabama ">Alabama </option>
        <option value=" Alaska "> Alaska </option>
        <option value=" American Samoa "> American Samoa </option>
        <option value=" Arizona"> Arizona</option>
      </select>
      <input
        type="number"
        placeholder="Zip Code"
        {...register("zipCode", {})}
      />
      <select {...register("department", {})}>
        <option value="Sales ">Sales </option>
        <option value=" Marketing "> Marketing </option>
        <option value=" Engineering "> Engineering </option>
        <option value=" Human Resources "> Human Resources </option>
        <option value=" Legal"> Legal</option>
      </select>

      <input type="submit" />
    </form>
  )
}
