import {stopsArrayType} from "Components/StopsFilter";
import * as React from 'react';
import TicketItem, {Ticket} from "Components/TicketItem";
import s from './style.scss';

interface Props {
    tickets: Array<Ticket> | null,
    stops: stopsArrayType,
}

const TicketsList = (props: Props) => {

    function sortByPrice(a: Ticket, b: Ticket): number {
        return a.price - b.price
    }

    const {tickets, stops} = props,
        list = tickets ? tickets.filter(ticket => stops.includes(ticket.stops)).sort(sortByPrice).map(ticket =>
            (
                <li key={ticket.departure_time + ticket.price}>
                    <TicketItem {...ticket}/>
                </li>
            )
        ) : null;
    return (
        <ul className={s.List}>
            {list}
        </ul>
    );
};

export default TicketsList;
