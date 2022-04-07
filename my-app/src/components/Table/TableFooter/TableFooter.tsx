import TableControls from "../TableControls/TableControls"

function TableFooter({
  pageIndex,
  pageOptions,
  rows,
  page,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  gotoPage,
  pageCount,
}) {
  return (
    <div className="table-footer">
      <span className="index">
        Showing {pageIndex + 1} / {pageOptions.length} to {page.length} of{" "}
        {rows.length} entries
      </span>

      <TableControls
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        pageCount={pageCount}
      />
    </div>
  )
}

export default TableFooter
