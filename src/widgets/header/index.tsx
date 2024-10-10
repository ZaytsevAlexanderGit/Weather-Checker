import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { Routes, Breakpoints } from '../../shared/config';
import { useMediaQuery } from '../../shared/hooks';
import { Logo } from '../../ui';

import styles from './styles.module.css';
import { DropDownMenu, MenuButton } from './components';
import { SyntheticEvent, useState } from 'react';

export const Header = () => {
  const isMobile = useMediaQuery(Breakpoints.L);

  const [menuActive, setMenuActive] = useState<boolean>(false);

  const handleClick = (evt: SyntheticEvent) => {
    evt.stopPropagation();
    setMenuActive(!menuActive);
  };

  const headerStyles = cn(styles.header, { [styles.header_mobile]: isMobile });
  const headerLogoStyles = cn(styles.header__logo, {
    [styles.header__logo_mobile]: isMobile,
  });
  const headerItemStyles = cn(styles.header__menu__item, {
    [styles.header__menu__item_mobile]: isMobile,
  });

  return (
    <header className={headerStyles}>
      <div className={styles.header__container}>
        <NavLink className={headerLogoStyles} to={Routes.ROOT}>
          <Logo />
        </NavLink>
        {!isMobile && (
          <>
            <NavLink className={headerItemStyles} to={Routes.ROOT}>
              Главная
            </NavLink>
            <NavLink className={headerItemStyles} to={Routes.CONTACTS}>
              Контакты
            </NavLink>
          </>
        )}
        {isMobile && (
          <MenuButton
            onClick={handleClick}
            isMobile={isMobile}
            isActive={menuActive}
          />
        )}

        {isMobile && (
          <DropDownMenu setIsActive={setMenuActive} isActive={menuActive} />
        )}
      </div>
    </header>
  );
};
