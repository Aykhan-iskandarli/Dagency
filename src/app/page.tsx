import "../../src/assets/styles/global.scss"
import "src/packages/RButton/button.component.scss"
import "src/packages/RCard/card.component.scss"
import HeroComponent from 'components/hero/hero.component'
import CounterComponent from 'components/counter/counter.component'
import OurServicesComponent from 'components/our-services/our-services.component'


export default function Home() {
  return (
    <main>
      <HeroComponent/>
      <CounterComponent/>
      <OurServicesComponent/>
    </main>
  )
}
