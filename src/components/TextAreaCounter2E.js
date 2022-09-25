import React from 'react'

class TextAreaCounter2E extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Simple'
        }
    }
    onTextChange(event) {
        this.setState({
            text: event.target.value,
        });
    }

    render() {
        const text = 'text' in this.state ? this.state.text : this.props.text;
        return (
            <div>
                <textarea value={text}
                          onChange={event => this.onTextChange(event)} />
                <h3>{text.length}</h3>
            </div>
        );
    }
}

export { TextAreaCounter2E }
