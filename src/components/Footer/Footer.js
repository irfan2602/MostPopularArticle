import React from 'react'
import useFetch from '../UseFetch/useFetch'

const Footer = () => {
  const [data] = useFetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=hlmCaNoX5Nl8DD0HtY27CURxbn8jsfBP')
  return (
    <div className='footerStyle'>
      <h2 data-testid='footer'> {data.copyright} </h2>
    </div>
  )
}

export default Footer
