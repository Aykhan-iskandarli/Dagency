import LogoComponent from "src/core/shared/logo/logo.component";
import Link from "next/link";
import ButtonComponent from "packages/RButton/button.component";
import { menu } from "./index";
import { generateGuid } from "../../helpers/common-functions/common-functions";
import css from "./navbar.module.scss"
import { useEffect, useState } from "react";



const HeaderComponent = () => {
   const [navbar, setNavbar] = useState<any>(false);

  useEffect(() => {
    const scrollBackground = () => {
      if (window.scrollY >= 120) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollBackground);
  });

  return (
    <div className={`${navbar ? `${css.navbar} ${css.sticky}` :css.navbar}`}>
      <div className="container">
        <div className="row">
          <nav>
            <LogoComponent/>
            <ul className={css.navbar_list}>
              {
                menu.map((item:any)=>(
                 <Link key={generateGuid()} href="/">
                  <li  className={css.navbar_list_item}>{item.name}</li>
                 </Link>
                ))
              }
            </ul>
            <div className={css.navbar_btn}>
              <ButtonComponent>Contact Us</ButtonComponent>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}


export default HeaderComponent