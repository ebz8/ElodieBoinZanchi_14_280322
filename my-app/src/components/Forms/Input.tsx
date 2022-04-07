function Input({ errors, register, name, requiredMessage, accessName, type }) {

  return (
    <div className={accessName + " form-group"}>
      <div className={errors ? "error fields" : "fields"}>
        <label htmlFor={accessName}>{name}</label>
        <input
          id={accessName}
          type={type}
          aria-invalid={errors ? "true" : "false"}
          {...register(accessName, {
            required: true,
          })}
        />
      </div>
      {/* {errors && <div className="form-error">{errors.message}</div>} */}
    </div>
  )
}

export default Input

// export function Input({ register, accessName, ...rest }) {
//   return <input {...register(accessName)} {...rest} />;
// }
