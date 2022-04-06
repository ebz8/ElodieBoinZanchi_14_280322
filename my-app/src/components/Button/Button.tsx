function Button({ name, type }) {
  return (
    <button className="main-btn" type={type}>
      {name}
    </button>
  )
}

export default Button
