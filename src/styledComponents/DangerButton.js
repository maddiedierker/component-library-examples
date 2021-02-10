import Button from './Button'
import styled, {css} from 'styled-components'
import colors from '../colors'

const DangerButton = styled(Button)`
  color: ${colors.danger};
  border-color: ${colors.danger};

  ${props =>
    props.primary &&
    css`
      background: ${colors.danger};
      color: white;
    `};
`;

export default DangerButton