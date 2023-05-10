import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../Layout"

const IndexPage: React.FC<PageProps> = () => {

  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [query, setQuery] = React.useState<string>('')
  const [suc, setSuc] = React.useState<string>('')
  const [err, setErr] = React.useState<string>('')

  return (
    <Layout >
      <div className="min-h-[700px] p-5 w-full">
        <div className="flex flex-col 2md:flex-row justify-between h-full items-center max-w-5xl mx-auto">
          <div className="flex flex-col space-y-5 p-5 2md:p-14">
            <div className="text-2xl 2md:text-5xl">
              Contact Us
            </div>
            <div className="text-xl">
              Need to get in touch with us? Either fill out the form or call on <span className="font-semibold text-pink-800">+91 9999 9999</span>
            </div>
          </div>
          <form className="w-auto">
            <div className="flex flex-col max-h-full p-5 w-full max-w-[390px] space-y-5 shadow-xl bg-gradient-to-tr from-white to-pink-50 shadow-pink-300 border-pink-200 rounded-xl border">
              {
                err &&
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                  {err}
                </div>
              }
              <div>
                <label htmlFor="name">Name :</label>
                <br />
                <input
                  id="name"
                  name="name"
                  value={name}
                  type={'text'}
                  placeholder="Name"
                  className="p-4 w-full border outline-none"
                  onChange={(event) => { event.preventDefault(); setName(event.target.value) }} />
              </div>
              <div>
                <label htmlFor="email">Email :</label>
                <br />
                <input
                  id="email"
                  name="email"
                  value={email}
                  type={'email'}
                  placeholder="Email"
                  className="p-4 w-full border outline-none"
                  onChange={(event) => { event.preventDefault(); setEmail(event.target.value) }} />

              </div>
              <div className="w-full">
                <label>What can we help your with?</label>
                <textarea
                  rows={4}
                  value={query}
                  placeholder="Enter your query"
                  className="p-4 border max-h-56 outline-none w-full"
                  onChange={(event) => { event.preventDefault(); setQuery(event.target.value) }} />
              </div>
              <button
                className="rounded-full ml-auto w-fit h-fit bg-gradient-to-r from-pink-800 to-purple-900 text-white py-2 px-5"
                onClick={(event) => {
                  event.preventDefault();
                  setEmail('')
                  setName('')
                  setQuery('')
                  setSuc('Thanks! We will reach to you soon')
                  setTimeout(() => {
                    setSuc('')
                  }, 5000);
                }}>
                Send
              </button>
              {
                suc &&
                <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                  {suc}
                </div>
              }
            </div>

          </form>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Contact Us</title>