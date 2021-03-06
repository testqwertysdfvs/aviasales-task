import Options from "Components/Options";
import {stopsArrayType} from "Components/StopsFilter";
import {Ticket} from "Components/TicketItem";
import TicketsList from "Components/TicketsList";
import * as React from "react";
import {baseCurrency, currencyRatesInitial} from "Root/constants";
import {CommonData, CurrencyRatesType} from "Root/containers/App";
import AirplaneLogo from './../../assets/icons/airplane-img.svg';
import s from './style.scss';

export type filterStopsType = (stop: number | Array<number>, add: boolean) => void;
export type setCurrencyType = (currency: string) => void;

interface State {
    tickets: Array<Ticket> | null,
    stops: stopsArrayType,
    currency: string,
    currencyRates: CurrencyRatesType,
    filterStops: filterStopsType,
    setCurrency: setCurrencyType,
    error?: string | boolean,
}

interface ContextType {
    tickets?: Array<Ticket> | null,
    stops?: stopsArrayType,
    currency: string,
    filterStops: filterStopsType,
    currencyRates: CurrencyRatesType,
    setCurrency: setCurrencyType,
    error?: string | boolean,
}

export const AppContext = React.createContext<ContextType>({
    currency: baseCurrency,
    currencyRates: currencyRatesInitial,
    filterStops: () => {
    },
    setCurrency: () => {
    },
});

class App extends React.PureComponent<CommonData, State> {
    filterStops: filterStopsType;
    setCurrency: setCurrencyType;

    constructor(props: CommonData) {
        super(props);

        this.filterStops = (stop: number | Array<number>, add: boolean): void => { // actions depends on type of first argument, if it's numb er we add value to array, if it's array, we replace full state
            const {stops} = this.state;
            if (add) {
                this.setState({
                    stops: typeof stop === 'number' ? [...stops, stop] : stop,
                });
            } else {
                this.setState({
                    stops: typeof stop === 'number' ? stops.filter(el => el !== stop) : [],
                });
            }
        };

        this.setCurrency = (currency: string) => {
            this.setState({
                currency,
            });
        };

        this.state = {
            tickets: props.tickets,
            stops: [],
            currency: baseCurrency,
            currencyRates: props.currencyRates,
            filterStops: this.filterStops,
            setCurrency: this.setCurrency,
            error: false,
        };
    }

    componentDidUpdate(prevProps: Readonly<CommonData>): void {
        const {tickets, currencyRates, error} = this.props;
        if (!prevProps.tickets && tickets) {
            this.setState({
                tickets
            });
        }
        if (prevProps.currencyRates.date !== currencyRates.date) {
            this.setState({
                currencyRates
            });
        }
        if (error && prevProps.error !== error) {
            this.setState({
                error,
            })
        }
    }

    render() {
        const {tickets, stops} = this.state,
            {error} = this.props;
        return (
            <AppContext.Provider value={this.state}>
                <div className={s.Header}><img src={AirplaneLogo} alt="airplane-logo"/></div>
                <div className={s.Block}>
                    <Options/>
                    {error === 'TICKETS_ERROR' ? (
                        <div className={s.Error}>
                            Не удалось загрузить данные по билетам, возможно не запущен локальный сервер.
                            <br/>
                            Запустить сервер: json-server --watch tickets.json
                        </div>
                    ) : <TicketsList tickets={tickets} stops={stops}/>}
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
