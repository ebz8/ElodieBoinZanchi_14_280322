import { useForm, SubmitHandler } from "react-hook-form"

export default function TableFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onTouched" })

  type FormValues = {
    [search: string]: any
  }
  const onChange: SubmitHandler<FormValues> = (data) => setGlobalFilter(data.search)

  return (
    <form onChange={handleSubmit(onChange)}>
      <input type="search" placeholder="Search" {...register("search")} />
    </form>
  )
}
