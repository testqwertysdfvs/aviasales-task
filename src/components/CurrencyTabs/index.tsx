import * as React from 'react';
import {currencies} from "Root/constants";
import classNames from 'classnames';
import s from './style.scss';

const CurrencyTabs = () => {
    const currenciesArr = Object.keys(currencies),
        tabList = currenciesArr.map((currency, i) => {
            const tabsItemClass = classNames(s.TabsItem, {
                [s.TabsItemSelected]: false,
                [s.TabsItemLeft]: i === 0,
                [s.TabsItemRight]: i === currenciesArr.length - 1,
            });
            return (
                <li key={currency} className={tabsItemClass}>
                    <button
                        type="button"
                        className={s.TabBtn}
                    >
                        {currency}
                    </button>
                </li>
            );
        });
    return (
        <ul className={s.Tabs}>
            {tabList}
        </ul>
    );
};

export default CurrencyTabs;
