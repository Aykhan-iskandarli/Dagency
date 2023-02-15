import Image from 'next/image'
import React from 'react'
import css from "./about-us.module.scss"
import about from "src/assets/images/about/about.png"
import TitleComponent from 'src/core/shared/title/title.component'
import ButtonComponent from 'packages/RButton/button.component'

const AboutUsComponent = () => {
    return (
        <div className={`my-120 ${css.about_us}`}>
            <div className="container">
                <div className="row">
                    <div className={`col-7 ${css.about_us_left_col}`}>
                        <div className={css.about_us_img}>
                            <Image src={about} alt={'about'} />
                        </div>
                    </div>
                    <div className={`col-5 ${css.about_us_right_col}`}>
                      <div>
                      <TitleComponent className={css.about_us_title} title={"About Us"} desc={"Nam semper, lectus ac vestibulum sollicitudin, enim ante elementum ligula, nec ornare nulla elit vel nunc. Fusce consequat varius blandit."} />
                        <div className={css.about_us_btns}>
                            <ButtonComponent width={146} size={"xl"} className={"mr-15"}>About Us</ButtonComponent>
                            <ButtonComponent width={163} size={"xl"}  outline>Contact Us</ButtonComponent>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsComponent