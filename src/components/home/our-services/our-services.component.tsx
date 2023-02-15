import Image from 'next/image'
import ButtonComponent from 'packages/RButton/button.component'
import CardComponent from 'packages/RCard/card.component'
import React from 'react'
import { generateGuid } from 'src/core/layouts/public/helpers/common-functions/common-functions'
import TitleComponent from 'src/core/shared/title/title.component'
import { ourServices } from './index'
import css from "./our-services.module.scss"

const OurServicesComponent = () => {
    return (
        <div className={css.our_services}>
            <div className="container">
                <TitleComponent title={"Our Services"} desc={"Nam semper, lectus ac vestibulum sollicitudin, enim ante elementum ligula, nec ornare nulla elit vel nunc."} />
                <div className="row">
                    {
                        ourServices.map((item: any) => (
                            <div key={generateGuid()} className={`col-3 pr-0 ${css.our_services_list}`}>
                                <CardComponent className={`${css.our_services_list_card} `}>
                                    <div className={css.our_services_list_card_content}>
                                        <div className={css.our_services_list_card_content_img}>
                                            <Image src={item.img} alt="" />
                                        </div>
                                        <div className={css.our_services_list_card_content_title}>
                                            <span>{item.title}</span>
                                        </div>
                                        <div className={css.our_services_list_card_content_desc}>
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                </CardComponent>
                            </div>
                        ))
                    }
                    <div className={css.our_services_btn}>
                        <ButtonComponent size={"xl"} width={213} outline>Browse Services</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServicesComponent