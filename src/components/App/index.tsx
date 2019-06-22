import {Ticket} from "Components/TicketItem";
import TicketsList from "Components/TicketsList";
import * as React from "react";
import {CommonData} from "Root/containers/App";

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
            <div>
                <TicketsList tickets={tickets}/>
            </div>
        );
    }
}

export default App;
