import styled, {css} from 'styled-components'
import colors from '../colors'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.pink};
  color: ${colors.pink};
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.highlight &&
    css`
      background: ${colors.pink};
      color: ${colors.white};
    `
  };
`

export default Button