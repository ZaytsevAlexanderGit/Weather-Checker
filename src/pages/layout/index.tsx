import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../../widgets';
import { MainWrapper } from '../../ui/main-wrapper';
import { PageLayout } from '../../ui/page-layout';

import styles from './styles.module.css';

export function Layout() {
  return (
    <MainWrapper>
      <Header />
      <main className={styles.main}>
        <PageLayout content={<Outlet />} />
      </main>
      <Footer />
    </MainWrapper>
  );
}
