import Image from 'next/image'
import React from 'react'
import css from "./have-project.module.scss"
import touch from "src/assets/images/touch/touch.png"
import ButtonComponent from 'packages/RButton/button.component'

const HaveProjectComponent = () => {
  return (
    <div className={css.have_project}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={css.have_project_content}>
              <div className={css.have_project_content_title}>
                <h5>Have a project? Get in touch today</h5>
              </div>
              <div className={css.have_project_content_desc}>
                <p>
                  Pellentesque tortor lorem, facilisis vel urna eget,
                  maximus sodales metus. Nulla luctus lacus ante, ut sollicitudin mi eleifend eu.
                  Donec condimentum nibh at enim accumsan vestibulum.
                </p>
              </div>
              <div className={css.have_project_content_btn}>
                <ButtonComponent>Get In Touch</ButtonComponent>
              </div>
            </div>
          </div>
          <div className={`col-6 ${css.have_project_container}`}>
            <div className={css.have_project_container_img}>
              <Image width={178} sizes={"xl"} src={touch} alt=""  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HaveProjectComponent