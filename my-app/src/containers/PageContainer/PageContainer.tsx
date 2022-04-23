import Header from "../../components/Header/Header"

import { useEffect } from "react"

function PageContainer({children, title}: {children: any, title:string}) {

    // to always have the correct meta title 
  useEffect( () => {
    document.title=` HRnet | ${title}`
    window.scrollTo(0,0)
  }, [title])

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
