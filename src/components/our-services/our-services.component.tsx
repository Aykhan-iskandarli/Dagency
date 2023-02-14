import Image from 'next/image'
import CardComponent from 'packages/RCard/card.component'
import React from 'react'
import { ourServices } from './index'
import css from "./our-services.module.scss"

const OurServicesComponent = () => {
  return (
    <div className={css.our_services}>
        <div className="container">
            <div className="row">
             {
                ourServices.map((item:any)=>(
                    <div className="col-3">
                        <CardComponent className={`${css.our_services_card} `}>
                            <div className={css.our_services_card_content}>
                                <div className={css.our_services_card_content_img}>
                                    <Image src={item.img} alt="" />
                                </div>
                                <div className={css.our_services_card_content_title}>
                                    <span>{item.title}</span>
                                </div>
                                <div className={css.our_services_card_content_desc}>
                                    <span>{item.desc}</span>
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

export default OurServicesComponent