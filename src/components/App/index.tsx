import * as React from "react";
import s from './style.scss';
import {CommonData} from "Root/containers/App";

class App extends React.Component<CommonData> {
    render() {
        const {tickets} = this.props;
        console.log(tickets);
        return <div>
            <h1 className={s.Title}>Starter component</h1>
        </div>
    }
}

export default App;
