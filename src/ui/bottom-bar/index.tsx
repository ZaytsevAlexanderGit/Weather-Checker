import styles from './styles.module.css';
import cn from 'classnames';

export interface IBottomBarProps {
  extClassName?: string;
}

export const BottomBar = ({ extClassName }: IBottomBarProps) => (
  <div className={cn(styles.container, extClassName)}>
    <p className={styles.text}>© Weather Checker</p>
  </div>
);
