import config from '../../config/style'
import css from 'next/css'

const main = css({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '920px',
  '& p, & img': {
    marginTop: `${config.margin.medium}px`
  }
})

const container = css({
  background: config.block.color.light.background,
  padding: `${config.padding.small}px`,
  margin: `${config.margin.small}px`,
  [`@media (min-width: ${config.breakpoint.medium}px)`]: {
    border: `1px solid ${config.block.color.light.border}`,
    padding: `${config.padding.medium}px`,
    margin: `${config.margin.medium}px`,
  },
  [`@media (min-width: ${config.breakpoint.large}px)`]: {
    padding: `${config.padding.large}px`,
    margin: `${config.margin.large}px`,
  },
})

const title = css({
  fontSize: config.font.size.huge
})

const published = css({
  color: config.font.color.light,
  fontSize: `${config.font.size.small}px`
})

export default { container, main, published, title }
