import * as styles from './button.module.scss'
import classnames from 'classnames'

const Button = ({highlight, className, children}) => (
  <button className={classnames(styles.btn, highlight && styles.highlight, className)}>
    {children}
  </button>
)

export default Button