// import Header from "../../components/Header/Header"


function TableContainer({children}: any) {
    // const { loading } = useSelector((state) => state.employees)
    // state : page actuelle
    // state: nombre d'entrée

  return (
    <div className="employees-table">
        {/* header */}
        {/* {loading || loadingUser ? <Loader/> */}
        {children}
        {/* footer */}
    </div>
  )
}

export default TableContainer
