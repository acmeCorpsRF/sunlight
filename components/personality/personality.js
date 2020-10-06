import styles from './personality.module.scss';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Personality(props) {
    const {indexState} = props;
    return (
        <div className={styles.info}>
            <div className={styles.point}>
                <AlternateEmailIcon className={styles.icon}/>{indexState.userMail}
            </div>
            <div className={styles.point}>
                <PhoneIcon className={styles.icon}/>{indexState.userPhone}
            </div>
        </div>
    )
}