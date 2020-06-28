import React from 'react'
import { Tag, TagsContainer, Quote } from '~/ui-components'

const Pricing = () => (
  <section data-type="pricing">
    <h2>Pricing</h2>
    <h4>Access to Weekly Stocktip will cost you $29 a week. Or, in other words, $29 per signal.</h4>
    <TagsContainer>
      <Tag type="neutral" icon="💵">
        $29 a week
      </Tag>
      <Tag icon="🔎">Fully transparent</Tag>
    </TagsContainer>
    <p>
      The pricing was my biggest reservation about Weekly Stocktip, and usually, the best way to spot scams. If someone
      truly figured out how to beat the market, <b>would they REALLY sell it for just $29 a week?</b> If Weekly Stocktip
      works as well as they claim it does, with a +90% win ratio, it would easily be worth millions to the right people,
      or possibly billions as a hedge fund.
    </p>
    <p>I got in contact with the Founder of Weekly Stocktip and asked him about the pricing. Here's what he said:</p>
    <Quote author="Mark Lyck - Co-Founder of Weekly Stocktip">
      "Hello Michael,
      <br /> <br />
      You're entirely correct, Weekly Stocktip's $29 a week subscription doesn't even cover our data costs. But it was
      never built to be profitable. At our core, we're a money management company, and we provide private money
      management services, this is where we make our profits.
      <br /> <br />
      We are planning to expand this section by creating a hedge fund with our value strategy. However, that is a
      massive undertaking that will likely take us years to complete. So while we are setting up the fund and, more
      importantly, making sure our algorithms can handle significant AUM capital, we decided to provide access to our
      top signals for a very affordable price. In return, we get some publicity and good reviews. If we can help
      hundreds of people to accumulate more wealth for just $29/week, we will have hundreds of happy users, a brilliant
      public track record, and a lot of proof of our system working in realtime, which we can then leverage to raise
      more money down the line.
      <br />
      <br />
      In addition, we hope to onboard some of our users to the fund when everything is set up."
    </Quote>
    <p>
      I'd say that's a reasonable explanation for why they would temporarily sell access to Weekly Stocktip for so
      cheap. But what happens to Weekly Stocktip when they launch the fund?
    </p>
    <Quote author="Weekly Stocktip">
      "If or when we open a hedge fund with the system, we will close Weekly Stocktip for new subscribers, existing
      subscribers will continue to have access to the system for at least one year following launch. All existing
      subscribers will also be given the opportunity to invest in the hedge fund at preferred buy-in prices. (legally
      limited to accredited investors only)"
    </Quote>
    <p>It is worth noting, you might not be able to sign up for Weekly Stocktip in a year or two.</p>
  </section>
)

export default Pricing
