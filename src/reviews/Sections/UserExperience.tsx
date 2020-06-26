import React from 'react'
import { Tag, TagsContainer } from '~/ui-components'

const Support = () => (
  <section data-type="user-experience">
    <h2>User Experience</h2>
    <h4>How user friendly is Weekly Stocktip?</h4>
    <TagsContainer>
      <Tag icon="👌">Super easy to use</Tag>
      <Tag icon="⏲️">Takes under 10 minutes a week to use</Tag>
      <Tag icon="💬">simple SMS signals</Tag>
      <Tag icon="🖥">Beautiful dashboard</Tag>
    </TagsContainer>
    <p>
      Using Weekly Stocktip was very simple. The signals are simple and easy to follow, and since it only trades one
      stock a week, it wasn't too overwhelming.
    </p>
    <p>
      I like the dashboard as well, but it's not required. Everything you need to follow the system is in the SMS text
      you'll receive whenever they release a signal.
    </p>
    <p>
      The most significant usability factor is how much time it takes to use. Since Weekly Stocktip only has one buy
      signal every Monday, it only takes about 10 minutes of work every week. This might not sound like a big deal, but
      many day-trading or intra-day trading systems require you to trade several hours every weekday. Those hours
      quickly add up, and the amount of returns you get per hour of work decreases dramatically. I definitely welcomed
      the break from my usual long hours of day-trading.
    </p>
    <p>
      <b>It's straightforward to use and requires less than 10 minutes of work every week.</b>
    </p>
  </section>
)

export default Support
