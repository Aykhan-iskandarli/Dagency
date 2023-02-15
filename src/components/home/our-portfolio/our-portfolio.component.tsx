import React from 'react'
import TitleComponent from 'src/core/shared/title/title.component'
import css from "./our-portfolio.module.scss"

const OurPortfolioComponent = () => {
  return (
    <div className={css.our_portfolio}>
        <div className="container">
        <div className=''>
          <TitleComponent 
              line={css.our_portfolio_desc} 
              className={css.our_portfolio_title} 
              title={"Our portfolio"} 
              desc={"Nam semper, lectus ac vestibulum sollicitudin, enim ante elementum ligula, nec ornare nulla elit vel nunc."} />
        </div>
          <div className="row">

          </div>
        </div>
    </div>
  )
}

export default OurPortfolioComponent