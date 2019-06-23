import * as React from "react";
import App from 'Components/App';
import {Ticket} from "Components/TicketItem";
import {baseCurrency, currencies, currencyRatesInitial, currencyRatesUrl, dataUrl} from "Root/constants";

const fetchTickets = () => fetch(dataUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(res.statusText);
        }
    });

const fetchCurrencyRates = (base: string = baseCurrency, symbols: string = Object.keys(currencies).join(',')) => fetch(`${currencyRatesUrl}?base=${base}&symbols=${symbols}`)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error(res.statusText);
        }
    });

export type CurrencyRatesType = {
    base: string,
    date?: string,
    rates: {
        [key: string]: number
    }
}

export interface CommonData {
    tickets: Array<Ticket> | null,
    currencyRates: CurrencyRatesType,
}

class AppContainer extends React.Component<object, CommonData> {
    state = {
        tickets: null,
        currencyRates: currencyRatesInitial,
    };

    componentDidMount(): void {
        this.getTickets();
        this.getCurrencyRates();
    }

    async getTickets() {
        try {
            const tickets = await fetchTickets();
            this.setState({
                tickets
            })
        } catch (e) {
            console.error('Не удалось загрузить билеты')
        }
    }

    async getCurrencyRates() {
        try {
            const currencyRates = await fetchCurrencyRates();
            this.setState({
                currencyRates,
            })
        } catch (e) {
            console.error('Не удалось загрузить фктуальные курсы валют')
        }
    }

    render() {
        const {tickets, currencyRates} = this.state;
        return <App tickets={tickets} currencyRates={currencyRates}/>;
    }
}

export default AppContainer;
