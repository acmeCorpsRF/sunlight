import styles from './breadcrumbs.module.scss'

export default function Breadcrumbs() {
    return (
        <section className={styles.breadcrumbs}>
            <span className={styles.title}>Личный профиль</span>
            <div className={styles.list}>
                <a className={styles.item} href="">Главная</a>/
                <a className={styles.item} href="">Личный профиль</a>
            </div>
        </section>
    )
}