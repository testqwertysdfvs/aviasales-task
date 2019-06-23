import CurrencyTabs from "Components/CurrencyTabs";
import StopsFilter from "Components/StopsFilter";
import * as React from 'react';
import s from './style.scss';

const Options = () => {
    return (
        <div className={s.Options}>
            <h3 className={s.Title}>Валюта</h3>
            <CurrencyTabs/>
            <h3 className={s.Title}>Количество пересадок</h3>
            <StopsFilter/>
        </div>
    )
};

export default React.memo(Options);
