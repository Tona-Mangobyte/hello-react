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
        return (
            <div>
                <textarea value={text}
                          onChange={event => this.onTextChange(event)} />
                {text.length > 0
                    ? <Counter count={text.length} />
                    : null
                }
            </div>
        );
    }
}

TextAreaCounter.defaultProps = {
    text: 'Simple',
    length: 0
}

export { TextAreaCounter }
