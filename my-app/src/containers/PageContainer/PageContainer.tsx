import Header from "../../components/Header/Header"

// import { useEffect } from "react"

function PageContainer({children}: any) {
    // const { loading } = useSelector((state) => state.employees)

    // to always have the correct meta title 
//   useEffect( () => {
//     document.title=`${title} | Wealth Health`
//     window.scrollTo(0,0)
//   }, [title])

  return (
    <>
        <Header />
        {/* {loading || loadingUser ? <Loader/> */}
        <main>{children}</main>
        {/* } */}
    </>
  )
}

export default PageContainer
