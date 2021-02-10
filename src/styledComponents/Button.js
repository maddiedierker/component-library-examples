import styled, {css} from 'styled-components'
import colors from '../colors'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${colors.primary};
  color: ${colors.primary};
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: ${colors.primary};
      color: white;
    `};
`

export default Button