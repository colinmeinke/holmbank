import config from '../../config/style'
import css from 'styled-jsx/css'

export default css`
  article {
    margin-left: auto;
    margin-right: auto;
    max-width: 920px;
  }

  div {
    background: ${config.block.color.light.background};
    padding: ${config.padding.small}px;
    margin: ${config.margin.small}px;
  }

  div :global(p),
  div :global(img) {
    margin-top: ${config.margin.medium}px;
  }

  h3 {
    font-size: ${config.font.size.huge}px;
  }

  p {
    color: ${config.font.color.light};
    font-size: ${config.font.size.small}px;
  }

  @media (min-width: ${config.breakpoint.medium}px) {
    div {
      border: 1px solid ${config.block.color.light.border};
      padding: ${config.padding.medium}px;
      margin: ${config.margin.medium}px;
      
    }
  }

  @media (min-width: ${config.breakpoint.large}px) {
    div {
      padding: ${config.padding.large}px;
      margin: ${config.margin.large}px;
    }
  }
`