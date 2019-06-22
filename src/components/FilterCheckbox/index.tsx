import * as React from 'react';
import declOfNum from './../../functions/declOfNum';
import s from './style.scss';

type StopType = 'all' | number;

interface Props {
    value: StopType,
}

class FilterCheckbox extends React.Component<Props> {
    render() {
        const {value} = this.props;
            let text: string;
        if(value === 'all') {
            text = 'Все'
        } else if(value === 0) {
            text = 'Без пересадок';
        } else {
            text = `${value} ${declOfNum(value, ['пересадка', 'пересадки', 'пересадок'])}`
        }

        return (
            <label className={s.Container}>{text}
                <input type="checkbox"/>
                <span className={s.Checkmark}/>
            </label>
        );
    }
}

export default FilterCheckbox;
