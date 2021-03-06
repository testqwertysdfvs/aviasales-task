import * as React from 'react';
import {currencies} from "Root/constants";
import classNames from 'classnames';
import s from './style.scss';
import {AppContext} from "Components/App";

const CurrencyTabs = () => {
    const context = React.useContext(AppContext),
        currenciesArr = Object.keys(currencies),
        tabList = currenciesArr.map((currency, i) => {
            const tabsItemClass = classNames(s.TabsItem, {
                [s.TabsItemSelected]: context.currency === currency,
                [s.TabsItemLeft]: i === 0,
                [s.TabsItemRight]: i === currenciesArr.length - 1,
            });
            return (
                <li key={currency} className={tabsItemClass}>
                    <button
                        type="button"
                        className={s.TabBtn}
                        onClick={() => context.setCurrency(currency)}
                    >
                        {currency}
                    </button>
                </li>
            );
        });
    return (
        <React.Fragment>
            {context.error === 'CURRENCY_ERROR' ? <div className={s.Error}>Не удалось загрузить данные по валютам</div> : null}
            <ul className={s.Tabs}>
                {tabList}
            </ul>
        </React.Fragment>
    );
};

export default React.memo(CurrencyTabs);
