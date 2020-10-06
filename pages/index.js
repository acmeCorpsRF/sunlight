import {Component} from 'react';
import './_app.js';
import Header from '../regions/header/header';
import Main from '../regions/main/main';

const placeholderName = 'Укажите ваши фамилию и имя';
const placeholderMail = 'Укажите адрес электронной почты';
const placeholderPhone = 'Укажите номер телефона';

export default class Index extends Component {
    state = {
        userName: placeholderName,
        userMail: placeholderMail,
        userPhone: placeholderPhone
    };
    saveChanges = (name, mail, phone, nameOnFocus, mailOnFocus, phoneOnFocus) => {
        const correctName = nameOnFocus ? (name.length !== 0 ? name : this.state.userName) : this.state.userName;
        const correctMail = mailOnFocus ? (mail.length !== 0 ? mail : this.state.userMail) : this.state.userMail;
        const correctPhone = phoneOnFocus ? (phone.length !== 0 ? phone : this.state.userPhone) : this.state.userPhone;
        this.setState({
            userName: correctName,
            userMail: correctMail,
            userPhone: correctPhone
        });
        const localStorageName = correctName !== placeholderName ? correctName : null;
        const localStorageMail = correctMail !== placeholderMail ? correctMail : null;
        const localStoragePhone = correctPhone !== placeholderPhone ? correctPhone : null;
        const dispatchedObject = {
            "userName": localStorageName,
            "userMail": localStorageMail,
            "userPhone": localStoragePhone
        };
        localStorage.setItem("userData", JSON.stringify(dispatchedObject));
        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'X-Access-Token': 'random' // (•ิ_•ิ)?
            },
            body: JSON.stringify(dispatchedObject)
        });
    };

    render() {
        return (
            <>
            <Header indexState={this.state}/>
            <Main indexState={this.state}
                  saveChanges={this.saveChanges}
                  placeholderName={placeholderName}
                  placeholderMail={placeholderMail}
                  placeholderPhone={placeholderPhone}/>
            </>
        )
    }
}

