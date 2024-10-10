import { useEffect, useRef } from 'react';

import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../../../shared/config';
import cn from 'classnames';

export const modalRoot = document.getElementById('modal') as HTMLElement;

interface MenuProps {
  setIsActive: (isActive: boolean) => void;
  isActive: boolean;
}

export const DropDownMenu = ({ setIsActive, isActive }: MenuProps) => {
  // const isMobile = useMediaQuery(Breakpoints.L);
  const ref = useRef(null);

  const closeByOverlay = (evt: MouseEvent) => {
    if (evt.target !== ref.current) {
      setIsActive(false);
    }
  };

  const closeByEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeByEsc);
    document.addEventListener('click', closeByOverlay);

    return () => {
      document.removeEventListener('keydown', closeByEsc);
      document.removeEventListener('click', closeByOverlay);
    };
  }, []);

  const sidebarContainerStyles = cn(styles.header__sidebar__container, {
    [styles.header__sidebar__container_active]: isActive,
  });

  return (
    <div className={sidebarContainerStyles} ref={ref}>
      <>
        <NavLink className={styles.header__menu__item} to={Routes.ROOT}>
          Главная
        </NavLink>
        <NavLink className={styles.header__menu__item} to={Routes.MAP}>
          Карта
        </NavLink>
        <NavLink className={styles.header__menu__item} to={Routes.CONTACTS}>
          Контакты
        </NavLink>
      </>
    </div>
  );
};
