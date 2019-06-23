import * as React from 'react';
import s from './style.scss';
import {currencies, logos} from "Root/constants";
import dateFormatter from './../../functions/dateFormatter';
import priceFormatter from './../../functions/priceFormatter';
import declOfNum from './../../functions/declOfNum';
import MediaQuery from 'react-responsive';
import {AppContext} from "Components/App";

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
        <AppContext.Consumer>
            {context => <div className={s.Block}>
                <MediaQuery minWidth={769}>
                    <div className={s.SideContent}>
                        <div className={s.ImgBox}>
                            <img src={logos[carrier]} alt={carrier} className={s.Logo}/>
                        </div>
                        <button type="button" className={s.BuyBtn}>
                            Купить
                            <br/>
                            за {`${priceFormatter(price * context.currencyRates.rates[context.currency])} ${currencies[context.currency]}`}
                        </button>
                    </div>
                </MediaQuery>
                <div className={s.Content}>
                    <MediaQuery maxWidth={768}>
                        <div className={s.Header}>
                            <div className={s.Path}>
                                {`${stops} ${declOfNum(stops, ['пересадка', 'пересадки', 'пересадок'])}`}
                            </div>
                            <div className={s.ImgBox}>
                                <img src={logos[carrier]} alt={carrier} className={s.Logo}/>
                            </div>
                        </div>
                    </MediaQuery>
                    <div className={s.ContentLine}>
                        <div className={s.Time}>{departure_time}</div>
                        <MediaQuery minWidth={768}>
                            <div>
                                <div className={s.Path}>
                                    {`${stops} ${declOfNum(stops, ['пересадка', 'пересадки', 'пересадок'])}`}
                                </div>
                            </div>
                        </MediaQuery>
                        <div className={s.TimeArrival}>{arrival_time}</div>
                    </div>
                    <div className={s.ContentLine}>
                        <div className={s.Data}>
                            <div className={s.City}>{`${origin}, ${origin_name}`}</div>
                            <div className={s.Date}>{dateFormatter(departure_date)}</div>
                        </div>
                        <div className={s.DataArrival}>
                            <div className={s.City}>{`${destination}, ${destination_name}`}</div>
                            <div className={s.Date}>{dateFormatter(arrival_date)}</div>
                        </div>
                    </div>
                    <MediaQuery maxWidth={768}>
                        <div className={s.ButtonContainer}>
                            <button type="button" className={s.BuyBtn}>
                                Купить
                                <br/>
                                за {`${priceFormatter(price * context.currencyRates.rates[context.currency])} ${currencies[context.currency]}`}
                            </button>
                        </div>
                    </MediaQuery>
                </div>
            </div>}
        </AppContext.Consumer>
    );
};

export default React.memo(TicketItem);
