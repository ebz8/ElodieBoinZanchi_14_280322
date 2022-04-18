function Select({ name, accessName, options, register, errors, rules }) {
  return (
    <div className="form-group state">
      <div className={errors ? "error fields" : "fields"}>
        <label htmlFor={accessName}>{name}</label>
        <select {...register(accessName, rules)}>
          {options.map((item) => (
            <option
              key={item.abbreviation ? item.abbreviation : item}
              value={item.abbreviation ? item.abbreviation : item}
            >
              {item.name ? item.name : item}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Select
