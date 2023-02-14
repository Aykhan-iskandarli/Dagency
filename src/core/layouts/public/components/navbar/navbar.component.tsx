import LogoComponent from "components/logo/logo.component";
import Link from "next/link";
import ButtonComponent from "packages/RButton/button.component";
import { menu } from ".";
import { generateGuid } from "../../helpers/common-functions/common-functions";
import css from "./navbar.module.scss"



const NavbarComponent = () => {


  return (
    <div className={css.navbar}>
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


export default NavbarComponent