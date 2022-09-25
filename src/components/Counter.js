import React from "react";
import { LifecycleLoggerComponent } from './LifecycleLoggerComponent'

class Counter extends LifecycleLoggerComponent {
    static getName() {
        return 'Counter';
    }

    render() {
        return (
            <h3>{this.props.count}</h3>
        );
    }
}

Counter.defaultProps = {
    count: 0,
};

export { Counter };
