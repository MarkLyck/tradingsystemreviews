import React from 'react'
import { Tag, TagsContainer } from '~/ui-components'

const History = () => (
  <section data-type="history">
    <h2>History & Background Check</h2>
    <h4>What's the company history, and who's running it?</h4>
    <TagsContainer>
      <Tag icon="🤝">longstanding company</Tag>
      <Tag icon="👍">Background in finance & tech</Tag>
      <Tag icon="📈">Solid track record</Tag>
    </TagsContainer>
    <p>
      The Founder of Weekly Stocktip is Mark Lyck. Mark has a background in business administration & economics as well
      as computer science. From the limited interaction I had with the team, they were very knowledgeable about
      investing terms, trading systems, and the potential risks involved.
    </p>
    <p>
      Weekly Stocktip started the work on their algorithms in late 2003. In 2009 - 2011, they ran their first beta test
      with outside investors.
    </p>
    <p>Since 2011 they have been using the system for private money management.</p>
    <p>In 2014 they first provided public access to the system as a signal service.</p>
    <p>
      The company is located in Denmark (home country of the Founder.) Weekly Stocktip is not a registered financial
      advisor company, and you cannot deduct their service in taxes.
    </p>
  </section>
)

export default History
