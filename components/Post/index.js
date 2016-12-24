import React from 'react'
import style from './style'

export default ({ children, published, title }) => (
  <article className={style.main}>
    <div className={style.container}>
      <h3 className={style.title}>
        {title}
      </h3>

      {children}

      <p className={style.published}>
        Published: {published}
      </p>
    </div>
  </article>
)
