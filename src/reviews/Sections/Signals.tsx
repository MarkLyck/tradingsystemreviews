import React from 'react'
import { ReviewContainer, Disclaimer, TagsContainer, Tag, Quote, Image } from '~/ui-components'

const Signals = () => (
  <section data-type="signals">
    <h2>Signals</h2>
    <h4>What does the trading signals look like, and are they easy to follow?</h4>
    <TagsContainer>
      <Tag icon="✅">Easy to follow</Tag>
      <Tag icon="👌">Simple signals</Tag>
    </TagsContainer>
    <p>
      Weekly Stocktip is about as simple as they come. They provide one BUY signal every Monday. The signal is visible
      in the dashboard, and they also send it out as an email and SMS so you won't miss it.
    </p>
    <p>Here's what a Weekly Stocktip signal looks like:</p>
    <Image src="/static/weeklystocktip/buy_signal.png" alt="Buy signal" />
    <p>
      This just means: "<b>buy AG at a price near $9.20</b>". They also show that the current trading price is $8.97
      (2.5% less than the recommended price.) That means you can actually buy this stock cheaper than the system
      recommended, which is good if you haven't already bought it.
    </p>
    <p>
      They also have a bunch more information about the stock like about, news, statistics, financials, etc. But most of
      it you can just find on Yahoo Finance if you want to.
    </p>
    <p>
      Except for the AI report! Which is that value score we talked about earlier. The AI report gives you a quick look
      at how well this stock scores in different value investing categories. I'm honestly not sure how much people would
      actually use this? The whole point of Weekly Stocktip is that they've already done all the analysis for you. But
      it's nice that they include it, I guess.
    </p>
    <Image src="/static/weeklystocktip/ai_score.png" alt="AI Score" />
    <p>Here's an example of a SELL signal in Weekly Stocktip:</p>
    <Image src="/static/weeklystocktip/sell_signal.png" alt="Sell signal" />
    <p>
      This just means: "<b>SELL all your shares in WSTG.</b>" It also shows what the return was and how much you earned
      in dividends while holding the stock.
    </p>
    <p>
      You may have noticed that they don't provide a stop-loss or a target price. I asked Weekly Stocktip about this,
      and they said:
    </p>
    <Quote author="Weekly Stocktip">
      "Weekly Stocktip can't provide a target-price or stop-loss upfront.
      <br />
      <br />
      There are several reasons for this:
      <br />
      <br />
      #1 For the target price, we have a multitude of algorithms attempting to calculate the "real worth" of the company
      in many different ways. Just picking one, or the average won't give an accurate picture of a target price point.
      <br />
      <br />
      #2 The system is fully dynamic. It re-evaluates its portfolio positions every week based on new financial data;
      thus, its target price and stop-loss also change weekly.
      <br />
      <br />
      #3 we have several dedicated algorithms to handle risk and accurately determine whether it's still a statistically
      sound investment to hold.
      <br />
      <br />
      We have tried multiple implementations of a hard stop-loss. But all of them have resulted in worse results than
      using the system's value investing approach. In short, the system is much better at judging the risk of holding a
      stock that has lost value than humans.
      <br />
      <br />
      A lot of the time, the system will buy a stock when it's dropping in value, and it might drop further in value as
      the market over-reacts to some news. But most of the time the system has held stock in the negative, it had gone
      back up and later sold at a profit.
      <br />
      <br />
      We always recommend following the signals and NOT setting a hard stop-loss when using Weekly Stocktip."
    </Quote>
    <p>
      In other words, expect sometimes to see some red numbers using Weekly Stocktip before the stocks go back up in
      value. The sell signal for WSTG as posted above is a good example of this.
    </p>
  </section>
)
export default Signals
