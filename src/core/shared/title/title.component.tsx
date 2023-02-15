import React from 'react'
import css from "./title.module.scss"

const TitleComponent = ({title,desc,className,line}:any) => {
  return (
    <div className={`${css.header_content} ${className}`}>
        <div className={css.header_content_title}>
            <h1>{title}</h1>
        </div>
        <div className={`${css.header_content_desc} ${line}`}>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default TitleComponent