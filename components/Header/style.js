import config from '../../config/style'
import css from 'styled-jsx/css'

export default css`
  header {
    background: ${config.block.color.light.background};
    border-bottom: 1px solid ${config.block.color.light.border};
    padding: ${config.padding.small}px;
  }

  h1 {
    font-size: ${config.font.size.large}px;
    font-weight: bold;
  }

  h2 {
    color: ${config.font.color.light};
    font-size: ${config.font.size.small}px;
    font-weight: normal;
  }
`