import * as React from 'react';
import TicketItem, {Ticket} from "Components/TicketItem";
import s from './style.scss';

interface Props {
    tickets: Array<Ticket> | null,
}

const TicketsList = (props: Props) => {
    const {tickets} = props,
        list = tickets ? tickets.map(ticket =>
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
