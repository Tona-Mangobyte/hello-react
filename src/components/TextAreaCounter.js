import React from "react";
import { LifecycleLoggerComponent } from './LifecycleLoggerComponent'
import {Counter} from "./Counter";

class TextAreaCounter extends LifecycleLoggerComponent {
    static getName() {
        return 'TextAreaCounter';
    }

    constructor(props) {
        super(props);
        this.state = {
            // text: 'Simple'
        }
    }
    onTextChange(event) {
        this.setState({
            text: event.target.value,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // The component is updated as a result of calling setState() and/or a prop provided to the component has changed.
        if (this.props.length > 0 && this.state.text.length > 7) {
            this.setState({
                text: prevState.text || this.props.text,
            });
        }
    }

    render() {
        const text = 'text' in this.state ? this.state.text : this.props.text;
        let counter = null;
        if (text.length > 0) {
            counter = <Counter count={text.length} />;
        }
        return (
            <div>
                <textarea value={text}
                          onChange={event => this.onTextChange(event)} />
                { counter }
            </div>
        );
    }
}

TextAreaCounter.defaultProps = {
    text: 'Simple',
    length: 0
}

export { TextAreaCounter }
