import Button from './Button'
import {css} from '@emotion/css'
import colors from '../colors'

const styles = {
  danger: {
    color: colors.danger,
    borderColor: colors.danger
  },
  highlight: {
    background: colors.danger,
    color: colors.white
  }
}

const DangerButton = ({highlight, children}) => (
  <Button className={css(styles.danger, highlight && styles.highlight)} highlight={highlight}>
    {children}
  </Button>
)

export default DangerButton