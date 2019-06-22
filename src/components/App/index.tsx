import Options from "Components/Options";
import {Ticket} from "Components/TicketItem";
import TicketsList from "Components/TicketsList";
import * as React from "react";
import {CommonData} from "Root/containers/App";
import s from './style.scss';

interface State {
    tickets: Array<Ticket> | null,
}

class App extends React.Component<CommonData, State> {
    constructor(props: CommonData){
        super(props);
        this.state = {
            tickets: props.tickets
        }
    }

    componentDidUpdate(prevProps: Readonly<CommonData>): void {
        const {tickets} = this.props;
        if(!prevProps.tickets && tickets) {
            this.setState({
                tickets
            })
        }
    }

    render() {
        const {tickets} = this.state;
        return (
            <div className={s.Block}>
                <Options/>
                <TicketsList tickets={tickets}/>
            </div>
        );
    }
}

export default App;
