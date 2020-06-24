import React from 'react'
import { ReviewContainer, Disclaimer } from '~/ui-components'

const WeeklyStocktipReview = () => (
  <ReviewContainer>
    <h1>Weekly Stocktip Review</h1>
    <Disclaimer>
      <p>I did not accept payment to write this review, and I'm not getting any referral payments from this company.</p>
      <p>
        I did ask them for a review copy, but they didn't give me one. So I paid for access to this system with my own
        money. Our ads help keep the reviews objective and honest, so please consider supporting this by turning off
        your ad blocker. 🙏
      </p>
    </Disclaimer>
    <section>
      <h2>Asset Types</h2>
      <h4>What types of assets does this system use?</h4>
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
  </ReviewContainer>
)

export default WeeklyStocktipReview
