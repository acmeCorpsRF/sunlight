import styles from './popup.module.scss';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {useState} from 'react';

const useStyles = makeStyles({
    themeBtnPrimary: {
        padding: '13px 30px',
        color: 'white',
        textTransform: 'initial',
        background: 'linear-gradient(45deg, #01bda7 30%, #01bda7 90%)',
        border: 0,
        borderRadius: 36,
    },
    themeBtnSecondary: {
        padding: '13px 30px',
        color: '#01bda7',
        textTransform: 'initial',
        background: 'linear-gradient(45deg, #ffffff 30%, #ffffff 90%)',
        border: '1px solid #01bda7',
        borderRadius: 36,
    }
});

export default function Popup(props) {
    const {
        setPopupVisible, setEditMode,
        mainState, saveChanges,
        setNameOnFocus, setMailOnFocus, setPhoneOnFocus,
        setName, setMail, setPhone
    } = props;
    const {
        name, mail, phone,
        wasNameFocused, wasMailFocused, wasPhoneFocused
    } = mainState;
    const classes = useStyles();
    const [confirmSave, setConfirmSave] = useState(false);

    const toggleDisplay = () => {
        setPopupVisible(false);
        setConfirmSave(false);
        setEditMode(false);
    };
    const handlerSaveData = () => {
        setConfirmSave(true);
        saveChanges(name, mail, phone, wasNameFocused, wasMailFocused, wasPhoneFocused);
        setName('');
        setMail('');
        setPhone('');
        setNameOnFocus(false);
        setMailOnFocus(false);
        setPhoneOnFocus(false);
    };
    return (
        <div className="shadow">
            <div className={styles.popup}>
                <button className={styles.close} title="Закрыть" onClick={() => setPopupVisible(false)}>
                    <CloseIcon className={styles.icon}/>
                </button>
                {confirmSave
                    ? <>
                    <span className={styles.title}>Данные успешно сохранены</span>
                    <Button className={`${classes.themeBtnPrimary} ${styles.button}`}
                            onClick={() => toggleDisplay()}>Хорошо</Button>
                    </>
                    : <>
                    <span className={styles.title}>Сохранить изменения?</span>
                    <Button className={`${classes.themeBtnPrimary} ${styles.button}`}
                            onClick={() => handlerSaveData()}>Сохранить</Button>
                    <Button className={`${classes.themeBtnSecondary} ${styles.button}`}
                            onClick={() => toggleDisplay()}>Не сохранять</Button>
                    </>
                }
            </div>
        </div>
    )
}

