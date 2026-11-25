import styles from './HomePages.module.css'

const HomePages = () => {
    return (
        <main className={styles.home}>
            <h1 className={styles.home__title}>Мой игровой архив</h1>
            <section className={styles.home__current}>
                <h2>Прохожу сейчас</h2>
                <article className={styles.home__game}>
                    <div className={styles.home__cover}>
                        <p>Обложка появится позже</p>
                    </div>
                    <div className={styles.home__details}>
                        <h3>Grand Theft Auto VI</h3>
                        <p>Платформа: PS5</p>
                        <label htmlFor="game-progress">Прогресс: 10,5 %</label>
                        <progress id="game-progress" max={100} value={10.5} className={styles.home__progress}>10,5 %</progress>
                        <p>Очень ждал — теперь играю</p>
                    </div>
                </article>
            </section>
        </main>
        
    )
}

export default HomePages