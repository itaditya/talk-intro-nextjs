import Link from 'next/link'

import styles from './nav_bar.module.css';

function NavBar() {
  return (
    <nav className={styles.wrapper}>
      <div>My App</div>
      <ul className={styles.linksWrapper}>
        <li>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/catalog/browse">
            <a className={styles.link}>Browse</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
