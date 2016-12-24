import config from '../../config/style'
import css from 'next/css'

const main = css({
  background: config.block.color.light.background,
  borderBottom: `1px solid ${config.block.color.light.border}`,
  padding: `${config.padding.small}px`
})

const title = css({
  fontSize: `${config.font.size.large}px`,
  fontWeight: 'bold'
})

const subTitle = css({
  color: config.font.color.light,
  fontSize: `${config.font.size.small}px`,
  fontWeight: 'normal'
})

export default { main, title, subTitle }
