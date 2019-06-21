import * as React from "react";
import App from 'Components/App';
import {Ticket} from "Components/TicketItem";

const fetchTickets = () => fetch('http://localhost:3000/tickets', {
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

export interface CommonData {
    tickets: Array<Ticket> | null,
    error: boolean,
}

class AppContainer extends React.Component<object, CommonData> {
    state = {
        tickets: null,
        error: false,
    };

    componentDidMount() {
        this.getTickets();
    }

    async getTickets() {
        try {
            const tickets = await fetchTickets();
            this.setState({
                tickets
            })
        } catch (e) {
            this.setState({
                error: true,
            })
        }
    }

    render() {
        const {tickets, error} = this.state;
        return <App tickets={tickets} error={error}/>;
    }
}

export default AppContainer;
