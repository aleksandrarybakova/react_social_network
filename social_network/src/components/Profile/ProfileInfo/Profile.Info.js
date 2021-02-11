import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn24.img.ria.ru/images/07e4/0a/1c/1581926062_0:73:815:531_1920x0_80_0_0_b2a365d86622a0f243dd5767f47c4c29.jpg" />
            </div>
            <div className={style.avatar}>
                <img src="https://i.pinimg.com/originals/27/a5/35/27a535b9589af55485838c0f261a71d1.jpg" />
                ава +
            </div>
        </div>
    )
}

export default ProfileInfo;