import "./EmployeeForm.scss"

// form
import Input from "../Forms/Input"
import DateSelect from "../Forms/DateSelect"
import Select from "../Forms/Select"
import { useForm, SubmitHandler } from "react-hook-form"

// mocked data
import states from "../../data/states"
import departments from "../../data/departments"

// store
import { useAtom } from "jotai"
import { EmployeesAtom } from "../../store/store"

// modal
import { useModal } from "@elbaz888/ebz-ui-library"
import ConfirmModal from "../ConfirmModal/ConfirmModal"

// types
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

/**
 *
 * Form to create new employees
 */
export default function EmployeeForm() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [employees, setEmployees] = useAtom(EmployeesAtom)
  const { showModal, hideModal, toggleModal } = useModal()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      state: "",
      zipCode: null,
      department: "",
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // add new employee's data to store
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
    // clean inputs
    reset(
      {
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zipCode: null,
        department: "",
      },
      {
        keepErrors: true,
        keepDirty: true,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false,
      }
    )
    // show confirm modal
    toggleModal()
  }

  return (
    <>
      <form className="employee-form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="First Name"
          accessName="firstName"
          type="text"
          errors={errors.firstName}
          register={register}
          rules={{ required: "Please enter a first name." }}
        />

        <Input
          name="Last Name"
          accessName="lastName"
          type="text"
          errors={errors.lastName}
          register={register}
          rules={{ required: "Please enter a last name." }}
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
            errors={errors.street}
            register={register}
            rules={{}}
          />

          <Input
            name="City"
            accessName="city"
            type="text"
            errors={errors.city}
            register={register}
            rules={{}}
          />

          <Select
            name="State"
            accessName="state"
            options={states}
            register={register}
            errors={errors.state}
            rules={{}}
          />

          <Input
            name="Zip Code"
            accessName="zipCode"
            type="number"
            errors={errors.zipCode}
            register={register}
            rules={{}}
          />
        </fieldset>

        <Select
          name="Department"
          accessName="department"
          options={departments}
          register={register}
          errors={errors.department}
          rules={{ required: true }}
        />

        <button className="main-btn" type="submit">
          Save
        </button>
      </form>
      <ConfirmModal isOpened={showModal} onClose={hideModal} />
    </>
  )
}
