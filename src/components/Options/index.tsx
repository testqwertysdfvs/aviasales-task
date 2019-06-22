import StopsFilter from "Components/StopsFilter";
import * as React from 'react';
import s from './style.scss';

const Options = () => {
    return (
        <div className={s.Options}>
            <StopsFilter/>
        </div>
    )
};

export default Options;
