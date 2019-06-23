import Options from "Components/Options";
import {stopsArrayType} from "Components/StopsFilter";
import {Ticket} from "Components/TicketItem";
import TicketsList from "Components/TicketsList";
import * as React from "react";
import {CommonData} from "Root/containers/App";
import s from './style.scss';

export type filterStopsType = (stop: number | Array<number>, add: boolean) => void;
export type setCurrencyType = (currency: string) => void;

interface State {
    tickets: Array<Ticket> | null,
    stops: stopsArrayType,
    currency: string,
    filterStops: filterStopsType,
    setCurrency: setCurrencyType,
}

interface ContextType {
    tickets?: Array<Ticket> | null,
    stops?: stopsArrayType,
    currency?: string,
    filterStops: filterStopsType,
    setCurrency?: setCurrencyType,
}

export const AppContext = React.createContext<ContextType>({
    filterStops: () => {
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
            currency: 'rub',
            filterStops: this.filterStops,
            setCurrency: this.setCurrency,
        };
    }

    componentDidUpdate(prevProps: Readonly<CommonData>): void {
        const {tickets} = this.props;
        if (!prevProps.tickets && tickets) {
            this.setState({
                tickets
            });
        }
    }

    render() {
        const {tickets, stops} = this.state;
        console.log('stops', stops);
        return (
            <AppContext.Provider value={this.state}>
                <div className={s.Block}>
                    <Options/>
                    <TicketsList tickets={tickets} stops={stops}/>
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
