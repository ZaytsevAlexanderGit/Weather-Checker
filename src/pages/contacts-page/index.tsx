import styles from './styles.module.css';

export function ContactsPage() {
  return (
    <>
      <h1 className="text text_size_large .text_type_bold">Контакты</h1>
      <div className={styles.contacts__container}>
        <div>
          <p className={styles.contacts__text}>Разработчик</p>
          <a
            className={styles.contacts__links}
            target="_blank"
            href="https://github.com/ZaytsevAlexanderGit"
          >
            Зайцев Александр
          </a>
        </div>
        <div>
          <p className={styles.contacts__text}>Эл.почта</p>
          <a
            className={styles.contacts__links}
            href="mailto:azaytsev03@gmail.com"
          >
            azaytsev03@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}
