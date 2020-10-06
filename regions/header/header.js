import styles from './header.module.scss';
import User from '../../components/user/user';

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={`block ${styles.block}`}>
                <User header indexState={props.indexState}/>
            </div>
        </header>
    )
}