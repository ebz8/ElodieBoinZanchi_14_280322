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
  pageSize,
}) {
  return (
    <div className="table-footer">
      {page[0] ? (
        <span className="index">
          page {pageIndex + 1} / {pageOptions.length} | showing{" "}
          {page[0]?.index + 1} to {page[pageSize - 1].index + 1} of{" "}
          {rows.length} entries
        </span>
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
