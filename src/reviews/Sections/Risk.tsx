import React from 'react'
import { Tag, TagsContainer, Image } from '~/ui-components'

const Risk = () => (
  <section data-type="risk">
    <h2>Risk</h2>
    <h4>All investments have some degree of risk involved, and that includes Weekly Stocktip!</h4>
    <TagsContainer>
      <Tag icon="✅">Very safe long-term</Tag>
      <Tag icon="🤖">Invests without emotions</Tag>
      <Tag type="okay" icon="😐">
        Very dependant on the market
      </Tag>
    </TagsContainer>
    <p>
      We've already seen the Gain-to-Pain ratio, Sortino ratio, win ratio, and other statistics that deem Weekly
      Stocktip as a very low-risk investment system. But what about periodically? How dependant is Weekly Stocktip on
      the performance of the market?
    </p>
    <p>
      To test this, I asked them to provide a chart where they overlayed the Weekly Stocktip performance chart with the
      DJIA chart from the same period on two different scales. Here's the result:
    </p>
    <Image src="/static/weeklystocktip/ws_vs_djia.png" alt="Weekly Stocktip vs DJIA" />
    <p>
      They look almost identical! The only difference is that Weekly Stocktip goes from 0% to +1,500% and DJIA goes from
      0 to +250%. So what gives? If Weekly Stocktip is so dependant on the market performance, how do they outperform
      it?
    </p>
    <p>
      It's all about the stocks they pick and the value investing strategy they use. In general, when the stock market
      drops, all stocks drop (with some exceptions, of course), but some stocks drop less than the average. Likewise,
      when the stock market goes up in value, some stocks go up a lot more than the average. This is where Weekly
      Stocktip shines! When the market drops, their stock picks lose a bit of value too, but not as much as the market,
      and most importantly, when the market goes up, their stock picks go up A LOT more in value.
    </p>
    <p>
      If you invest in Weekly Stocktip signals in the longterm, assuming their performance stays the same in the future
      as it has in the past, the risk is minimal.
    </p>
    <p>
      However, if you start investing with Weekly Stocktip{' '}
      <b>just before a market crash happens, you will most likely lose some money in the short term</b>. But it is worth
      noting, after any market crashes, they fully recovered from it within a single year. In contrast, the stock market
      has taken over 2 years, on average, to recover from a market crash.
    </p>
    <p>
      I asked Weekly Stocktip about this, and they confirmed that the majority of their ~7% losing signals happened
      during and shortly after market crashes. In the past, the year following a market-crash has been some of the most
      profitable.
    </p>
    <p>
      And that works hand in hand with the value investing strategy. Whenever a market crash happens, investors usually
      over-react, and a lot more stocks are selling for cheap, Leaving a sweet buffet of stocks for Weekly Stocktip to
      pick out its top performers!
    </p>
    <p>
      All in all, Weekly Stocktip seems to be a <b>very low risk, long-term investment strategy.</b>
    </p>
  </section>
)

export default Risk
