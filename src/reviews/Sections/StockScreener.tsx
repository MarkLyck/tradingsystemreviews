import React from 'react'
import { Tag, TagsContainer, Image } from '~/ui-components'

const StockScreener = () => (
  <section data-type="stock-screener">
    <h2>Stock screener</h2>
    <h4>How does the stock screener work?</h4>
    <TagsContainer>
      <Tag icon="✅">Easy to use</Tag>
      <Tag type="neutral" icon="📄">
        +2,500 reports
      </Tag>
      <Tag icon="🔬">Backed by research</Tag>
    </TagsContainer>
    <p>
      One benefit of Weekly Stocktip's trading systems is that they analyze every stock in the market and provide "A.I.
      Reports," which is just a fancy word for a stock screener.
    </p>
    <Image src="/static/weeklystocktip/ai_reports.png" alt="ai reports screenshot" />
    <p>
      Every stock in their database (250+ pages of them) gets assigned a score from -100 to +100 from a value investing
      perspective. You can use this tool to evaluate your current portfolio or screen other potential investments.
    </p>
    <p>Just a number doesn't really tell you all that much, but they did provide some research to go with it:</p>
    <Image src="/static/weeklystocktip/ai_reports_chart.png" alt="ai reports screenshot" />
    <p>
      This chart shows the return and win-rate if you only invested in stocks with an AI score from -100 to -90, -90 to
      -80, etc. Each bar in this chart corresponds to a range of 10 ai score "points." The blue line represents the win
      ratio (not shown on the axis)
    </p>
    <p>
      Assuming the AI Score works, each bracket should produce a higher return and win rate in an orderly fashion, which
      it does. If it didn't work, you would get somewhat random results. From the chart provided, you can see the
      uptrend and correlation between annual return, win ratio, and ai score.
    </p>
    <p>
      If you only invested in stocks with an AI score of -100 to -90 (the worst), your average return would be -9.13%
      with a "win ratio" of 48%. You would have lost money, and less than 50% of the stocks you invested in would have
      sold with a profit.
    </p>
    <p>
      If you only invested in stocks with a score from -10 to 0, your avg. annual return would have been +8.06% and the
      win ratio: 65%. So a score of "0" is slightly better than the average stock market. The win ratio of "random"
      stocks is around 58%, with a 6-8% annual return.
    </p>
    <p>
      If you invested in stocks with a score from +90 to +100, the avg. annual return would have been +30.15%, with a
      win ratio of 90%.
    </p>
    <p>
      Disclaimer: I was not able to verify the legitimacy of this chart. If it is correct, the AI Score could be an
      immensely useful tool, but as with anything online, you have to make your own judgment.
    </p>
  </section>
)

export default StockScreener
