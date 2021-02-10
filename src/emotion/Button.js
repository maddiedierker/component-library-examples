import {css} from '@emotion/css'
import colors from '../colors'

const styles = {
  btn: {
    background: 'transparent',
    borderRadius: 3,
    border: `2px solid ${colors.primary}`,
    color: colors.primary,
    margin: '0 1em',
    padding: '0.25em 1em'
  },
  primary: {
    background: colors.primary,
    color: colors.white
  }
}

const Button = ({primary, className, children}) => (
  <button className={css([styles.btn, primary && styles.primary, className])}>
    {children}
  </button>
)

export default Button