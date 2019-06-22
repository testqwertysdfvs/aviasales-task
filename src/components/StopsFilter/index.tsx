import FilterCheckbox from "Components/FilterCheckbox";
import {memo} from "react";
import * as React from 'react';
//import s from './style.scss';
import {AppContext} from "Components/App";

type stopsArrayType = ['all', ...Array<number>];

const StopsFilter = () => {
    const context = React.useContext(AppContext),
        tickets = context.tickets,
        stopsVariants = tickets ? [...new Set(tickets
            .map(ticket => ticket.stops))]
            .sort((a, b) => a - b) : [],
        stopsArray: stopsArrayType = ['all', ...stopsVariants],
        stopsCheckboxes = stopsArray.map(value => <FilterCheckbox key={`key-${value}`} value={value}/>);
    return (
        <div>
            <h3>Количество пересадок</h3>
            <ul>
                {stopsCheckboxes}
            </ul>
        </div>
    );
};

export default memo(StopsFilter);
