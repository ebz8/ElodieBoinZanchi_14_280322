function TableFooter({
  pageIndex,
  pageOptions,
  rows,
  page,
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
}) {
  return (
    <div className="table-footer">

      <span className="index">
        Showing {pageIndex + 1} / {pageOptions.length} to {page.length} of{" "}
        {rows.length} entries
      </span>

      <div className="table-controls">
        <button className="secondary-btn" onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button className="secondary-btn" onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>

    </div>
  )
}

export default TableFooter
