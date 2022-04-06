function Input({ errors, register, name, requiredMessage, accessName, type }) {
  return (
    <div className={accessName + " form-group"}>
      <div className="fields">
        <label htmlFor={accessName}>{name}</label>
        <input
          id={accessName}
          type={type}
          aria-invalid={errors ? "true" : "false"}
          {...register(accessName, {
            required: requiredMessage,
            minLength: {
              value: 2,
              message: "Please enter 2 characters min.",
            },
          })}
        />
      </div>
      {errors && <div className="form-error">{errors.message}</div>}
    </div>
  )
}

export default Input
