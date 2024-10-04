import { BottomBar } from '../../ui/bottom-bar';

import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <BottomBar extClassName={styles.footer__image} />
    </footer>
  );
};
