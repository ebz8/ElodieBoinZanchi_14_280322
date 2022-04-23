import Header from "../../components/Header/Header"

import { FC, useEffect } from "react"

type PageProps = {
  title: string
}

const PageContainer: FC<PageProps> = ({ title, children }) => {
  // to always have the correct meta title
  useEffect(() => {
    document.title = ` HRnet | ${title}`
    window.scrollTo(0, 0)
  }, [title])

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default PageContainer
