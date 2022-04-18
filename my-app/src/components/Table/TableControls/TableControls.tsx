function TableControls({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageOptions,
  gotoPage,
  pageCount,
  pageIndex,
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

      {/* {pageOptions.map((item, index) => {
          if (index < 5) {
            return (
              <button
                className={item === pageIndex ? "secondary-btn --active" : "secondary-btn"}
                key={item}
                onClick={() => gotoPage(item)}
              >
                {item + 1}
              </button>
            )
          }
        })} */}

      <input
        type="number"
        defaultValue={pageIndex + 1}
        onChange={(e) => {
          gotoPage(e.target.value ? Number(e.target.value) - 1 : 0)
        }}
        style={{ maxWidth: '4.5rem' }}
      ></input>

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
