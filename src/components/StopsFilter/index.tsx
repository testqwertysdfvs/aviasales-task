import {memo} from "react";
import * as React from 'react';
//import s from './style.scss';
import {AppContext} from "Components/App";

const StopsFilter = () => {
    const context = React.useContext(AppContext),
        tickets = context.tickets,
        stopsArray = tickets ?
            [...new Set(tickets
                .map(ticket => ticket.stops))]
                .sort((a, b) => a - b) // generate all possible stops variants
            : [];
    console.log(stopsArray);
    return (
        <div>
            <h3>Количество пересадок</h3>
            <ul>
                dddd
            </ul>
        </div>
    );
};

export default memo(StopsFilter);
