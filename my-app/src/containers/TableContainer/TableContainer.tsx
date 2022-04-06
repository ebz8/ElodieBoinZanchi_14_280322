// import Header from "../../components/Header/Header"


function TableContainer({children}: any) {
    // const { loading } = useSelector((state) => state.employees)
    // state : page actuelle
    // state: nombre d'entrée

  return (
    <>
        {/* header */}
        {/* {loading || loadingUser ? <Loader/> */}
        <main>{children}</main>
        {/* footer */}
    </>
  )
}

export default TableContainer
