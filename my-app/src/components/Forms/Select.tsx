function Select({ name, accessName, data, register, errors }) {
  return (
    <div className="form-group state">
      <div className="fields">
        <label htmlFor={accessName}>{name}</label>
        <select {...register(accessName, { required: "Please select" })}>
          {data.map((item) => (
            <option key={item.abbreviation ? item.abbreviation : item} value={item.abbreviation ? item.abbreviation : item}>
              {item.name ? item.name : item}
            </option>
          ))}
        </select>
      </div>
      {errors && (
          <div className="form-error">{errors.message}</div>
        )}
    </div>
  )
}

export default Select
