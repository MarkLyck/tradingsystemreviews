import React from 'react'
import { Tag, TagsContainer, Image } from '~/ui-components'

const Realtime = () => (
  <section data-type="realtime">
    <h2>Realtime results</h2>
    <h4>
      So the strategy is good, the statistics are impressive & the backtest looks ethical. But none of that matters if
      the realtime results don't match the claims.
    </h4>
    <TagsContainer>
      <Tag icon="✅">Match claimed statistics</Tag>
      <Tag icon="📈">Excellent returns</Tag>
      <Tag icon="🔎">Fully transparent</Tag>
    </TagsContainer>
    <p>
      Luckily since Weekly Stocktip isn't a new company and launched back in 2009 over 11 years ago, they already have
      an extensive track record we can review.
    </p>
    <Image src="/static/weeklystocktip/realtime_chart.png" alt="live performance chart" />
    <p>
      This chart shows how the portfolio developed from 2009 until June 2020 compared to the DJIA (Dow Jones Industrial
      Average), so if this is correct. <b>Weekly Stocktip earned a total accumulative return of +1,482%</b>. It might
      not be apparent that this is an accumulative return, which means it assumes you reinvest your profits into buying
      more stocks. In comparison investing your money in an index fund like the S&P500 or DJIA would only have netted
      about +217% return in the same period.
    </p>
    <Image size="large" src="/static/weeklystocktip/latest_sells.png" alt="latest sells" />
    <p>
      Weekly Stocktip publically provides a list of the latest ten sell signals, as shown above. After using the system
      for a few months now,{' '}
      <b>
        I can confirm that when they release a sell signal in the dashboard, they also update this list with the new
        sell signal and correct numbers.
      </b>{' '}
      They also claim to send out the sell signals, both positive & negative, to their newsletter, and sure enough,
      there was one negative signal during my subscription, and they made that one public as well.
    </p>
    <p>
      Transparency is vital for trading systems, so I'm pleased to see{' '}
      <b>what you get in the dashboard matches the marketing fluff on their website!</b> Usually, on other trading
      system sites, you see a few examples of a few "amazing" investments, and they never give out an expansive list of
      the latest trades.
    </p>
    <p>I'll give Weekly Stocktip a 10/10 for transparency showing the latest signals, whether positive or negative.</p>
  </section>
)

export default Realtime
