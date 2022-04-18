function Input({ errors, register, name, accessName, type, rules }) {
  return (
    <div className={accessName + " form-group"}>
      <div className={errors ? "error fields" : "fields"}>
        <label htmlFor={accessName}>{name}</label>
        <input
          id={accessName}
          type={type}
          aria-invalid={errors ? "true" : "false"}
          {...register(accessName, rules)}
        />
      </div>
    </div>
  )
}

export default Input
