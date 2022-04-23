import "./TableLength.scss"

function TableLength({
  pageSize,
  setPageSize,
}: {
  pageSize: number
  setPageSize: (pageSize: number) => void
}) {
  return (
    <div className="table-length">
      <label htmlFor="tableLength">Show</label>
      <select
        id="tableLength"
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
