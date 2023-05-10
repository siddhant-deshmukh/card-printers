import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
      <h1 className="text-3xl font-bold underline">
        Hello Meow!
      </h1>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
