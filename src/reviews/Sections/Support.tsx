import React from 'react'
import { Tag, TagsContainer } from '~/ui-components'

const Support = () => (
  <section data-type="support">
    <h2>Support</h2>
    <h4>How good and honest is the support they provide?</h4>
    <TagsContainer>
      <Tag icon="⚡">Usually responds in under 5 minutes</Tag>
      <Tag icon="🤝">Honest</Tag>
      <Tag icon="🎓">knowledgeable about investing</Tag>
    </TagsContainer>
    <p>
      I am probably one of the most annoying customers they've ever had with all my questions, but{' '}
      <b>the support was outstanding</b>. They answered all my questions promptly, usually within 5 minutes. For the
      harder questions, they referred me to the Founder, who got back to me a few hours later.
    </p>
    <p>
      The support team also knew about investing and the proper terminology, which is nice to see. But most importantly,
      it never felt like a "sales call." They always pointed out the risks and mentioned both upsides and downsides.
    </p>
  </section>
)

export default Support
