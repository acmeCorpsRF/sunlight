import styles from './editing.module.scss';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
    root: {
        '& label.Mui-focused': {
            color: '#359ff4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#359ff4',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#359ff4',
            },
        },
    }
});

export default function EditingPersonality(props) {
    const classes = useStyles();
    const {
        mainState, saveChanges,
        placeholderName, placeholderMail, placeholderPhone,
        setNameValid, setMailValid, setPhoneValid,
        setNameOnFocus, setMailOnFocus, setPhoneOnFocus,
        setName, setMail, setPhone
    } = props;
    const {
        name, mail, phone,
        wasNameFocused, wasMailFocused, wasPhoneFocused,
        validName, validMail, validPhone
    } = mainState;
    const [errorName, setNameError] = useState(false);
    const [errorMail, setMailError] = useState(false);
    const [errorPhone, setPhoneError] = useState(false);

    const validateName = (name) => {
        const re = /^[А-Яа-яЁё]+\s[А-Яа-яЁё]+\s?[А-Яа-яЁё]*$/i;
        if (name.length !== 0) {
            setNameError(!re.test(name));
            if (re.test(name)) {
                setNameValid(true);
            } else {
                setNameValid(false);
            }
        } else {
            setNameValid(true);
            setNameError(false);
        }
    };
    const validateEmail = (email) => {
        const re = /^[.a-z0-9_-]+@[а-яА-Яa-z0-9-]+\.[а-яА-Яa-zA-Z]{2,6}$/i;
        if (email.length !== 0) {
            setMailError(!re.test(email.toLowerCase()));
            if (re.test(email.toLowerCase())) {
                setMailValid(true);
            } else {
                setMailValid(false);
            }
        } else {
            setMailValid(true);
            setMailError(false);
        }
    };
    const validatePhone = (phone) => {
        const re = /[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;
        if (phone.length !== 0) {
            setPhoneError(!re.test(phone));
            if (re.test(phone)) {
                setPhoneValid(true);
            } else {
                setPhoneValid(false);
            }
        } else {
            setPhoneValid(true);
            setPhoneError(false);
        }
    };
    const sendChanges = (name, mail, phone, wasNameFocused, wasMailFocused, wasPhoneFocused) => {
        if (wasNameFocused || wasMailFocused || wasPhoneFocused) {
            if (validName && validMail && validPhone) {
                saveChanges(name, mail, phone, wasNameFocused, wasMailFocused, wasPhoneFocused);
                setName('');
                setMail('');
                setPhone('');
                setNameOnFocus(false);
                setMailOnFocus(false);
                setPhoneOnFocus(false);
            }
        }
    };
    return (
        <form className={styles.form} autoComplete="off">
            <div className={styles.point}>
                <AssignmentIndIcon className={styles.icon}/>
                <TextField error={errorName}
                           helperText={errorName ? "Некорректно. Пример: Иванов Иван Иванович" : "Пример: Иванов Иван Иванович"}
                           inputProps={{className: `${styles.input}`}}
                           InputLabelProps={{className: `${styles.label}`}}
                           className={`${styles.textfield} ${classes.root}`}
                           id="outlined-basic"
                           label="Фамилия и имя"
                           variant="outlined"
                           placeholder={placeholderName}
                           value={name}
                           onFocus={() => setNameOnFocus(true)}
                           onBlur={() => validateName(name)}
                           onChange={e => setName(e.target.value)}/>
            </div>
            <div className={styles.point}>
                <AlternateEmailIcon className={styles.icon}/>
                <TextField error={errorMail}
                           helperText={errorMail ? "Некорректно. Пример: name@example.com" : "Пример: name@example.com"}
                           inputProps={{className: `${styles.input}`}}
                           InputLabelProps={{className: `${styles.label}`}}
                           className={`${styles.textfield} ${classes.root}`}
                           id="outlined-basic"
                           label="E-mail"
                           variant="outlined"
                           placeholder={placeholderMail}
                           value={mail}
                           onFocus={() => setMailOnFocus(true)}
                           onBlur={() => validateEmail(mail)}
                           onChange={e => setMail(e.target.value)}/>
            </div>
            <div className={styles.point}>
                <PhoneIcon className={styles.icon}/>
                <TextField error={errorPhone}
                           helperText={errorPhone ? "Некорректно. Пример: +7 (123) 456-78-91" : "Пример: +7 (123) 456-78-91"}
                           inputProps={{className: `${styles.input}`}}
                           InputLabelProps={{className: `${styles.label}`}}
                           className={`${styles.textfield} ${classes.root}`}
                           id="outlined-basic"
                           label="Номер телефона"
                           variant="outlined"
                           placeholder={placeholderPhone}
                           value={phone}
                           onFocus={() => setPhoneOnFocus(true)}
                           onBlur={() => validatePhone(phone)}
                           onChange={e => setPhone(e.target.value)}/>
            </div>
            <Button className={`${classes.themeBtnPrimary} ${styles.button}`}
                    onClick={() => sendChanges(name, mail, phone, wasNameFocused, wasMailFocused, wasPhoneFocused)}>Сохранить
                изменения</Button>
        </form>
    )
}