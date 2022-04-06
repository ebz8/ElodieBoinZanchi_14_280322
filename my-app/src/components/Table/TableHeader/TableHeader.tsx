import TableLength from "../TableLength/TableLength"
import TableFilter from "../TableFilter/TableFilter"

function TableHeader({
  pageSize,
  setPageSize,
  setGlobalFilter,
}) {
  return (
    <div className="table-header">
      <TableLength pageSize={pageSize} setPageSize={setPageSize} />
      <TableFilter
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  )
}

export default TableHeader
