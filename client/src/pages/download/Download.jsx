import React from 'react';
import MyButton from '../../ui/button/MyButton';
import MyInput from '../../ui/input/MyInput';
import moduleDownload from './Download.module.sass'

const Download = () => {
    return (
        <div className={moduleDownload.downloadLayout}>
            <div>
                <div>
                    Название эксперимента
                </div>
                <MyInput placeholder='Название эксперимента' tupe='text'/>
                <div>
                    Время начала работы эксперимента
                </div>
                <MyInput placeholder='Начало эксперимента' type='datetime-local'/>
            </div>
            <div>
            <div>
                    Описание эксперимента
                </div>
                <MyInput placeholder='Описание эксперимента' type='title'/>
            </div>
            <div>
            Расстояние между соседними отсчетами
            <MyInput placeholder='Введите число' type='number'/>
            </div>
            <div>
                Загрузка файла .dat
                <input type='file' accept='.dat'/>
            </div>
            <div>
                Загрузка файла .dak
                <input type='file' accept='.dak'/>
            </div>
            <MyButton title='Загрузить'>Загрузить</MyButton>

        </div>
    );
};

export default Download;