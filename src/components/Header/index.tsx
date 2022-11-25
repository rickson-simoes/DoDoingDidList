import appLogo from '../../assets/Logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={appLogo} alt="App Logo" />
    </header>
  )
};