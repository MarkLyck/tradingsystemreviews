import React from 'react'
import { Tag, TagsContainer } from '~/ui-components'

const BarrierToEntry = () => (
  <section data-type="barrier-to-entry">
    <h2>Barrier to Entry</h2>
    <h4>Who can use it, and how much setup, time and preparation is required?</h4>
    <TagsContainer>
      <Tag icon="🌎">Accessible from anywhere in the world</Tag>
      <Tag icon="👍">Simple BUY/SELL signals</Tag>
      <Tag icon="🎉">No training required</Tag>
      <Tag icon="💰">Affordable price</Tag>
    </TagsContainer>
    <p>The barrier to entry for Weekly Stocktip is very low.</p>
    <ul>
      <li>Everyone can afford the $29 price tag.</li>
      <li>There's no minimum investment amount.</li>
      <li>
        The signals are only for stocks trading on the three biggest exchanges in the US. You can trade these from
        anywhere in the world.
      </li>
    </ul>
    <p>
      All signals are simple BUY and SELL trades. You don't need to have previous knowledge about stop-loss, shorts,
      options, etc.
    </p>
    <p>
      For complete beginners that have never traded a stock before, they also provide a short guide with some broker
      recommendations and basics on how to buy and sell a stock.
    </p>
  </section>
)

export default BarrierToEntry
