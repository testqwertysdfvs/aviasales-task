import TicketsList from "Components/TicketsList";
import * as React from "react";
import {CommonData} from "Root/containers/App";

class App extends React.Component<CommonData> {
    render() {
        const {tickets} = this.props;
        return (
            <div>
                <TicketsList tickets={tickets}/>
            </div>
        );
    }
}

export default App;
