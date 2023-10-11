import React from 'react';
import moduleMyButton from './MyButton.module.sass'

const MyButton = ({title, ...props}) => {
    return (
        <button className={moduleMyButton.myButton}>
            {title}
        </button>
    );
};

export default MyButton;