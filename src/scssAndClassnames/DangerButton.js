import Button from './Button'
import * as styles from './button.module.scss'

const DangerButton = ({highlight, children}) => (
  <Button className={styles.danger} highlight={highlight}>
    {children}
  </Button>
)

export default DangerButton