import React from 'react';
import MyButton from '../../ui/button/MyButton';
import MyInput from '../../ui/input/MyInput';
import moduleDownload from './Download.module.sass'

const Download = () => {
    return (
        <div className={moduleDownload.downloadLayout}>
            <div className={moduleDownload.downloadTitle}>
                Загрузка данных об эксперименте
            </div>

            <div className={moduleDownload.nameBlock}>
                <div>
                    Название эксперимента
                </div>
                <MyInput placeholder='Название эксперимента' type='text' />
                <div>
                    Время начала работы эксперимента
                </div>
                <MyInput placeholder='Начало эксперимента' type='datetime-local' />
            </div>
            <div className={moduleDownload.nameBlock}>
                <div>
                    <div>
                        Описание эксперимента
                    </div>
                    <MyInput placeholder='Описание эксперимента' type='title' />
                </div>
            </div>
            <div className={moduleDownload.nameBlock}>
                <div>
                    Расстояние между соседними отсчетами
                </div>

                <MyInput placeholder='Введите число' type='number' />
            </div>
            <div className={moduleDownload.nameBlock}>
                <div>
                    Загрузка файла .dat
                    <input type='file' accept='.dat' />
                </div>
                <div>
                    Загрузка файла .dak
                    <input type='file' accept='.dak' />
                </div>
            </div>
            <div className={moduleDownload.downloadButon}>
                <MyButton className={moduleDownload.downloadButton} title='Загрузить' >Загрузить</MyButton>

            </div>

        </div>
    );
};

export default Download;