import "./TableFilter.scss"

import { useForm, SubmitHandler } from "react-hook-form"


export default function TableFilter({
  setGlobalFilter,
}) {
  const { register, handleSubmit } = useForm({ mode: "onTouched" })

  type FormValues = {
    [search: string]: any
  }
  const onChange: SubmitHandler<FormValues> = (data) =>
    setGlobalFilter(data.search)

  return (
    <form onChange={handleSubmit(onChange)} className="table-filter">
      {/* <label>Search: </label> */}
      <input type="search" placeholder="Search" {...register("search")} />
    </form>
  )
}
