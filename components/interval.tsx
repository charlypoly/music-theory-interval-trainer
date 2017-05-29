import * as React from 'react';
import { intervals } from '../lib/constants';

class IntervalComponent extends React.Component<{}, {}> {

    render() {
        let intervalEls: JSX.Element[] = [];
        intervals.forEach((interval) => {
            intervalEls.push(
                <span>{interval}</span>
            );
        });
        return  <div>
                {intervalEls}
                </div>;
    }
}

export { IntervalComponent };