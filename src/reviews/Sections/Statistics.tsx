import React from 'react'
import { Tag, TagsContainer, Image, Quote } from '~/ui-components'
import StatisticsTable from '../StatisticsTable'

const Statistics = () => (
  <section data-type="statistics">
    <h2>Statistics</h2>
    <h4>Show me the numbers!</h4>
    <TagsContainer>
      <Tag icon="✅">Excellent statistics</Tag>
      <Tag type="okay" icon="📆">
        Long holding period
      </Tag>
      <Tag icon="✅">Reliable testing period</Tag>
      <Tag type="worst" icon="👎">
        high max drawdown in recessions
      </Tag>
      <Tag icon="🔎">Fully transparent</Tag>
    </TagsContainer>
    <p>Weekly Stocktip has a lot of statistics available, but I've collected the most important ones here:</p>
    <StatisticsTable />
    <p>
      There's a lot to unpack there, but let's start with that +93.67% win ratio. According to this, on average, 9 out
      of 10 of the signals they suggested to buy was sold with a profit.
    </p>
    <p>
      The average return of those 9/10 signals have been +102.37%
      <br />
      The average loss of the 1/10 signals have been -16.47%
    </p>
    <p>
      So from that, we can calculate the expected return of a signal: (0.9367 * 102.37) - (0.0633 * 16.47) ={' '}
      <b>+94.85%</b>
    </p>
    <p>
      If you invested $100 in each of these, you would have $900 in winnings and only $17 in losses. That's a hugely
      disproportionate positive risk factor, and my first thought is, "
      <b>If it sounds too good to be true, it probably is.</b>" So let's analyze this a bit further.
    </p>
    <p>
      Over what period are these statistics recorded? Perhaps they chose an exceptional year to run their statistics. A
      typical red flag I often see in other trading systems.
    </p>
    <p>
      After digging deeper, for Weekly Stocktip you'll find that these numbers are averages from 1970 to 2020. That
      means <b>the system has been through several market crashes</b> and all sorts of market situations unscathed. I
      cannot understate the importance of making sure that trading systems and their statistics are recorded over an
      acceptable period and not just during a few remarkable years!
    </p>
    <p>
      But making sure the recorded statistics are over an acceptable period isn't enough to validate this either. The
      backtest could be flawed or fabricated. We'll cover that that later in the review.
    </p>
    <p>
      I also looked at the numbers for the realtime results since their launch from 2009 to 2020. The numbers from this
      period were actually slightly better, which is a little unexpected. Weekly Stocktip said:
    </p>
    <Quote author="Weekly Stocktip">
      "Yes, the performance from 2009-2020 has indeed been higher than our long-term performance. This is to be expected
      since we haven't run into a significant market-crash yet. Once we hit a recession, we expect the performance to
      drop down to match our long-term stats better.
      <br />
      <br />
      We would much rather show more realistic long-term statistics than our more recent above-average results. We don't
      want people joining with unrealistic expectations and get disappointed when a market crash inevitably comes."
    </Quote>
    <p>
      So far, everything looks promising, but there's one more question you must ask when it comes to validating win
      ratios: Do they hold their losers indefinitely and never sell them? Everyone can get a +100% win ratio if they
      never sell the losers or only made a very few lucky trades!
    </p>
    <p>
      The Weekly Stocktip system executed +2,500 trades in the period from 1970 to 2020. I believe that there are enough
      trades to be statistically significant, but I still asked them specifically about holding stocks perpetually.
      Here's what they said:
    </p>
    <Quote author="Weekly Stocktip">
      "The system re-evaluates it's portfolio every week trying to figure out the best time to sell each signal. There
      are several algorithms to trigger a sell for either a positive return or to limit a possible loss. There is also a
      hard deadline set at four years. This deadline is very rarely hit, but if it happens, it will sell the stock, no
      matter the price. This prevents the system from holding onto stocks forever.
      <br />
      <br />
      The average holding period since our 2009 launch has been 408 days."
    </Quote>
    <p>
      That satisfies my biggest concern about the statistics and brings the expected return in a more reasonable light.{' '}
      <b>The +94% average return is based on a holding period of +1 year</b>. But that's still a lot better than the
      6-8% you'll get investing in an index fund.
    </p>
    <p>That is a long holding period, but that's normal for value investing.</p>

    <Image src="/static/weeklystocktip/backtested_chart.png" alt="backtested chart" />
    <p>
      Let's talk about those Max draw-downs. Max drawdown depicts the loss from the highest portfolio balance to the
      lowest portfolio balance. Looking at the chart above confirms that the portfolio dropped almost 50% in value from
      January 1973 to December 1974. This period is well known to be one of the worst stock-market crashes in history,
      and the S&P500 dropped over 50% in value as well during this period. I don't love that it lost that much, but at
      least there's a good explanation. I'm willing to give Weekly Stocktip a pass on this one, especially since they
      fully recovered from those losses in less than a year later. In comparison, it took the S&P500 about six years to
      recover from the crash.
    </p>
    <p>
      I do like that they openly shared such a high maximum all-time drawdown from over 50 years ago. They could very
      easily have just cut it off earlier or manipulated those numbers. It gives me{' '}
      <b>high confidence in the legitimacy of their otherwise excellent numbers. A+ for transparency!</b>
    </p>
  </section>
)

export default Statistics
