function TableControls({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageOptions,
  gotoPage,
  pageCount,
}) {

  return (
    <div className="table-controls">
        <button className="third-btn" onClick={() => gotoPage(0)}>
          {"<<"}
        </button>
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
              <button
                className="secondary-btn"
                key={item}
                onClick={() => gotoPage(item)}
              >
                {item + 1}
              </button>
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
        <button className="third-btn" onClick={() => gotoPage(pageCount - 1)}>
          {">>"}
        </button>
      </div>
  )
}

export default TableControls
