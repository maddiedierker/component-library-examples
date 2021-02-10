import Button from './Button'
import styled, {css} from 'styled-components'
import colors from '../colors'

const DangerButton = styled(Button)`
  color: ${colors.red};
  border-color: ${colors.red};

  ${props =>
    props.highlight &&
    css`
      background: ${colors.red};
      color: ${colors.white};
    `};
`;

export default DangerButton