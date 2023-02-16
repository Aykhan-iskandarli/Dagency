import Image from 'next/image'
import Link from 'next/link'
import ButtonComponent from 'packages/RButton/button.component'
import CardComponent from 'packages/RCard/card.component'
import React from 'react'
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions'
import TitleComponent from 'src/core/shared/title/title.component'
import { portfolio } from '.'
import css from "./our-portfolio.module.scss"
import {AiOutlineRight} from "react-icons/ai"

const OurPortfolioComponent = () => {
  return (
    <div className={css.our_portfolio}>
      <div className="container">
     <div className="col-12 pr-0">
     <div className='row justify-between align-center'>
          <TitleComponent
            line={css.our_portfolio_desc}
            className={css.our_portfolio_title}
            title={"Our portfolio"}
            desc={"Nam semper, lectus ac vestibulum sollicitudin, enim ante elementum ligula, nec ornare nulla elit vel nunc."} />
          <div className={css.our_portfolio_btn}>
            <ButtonComponent size={"xl"} width={215}>Browse Portfolio</ButtonComponent>
          </div>
        </div>
     </div>
        <div className="row">
         {
            portfolio.map((item: any) => (
              <div key={generateGuid()} className={`col-4 pr-0 ${css.our_portfolio_list}`}>
                <CardComponent className={`${css.our_portfolio_list_card} `}>
                  <div className={css.our_portfolio_list_card_content}>
                    <div className={css.our_portfolio_list_card_content_img}>
                      <Image src={item.img} alt="" />
                    </div>
                    <div className={css.our_portfolio_list_card_content_title}>
                      <span>{item.title}</span>
                    </div>
                    <div className={css.our_portfolio_list_card_content_link}>
                      <Link href="/">{item.btnText} <AiOutlineRight/></Link>
                    </div>
                  </div>
                </CardComponent>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default OurPortfolioComponent