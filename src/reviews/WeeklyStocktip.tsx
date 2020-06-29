import React from 'react'
import { ReviewContainer, Disclaimer, TagsContainer, Tag, Quote, Image } from '~/ui-components'
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
  Statistics,
  MyResults,
  Realtime,
  Backtesting,
} from './Sections'

// TODO overall too biased

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
        <Tag type="neutral" icon="🇺🇸">
          US Stocks
        </Tag>
        <Tag type="neutral" icon="🏦">
          Traded on major exchanges
        </Tag>
        <Tag type="neutral" icon="💰">
          $4.5m minimum market cap
        </Tag>
        <Tag type="neutral" icon="🌎">
          Can be traded from anywhere in the world
        </Tag>
      </TagsContainer>
      <p>
        Weekly Stocktip provides trading signals for <b>stocks on the three major US exchanges</b>: NYSE, Nasdaq & AMEX.
      </p>
      <p>
        All stocks in the system must have <b>at least seven years of financial reports</b> and SEC filings available
        for analysis. It also filters out any stocks with a market cap under $4.5 million.
      </p>
      <p>These assets can easily be traded anywhere in the world from a standard brokerage account</p>
    </section>
    <section data-type="strategy">
      <h2>Strategy</h2>
      <h4>How does it beat the market?</h4>
      <TagsContainer>
        <Tag type="neutral" icon="📈">
          Value investing
        </Tag>
        <Tag type="neutral" icon="🤖">
          Algorithmic
        </Tag>
        <Tag icon="👍">Proven strategy</Tag>
        <Tag icon="🔎">Fully transparent</Tag>
      </TagsContainer>
      <p>
        Weekly Stocktip is an <b>algorithmic trading system</b>. That means computer algorithms provide the BUY and SELL
        signals instead of a human investor.{' '}
        <a href="https://www.investopedia.com/articles/trading/11/automated-trading-systems.asp" target="_blank">
          Algorithmic trading has both upsides and downsides
        </a>{' '}
        to it.
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
        Weekly Stocktip uses these factors to only invest in high quality, profitable companies with good growth & low
        risk. It will also only buy stocks with a high margin of safety.
      </p>
      <p>
        I would recommend reading their{' '}
        <a href="https://weeklystocktip.com/static/2008_Whitepaper_weeklystocktip.pdf" target="_blank">
          2008 whitepaper
        </a>{' '}
        in detail. It goes a lot deeper into the strategy and how they avoided common pitfalls you often see in
        algorithmic trading.
      </p>
      <p>
        Value investing is a <b>long proven strategy</b>. Combining that with an algorithmic trading approach which can
        identify unique bargains in the stock market sounds very promising.
      </p>
    </section>
    <Statistics />
    <Risk />
    <Backtesting />
    <Realtime />
    <MyResults />
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
