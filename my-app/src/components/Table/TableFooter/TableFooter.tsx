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
}) {
  return (
    <div className="table-footer">
      <span className="index">
        Showing {pageIndex + 1} / {pageOptions.length} to {page.length} of{" "}
        {rows.length} entries
      </span>

      <div className="table-controls">
      <button
        className="secondary-btn"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        Previous
      </button>

      {pageOptions.map((item, index) => {
        if (index < 5) {
          return (
            <button key={item} onClick={() => gotoPage(item)}>{item + 1}</button>
          )
        }
      })}

      <button
        className="secondary-btn"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        Next
      </button>
    </div>

      {/* <TableControls
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
      /> */}
    </div>
  )
}

export default TableFooter
