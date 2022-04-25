function TableControls({
  previousPage,
  canPreviousPage,
  nextPage,
  canNextPage,
  pageOptions,
  gotoPage,
  pageCount,
  pageIndex,
}: {
  previousPage: () => void
  canPreviousPage: boolean
  nextPage: () => void
  canNextPage: boolean
  pageOptions: number[]
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void
  pageCount: number
  pageIndex: number
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
        {"<"}
      </button>

      <label htmlFor="select-page-number" />
      <input
        type="number"
        id="select-page-number"
        min="1"
        max={pageCount}
        defaultValue={pageIndex + 1}
        onChange={(e) => {
          gotoPage(e.target.value ? Number(e.target.value) - 1 : 0)
        }}
      />

      <button
        className="secondary-btn"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {">"}
      </button>
      <button className="third-btn" onClick={() => gotoPage(pageCount - 1)}>
        {">>"}
      </button>
    </div>
  )
}

export default TableControls
