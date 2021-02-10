import Button from './Button'
import * as styles from './button.module.scss'

const DangerButton = ({primary, children}) => (
  <Button className={styles.danger} primary={primary}>
    {children}
  </Button>
)

export default DangerButton