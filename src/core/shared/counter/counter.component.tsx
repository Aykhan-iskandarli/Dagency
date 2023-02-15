import CardComponent from 'packages/RCard/card.component'
import React from 'react'
import css from "./counter.module.scss"

const CounterComponent = () => {
  return (
    <div className={css.counter}>
        <div className="container">
                <CardComponent className={css.counter_card}>
                    <ul className={css.counter_card_list}>
                        <li className={css.counter_card_list_item}>
                            <span>321+</span>
                            <p>Projects completed</p>
                        </li>
                        <li className={css.counter_card_list_item}>
                            <span>28+</span>
                            <p>Design awards</p>
                        </li>
                        <li className={css.counter_card_list_item}>
                            <span>9+</span>
                            <p>Years of experience</p>
                        </li>
                        <li className={css.counter_card_list_item}>
                            <span>56+</span>
                            <p>Worldwide clients</p>
                        </li>
                    </ul>
                </CardComponent>
        </div>
    </div>
  )
}

export default CounterComponent