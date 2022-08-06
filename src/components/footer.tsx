import ExtLink from './ext-link'

import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <span>Powered by </span>
      <ExtLink href="https://wa.me/6282280781433">
        rani
      </ExtLink>
    </div>
  </footer>
)

export default Footer
