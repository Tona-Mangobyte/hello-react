import React from 'react';

export class LifecycleLoggerComponent extends React.Component {

    static getName() {}

    // Lifecycle Methods
    componentDidMount() {
        // The component is added to the DOM initially.
        console.log(this.constructor.getName() + '::componentDidMount');
    }

    componentWillUnmount() {
        // The component is removed from the DOM.
        console.log(this.constructor.getName() + '::componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // The component is updated as a result of calling setState() and/or a prop provided to the component has changed.
        console.log(this.constructor.getName() + '::componentDidUpdate', prevProps, prevState, snapshot);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(this.constructor.getName() + '::getSnapshotBeforeUpdate', prevProps, prevState);

        return 'hello';
    }

    shouldComponentUpdate(newProps, newState) {
        console.log(this.constructor.getName() + '::shouldComponentUpdate', newProps, newState);
        return true
    }
}
