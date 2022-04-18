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
      {page[0] ? (
        <div className="index">
          <span className="folio">
            page {pageIndex + 1} / {pageOptions.length}{" "}
          </span>
          <span className="entries">
            showing {page[0]?.index + 1} to {page[page.length -1]?.index +1} of{" "}
            {rows.length} entries
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
