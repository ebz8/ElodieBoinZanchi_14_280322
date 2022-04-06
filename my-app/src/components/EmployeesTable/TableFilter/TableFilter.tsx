import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table'

export default function TableFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}) {
  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onTouched" })

  const [value, setValue] = useState(globalFilter)

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
