import React from 'react'
import CounterComponent from 'src/core/shared/counter/counter.component'
import AboutUsComponent from './home/about-us/about-us.component'
import HaveProjectComponent from './home/have-project/have-project.component'
import HeroComponent from './home/hero/hero.component'
import OurArticlesComponent from './home/our-articles/our-articles.component'
import OurPortfolioComponent from './home/our-portfolio/our-portfolio.component'
import OurProcessComponent from './home/our-process/our-process.component'
import OurServicesComponent from './home/our-services/our-services.component'

const App = () => {
  return (
    <div>
          <HeroComponent/>
      <CounterComponent/>
      <OurServicesComponent/>
      <AboutUsComponent/>
      <OurPortfolioComponent/>
      <HaveProjectComponent/>
      <OurProcessComponent/>
      <OurArticlesComponent/>
    </div>
  )
}

export default App