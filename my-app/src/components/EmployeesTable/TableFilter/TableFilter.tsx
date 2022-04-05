import { useForm, SubmitHandler } from "react-hook-form"

export default function App() {
  const {
    register,
    handleSubmit,
  } = useForm({ mode: "onTouched" })

  type FormValues = {
    [search: string]: any
  }
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data.search)

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <input type="search" placeholder="Search" {...register("search")} />
    </form>
  )
}
