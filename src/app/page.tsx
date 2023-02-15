import "../../src/assets/styles/global.scss"
import "src/packages/RButton/button.component.scss"
import "src/packages/RCard/card.component.scss"
import OurServicesComponent from 'components/home/our-services/our-services.component'
import HeroComponent from "components/home/hero/hero.component"
import AboutUsComponent from "components/home/about-us/about-us.component"
import CounterComponent from "src/core/shared/counter/counter.component"
import OurPortfolioComponent from "components/home/our-portfolio/our-portfolio.component"


export default function Home() {
  return (
    <main>
      <HeroComponent/>
      <CounterComponent/>
      <OurServicesComponent/>
      <AboutUsComponent/>
      <OurPortfolioComponent/>
    </main>
  )
}
