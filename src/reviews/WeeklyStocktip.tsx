import React from 'react'
import { ReviewContainer, Disclaimer, TagsContainer, Tag, Quote, Image } from '~/ui-components'
import Statistics from './Statistics'
import {
  Signals,
  StockScreener,
  Pricing,
  MoneyBackGuarantee,
  Support,
  UserExperience,
  BarrierToEntry,
  History,
  Summary,
  Risk,
} from './Sections'

const WeeklyStocktipReview = () => (
  <ReviewContainer>
    <h1>Weekly Stocktip Review</h1>
    <Disclaimer>
      <p>
        I did not get paid to write this review, I did not receive free access to the service, nor I'm not getting any
        referral payments from this company. Our ads help keep the reviews objective and honest, so please consider
        supporting us by turning off your ad blocker.
      </p>
    </Disclaimer>
    <section data-type="asset-types">
      <h2>Asset Types</h2>
      <h4>What types of assets does this system use?</h4>
      <TagsContainer>
        <Tag icon="🇺🇸">US Stocks</Tag>
        <Tag icon="🏦">Traded on major exchanges</Tag>
        <Tag icon="👍">Minimum market cap</Tag>
        <Tag icon="✅">No scammy penny stocks</Tag>
        <Tag icon="🌎">Can be traded from anywhere in the world</Tag>
      </TagsContainer>
      <p>
        Weekly Stocktip provides trading signals for <b>stocks on the three major US exchanges</b>: NYSE, Nasdaq & AMEX.
      </p>
      <p>
        All stocks in the system must have <b>at least seven years of financial reports</b> and SEC filings available
        for analysis. It also filters out any stocks with a market cap under $4.5 million. 👍
      </p>
      <p>These assets can easily be traded anywhere in the world from a standard brokerage account</p>
    </section>
    <section data-type="strategy">
      <h2>Strategy</h2>
      <h4>How does it beat the market?</h4>
      <TagsContainer>
        <Tag icon="📈">Value investing</Tag>
        <Tag icon="🤖">Algorithmic</Tag>
        <Tag icon="👍">Proven strategy</Tag>
        <Tag icon="🤖">Responsible AI</Tag>
        <Tag icon="💯">High quality companies</Tag>
        <Tag icon="🔎">Fully transparent</Tag>
      </TagsContainer>
      <p>
        Weekly Stocktip is an <b>algorithmic trading system</b>. That means complex computer algorithms provide the BUY
        and SELL signals instead of a human investor. Algorithmic trading has many upsides since it doesn't make human
        mistakes or have to deal with human emotions, but only if done ethically. (we'll get into those pitfalls later)
      </p>
      <p>
        Weekly Stocktip uses a <b>value investment strategy</b>. The system analyzes all stocks in the current market
        from a pure business evaluation perspective as you'd expect any value investor to do.
      </p>
      <h3>What is value investing?</h3>
      <p>
        If you haven't heard of value or growth investing before, it is the same principles used by{' '}
        <a href="https://en.wikipedia.org/wiki/Warren_Buffett" target="_blank">
          Warren Buffett
        </a>
        ,{' '}
        <a href="https://en.wikipedia.org/wiki/Benjamin_Graham" target="_blank">
          Benjamin Graham
        </a>
        , and many other top investors. Value investors only invest in stocks that are trading for cheaper than their
        "intrinsic or book value" (basically, what the company is worth.)
      </p>
      <p>
        Investopedia has an excellent{' '}
        <a href="https://www.investopedia.com/terms/v/valueinvesting.asp">article on value investing</a> if you want to
        learn more about this approach.
      </p>
      <p>
        What makes Weekly Stocktip unique is that they use algorithms instead of having a team of analysts. The
        algorithms use <b>all SEC filings, financial reports, and stock pricing history dating back to 1970</b> (or
        earliest possible date) to <b>evaluate all companies in the stock market at once</b>. Finding stocks selling for
        much cheaper than they should is not easy. So if Weekly Stocktip has done this right, analyzing every single
        stock all at once, provides a significant advantage in identifying which stocks are selling for cheaper than
        they should be.
      </p>
      <p>Weekly Stocktip has more than 114 unique algorithms to analyze these stocks based on these six factors:</p>
      <ul>
        <li>
          <b>Risk</b> (estimated future risk)
        </li>
        <li>
          <b>Reward</b> (expected future reward)
        </li>
        <li>
          <b>Growth</b> (estimated future business growth)
        </li>
        <li>
          <b>Profitability</b> (expected future profitability of the business)
        </li>
        <li>
          <b>Soundness</b> (how sound is the business model)
        </li>
        <li>
          <b>Stewardship</b> (how well does the company treat investors)
        </li>
      </ul>
      <p>
        Weekly Stocktip says the system uses these factors to invest in high quality, profitable companies with good
        growth & low risk, that treat their investors well and only buy stocks with a large margin of safety.
      </p>
      <p>I was curious how much of this is Artificial Intelligence or machine learning. Here's what they said:</p>
      <Quote author="Weekly Stocktip">
        "The <b>AI part is not deeply integrated into the algorithms</b>. Instead, it's a thin layer that takes all the
        outputs of the algorithms and uses statistical probability to sum it all up to a more user-friendly score
        between -100 and +100, which is what we call the AI Score."
      </Quote>
      <p>
        I am glad to see the whole system isn't just a machine learning algorithm, but there's actual logic backing
        everything up.
      </p>
      <p>
        If you are considering subscribing to Weekly Stocktip, I would recommend reading their{' '}
        <a href="https://weeklystocktip.com/static/2008_Whitepaper_weeklystocktip.pdf" target="_blank">
          2008 whitepaper
        </a>{' '}
        in detail. It goes a lot deeper into the strategy and how they avoided common pitfalls.
      </p>
      <p>
        Value investing is a <b>long proven strategy</b>. Combining that with an algorithmic trading approach that can
        identify bargains in the stock market is very promising. I'll give this strategy a big 👍 (if it actually works)
      </p>
    </section>
    <section data-type="statistics">
      <h2>Statistics</h2>
      <h4>Show me the numbers!</h4>
      <TagsContainer>
        <Tag icon="💯">Excellent win ratio</Tag>
        <Tag icon="💯">Excellent average return</Tag>
        <Tag type="neutral" icon="📆">
          Reasonable holding period
        </Tag>
        <Tag icon="💯">Excellent Gain-to-pain ratio</Tag>
        <Tag icon="💯">Excellent Sortino ratio</Tag>
        <Tag icon="✅">Reliable testing period</Tag>
        <Tag type="worst" icon="👎">
          high max drawdown in recessions
        </Tag>
        <Tag icon="🔎">Fully transparent</Tag>
      </TagsContainer>
      <p>Weekly Stocktip has a lot of statistics available, but I've collected the most important ones here:</p>
      <Statistics />
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
        Over what period are these statistics recorded? Perhaps they chose an exceptional year to run their statistics.
        A typical red flag I often see in trading systems.
      </p>
      <p>
        However, after digging deeper, you'll find that these numbers are averages from 1970 to 2020. That means{' '}
        <b>the system has been through several market crashes</b> and all sorts of market situations unscathed. I cannot
        understate the importance of making sure that trading systems and their statistics are recorded over an
        acceptable period and not just during a bull run!
      </p>
      <p>
        But making sure the recorded statistics are over an acceptable period isn't enough to validate this either. The
        backtest could be flawed or straight-up fabricated. We'll get into that later in the review.
      </p>
      <p>
        I also looked at the numbers for the realtime results from their launch from 2009 to 2020. The numbers from this
        period were actually slightly better but still statistically close to the numbers from the full period (which is
        essential.) Weekly Stocktip said:
      </p>
      <Quote author="Weekly Stocktip">
        "The statistics since our launch in 2009 are incorporated into the overall statistics. However, keep in mind
        that we haven't hit a major market crash since we launched, making the statistics look better than it should be
        in the long-term. The 1970-2020 statistics provide more accurate and realistic expectations as it has been
        through several recessions."
      </Quote>
      <p>
        So far, everything looks promising, but there's one more question you must ask when it comes to validating win
        ratios: whether they hold their losers indefinitely and never sell them? Everyone can get a +100% win ratio if
        they never sell the losers or only made a very few lucky trades!
      </p>
      <p>
        The Weekly Stocktip system executed +2,500 trades in the period from 1970 to 2020. I believe that there are
        enough trades to be statistically significant, but I still asked them specifically about holding stocks
        perpetually. Here's what they said:
      </p>
      <Quote author="Weekly Stocktip">
        "The system re-evaluates it's portfolio every week trying to figure out when it's time to sell each signal.
        There are several algorithms to trigger a sell for either a positive return or to limit a possible loss. There
        is also a hard deadline set at four years. This deadline is very rarely hit, but if it happens, it will sell the
        stock, no matter its price, to prevent holding onto stocks forever.
        <br />
        <br /> The average holding period since our 2009 launch has been 408 days."
      </Quote>
      <p>
        That satisfies my biggest concern about the statistics and brings the expected return in a more reasonable
        light. <b>The +94% average return is based on a holding period of +1 year</b>. But that's still a lot better
        than the 6-8% you'll get investing in an index fund.
      </p>
      <p>
        The holding period is on par with what you would expect from a long-term value investing system, so no surprises
        there.
      </p>

      <Image src="/static/weeklystocktip/backtested_chart.png" alt="backtested chart" />
      <p>
        Let's talk about those Max draw-downs. Max drawdown depicts the loss from the highest portfolio balance to the
        lowest portfolio balance. Looking at the chart above confirms that the portfolio dropped almost 50% in value
        from January 1973 to December 1974. This period is well known to be one of the worst stock-market crashes in
        history, and the S&P500 dropped over 50% in value as well during this period. I don't love that it lost that
        much, but at least there's a good explanation. I'm willing to give Weekly Stocktip a pass on this one,
        especially since they fully recovered from those losses in less than a year later. In comparison, it took the
        S&P500 about six years to recover from the crash.
      </p>
      <p>
        I do like that they openly shared such a high maximum all-time drawdown from over 50 years ago. They could very
        easily have just cut it off earlier or manipulated those numbers. It gives me{' '}
        <b>high confidence in the legitimacy of their otherwise excellent numbers. A+ for transparency!</b>
      </p>
    </section>
    <section data-type="backtesting">
      <h2>Backtesting</h2>
      <h4>
        We know Weekly Stocktip backtests their algorithms, but how ethical are they and do they match real-world
        performance?
      </h4>
      <p>I'm always highly skeptical of backtests because they can easily be done unethically or faked entirely.</p>
      <p>
        Weekly Stocktip has outlined in great detail how they build the algorithms and how they use backtesting
        ethically in their white paper. They also provide an in-depth article on how they avoid all the common pitfalls:{' '}
        <a href="https://medium.com/@weeklystocktip/backtesting-bias-and-how-to-avoid-it-f10c764d9886" target="_blank">
          https://medium.com/@weeklystocktip/backtesting-bias-and-how-to-avoid-it-f10c764d9886
        </a>
      </p>
      <p>
        I will actually use this article as a standard for all backtests I'm reviewing in the future. If you are
        considering signing up for Weekly Stocktip, I encourage you to read this article in depth and make your own
        judgment.
      </p>
      <p>
        Weekly Stocktip's backtesting methodologies passes all tests I could think of. Most importantly, their
        real-world returns since their 2009 launch closely match the gains in their backtest, 11 years of ongoing
        records are hard to argue against.
      </p>
    </section>
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
        This chart shows how the portfolio developed from 2009 until June 2020 compared to the DJIA (Dow Jones
        Industrial Average), so if this is correct. <b>Weekly Stocktip earned a total accumulative return of +1,482%</b>
        . It might not be apparent that this is an accumulative return, which means it assumes you reinvest your profits
        into buying more stocks. In comparison investing your money in an index fund like the S&P500 or DJIA would only
        have netted about +217% return in the same period.
      </p>
      <Image size="large" src="/static/weeklystocktip/latest_sells.png" alt="latest sells" />
      <p>
        Weekly Stocktip publically provides a list of the latest ten sell signals, as shown above. After using the
        system for a few months now,{' '}
        <b>
          I can confirm that when they release a sell signal in the dashboard, they also update this list with the new
          sell signal and correct numbers.
        </b>{' '}
        They also claim to send out the sell signals, both positive & negative, to their newsletter, and sure enough,
        there was one negative signal during my subscription, and they made that one public as well.
      </p>
      <p>
        Transparency is vital for trading systems, so I'm pleased to see{' '}
        <b>what you get in the dashboard match the marketing fluff on their website!</b> Usually, on the site, you see a
        few examples of "amazing" investments, and they never give out an expansive list of the latest trades.
      </p>
      <p>
        I'll give Weekly Stocktip a 10/10 for transparency showing the latest signals, whether positive or negative.
      </p>
    </section>
    <section data-type="my-results">
      <h2>My results using Weekly Stocktip</h2>
      <h4>What were my actual results using Weekly Stocktip over a period of 2+ months?</h4>
      <TagsContainer>
        <Tag icon="💯">100% sold with profit</Tag>
        <Tag icon="👍">Realistic entries/exits</Tag>
        <Tag icon="👏">Honest signals</Tag>
        <Tag icon="✅">High quality companies</Tag>
        <Tag icon="✅">no slippage</Tag>
      </TagsContainer>
      <p>
        A lot of you are probably wondering how much I made/lost using this system. I have now used Weekly Stocktip for
        2-3 months in a separate trading account.
      </p>
      <p>Here is a screenshot of my current Weekly Stocktip portfolio as of May 28th, 2020</p>
      <Image src="/static/weeklystocktip/current_portfolio.jpg" alt="current portfolio results" />
      <p>
        I invested in every signal Weekly Stocktip released (buy and sell), and all of them (so far) have been positive.
        But remember that the average holding period is longer than just two months, so I'm still holding onto these
        stocks and can't write it all off as "pure" profit just yet.
      </p>
      <p>
        I invested roughly $10,000 dollar-cost averaging into the system every week, and my total return on investment
        was <b>+61.78%</b>
      </p>
      <p>During my subscription so far, I received six sell signals:</p>
      <Image src="/static/weeklystocktip/sell_signals.jpg" alt="sell signals" />
      <p>
        I didn't get a chance to buy the following signals: APEI, WHG, PBF, & WSTG. The original BUY signal for these
        happened before I signed up. However, both FLR & GII, I was able to buy and sell at a profit within a few weeks.
      </p>
      <p>
        <b>
          I bought FLR at $8.12 and sold it for $14.11
          <br />I bought GII at $11.39 and sold it for $16.70
        </b>
      </p>
      <p>
        For one of them, I got a slightly worse deal than Weekly Stocktip, and the other got a slightly better deal.
        From what I've seen so far, the slippage is minimal, and you can buy and sell the stocks at similar prices than
        what they put out, and I wasn't on top of it either. I was probably at least an hour or two late trading these
        signals.
      </p>
      <p>All in all, the signals so far have been performing much better than expected. </p>
      <p>
        <b>Disclaimer: The entire stock market was bullish during the period of my review</b>. It's hard to know how
        much of my success to attribute to Weekly Stocktip vs. just the market in general.)
      </p>
      <p>
        But given the company's transparency, you should be able to review their real-time performance and latest sell
        signals accurately for the time you are investing.
      </p>
      <p>
        I will continue to use Weekly Stocktip in my small account and update this review with more long-term results
        once I've cycled through the portfolio.
      </p>
    </section>
    <Risk />
    <Signals />
    <StockScreener />
    <Pricing />
    <MoneyBackGuarantee />
    <Support />
    <UserExperience />
    <BarrierToEntry />
    <History />
    <Summary />
  </ReviewContainer>
)

export default WeeklyStocktipReview
