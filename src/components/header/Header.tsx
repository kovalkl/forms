import { NavLink } from 'react-router-dom';

import styles from '@/components/header/Header.module.sass';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav>
          <ul className={styles.header__list}>
            <li>
              <NavLink to="/">Main</NavLink>
            </li>
            <li>
              <NavLink to="/uncontrolled-form">Uncontrolled Form</NavLink>
            </li>
            <li>
              <NavLink to="/react-hook-form">React Hook Form</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
