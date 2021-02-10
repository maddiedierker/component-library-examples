import Button from './Button'
import {css} from '@emotion/css'
import colors from '../colors'

const styles = {
  danger: {
    color: colors.danger,
    borderColor: colors.danger
  },
  primary: {
    background: colors.danger,
    color: 'white'
  }
}

const DangerButton = ({primary, children}) => (
  <Button className={css(styles.danger, primary && styles.primary)} primary={primary}>{children}</Button>
)

export default DangerButton