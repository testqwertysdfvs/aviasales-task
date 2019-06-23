import FilterCheckbox from "Components/FilterCheckbox";
import {memo, useEffect} from "react";
import * as React from 'react';
import {AppContext} from "Components/App";
import s from './style.scss';

export type stopsArrayType = Array<number>;

const StopsFilter = () => {
    const context = React.useContext(AppContext),
        tickets = context.tickets,
        stopsVariants = tickets ? [...new Set(tickets // get all possible stops variants
            .map(ticket => ticket.stops))]
            .sort((a, b) => a - b) : [],
        stopsCheckboxes = stopsVariants.map(value => {
            const isChecked: boolean = context.stops ? context.stops.includes(value) : false;
            return (
                <li key={`key-${value}`}>
                <FilterCheckbox
                    value={value}
                    checked={isChecked}
                    changeFunc={context.filterStops}
                /></li>
            );
        });

    useEffect(() => context.filterStops(stopsVariants, true), [stopsVariants.length]); // set initial state of filter

    return (
        <ul className={s.List}>
            <li><FilterCheckbox
                value={stopsVariants}
                checked={context.stops ? context.stops.length === stopsVariants.length : false}
                changeFunc={context.filterStops}
                all={true}
            /></li>
            {stopsCheckboxes}
        </ul>
    );
};

export default memo(StopsFilter);
