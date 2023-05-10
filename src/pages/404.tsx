import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import NavBar from "../components/NavBar"



const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
