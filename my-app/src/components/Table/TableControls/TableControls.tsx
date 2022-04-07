function TableControls({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageOptions,
}) {

  return (
    <div className="table-controls">
      <button
        className="secondary-btn"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        Previous
      </button>

      {pageOptions.map((page, index) => {
        return (
          <button key={page}>{page + 1}</button>
        )
      })}

      <button
        className="secondary-btn"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        Next
      </button>
    </div>
  )
}

export default TableControls
