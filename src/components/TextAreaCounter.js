import React  from 'react'

class TextAreaCounter extends React.Component {
    render() {
        const text = this.props.text;
        return (
            <div>
                <textarea defaultValue={text}/>
                <h3>{text.length}</h3>
            </div>
        );
    }
}
TextAreaCounter.defaultProps = {
    text: 'Count me as I type',
};

export { TextAreaCounter }
