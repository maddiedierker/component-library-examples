import * as styles from './button.module.scss'
import classnames from 'classnames'

const Button = ({primary, className, children}) => (
  <button className={classnames(styles.btn, primary && styles.primary, className)}>
    {children}
  </button>
)

export default Button