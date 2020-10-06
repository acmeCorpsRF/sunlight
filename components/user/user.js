import styles from './user.module.scss';
import {makeStyles} from '@material-ui/core/styles';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';
import {deepPurple} from '@material-ui/core/colors';

export default function User(props) {
    const useStyles = makeStyles((theme) => ({
        purple: {
            color: theme.palette.getContrastText(deepPurple[500]),
            backgroundColor: deepPurple[500],
        },
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        }
    }));
    const classes = useStyles();
    const {header, main, indexState, placeholderName} = props;
    const correctUserName = indexState.userName === placeholderName ? indexState.userName : `${indexState.userName.substr(0, Number(indexState.userName.indexOf(' ')) + 2)}.`;
    // console.log(indexState.userName);
    // console.log(placeholderName);
    // console.log(indexState.userName === placeholderName);
    // console.log(correctUserName);
    // Здесь непонятно почему, 2ой раз не перезаписывает correctUserName (╯°益°)╯彡┻━┻ !!!
    if (header) {
        return (
            <div className={styles.info}>
                <div className={styles.alerts}>
                    <NotificationsNoneIcon className={styles.bell}/>
                </div>
                <div className={styles.self}>
                    <Avatar className={`${styles.avatar} ${styles.avatar_header} ${classes.purple}`}/>
                    <span className={`${styles.name} ${styles.name_header}`}>{correctUserName}</span>
                </div>
            </div>
        )
    }
    if (main) {
        return (
            <div className={styles.self}>
                <Avatar className={`${styles.avatar_main} ${classes.purple} ${classes.large}`}/>
                <span className={`${styles.name} ${styles.name_main}`}>{indexState.userName}</span>
            </div>
        )
    }
}