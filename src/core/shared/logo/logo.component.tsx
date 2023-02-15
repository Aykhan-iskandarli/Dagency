import Image from 'next/image'
import React from 'react'
import css from "./logo.module.scss"
import logo from  "src/assets/images/logo/logo.png"

const LogoComponent = () => {
  return (
    <div className={css.logo_container}>
        <div className={css.logo_container_logo}>
            <Image src={logo} alt="logo"/>
        </div>
    </div>
  )
}

export default LogoComponent