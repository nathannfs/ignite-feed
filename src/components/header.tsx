import styles from './header.module.css'

import igniteLogo from '/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite Feed" />
    </header>
  )
}
