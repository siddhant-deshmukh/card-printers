import React from 'react'
//@ts-ignore
import Icon from '../images/icon.png'
import { Helmet } from 'react-helmet'

//@ts-ignore
const Seo = ({ title, children }) => {
  return (
    <Helmet>
      <title>Card Makers {(title)?`| ${title}`:''}</title>
      <link id="icon" type="image/png" rel="icon" href={Icon}  />
      {children}
    </Helmet>
  )
}

export default Seo