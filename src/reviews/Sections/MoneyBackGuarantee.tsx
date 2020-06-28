import React from 'react'
import { Tag, TagsContainer } from '~/ui-components'

const MoneyBackGuarantee = () => (
  <section data-type="support">
    <h2>Trial & Guarantees</h2>
    <h4>Is there a trial period or money back guarantee?</h4>
    <TagsContainer>
      <Tag icon="📈">2 year performance Guarantee</Tag>
      <Tag icon="💵">100% money back guarantee</Tag>
      <Tag type="okay" icon="👎">
        No free trial
      </Tag>
    </TagsContainer>
    <p>
      Weekly Stocktip does not offer any free trial. This makes sense, given the dependency on the market and the
      long-term holding periods. You can't really judge a trading system like this in a single week or even a few
      months.
    </p>
    <p>Weekly Stocktip does have two different 100% money-back guarantees, though.</p>
    <p>
      They offer a standard 7-day no questions asked money back guarantee. If you don't like it, you can message them
      within 7 days and get a full refund.
    </p>
    <p>
      They offer a standard 7-day no questions asked money-back guarantee. If you don't like it, you can message them
      within seven days and get a full refund.
    </p>
    <p>
      They also offer a 24-months "performance" guarantee. The fine print says that if they don't beat the S&P500 index
      over two years, they will refund 100% of your payments. They obviously won't refund any money that you potentially
      lost investing, but they basically won't make any money if they don't beat the market in the long-term. The catch
      is that you have to stay subscribed during the 2 years.
    </p>
    <p>
      I feel like it would mean a lot more if it was a shorter period. But with the long-term outlook, it makes sense
      that it's a long-term guarantee.
    </p>
  </section>
)

export default MoneyBackGuarantee
