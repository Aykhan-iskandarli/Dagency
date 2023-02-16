import React from 'react'
import css from "./our-articles.module.scss"
import TitleComponent from 'src/core/shared/title/title.component'
import ButtonComponent from 'packages/RButton/button.component'

const OurArticlesComponent = () => {
  return (
    <div className={css.our_articles}>
      <div className="container">
        <div className="row">
          <div className="col-12 pr-0">
          <div className='row justify-between align-center'>
            <TitleComponent
              line={css.our_articles_desc}
              className={css.our_articles_title}
              title={"Our articles"}
              desc={"Nam semper, lectus ac vestibulum sollicitudin, enim ante elementum ligula, nec ornare nulla elit vel nunc."} />
            <div className={css.our_articles_btn}>
              <ButtonComponent size={"xl"} width={215}>Browse Portfolio</ButtonComponent>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurArticlesComponent