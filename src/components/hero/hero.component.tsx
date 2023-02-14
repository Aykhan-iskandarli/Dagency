import Image from 'next/image'
import ButtonComponent from 'packages/RButton/button.component'
import React from 'react'
import css from "./hero.module.scss"
import vrImg from "src/assets/images/hero.png"
import circle1 from "src/assets/images/circle1.png"
import circle from "src/assets/images/circle.png"
import cube from "src/assets/images/cube.png"
import hero_shape from "src/assets/images/hero-shape.png"
import half_circle from "src/assets/images/half-circle.png"

const HeroComponent = () => {
    return (
       <div className={css.hero}>
         <div className={css.hero_container}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className={css.hero_container_content}>
                            <div style={{zIndex:"99999999"}}>
                                <div className={css.hero_container_content_mini_title}>
                                    <span>Welcome to dgency</span>
                                </div>
                                <div className={css.hero_container_content_title}>
                                    <h1>We’re a 3D design agency</h1>
                                </div>
                                <div className={css.hero_container_content_desc}>
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum.</p>
                                </div>
                                <div className={css.hero_container_content_btns}>
                                    <ButtonComponent size={"xl"} className="mr-15">Contact Us</ButtonComponent>
                                    <ButtonComponent size={"xl"} outline>Browse Portfolio</ButtonComponent>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`col-6 ${css.hero_container_right}`}>
                        <Image src={vrImg} alt="" />
                    </div>
                    <div className={css.hero_container_shape}>
                        <div className={css.hero_container_shape_banner}>
                            <Image src={circle1} alt="" />
                        </div>
                    </div>
                    <div className={css.hero_container_shape}>
                        <div className={css.hero_container_shape_hero_shape}>
                            <Image src={hero_shape} alt="" />
                        </div>
                    </div>
                    <div className={css.hero_container_shape}>
                        <div className={css.hero_container_shape_circle}>
                            <Image src={circle} alt="" />
                        </div>
                    </div>
                    <div className={css.hero_container_shape}>
                        <div className={css.hero_container_shape_cube}>
                            <Image src={cube} alt="" />
                        </div>
                    </div>
                    <div className={css.hero_container_shape}>
                        <div className={css.hero_container_shape_half_circle}>
                            <Image src={half_circle} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default HeroComponent