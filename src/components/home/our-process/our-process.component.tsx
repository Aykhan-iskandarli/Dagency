import Image from 'next/image'
import CardComponent from 'packages/RCard/card.component'
import React from 'react'
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions'
import TitleComponent from 'src/core/shared/title/title.component'
import { ourProcess } from '.'
import css from "./our-process.module.scss"

const OurProcessComponent = () => {
  return (
    <div className={css.our_process}>
        <div className="container">
          <div className="row">
          <TitleComponent className={css.our_process_title} title={"Our Process"} desc={"Nam semper, lectus ac vestibulum sollicitudin, enim ante elementum ligula, nec ornare nulla elit vel nunc."} />
          {
            ourProcess.map((item: any) => (
              <div key={generateGuid()} className={`col-4 pr-0 ${css.our_process_list}`}>
                <CardComponent className={`${css.our_process_list_card} `}>
                  <div className={css.our_process_list_card_content}>
                    <div className={css.our_process_list_card_content_img}>
                      <Image src={item.img} alt="" />
                    </div>
                    <div className={css.our_process_list_card_content_title}>
                      <h2>{item.title}</h2>
                    </div>
                    <div className={css.our_process_list_card_content_desc}>
                      <p>{item.desc}</p>
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

export default OurProcessComponent