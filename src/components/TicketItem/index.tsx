import * as React from 'react';
import s from './style.scss';
import {logos} from "Root/constants";

export interface Ticket {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}

const TicketItem = (props: Ticket) => {
    const {
        departure_time,
        origin,
        price,
        carrier,
        origin_name,
        departure_date,
        stops,
        arrival_date,
        arrival_time,
        destination,
        destination_name
    } = props;
    return (
        <div className={s.Block}>
            <div className={s.SideContent}>
                <div className={s.ImgBox}>
                    <img src={logos[carrier]} alt={carrier} className={s.Logo}/>
                </div>
                <button type="button" className={s.BuyBtn}>
                    Купить
                    <br/>
                    за {`${price}₽`}
                </button>
            </div>
            <div className={s.Content}>
                <div className={s.ContentLine}>
                        <div className={s.Time}>{departure_time}</div>
                    <div>
                        <div className={s.Path}>
                            {`${stops} пересадки`}
                        </div>
                    </div>
                    <div className={s.TimeArrival}>{arrival_time}</div>
                </div>
                <div className={s.ContentLine}>
                    <div className={s.Data}>
                        <div className={s.City}>{`${origin}, ${origin_name}`}</div>
                        <div className={s.Date}>{departure_date}</div>
                    </div>
                    <div className={s.DataArrival}>
                        <div className={s.City}>{`${destination}, ${destination_name}`}</div>
                        <div className={s.Date}>{arrival_date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketItem;
