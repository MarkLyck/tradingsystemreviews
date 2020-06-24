import React from 'react'
import { ReviewContainer, Disclaimer, TagsContainer, Tag, Quote, Color } from '~/ui-components'

const WeeklyStocktipReview = () => (
  <ReviewContainer>
    <h1>Weekly Stocktip Review</h1>
    <Disclaimer>
      <p>
        I did not get paid to write this review, I did not receive free access to the service, nor I'm not getting any
        referral payments from this company.
      </p>
      <p>
        Our ads help keep the reviews objective and honest, so please consider supporting us by turning off your ad
        blocker.
      </p>
    </Disclaimer>
    <section>
      <h2>Asset Types</h2>
      <h4>What types of assets does this system use?</h4>
      <TagsContainer>
        <Tag icon="🇺🇸">US Stocks</Tag>
        <Tag icon="🏦">Traded on major exchanges</Tag>
        <Tag icon="👍">Small to mega-cap</Tag>
        <Tag icon="✅">No scammy penny stocks</Tag>
        <Tag icon="🌎">Can be traded from anywhere in the world</Tag>
      </TagsContainer>
      <p>
        Weekly Stock tip specializes in <b>US stocks</b>. Stocks are the only asset they provide signals for.
        Specifically, their system only analyzes stocks trading on the US exchanges for at least 7 years with a market
        cap of at least $4.5 million.
      </p>
      <p>
        In short, this means that they only invest in established medium-to-large cap companies and{' '}
        <b>not scammy penny-stocks</b>, which is a good sign! 👍
      </p>
    </section>
    <section>
      <h2>Strategy</h2>
      <h4>How does it work?</h4>
      <TagsContainer>
        <Tag icon="📈">Value / Growth investing</Tag>
        <Tag icon="🤖">Algorithmic</Tag>
        <Tag icon="🤖">Responsible AI</Tag>
        <Tag icon="👍">Proven strategy</Tag>
        <Tag icon="💯">Only invests in high quality companies</Tag>
        <Tag icon="🔎">Fully transparent</Tag>
      </TagsContainer>
      <p>
        Weekly Stock tip is an <b>algorithmic trading system</b>. The signals are provided by a computer algorithm
        rather than a human investor. Algo trading has a lot of upsides, but also some potential pitfalls we'll cover
        later.
      </p>
      <p>
        It is a <b>value & growth investment strategy</b>. The system analyzes all stocks in the stock market from a
        pure business evaluation perspective just as you'd expect a value investor to do.
      </p>
      <p>
        If you haven't heard of value or growth investing before, it is the same principles used by{' '}
        <a href="https://en.wikipedia.org/wiki/Warren_Buffett" target="_blank">
          Warren Buffett
        </a>
        ,{' '}
        <a href="https://en.wikipedia.org/wiki/Benjamin_Graham" target="_blank">
          Benjamin Graham
        </a>
        , and many other top investors. In short, they only invest in stocks that are selling for cheaper than they
        should be, based on finances and future projected earnings.
      </p>
      <p>
        The algorithms <a>use all financial reports, SEC filings, and stock history dating back to 1970</a> (or earliest
        possible date) to evaluate the companies.
      </p>
      <p>In total, Weekly Stocktip have over 114 unique algorithms that all sum up to these six factors.</p>
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
          <b>Stewardship</b> (how well does the company treat it's investors)
        </li>
      </ul>
      <p>
        Their website also mentions artificial intelligence, but it was not obvious how exactly they use it. So I asked
        Weekly. Stocktip and this is what they said:
      </p>
      <Quote>
        "The <b>AI part is not deeply integrated into the algorithms</b> themselves. Instead, it's a thin layer that
        takes all the outputs of the algorithms and uses statistical probability to sum it all up to a simplified score
        between -100 and +100, which the system uses to determine the Weekly Stocktip."
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
        in detail. It is fascinating and goes a lot deeper into the strategy than I have here and describe how they
        avoided common pitfalls.
      </p>
      <p>
        Value & growth investing is a strategy that is proven to work, you don't need to look any further than Warren
        Buffett or Benjamin Graham to find proof that this method works wonders in the longterm. Weekly Stocktip
        innovates this by providing an algorithm that performs evaluations programmatically on thousands of stocks every
        week. In contrast, it would take a full team of human value investors weeks to do the same.
      </p>
    </section>
    <section>
      <h2>Statistics</h2>
      <h4>Show me the numbers!</h4>
      <TagsContainer>
        <Tag icon="💯">Excellent win ratio</Tag>
        <Tag icon="💯">Excellent average return</Tag>
        <Tag icon="👍">Reasonable holding period</Tag>
        <Tag icon="💯">Excellent Gain-to-pain ratio</Tag>
        <Tag icon="💯">Excellent Sortino ratio</Tag>
        <Tag icon="✅">Reliable testing period</Tag>
        <Tag icon="😐">Dependant on market movements</Tag>
        <Tag type="bad" icon="🚩">
          high max drawdown in recessions
        </Tag>
        <Tag icon="🔎">Fully transparent</Tag>
      </TagsContainer>
      <p>
        Win ratio: <b>+93.67%</b>
      </p>
      <p>
        Their win ratio is incredibly high. On average, 9 out of 10 of the signals they suggested to buy was sold with a
        profit. I did have some doubts about the truth of this, but <b>so far, the results match the claim.</b>
      </p>
      <p>
        The average return of a winning investment: +102.37%
        <br />
        The average loss of a losing investment: -16.47%
      </p>
      <p>
        From this, we can calculate the average expected return of a stock. (0.9367 * 102.37) - (0.0633 * 16.47) ={' '}
        <b>+94.85%</b>
      </p>
      <p>
        This means if you invested in 10 average signals from Weekly Stocktip. Nine of them would result in a +100%
        return, and only one would result in a -17% loss. If you invested $100 in each of these, you would have $900 in
        winnings and only $17 in losses. That's a hugely disproportionate positive risk factor, and my first question
        is, "over what period are these statistics recorded?" Maybe they picked an exceptional year to run their
        statistics, a typical <Color color="red">red flag 🚩</Color> I often see in trading systems.
      </p>
      <p>
        However, after digging in a bit deeper, you'll find that these numbers are averages from 1970 to 2020. That
        means <b>the system has been through several market crashes</b> and all sorts of market situations unscathed.
        (that is if their backtest is ethical without flaws, which I'll get to later in the review).
      </p>
      <p>
        I also asked for the realtime results from 2009 to 2019. The numbers from this period were actually slightly
        higher but still statistically close to the numbers from the full period. Weekly Stocktip said:
      </p>
      <Quote>
        "The statistics since our launch in 2009 are incorporated into the overall statistics. We generally don't show
        the numbers separately because we haven't yet hit a major market crash since we launched, which makes the
        statistics seem better than they "should" be in the long-term. The statistics since 1970 provides more accurate
        and realistic expectations."
      </Quote>
      <p>
        But are these averages statistically significant, or are they just holding onto the losers and never selling
        them? Weekly Stocktip would have executed over 2,500 trades in the period from 1970 to 2020. I believe that
        there are enough trades to be statistically significant.
      </p>
      <p>Weekly Stocktip on holding periods:</p>
      <Quote>
        "The system re-evaluates it's portfolio every week trying to figure out when it's time to sell each signal.
        There are several algorithms to trigger a sell for either a positive return or to limit a possible loss. There
        is also a hard deadline set at four years. This deadline is very rarely hit, but if it happens, it will sell the
        stock, no matter its price, to prevent holding onto stocks forever.
      </Quote>
      <p>
        <b>The all-time average holding period is 2.2 years</b>, and the average holding period since our 2009 launch
        has been 408 days."
      </p>
      <p>
        That satisfies my biggest concern about the statistics and brings the expected return in a more reasonable
        light. <b>The +94% average return is based on a holding period of about two years</b>. But that's still a lot
        better than the 6-8% you'll get investing in an index fund.
      </p>
      <p>
        The holding period is on par with what you would expect from a long-term value investing system, so there are no
        surprises.
      </p>
      <h3>Advanced Statistics</h3>
      <p>
        Gain-to-Pain Ratio: 2.39697 (Excellent) Sortino Ratio: 7.532204 (Excellent) IRR Geometric Mean: +48.66%
        (Excellent) IRR Arithmetic Mean:+108.01% (Excellent) CAGR since 1970: +34.14% (Excellent) CAGR since 1990:
        38.04% (Excellent) CAGR since 2009: 43.72% (Excellent) Max Drawdown 36 months: -22.97% (Okay) Max Drawdown 50
        years: -47.85% (Red flag) Percent of years outperforming the S&P500: 89% (Excellent)
      </p>
      <p>
        Let's talk about those Max Drawdowns. Max drawdown depicts the loss from the highest portfolio balance to the
        lowest portfolio balance.{' '}
      </p>
      <img alt="backtested chart" />
      <p>
        Looking at the chart confirms that{' '}
        <b>the portfolio dropped almost 50% in value from January 1973 to December 1974</b>. This period is well known
        to be one of the worst stock market crashes in history. Given the circumstances, I'm willing to give Weekly
        Stocktip a pass on this one, especially since they fully recovered from those losses in less than a year later.
        In comparison, it took the S&P500 about six years to recover from the crash. [PASS]
      </p>
      <h2>Realtime results</h2>
      <h4>
        So the strategy is good, the statistics are impressive. But none of that matters if the realtime results don't
        match the claims.
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
      <img alt="live performance chart" />
      <p>
        This chart shows how the portfolio developed from 2009 until June 2020 compared to the DJIA (Dow Jones
        Industrial Average), so if this is correct. <b>Weekly Stocktip earned a total accumulative return of +1,482%</b>
        . It might not be apparent that this is an accumulative return, which means it assumes you reinvest your profits
        into buying more stocks. In comparison investing your money in an index fund like the S&P500 or DJIA would only
        have netted about +217% return in the same period.
      </p>
      <img alt="latest sells" />
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
    <section>
      <h2>My results using Weekly Stocktip</h2>
      <h4>What were my actual results using Weekly Stocktip over a period of 4 months?</h4>
      <TagsContainer>
        <Tag icon="💯">100% sold with profit</Tag>
        <Tag icon="👍">Realistic entries/exits</Tag>
        <Tag icon="👏">Honest signals</Tag>
        <Tag icon="✅">High quality companies</Tag>
        <Tag icon="✅">no slippage</Tag>
      </TagsContainer>
      <p>
        A lot of you are probably most interested in how much I made/lost using this system. I have now used Weekly
        Stocktip for X weeks in a separate trading account.
      </p>
      <p>Here is a screenshot of my current Weekly Stocktip portfolio as of xx/xx/2020</p>
      <img alt="current portfolio results" />
      <p>
        I invested in every signal Weekly Stocktip has put out with my own money, and{' '}
        <b>all of them have been positive</b>. But remember that the average holding period is quite long, so I'm still
        holding onto these stocks and can't write it all off to "pure" profit just yet.
      </p>
      <p>During my subscription so far, I have seen five sell signals:</p>
      <p>
        APEI, WHG, & PBF I didn't get a chance to buy because the BUY signals for these happened before I signed up.
        However, both FLR and GII, I was able to buy and sell at a profit within a few weeks, here are my results
        compared to Weekly Stocktip:
      </p>
      <p>
        I was able to buy and sell these stocks at comparable prices to the ones recommended, and more importantly, the
        signals don't seem to be the kind where you have to drop everything to be ready to trade at any time.
      </p>
    </section>
    <section>
      <h2>Risk</h2>
      <h4>
        Let's be real, any investment has some kind of risk involved, and Weekly Stocktip is not exempt from that
        despite their stellar performance.
      </h4>
      <TagsContainer>
        <Tag icon="✅">Very safe long-term</Tag>
        <Tag icon="🤖">Invests without emotions</Tag>
        <Tag icon="😐">Dependant on the market</Tag>
      </TagsContainer>
      <p>
        We already know the Gain-to-Pain ratio, Sortino ratio, win ratio, and all these other statistics deem Weekly
        Stocktip as very low-risk investments overall. But what about periodically? How dependant is Weekly Stocktip on
        the performance of the market?
      </p>
      <p>
        To test this, I asked them to provide a chart where they overlayed the Weekly Stocktip performance chart with
        the DJIA chart from the same period on two different scales, and they look almost identical! The only difference
        is that Weekly Stocktip goes from 0% to +1,500% and DJIA goes from 0 to +250%. [Question mark]
      </p>
      <img alt="Weekly Stocktip vs DJIA" />
      <p>So what gives? If Weekly Stocktip is so dependant on the market performance, how do they outperform it?</p>
      <p>
        It's all about the stocks they pick and the value/growth strategy they use. In general, when the stock market
        drops, all stocks drop (with some exceptions, of course), but some stocks drop less than the average.
      </p>
      <p>
        Likewise, when the stock market goes up in value, some stocks go up a lot more than the average. This is where
        Weekly Stocktip shines! When the market drops, their stock picks lose a bit of value too, but not as much as the
        market, and most importantly, when the market goes up, their stock picks go up A LOT more in value.
      </p>
      <p>
        This means if you invest in Weekly Stocktip signals in the longterm, assuming their performance stays the same
        in the future as it has in the past, <b>the returns are outstanding, and the risk is minimal.</b>
      </p>
      <p>
        However, if you invest in Weekly Stocktip just before a market crash, you will most likely lose money in the
        short term! However, As far as I can tell, after any market crashes, they fully recovered from it within a year
        following the crash. I asked Weekly Stocktip about this, and they confirmed that the vast majority of their ~7%
        losing signals happened during market crashes, and in the past, the system would have quickly recovered.
      </p>
      <p>
        If you want to protect yourself from this risk, you should only invest in Weekly Stocktip if you think there
        won't be another market crash right around the corner, or if you are willing to stick with it for at least one
        to two years to recover all your losses in the event of a crash.
      </p>
      <p>
        As long as you don't panic-sell during a potential crash,{' '}
        <p>Weekly Stocktip seems to be a very safe long-term investment.</p>
      </p>
    </section>
    <section>
      <h2>Signals</h2>
      <h4>Let's talk about the signals themselves.</h4>
      <TagsContainer>
        <Tag icon="✅">Easy to follow</Tag>
        <Tag icon="👌">Simple signals</Tag>
      </TagsContainer>
      <p>
        Weekly Stocktip is about as simple as they come. They provide one BUY signal every Monday. The signal is visible
        in the dashboard, and they also send it out as an email and SMS so you won't miss it.
      </p>
      <img alt="Weekly Stocktip signal" />
      <p>
        They have a whole bunch of information about the signal they release, most importantly the AI Score summary:
      </p>
      <img alt="AI Score" />
      <p>
        All this signal says, is to "BUY XXX at a price near X.XX." That's all you need to know to follow the system.
      </p>
      <p>Later you will get a SELL signal for this same stock:</p>
      <img alt="Sell signal" />
      <p>This just means: "SELL all your shares in XXX."</p>
      <p>
        So how does this compare to other signal services? Well, the first thing I noticed is that there is no stop-loss
        and no target price. So I asked Weekly Stocktip about this, and they said:
      </p>
      <Quote>
        "The system is fully dynamic. It re-evaluates its portfolio positions every week; thus, its target price and
        stop-loss also change weekly based on its financials.
        <br />
        <br />
        We have tried multiple implementations of implementing a hard stop-loss. But all of them have resulted in worse
        results than using the system's value investing approach. In short, the system is much better at judging the
        risk of holding a stock that has lost value than humans. If it can't say with a high enough statistical
        probability that this stock will go back up above 0, it will sell it before it hits rock bottom. However, if
        it's still a sound investment, it will keep it, and sure enough, they will most of the time go back up and sell
        at a profit. No hard stop-loss can do that. So we always recommend not setting a stop-loss and following the
        sell signals."
      </Quote>
      <p>In short, their system is better at judging risk than human investors.</p>
      <p>
        These signals are straightforward to follow, especially for beginners, as their algorithms handle all the
        complexities of investing.
      </p>
    </section>
    <section>
      <h2>Stock screener</h2>
      <h4>Weekly Stocktip comes with a Stock Screening tool</h4>
      <TagsContainer>
        <Tag icon="✅">Easy to follow</Tag>
        <Tag icon="👌">Simple signals</Tag>
      </TagsContainer>
      <p>
        Taking an algorithmic approach to invest, one of the significant benefits is that they can evaluate every single
        stock in the market automatically. This is probably why their system is so profitable because they find value
        opportunities that most investors can't.
      </p>
      <p>
        Another benefit of this is that they have given every stock in the market what they call an "AI Score." A simple
        score between -100 to +100 (worst to best).
      </p>
      <p>
        With your membership to Weekly Stocktip, you get access to their "AI Reports," which is just a fancy word for
        their stock screener.
      </p>
      <p>
        The AI Reports allow you to use their algorithms to evaluate the stocks you currently own or other stocks you
        might want to invest in. I don't like to believe in stock screeners blindly, so let's put it to the test.
      </p>
      <p>
        I asked a friend who works as a professional value investor at a significant fund to evaluate two stocks from
        Weekly Stocktip, XXX, with an AI Score of -100 and YYY with an AI Score of +89. I didn't tell him anything about
        which one should be bad or good, and these are his findings:
      </p>
      <p>XXX:</p>
      <ul>
        <li>Too much debt</li>
        <li>...</li>
      </ul>
      <p>YYY:</p>
      <ul>
        <li>Large margin of safety</li>
        <li>Very profitable</li>
        <li>Not too much debt</li>
        <li>Good growth rate</li>
      </ul>
      <p>
        <b>This proves that the system evaluates companies based on real value investment principles.</b>
      </p>
    </section>
    <section>
      <h2>Pricing</h2>
      <h4>Access to Weekly Stocktip will cost you $29 a week. Or, in other words, $29 per signal.</h4>
      <TagsContainer>
        <Tag icon="✅">Flat weekly fee</Tag>
        <Tag icon="💵">Affordable: $29/wk</Tag>
        <Tag icon="✅">Pricing explained</Tag>
        <Tag icon="🔎">Fully transparent</Tag>
      </TagsContainer>
      <p>
        I honestly don't like how cheap this is—given their track record and statistics. In my opinion, Weekly Stocktip
        could easily charge $25,000 a year for this system, and it would still be a bargain. If this system really
        works, why does it only cost $29 to get access?
      </p>
      <Quote>
        "Hello Michael,
        <br /> <br />
        You're entirely correct, Weekly Stocktip's $29 a week subscription doesn't cover our data costs. But it was
        never built to be hugely profitable. At our core, we're a money management company, and we provide private money
        management services, this is where we make the bulk of our profits.
        <br /> <br />
        We are planning to expand this section by creating a hedge fund with our value system. However, that is a
        massive undertaking that will likely take us years. So while we are building a hedge fund and making sure our
        algorithms can handle AUM capital, we decided to provide access to our top signals for a very affordable price.
        In return, we get some publicity and good reviews. If we can help hundreds of people to accumulate more wealth
        for just $29 a week and have hundreds of happy users when it comes to the funding round of hedge funds, we will
        already have a public record, and a lot of proof of our system working realtime. We will be able to get the ball
        rolling sooner."
      </Quote>
      <p>
        Wow, A lot to unpack here! So that explains why they are willing to sell access to this for just $29, but it
        also raises the question of what will happen to Weekly Stocktip when they go public with a fund? Mark said this:
      </p>
      <Quote>
        "If or when we open a hedge fund with the system, we will close Weekly Stocktip for new subscribers, existing
        subscribers will continue to have access to the system for at least one year after launch. All existing
        subscribers will also be given the opportunity to invest in the hedge fund at a better buy-in price."
      </Quote>
      <p>
        Yeah, I can see if they can build trust and wealth for their current subscribers. They are likely to provide
        equity for a fund later on. I'll give Weekly Stocktip a pass on the pricing being suspiciously cheap. 👍
      </p>
    </section>
    <section>
      <h2>Backtesting</h2>
      <h4>
        We know Weekly Stocktip uses backtesting on their algorithms, but how ethical are they, and do they match
        real-world performance?
      </h4>
      <p>
        With any algorithmic trading system that utilizes a backtest, you have to make sure the conducting of the
        backtest is ethical.
      </p>
      <p>
        Luckily Weekly Stocktip is ahead of the curve and already has an in-depth article that goes above anything I
        could post about it here:{' '}
        <a href="https://medium.com/@weeklystocktip/backtesting-bias-and-how-to-avoid-it-f10c764d9886">
          https://medium.com/@weeklystocktip/backtesting-bias-and-how-to-avoid-it-f10c764d9886
        </a>
      </p>
      <p>I highly encourage you to read this article in depth and make your own judgment.</p>
      <p>
        I am not too concerned about the backtesting methodology for Weekly Stoocktip because it's not a new company or
        strategy. They launched the system in 2009 and has a long-standing track record.
      </p>
    </section>
    <section>
      <h2>Support</h2>
      <h4>How good and honest is the support they provide?</h4>
      <p>
        I am probably one of the most annoying customers they've ever had with all my questions, but{' '}
        <b>the support was outstanding</b>, they answered all my questions. They responded to my regular inquiries
        within 5 minutes. For the harder questions, they referred me to the Founder, who got back to me a few hours
        later.
      </p>
    </section>
    <section>
      <h2>User Experience</h2>
      <h4>How user friendly is Weekly Stocktip?</h4>
      <p>
        Using Weekly Stocktip was very easy. After you sign up, you can immediately see the current signal, and you just
        follow it once a week. Technically you don't even have to log in to the platform if you don't want to.
        Everything you need to follow the system is in the SMS you'll receive when a new signal is available.
      </p>
      <p>
        My only negative comment about the user experience is that they are trying to do too much. All it needs to be is
        a message that says, e.g., "BUY XXX near $X.XX". But they added a lot of information and charts which might be
        useful if you want to do your own analysis on the tips. But #1, why would you sign up to Weekly Stocktip if
        you're not going to follow it? And #2, if you want to do your own analysis, you would probably go to Yahoo
        Finance or somewhere else with more data anyway.
      </p>
      <p>They do get bonus points for providing a quick link to Yahoo Finance, though!</p>
      <p>
        <b>It's straightforward to use and requires less than 10 minutes of work every week</b>. This is a big positive
        compared to a day or intra-day trading system!
      </p>
    </section>
    <section>
      <h2>Barrier to Entry</h2>
      <h4>Who can use it, and how much setup, time and preparation is required?</h4>
      <p>
        Weekly Stocktip has a very low barrier to entry, with a price anyone can afford and trading stocks accessible
        from anywhere in the world.
      </p>
      <p>
        All you need to use Weekly Stocktip is a broker that supports stocks on the major US exchanges like Nasdaq and
        NYSE.
      </p>
    </section>
    <section>
      <h2>History & Background Check</h2>
      <h4>
        When it comes to investing your money in ideas from other people (or the people who build the algorithms), you
        better make sure those people aren't scammers.
      </h4>
      <p>
        The Founder of Weekly Stocktip is Mark Lyck. Mark has a background in{' '}
        <b>business administration & economics as well as computer science</b>. The team was very knowledgeable about
        trading systems, the reward and potential risks involved.
      </p>
      <p>Weekly Stocktip started the work on their algorithms in late 2003.</p>
      <p>
        In 2009 - 2011, they ran their first beta test with outside investors. Since 2011 they have been using the
        system for private money management.
      </p>
      <p>In 2014 they first provided public access to the system as a signal service.</p>
      <p>
        The company is located in Denmark (home country of the Founder, so that makes sense). Weekly Stocktip is not
        registered with the SEC, but since they only provide signals on Weekly Stocktip and aren't managing your money
        directly, they don't have to register with the SEC.
      </p>
    </section>
    <section>
      <h2>Summary</h2>
      <h4>
        Weekly Stocktip seems like a reputable company with a very successful strategy. They are fully transparent about
        their results. It is straightforward to use, and the signals I invested in all turned out profitable.
      </h4>
      <p>
        Weekly Stocktip is the only trading system I have ever used, I've invested more than $1,000 with and will
        continue to use in the future.
      </p>
      <p>I recommend trying out Weekly Stocktip if you are considering using a trading system.</p>
    </section>
  </ReviewContainer>
)

export default WeeklyStocktipReview