import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"

//@ts-ignore
import CardImg from "../images/card-img.webp"
//@ts-ignore
import CardImg1 from "../images/card-img-01.webp"
//@ts-ignore
import CardImg2 from "../images/card-img-02.webp"
//@ts-ignore
import CardImg3 from "../images/card-img-03.webp"
//@ts-ignore
import CardImg4 from "../images/card-img-04.webp"
//@ts-ignore
import CardImg5 from "../images/card-img-05.webp"
import Layout from "../Layout"
import Seo from "../components/Seo"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <div className="w-full   bg-gradient-to-r from-pink-100  to-pink-300">
          <div className="max-w-[1393px]  pb-56 2md:pb-36 relative flex mx-auto w-full flex space-x-32">
            <div className="flex flex-col  space-y-3 z-10">
              <div className="font-mono -rotate-0 bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-800 to-purple-900 mt-10 2md:mt-32 text-3xl  2xl:text-6xl   p-5">
                Looking for a way to make your special moments unforgettable?
              </div>
              <div className="font-mono font-medium -rotate-0 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-black mt-32  text-2xl  2xl:text-5xl   p-5">
                Look no further than our personalized invitation cards.
              </div>
            </div>
            <img loading="lazy" width={640} height={465} className="hidden 2xl:block" alt='Image' src={CardImg} />
            <img className='absolute bottom-0 right-0 2xl:hidden aspect-[640/465] opacity-50 w-auto' loading="lazy" src={CardImg} />
          </div>
        </div>

        {/* from-pink-800 to-violet-900 bg-gradient-to-r */}
        <div className="w-full max-w-screen relative py-24 bg-white overflow-hidden">
          <div className="font-lobster text-3xl -rotate-0 bg-clip-text mb-10 text-transparent bg-gradient-to-r from-purple-700 to-black w-full text-center  p-5">
            For any occasion, we have the card that fits your needs.
          </div>
          <CardPreview />
        </div>

        <div className="w-full relative flex justify-between space-x-32 bg-gradient-to-r from-pink-100  to-pink-400">
          <div className="max-w-[1393px] relative flex mx-auto w-full flex space-x-32">
            <div className="pr-0 2xl:pr-[600px] z-10 text-xl 2md:text-3xl">
              <div className="flex flex-col space-y-10 p-5">
                <div className="font-mono -rotate-0 bg-clip-text font-semibold text-transparent bg-gradient-to-r from-pink-800 to-purple-900 mt-32   ">
                  Don’t wait any longer, contact us today!
                </div>
                <div className="font-mono -rotate-0 bg-clip-text  text-transparent bg-gradient-to-r from-pink-800 to-purple-900 mt-32   ">
                  And let us help you create the perfect invitation cards for your special moments.
                </div>
                <Link to='contactus' className="rounded-full w-fit h-fit bg-gradient-to-r from-pink-800 to-purple-900 text-white p-4 ">
                  Contact Us
                </Link>
              </div>
            </div>
            <img className='absolute right-0 hidden 2xl:block' loading="lazy" width={640} height={465} src={CardImg} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

function CardPreview() {
  const list = [
    { cardImg: CardImg1, text: 'Wedding Card' },
    { cardImg: CardImg2, text: 'Wedding Card' },
    { cardImg: CardImg3, text: 'Wedding Card' },
    { cardImg: CardImg4, text: 'Wedding Card' },
  ]
  return (
    <div className="overflow-x-auto mx-auto min-w-fit w-fit">
      <ul className="flex space-x-10 px-10 h-[500px] w-full">
        {
          list.map(({ cardImg, text }, index) => {
            return (
              <div className="min-w-fit h-fit flex flex-col space-y-1" key={index}>
                <img loading="lazy" src={cardImg} width={280} height={409} className="min-w-fit min-h-fit border" />
                <h1 className="text-center font-serif font-semibold text-xl pb-2 w-full">{text}</h1>
              </div>
            )
          })
        }
      </ul>
    </div>

  )
}

export default IndexPage

export const Head: HeadFC = () => <Seo title={'home'}>
</Seo>

/**
 
Invite your guests with style and flair with our custom cards. For any occasion, we have the card that fits your needs. Pick your design and personalize it to your liking. Order today and wow your guests with our quality cards.

Make your special moments unforgettable with our personalized invitation cards. Whether it’s a wedding, a birthday, a bachelor party, or any other occasion, we have the perfect card for you. Choose from our wide range of designs and customize them to suit your style and theme. Order now and get ready to impress your guests with our high-quality cards.

 */