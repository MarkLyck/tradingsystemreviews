import React from 'react'
import { Tag, TagsContainer } from '~/ui-components'

const Backtesting = () => (
  <section data-type="backtesting">
    <h2>Backtesting</h2>
    <h4>
      We know Weekly Stocktip backtests their algorithms, but how ethical are they and do they match real-world
      performance?
    </h4>
    <p>I'm always highly skeptical of backtests because they can easily be done unethically or faked entirely.</p>
    <p>
      Weekly Stocktip has outlined in great detail how they build the algorithms and how they use backtesting ethically
      in their white paper. They also provide an in-depth article on how they avoid all the common pitfalls:{' '}
      <a href="https://medium.com/@weeklystocktip/backtesting-bias-and-how-to-avoid-it-f10c764d9886" target="_blank">
        https://medium.com/@weeklystocktip/backtesting-bias-and-how-to-avoid-it-f10c764d9886
      </a>{' '}
      I encourage you to read this article in depth and make your own judgment.
    </p>
    <p>
      Weekly Stocktip's backtesting methodologies passes all tests I could think of. Most importantly, their real-world
      returns since their 2009 launch closely match the gains in their backtest, 11 years of ongoing public records are
      hard to argue against.
    </p>
  </section>
)

export default Backtesting
