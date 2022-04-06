
function TableLength({ pageSize, setPageSize }) {
  return (
    <div className="table-length">
      <p>Show</p>
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value))
        }}
      >
        {[5, 10, 25, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TableLength
