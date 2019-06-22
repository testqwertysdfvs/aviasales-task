import Options from "Components/Options";
import {Ticket} from "Components/TicketItem";
import TicketsList from "Components/TicketsList";
import * as React from "react";
import {CommonData} from "Root/containers/App";
import s from './style.scss';

type filterStopsType = (stops: Array<number>) => void;
type setCurrencyType = (currency: string) => void;

interface State {
    tickets: Array<Ticket> | null,
    stops: Array<number> | 'all',
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

        this.filterStops = (stops: Array<number>) => {
            this.setState({
                stops,
            });
        };

        this.setCurrency = (currency: string) => {
            this.setState({
                currency,
            });
        };

        this.state = {
            tickets: props.tickets,
            stops: 'all',
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
        const {tickets} = this.state;
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
