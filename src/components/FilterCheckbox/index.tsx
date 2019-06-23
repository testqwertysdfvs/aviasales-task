import {filterStopsType} from "Components/App";
import * as React from 'react';
import declOfNum from './../../functions/declOfNum';
import s from './style.scss';

interface Props {
    value: number,
    checked: boolean,
    changeFunc: filterStopsType | undefined,
}

class FilterCheckbox extends React.Component<Props> {

    checkboxChange = (): void => {
        const {checked, changeFunc, value} = this.props;
        if(changeFunc) {
            changeFunc(value, !checked);
        }
    }

    render() {
        const {value, checked} = this.props;
        let text: string;
        if (value === 0) {
            text = 'Без пересадок';
        } else {
            text = `${value} ${declOfNum(value, ['пересадка', 'пересадки', 'пересадок'])}`;
        }

        return (
            <div>
                <label className={s.Container}>{text}
                    <input type="checkbox" checked={checked} onChange={this.checkboxChange}/>
                    <span className={s.Checkmark}/>
                </label>
                <button type="button">Только</button>
            </div>
        );
    }
}

export default FilterCheckbox;
