import {Component} from 'react';
import styles from './main.module.scss'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.js';
import User from '../../components/user/user';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import Personality from '../../components/personality/personality';
import EditingPersonality from '../../components/editing-personality/editing';
import Popup from '../../components/popup/popup';

export default class Main extends Component {

    state = {
        name: '',
        wasNameFocused: false,
        validName: true,
        mail: '',
        wasMailFocused: false,
        validMail: true,
        phone: '',
        wasPhoneFocused: false,
        validPhone: true,
        isEditMode: false,
        popupVisible: false
    };
    setName = (value) => {
        this.setState({name: value});
    };
    setNameValid = (value) => {
        this.setState({validName: value});
    };
    setNameOnFocus = (value) => {
        this.setState({wasNameFocused: value});
    };
    setMail = (value) => {
        this.setState({mail: value});
    };
    setMailValid = (value) => {
        this.setState({validMail: value});
    };
    setMailOnFocus = (value) => {
        this.setState({wasMailFocused: value});
    };
    setPhone = (value) => {
        this.setState({phone: value});
    };
    setPhoneValid = (value) => {
        this.setState({validPhone: value});
    };
    setPhoneOnFocus = (value) => {
        this.setState({wasPhoneFocused: value});
    };
    setPopupVisible = (value) => {
        this.setState({popupVisible: value});
    };
    setEditMode = (value) => {
        this.setState({isEditMode: value});
    };

    render() {
        const {placeholderName, placeholderMail, placeholderPhone, saveChanges, indexState} = this.props;
        const {isEditMode, popupVisible} = this.state;
        return (
            <main className={styles.main}>
                <div className="block">
                    <Breadcrumbs/>
                    <section className={styles.performance}>
                        <User main
                              indexState={indexState}
                              placeholderName={placeholderName}/>
                        {isEditMode
                            ? <button className={styles.edit} title="Закрыть" onClick={() => {
                                this.setState({popupVisible: true})
                            }}>
                                <span className={styles.word}>Закрыть</span>
                                <CloseIcon className={styles.icon}/>
                            </button>
                            :
                            <button className={styles.edit} title="Редактировать" onClick={() => {
                                this.setState({isEditMode: true})
                            }}>
                                <span className={styles.word}>Редактировать</span>
                                <EditIcon className={styles.icon}/>
                            </button>
                        }
                    </section>
                    {isEditMode
                        ? <section className={styles.editing}>
                            <EditingPersonality mainState={this.state}
                                                saveChanges={saveChanges}
                                                placeholderName={placeholderName}
                                                placeholderMail={placeholderMail}
                                                placeholderPhone={placeholderPhone}
                                                setNameValid={this.setNameValid}
                                                setMailValid={this.setMailValid}
                                                setPhoneValid={this.setPhoneValid}
                                                setNameOnFocus={this.setNameOnFocus}
                                                setMailOnFocus={this.setMailOnFocus}
                                                setPhoneOnFocus={this.setPhoneOnFocus}
                                                setName={this.setName}
                                                setMail={this.setMail}
                                                setPhone={this.setPhone}
                            />
                        </section>
                        : <section className={styles.personality}>
                            <Personality indexState={indexState}/>
                        </section>}
                </div>
                {popupVisible ?
                    <Popup mainState={this.state}
                           isEditMode={isEditMode}
                           popupVisible={popupVisible}
                           saveChanges={saveChanges}
                           setPopupVisible={this.setPopupVisible}
                           setEditMode={this.setEditMode}
                           setNameOnFocus={this.setNameOnFocus}
                           setMailOnFocus={this.setMailOnFocus}
                           setPhoneOnFocus={this.setPhoneOnFocus}
                           setName={this.setName}
                           setMail={this.setMail}
                           setPhone={this.setPhone}/>
                    : null}
            </main>
        )
    }
}