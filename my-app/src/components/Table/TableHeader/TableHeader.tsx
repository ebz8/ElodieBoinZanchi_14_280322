import TableLength from "../TableLength/TableLength"
import TableFilter from "../TableSearch/TableSearch"

function TableHeader({
  pageSize,
  setPageSize,
  setGlobalFilter,
}: {
  pageSize: number
  setPageSize: (pageSize: number) => void
  setGlobalFilter: (filterValue: any) => void
}) {
  return (
    <div className="table-header">
      <TableLength pageSize={pageSize} setPageSize={setPageSize} />
      <TableFilter setGlobalFilter={setGlobalFilter} />
    </div>
  )
}

export default TableHeader
