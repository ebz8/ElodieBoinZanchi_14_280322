import { Row } from "react-table"
import TableControls from "../TableControls/TableControls"

function TableFooter({
  pageIndex,
  pageOptions,
  rows,
  page,
  pageSize,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  gotoPage,
  pageCount,
}: {
  pageIndex: number
  pageOptions: number[]
  rows: Row<object>[]
  page: Row<object>[]
  previousPage: () => void
  canPreviousPage: boolean
  nextPage: () => void
  canNextPage: boolean
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void
  pageCount: number
  pageSize: number
}) {
  const firstRowNumber: number = pageIndex * pageSize + 1
  const lastRowNumber: number = firstRowNumber + page.length - 1

  return (
    <div className="table-footer">
      {page[0] ? (
        <div className="index">
          <span className="folio">
            page {pageIndex + 1} / {pageOptions.length}{" "}
          </span>
          <span className="entries">
            showing {firstRowNumber} to {lastRowNumber} of {rows.length} entries
          </span>
        </div>
      ) : (
        <span>No employees to display.</span>
      )}

      <TableControls
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </div>
  )
}

export default TableFooter
