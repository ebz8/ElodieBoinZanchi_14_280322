import "./TableSearch.scss"

import { useForm, SubmitHandler } from "react-hook-form"

export default function TableSearch({
  setGlobalFilter,
}: {
  setGlobalFilter: (filterValue: any) => void
}) {
  const { register, handleSubmit } = useForm({ mode: "onTouched" })

  type FormValues = {
    [search: string]: any
  }
  const onChange: SubmitHandler<FormValues> = (data) =>
    setGlobalFilter(data.search)

  return (
    <form onChange={handleSubmit(onChange)} className="table-filter">
      <input type="search" placeholder="Search" {...register("search")} />
    </form>
  )
}
