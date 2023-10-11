import React from 'react';
import moduleInput from './MyInput.module.sass'

const MyInput = (props) => {
    return (
        <input {...props} className={moduleInput.myInput}/>
    );
};

export default MyInput;