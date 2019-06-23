import * as React from 'react';
import declOfNum from './../../functions/declOfNum';
import s from './style.scss';

interface Props {
    value: number | Array<number>,
    checked: boolean,
    changeFunc: (value: any, add: boolean) => void,
    all: boolean,
}

interface State {
    hover: boolean,
}

class FilterCheckbox extends React.Component<Props, State> {
    static defaultProps = {
        all: false,
    };

    state = {
        hover: false,
    };

    checkboxChange = (): void => {
        const {checked, changeFunc, value} = this.props;
        changeFunc(value, !checked);
    };

    onlyThisSelect = (): void => {
        const {changeFunc, value} = this.props;
        changeFunc([value], true);
    }

    handleHoverIn = () => {
        this.setState({
            hover: true,
        });
    };

    handleHoverOut = () => {
        this.setState({
            hover: false,
        });
    };

    render() {
        const {value, checked, all} = this.props,
            {hover} = this.state;
        let text: string;
        if (value === 0) {
            text = 'Без пересадок';
        } else if (typeof value === 'number') {
            text = `${value} ${declOfNum(value, ['пересадка', 'пересадки', 'пересадок'])}`;
        } else {
            text = 'Все';
        }

        return (
            <div
                onMouseEnter={this.handleHoverIn}
                onMouseLeave={this.handleHoverOut}
                className={s.Block}
            >
                <label className={s.Container}>{text}
                    <input type="checkbox" checked={checked} onChange={this.checkboxChange}/>
                    <span className={s.Checkmark}/>
                </label>
                {!all && hover ? <button type="button" onClick={this.onlyThisSelect} className={s.OnlyBtn}>Только</button> : null}
            </div>
        );
    }
}

export default FilterCheckbox;
