import React from 'react'
import style from './style'

export default ({ children, published, title }) => (
  <article>
    <div>
      <h3>
        {title}
      </h3>

      {children}

      <p>
        Published: {published}
      </p>
    </div>
    <style jsx>{ style }</style>
  </article>
)
