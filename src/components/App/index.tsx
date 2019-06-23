import {StopType} from "Components/FilterCheckbox";
import Options from "Components/Options";
import {stopsArrayType} from "Components/StopsFilter";
import {Ticket} from "Components/TicketItem";
import TicketsList from "Components/TicketsList";
import * as React from "react";
import {CommonData} from "Root/containers/App";
import s from './style.scss';

export type filterStopsType = (stop: StopType, add: boolean) => void;
export type setCurrencyType = (currency: string) => void;

interface State {
    tickets: Array<Ticket> | null,
    stops: stopsArrayType,
    currency: string,
    filterStops: filterStopsType,
    setCurrency: setCurrencyType,
}

export const AppContext = React.createContext<Partial<State>>({});

class App extends React.Component<CommonData, State> {
    filterStops: filterStopsType;
    setCurrency: setCurrencyType;

    constructor(props: CommonData) {
        super(props);

        this.filterStops = (stop: StopType, add: boolean) => {
            const {stops} = this.state;
            if (add) {
                this.setState({
                    stops: [...stops, stop],
                });
            } else {
                this.setState({
                    stops: stops.filter(el => el !== stop)
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
            stops: ['all'],
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
        console.log(stops)
        return (
            <AppContext.Provider value={this.state}>
                <div className={s.Block}>
                    <Options/>
                    <TicketsList tickets={tickets}/>
                </div>
            </AppContext.Provider>
        );
    }
}

export default App;
