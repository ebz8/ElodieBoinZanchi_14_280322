import TableLength from "../TableLength/TableLength"
import TableFilter from "../TableFilter/TableFilter"

function TableHeader({
  pageSize,
  setPageSize,
  preGlobalFilteredRows,
  setGlobalFilter,
  globalFilter,
}) {
  return (
    <div className="table-header">
      <TableLength pageSize={pageSize} setPageSize={setPageSize} />
      <TableFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
    </div>
  )
}

export default TableHeader
